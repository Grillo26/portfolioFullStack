import React from 'react';
import './styles/habilities.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from "react-i18next";



const Habilities = () => {
    const [t, i18n] = useTranslation("global");

  return (
    <>
    <div className='habilities_container container'>
        <br/>

        <div className='habilities_txt'>
        <h3>{t("habilities.title")}</h3>
        <br/>
        <p>{t("habilities.p")}</p>
        <br/>
        </div>

        <div className='habilities_cont_2'>

        <ul className='habilities_list'>

            <li>
                <div className='front'><i className="bx bx-cog"></i><h4>{t("habilities.problem-res")}</h4></div>
                <div className='back'><h4>{t("habilities.reverse1")}</h4></div>
            </li>

            <li>
                <div className='front'><i className="bx bx-group"></i><h4>{t("habilities.teamwork")}</h4></div>
                <div className='back'><h4>{t("habilities.reverse2")}</h4></div>
            </li>



            <li>
                <div className='front'><i className="bx bx-landscape"></i><h4>{t("habilities.creativity")}</h4></div>
                <div className='back'><h4>{t("habilities.reverse3")}</h4></div>
            </li>

            <li>
                <div className='front'><i className="bx bx-donate-heart"></i><h4>{t("habilities.empathy")}</h4>
                </div>
                <div className='back'><h4>{t("habilities.reverse4")}</h4></div>
                </li>
        </ul>


   
<div id="carouselExampleDark" className="carousel carousel-dark slide">
<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
        className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
        aria-label="Slide 4"></button>
</div>



<div className="carousel-inner">

  
    <div className="carousel-item active" data-bs-interval="10000">
        <img src="/img/frontend.png" className="d-block w-100" alt="certificado Academlo"></img>
    </div>

    
    <div className="carousel-item">
        <img src="/img/programacion3.png" className="d-block w-100" alt="certificado Academlo"></img>
    </div>


    <div className="carousel-item" data-bs-interval="2000">
        <img src="/img/programacion.jpg" className="d-block w-100" alt="certificado platzi"></img>
    </div>

    


    <div className="carousel-item">
        <img src="/img/programacion2.jpg" className="d-block w-100" alt="certificado linkedin"></img>
    </div>

</div>
<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
    data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
    data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
</button>
</div>

            
        </div>

        


     


    </div>


</>

  )
}

export default Habilities