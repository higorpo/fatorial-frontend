import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai'

import Home from './Home';
import History from './History';
import Result from './Result';

import Logo from '../assets/logo.svg';
import LogoColored from '../assets/logo-colored.svg';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <h1 className="title">Faça seus cálculos de fatorial de maneira simples e rápida.</h1>

                <p className="author">
                    Feito com <AiFillHeart /> por Higor Oliveira
                </p>
            </header>
            <div className="router">
                <Link className="logo" to="/">
                    <img src={LogoColored} alt="Logo" />
                </Link>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/history" component={History} />
                    <Route path="/calc" component={Result} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routes;