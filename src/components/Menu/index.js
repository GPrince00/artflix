import React from 'react';

import Logo from '../../assets/artflix-logo.png';
import './Menu.css';

function Menu() {
    return (
        <nav>
            <a href="/">
                <img className="Logo" src={Logo} alt="artflix logo"/>
            </a>
            <a className="ButtonLink" href="/">
                Novo vídeo
            </a>
        </nav>
    );
}

export default Menu;