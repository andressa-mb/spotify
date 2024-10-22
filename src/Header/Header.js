import React, { useEffect, useState } from 'react';
import './Header.css';
import smallRight from '../assets/icons/small-right.png';
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png';
import artistsData from '../api-artists/artists.json';

const Header = ({searchTerm, setSearchTerm}) => {

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <nav className="header__navigation">
        <div className="navigation">
            <button className="arrow-left">
                <img src={smallLeft} alt="Seta esquerda" />
            </button>
            <button className="arrow-right">
                <img src={smallRight} alt="Seta direita" />
            </button>
        </div>

        <div className="header__search">
            <img src={search} alt=""/>
            <input id="search-input" type="text" 
            maxlength="800" placeholder="O que você quer ouvir?"
            value={searchTerm} onChange={handleSearchChange}/>
        </div>

        <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
        </div>
        
    </nav>
    )
}

export default Header;