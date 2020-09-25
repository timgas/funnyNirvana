import React from 'react';
import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <img className="App-logo" src={require('../images/logotype.png')}></img>
        </header>
    )
}

export default Header;
