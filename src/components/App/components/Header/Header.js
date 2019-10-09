import React from 'react'
import BEMHelper from 'react-bem-helper';
import './header.scss';
import Logo from './components/Logo/Logo';

const cls = new BEMHelper('header');

function Header() {
    return (
        <header {...cls()}>
            <Logo />
        </header>
    );
}

export default Header;
