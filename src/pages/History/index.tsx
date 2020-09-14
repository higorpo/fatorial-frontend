import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import './styles.scss';

const History: React.FC = () => {
    return (
        <div id="history-page" className="container">
            <Link to="/" className="back-button">
                <div>
                    <MdArrowBack size={22} />
                    <span>Voltar</span>
                </div>
            </Link>
            <h2 className="title">Seus últimos cálculos fatorais.</h2>

            {
                false &&
                <ul className="history">
                    {
                        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((item) => (
                            <li key={String(item)} className="history-item">
                                <span className="factorial">14</span>
                                <span className="result">9823823</span>
                            </li>
                        ))
                    }
                </ul>
            }

            {
                true &&
                <p>
                    Você ainda não realizou nenhum cálculo.
                </p>
            }
        </div>
    );
}

export default History;