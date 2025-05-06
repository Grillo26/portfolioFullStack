import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import Slider from "react-slick";
import "./styles/skills.css"


const Skills = () => {

        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 3,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 3000,

        };
  return (
    <div id="skills" className="skill-container container">
    <hr/>
   <div className="slider-container">
      <Slider {...settings}>
        
        <div>
          <h3><i className='bx bxl-java' ></i><span>Java</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-php' ></i><span>Laravel</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-spring-boot' ></i><span>SpringBoot</span></h3>
        </div>

        <div>
          <h3><i className='bx bxs-data'></i><span>MySql</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-javascript'></i><span>JavaScript</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-html5'></i><span>HTML5</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-css3'></i><span>CSS</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-react' ></i><span>React</span></h3>
        </div>  

        <div>
          <h3><i className='bx bxl-bootstrap' ></i><span>Bootstrap</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-git'></i><span>Git</span></h3>
        </div>

        <div>
          <h3><i className='bx bxl-php' ></i><span>Php</span></h3>
        </div>
    
      </Slider>
    </div>
    
    <hr/>
    </div>
  );
  
}

export default Skills;