import React from 'react';
import { MdChevronRight } from 'react-icons/md'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div className="container">
            <hgroup>
                <h1 className="title">Digite um número para calcular sua fatorial.</h1>
                <h3 className="explanation">Digite um número entre 1 a 150 para calcular o seu valor fatorial de maneira simples e rápida. Seus cálculos ficarão salvos para que você possa consultá-los no futuro.</h3>
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