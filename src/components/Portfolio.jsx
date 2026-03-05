import React from 'react'
import './styles/portfolio.css'
import CardPortfolio from './CardPortfolio'
import { useTranslation } from "react-i18next";
import { useState } from 'react'; const Portfolio = (props) => {
  const [isViewMore, setIsViewMore] = useState(false); const [isMostrarMas, serIsMostrarMas] = useState(true); const handleView = () => {
    setIsViewMore(!isViewMore)
    serIsMostrarMas(!isMostrarMas)
    console.log('hola')
  }
  const [t, i18n] = useTranslation("global"); return (
    <div className='portfolio-container container'>
      <h3>{t("projects.title_proyects_fullstack")}</h3>
      <br />

      <div id="proyects" className='portfolio-grid'>

        <CardPortfolio
          isUx={false}
          project_name={t("projects.title5")}
          project_description={t("projects.description5")}
          url='https://classgoapp.com/'
          urg='https://github.com/ClassGoApp/ClassGoweb'
          img_port='/img/fullstack/classgo.png'
          li1='Php'
          li2='Laravel'
          li3='JavaScript'
          li4='MySql'
        />

        <CardPortfolio
          project_name={t("projects.title1")}
          project_description={t("projects.description1")}
          url='#'
          urg='https://github.com/Grillo26/SistemaInventariosCNS.git'
          img_port='/img/fullstack/1.png'
          li1='Php'
          li2='Laravel'
          li3='Boostrap'
          li4='Stisla Theme'
        />

        <CardPortfolio
          project_name={t("projects.title2")}
          project_description={t("projects.description2")}
          url='#'
          urg='https://github.com/Grillo26/sistemaProduccion.git'
          img_port='/img/fullstack/2.png'
          li1='Php'
          li2='Laravel'
          li3='Boostrap'
          li4='Stisla Theme'
        />

        <CardPortfolio
          project_name={t("projects.title3")}
          project_description={t("projects.description3")}
          url='https://sisprestamosyacuiba.com/login'
          urg='https://github.com/Grillo26/sistemaPrestamos.git'
          img_port='/img/fullstack/3.png'
          li1='Php'
          li2='Laravel'
          li3='Javascript'
          li4='Boostrap'
        />

        <CardPortfolio
          project_name={t("projects.title4")}
          project_description={t("projects.description4")}
          url='#'
          urg='https://github.com/Grillo26/sistemaProduccion.git'
          img_port='/img/fullstack/4.png'
          li1='Php'
          li2='Laravel'
          li3='Boostrap'
          li4='Argon Theme'
        />


      </div>

      {//*****************************  PROYECTOS UX ********************************** */
      }
      <h3>{t("projects.title_ui_practices")}</h3>
      <br />
      <div id="proyects" className='portfolio-grid'>

        <CardPortfolio
          isUx={true}
          project_name={t("projects.title_uiux1")}
          project_description={t("projects.description1_uiux")}
          urg='https://www.figma.com/design/o7Cu3Xhy9YUts6XuexopKs/Sistema-de-Prestamos?node-id=2-2&t=OniddZBNCWzHMKSZ-1'
          img_port='/img/Ui-Ux/Sistema-de-Prestamos.webp'
          li1='Figma'
        />

        <CardPortfolio
          isUx={true}
          project_name={t("projects.title_uiux2")}
          project_description={t("projects.description2_uiux")}
          urg='https://www.figma.com/design/HMBN0RYRvwfvgVS7nXX6Do/Practica-final--Dise%C3%B1o-de-producto-digital?node-id=0-1&t=gxZvg7CqQgm90OsI-1'
          img_port='/img/Ui-Ux/MobileBarber.webp'
          li1='Figma'
        />

        <CardPortfolio
          isUx={true}
          project_name={t("projects.title_uiux3")}
          project_description={t("projects.description3_uiux")}
          urg='https://www.figma.com/design/HMBN0RYRvwfvgVS7nXX6Do/Practica-final--Dise%C3%B1o-de-producto-digital?node-id=0-1&t=gxZvg7CqQgm90OsI-1'
          img_port='/img/Ui-Ux/BarberLanding.webp'
          li1='Figma'
        />

        <CardPortfolio
          isUx={true}
          project_name={t("projects.title_uiux4")}
          project_description={t("projects.description4_uiux")}
          urg='https://www.figma.com/design/QVqg9tEPmSprN3prnVIfqo/Interfaz-personal-de-una-sola-pagina?node-id=0-1&t=qbCASPKqqQEmSrdE'
          img_port='/img/Ui-Ux/PortafolioPersonal.webp'
          li1='Figma'
        />

        <CardPortfolio
          isUx={true}
          project_name={t("projects.title_uiux5")}
          project_description={t("projects.description5_uiux")}
          urg='https://www.figma.com/design/cYQclDCUVy0oKHNBVpK255/Classgo-LandingPage?node-id=0-1&t=JOzfcmp0vOeEDAKG'
          img_port='/img/Ui-Ux/ClassGoLandingPage.webp'
          li1='Figma'
        />

      </div>


      {//*****************************  BACKEND PROYECTSB ********************************** */
      }
      <h3>{t("projects.title_backend_practices")}</h3>
      <br />
      <div id="proyects" className='portfolio-grid'>

        <CardPortfolio
          project_name={t("projects.title1_backend")}
          project_description={t("projects.description1_backend")}
          url='#'
          urg='https://github.com/Grillo26/apiREST-libreria'
          img_port='/img/backend/back1.jpg'
          li1='Java'
          li2='SpringBoot'
          li3='Spring JPA'
          li4='Meaven'
        />
      </div>


      {//*****************************  PROYECTOS WEB ********************************** */
      }

      <h3>{t("projects.title_web")}</h3>
      <br />
      <div id="proyects" className='portfolio-grid'>

        <CardPortfolio
          project_name={t("projects.title_web1")}
          project_description={t("projects.description_web1")}
          url='https://mj517page.vercel.app/'
          urg='https://github.com/Grillo26/mj517'
          img_port='/img/websites/1.png'
          li1='Html'
          li2='Css'
          li3='JavaScript'
          li4='Boostrap'
        />

        <CardPortfolio
          project_name={t("projects.title_web2")}
          project_description={t("projects.description_web2")}
          url='https://retiroespiritual23.vercel.app/'
          urg='https://github.com/Grillo26/retiroespiritual23'
          img_port='/img/websites/2.png'
          li1='Html'
          li2='Css'
          li3='JavaScript'
          li4='Boostrap'
        />

        <CardPortfolio
          project_name={t("projects.title_web3")}
          project_description={t("projects.description_web3")}
          url='https://cjr24.vercel.app/'
          urg='https://github.com/Grillo26/landingCJR24'
          img_port='/img/websites/3.png'
          li1='Html'
          li2='Css'
          li3='JavaScript'
          li4='Boostrap'
        />

        <CardPortfolio
          project_name={t("projects.title_web4")}
          project_description={t("projects.description_web4")}
          url='https://grillo26.github.io/design/'
          urg='https://github.com/Grillo26/design'
          img_port='/img/websites/4.png'
          li1='Html'
          li2='Css'
          li3='JavaScript'
          li4='Boostrap'
        />

        <CardPortfolio
          project_name={t("projects.title_web5")}
          project_description={t("projects.description_web5")}
          url='https://grillo26.github.io/portfolio/'
          urg='https://github.com/Grillo26/portfolio'
          img_port='/img/websites/5.png'
          li1='Html'
          li2='Css'
          li3='JavaScript'
          li4='Boostrap'
        />

        <CardPortfolio
          project_name={t("projects.title_web6")}
          project_description={t("projects.description_web6")}
          url='https://starbucks-landing-page-mocha-gamma.vercel.app/'
          urg='https://github.com/Grillo26/Starbucks-Landing-Page'
          img_port='/img/websites/6.png'
          li1='Html'
          li2='Css'
          li3='JavaScript'
          li4='Boostrap'
        />


      </div>

      {isViewMore && (
        <>
          <h3>{t("projects.title_otro")}</h3>
          <br />

          <section className='more-proyect portfolio-grid'>

            <CardPortfolio
              project_name={t("projects.title_other1")}
              project_description={t("projects.description_other1")}
              url=''
              urg='https://github.com/Grillo26/RobotMovil'
              img_port='/img/other/1.png'
              li1='Arduino'
              li2='C++'
              li3='HC-SR04'
              li4='HC-05 '
            />

            <CardPortfolio
              project_name={t("projects.title_other2")}
              project_description={t("projects.description_other2")}
              url=''
              urg='https://github.com/Grillo26/SmartHouse'
              img_port='/img/other/2.png'
              li1='Arduino'
              li2='C++'
              li3='Servomotor'
              li4='HC-05 '
            />

            <CardPortfolio
              project_name={t("projects.title_other3")}
              project_description={t("projects.description_other3")}
              url=''
              urg='https://github.com/Grillo26/SmartHouse'
              img_port='/img/other/3.png'
              li1='CRUD'
              li2='Php'
              li3='Laravel'
              li4='Boostrap'

            />

          </section>
        </>
      )}

      <a className='more' onClick={handleView}>{isMostrarMas ? t("home.more") : t("home.less")}</a>
    </div>
  )
}
export default Portfolio