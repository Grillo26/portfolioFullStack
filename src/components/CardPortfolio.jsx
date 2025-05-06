import React from 'react'
import './styles/cardPortfolio.css'
import { useTranslation } from "react-i18next";

const CardPortfolio = ({img_port,li1, li2, li3, li4, url, urg, project_name, project_description}) => {
  const [t, i18n] = useTranslation("global");
  const redirectExternalUrl = () => {
    window.open(url, '_blank');
  }
  const redirectGit = () => {
    window.open(urg, '_blank')
  }

  return (
  
    <figure className='portfolio-proyect'>
     
    <img src={img_port}/>

    <div className='capa'>
      <div className='container-info'>
        <h6>{project_name}</h6>
        <p>{project_description}</p>

        <div className='container-links'>
            <i className='bx bxl-github' onClick={redirectGit}><p>{t("projects.code")}</p></i>
            <i className='bx bx-link-external' onClick={redirectExternalUrl}><p>{t("projects.project")}</p></i>
        </div>
      </div>
    </div>
   
    <br/>
    <ul className='buttons-card'>
        <li><h4>{li1}</h4></li>
        <li><h4>{li2}</h4></li>
        <li><h4>{li3}</h4></li>
        <li><h4>{li4}</h4></li>
    </ul>
</figure>

  )
}

export default CardPortfolio