import React from 'react';
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom';

import './styles.scss';

const Home: React.FC = () => {
    return (
        <div className="container">
            <hgroup>
                <h2 className="title">Digite um número para calcular sua fatorial.</h2>
                <h6 className="explanation">Digite um número entre 1 a 150 para calcular o seu valor fatorial de maneira simples e rápida. Seus cálculos ficarão salvos para que você possa consultá-los no futuro.</h6>
            </hgroup>

            <form>
                <input
                    type="number"
                    name="fatorial_number"
                    placeholder="Número"
                />

                <button type="submit">
                    <MdChevronRight />
                </button>
            </form>

            <nav>
                <Link to="/history">Histórico de cálculos</Link>
            </nav>
        </div>
    );
}

export default Home;