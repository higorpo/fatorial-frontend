import React, { useEffect, useMemo, useState } from 'react';
import { MdRefresh } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import api from '../../config/api';

import './styles.scss';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Result: React.FC = () => {
    const query = useQuery();
    const factorialNumber = Number(query.get("factorial"));

    const [loading, setLoading] = useState<boolean>(true);
    const [errors, setErrors] = useState<string>("");
    const [factorialResult, setFactorialResult] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        setErrors("");
        setFactorialResult("");

        async function getFactorial() {
            if (factorialNumber) {
                const response = await fetch(`${api.baseURL}/factorial?number=${factorialNumber}`)
                if (response.status === 200) {
                    const { result } = await response.json();
                    setFactorialResult(result);
                    setLoading(false);
                } else {
                    const { errors } = await response.json();
                    setErrors(errors[0].msg);
                    setLoading(false);
                }
            }
        }

        getFactorial();
    }, [factorialNumber])

    const multipliers = useMemo(() => {
        if (factorialNumber <= 20) {
            let string = "";
            for (let i = factorialNumber; i > 0; i--) {
                if (i === 1) {
                    string += `${i} = `;
                } else {
                    string += `${i} x `;
                }
            }
            return string;
        } else {
            return `${factorialNumber} x ${factorialNumber - 1} x ${factorialNumber - 3} x ... x 3 x 2 x 1 =`
        }
    }, [factorialNumber]);

    if (!factorialNumber) {
        return null;
    }

    return (
        <div id="result-page" className="container">
            <h2 className="title">
                Resultado do cálculo de {factorialNumber} fatorial é de:
            </h2>

            {
                loading ?
                    <>
                        <p>Aguarde, computando...</p>
                    </>
                    :
                    <>
                        {
                            errors ?
                                <>
                                    <p><strong>ERRO:</strong> {errors}</p>
                                </>
                                :
                                <>
                                    <div className="factorial-result">
                                        <p className="multipliers">{multipliers}</p>
                                        <h4 className="result">
                                            {factorialResult}
                                        </h4>
                                    </div>

                                </>
                        }
                        <Link to="/" className="back-button">
                            <div className="back">
                                <MdRefresh size={22} />
                                <span>Novo cálculo</span>
                            </div>
                        </Link>
                    </>
            }
        </div>
    );
}

export default Result;