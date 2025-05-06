import React, { useState } from 'react';
import './styles/inicio.css';
import prof from '/public/img/portada.jpg'
import ing from '/public/img/reino-unido.png'
import esp from '/public/img/espana.png'
import Typed from 'typed.js';
import { useTranslation } from "react-i18next";
import BarraLateral from './BarraLateral';


const body = document.querySelector('body');
// const modo = document.querySelector('btn-mode2 i');




const Inicio = () => {
    const el = React.useRef(null);
    const [t, i18n] = useTranslation("global");

    // cambia el icono
    const [isStarred, setIsStarred] = useState(true);
    const handleIcon = () => {
      setIsStarred(!isStarred)
    };

    // cambia el typed
    const [typedInstance, setTypedInstance] = useState(null);
  
   
  
    React.useEffect(() => {

      let typed;

      if(typedInstance) {
        typedInstance.destroy();
      }
    
      typed = new Typed(el.current, {
        strings: [t("home.im"), t("home.dev"), 'Full-Stack'],
        typeSpeed: 180,
        backSpeed: 80,
        loop: true
    
      });

      setTypedInstance(typed);

      return () => {
        if(typed){
          typed.destroy();
      
        }
      };
    }, [i18n.language]);
  
    


    

    const handleDark = () => {
   
      if(body){
        body.classList.toggle('dark')  
      
       
      }
    }

  
    const handleLanguaje = () => {
      i18n.changeLanguage("es")
   

  
    }
  
    const handleLanguajeEn = () => {
      i18n.changeLanguage("en")
    
    }
  
  
  
  
 


  return (
   
    <div id="inicio" className='home-container container'>
      <div className='cont-barra'>
        <BarraLateral/>
      </div>

<nav className='change-mode-container'>

<button className='btn-mode2' onClick={handleDark}><i  onClick={handleIcon} className={isStarred ? "bx bxs-sun bx-border-circle" : "bx bxs-moon bx-border-circle"}></i></button>

<div className='translate-container'>
<button className='btn-mode' onClick={handleLanguaje}><img src={esp}/></button>

<button className='btn-mode' onClick={handleLanguajeEn}><img src={ing}/></button>
</div>




</nav>
   
        
  <div className='container_todo'>
    
  <br/>
      <figure className='img-container'>
        <img src={prof} alt='100' height='auto' width='auto'/>
      </figure>
   
     
     
      <div className='contenedor-title'>
      <br/>
      <h1 className='txt-hello'>{t("home.hello")}</h1>
      <h1><span ref={el}></span></h1>
      <br/>
        
      <p>{t("home.text")}</p>
      
      </div>
      </div>
<br/>
<div className='enlaces'>
{/*<a href='./CV-Carlos Mamani.pdf' download>{' '}{t("home.web-developer")}<i className='bx bx-download' ></i></a>*/}
<a href='https://drive.google.com/file/d/11YvQIdjZ9bA7xaHoT4pxyaojcl5DBRMA/view?usp=sharing' 
  target="_blank" 
  rel="noopener noreferrer"
  download>{' '}{t("home.web-show")}<i className='bx bx-show' ></i>
</a>
</div>
       
</div>

  )
}

export default Inicio;