import React from 'react';
import Logo from '../../assets/Logo.png';
import './Menu.css';
import Button from '../Button';

const Menu = ()=>{
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="MorenoFlix logo" />
      </a>
      <Button className="ButtonLink" href="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
};

export default Menu;