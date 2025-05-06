import React from 'react';
import './styles/headerNav.css';
import { useTranslation } from "react-i18next";
// import identificador from '../img/identificador_1.PNG';




const body = document.querySelector('body')



const HeaderNav = () => {

  const handleMenu = () => {
    const mostrar = document.querySelector('.menu');
    if(mostrar) {
 mostrar.classList.toggle('show-menu');
 console.log('menu-activado')
    }
   
  }
  const [t, i18n] = useTranslation("global");



  return (
    <header className='container'>
        <nav className='navbar'>
        <div><h3>{t("header.title")}</h3></div>
        
        <div className='menu'>
        <ul className='menu-list'>
            <li className='menu-item' onClick={handleMenu}><a href='#inicio'>{t("header.about-me")}</a></li><span className='line2'>/</span>
            <li className='menu-item' onClick={handleMenu}><a href='#skills'>{t("header.skills")}</a></li><span className='line2'>/</span>
            <li className='menu-item' onClick={handleMenu}><a href='#proyects'>{t("header.projects")}</a></li><span className='line2'>/</span>
            <li className='menu-item' onClick={handleMenu}><a href='#contact'>{t("header.contact")}</a></li>

        </ul>
        </div>
        
        <button id='btnOpen' className='btn-open' type='button' aria-label='abrir menu' onClick={handleMenu}>
        <i className='bx bx-menu nav-icon'></i>
        </button>

       
        </nav>
       
        
        
    </header>

  )
}

export default HeaderNav