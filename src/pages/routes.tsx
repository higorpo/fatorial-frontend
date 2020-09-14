import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai'

import Home from './Home';

import Logo from '../assets/logo.svg';
import LogoColored from '../assets/logo-colored.svg';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <header>
                <img src={Logo} alt="Logo" />
                <h1 className="title">Faça seus cálculos de fatorial de maneira simples e rápida.</h1>

                <p className="author">
                    Feito com <AiFillHeart /> por Higor Oliveira
                </p>
            </header>
            <div className="router">
                <img src={LogoColored} alt="Logo" />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routes;