import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import './styles.scss';

export interface FactorialResults {
    factorial: number,
    result: string
}

const History: React.FC = () => {
    const history = useHistory();

    const [resultsHistory, setResultsHistory] = useState<Array<FactorialResults>>([]);

    useEffect(() => {
        const storageFactorialResults = localStorage.getItem('factorialResults');

        if (storageFactorialResults) {
            setResultsHistory(JSON.parse(storageFactorialResults));
        }
    }, []);

    function handleClickHistoryItem(factorial: number) {
        history.push(`/calc?factorial=${factorial}`);
    }

    return (
        <div id="history-page" className="container">
            <Link to="/" className="back-button">
                <div>
                    <MdArrowBack size={22} />
                    <span>Voltar</span>
                </div>
            </Link>
            <h2 className="title">Seus últimos cálculos fatoriais.</h2>

            {
                resultsHistory.length > 0 &&
                <ul className="history">
                    {
                        resultsHistory.map((history) => (
                            <li key={String(history.factorial)} className="history-item" onClick={() => handleClickHistoryItem(history.factorial)}>
                                <span className="factorial">{history.factorial}</span>
                                <span className="result">{history.result}</span>
                            </li>
                        ))
                    }
                </ul>
            }

            {
                resultsHistory.length === 0 &&
                <p>
                    Você ainda não realizou nenhum cálculo.
                </p>
            }
        </div>
    );
}

export default History;