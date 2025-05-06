import React, {useRef, useState} from 'react';
import './styles/footer.css';
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

const Footer = () => {
  // translate
  const [t, i18n] = useTranslation("global");
  // formulario
  const form = useRef();
  // mostrar mensaje
  const [showMessage, setIsShowMessage] = useState(false);


  const sendEmail = (e) => {

    // para que se ejecute solo si los campos del form estan llenos 
    const userName = form.current.user_name.value.trim();
    const userEmail = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (userName && userEmail && message) {
    
      e.preventDefault();

      emailjs
        .sendForm('service_sh161h9', 'template_ehmqiyk', form.current, {
          publicKey: 'a1ubd5DNM1MLJHIeF',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsShowMessage(true);
            //Limpiar el formulario después de enviar
            form.current.reset();
            // Ocultar el mensaje después de 3 segundos
            setTimeout(() => {
              setIsShowMessage(false);
            }, 3000);
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  
        setIsShowMessage(true);
        setTimeout(() => {
          setIsShowMessage(false);
        }, 3000);
  
      } else {
        e.preventDefault();
        alert('Por favor llene todos los campos')
      }
  };



  return (
  <div className='footer_cont container'>


    <div className='info_container'>


<form ref={form} onSubmit={sendEmail} className='form'> 

<div className={`msjSend ${showMessage ? 'visible' : 'hidden'}`}><i className='bx bx-mail-send'></i><h2>{t("footer.alert")}</h2></div>

<div className="content-form">
<h3 className="txt-descriptivo">{t("footer.contactme")}</h3>
<p className="contacts-txt">{t("footer.t")}</p>

      <input className="contacts-register" type="text" name="user_name" placeholder={t("footer.name")}/>
      
      <input className="contacts-register" type="email" name="user_email" placeholder={t("footer.email")}/>
     
      <textarea className="contacts-register" name="message" placeholder={t("footer.message")}/>
      <button className="button-send" type="submit" value="Send">{t("footer.send")}</button>  
</div>  
</form> 
<br/>



<div id='contact' className='info_container_2'>

<ul className='info_contact'>
<li className="contacts-list"><i className='bx bx-mobile-alt'></i>
<h3 className="contacts-subtitles">+59161989575</h3>
</li>

<li className="contacts-list"><i className='bx bx-envelope'></i>
    <h3 className="contacts-subtitles">carlsenrmt26@gmail.com</h3>
</li>
<li className="contacts-list"><i className='bx bx-map'></i>
    <h3 className="contacts-subtitles">Yacuiba, Bolivia</h3>
</li>

</ul>

<br/>


<ul className="footer-contacts">
                        <li className="footer-item"><a href="https://wa.link/zfciys" target='_blank'><i
                                    className='bx bxl-whatsapp'></i></a></li>
                        <li className="footer-item"><a href="https://www.instagram.com/grillo.26/" target='blank'><i
                                    className='bx bxl-instagram'></i></a></li>
                        <li className="footer-item"><a href="https://github.com/Grillo26" target='blank'><i
                                    className='bx bxl-github'></i></a></li>
                        <li className="footer-item"><a
                                href="https://www.linkedin.com/in/carlosenriquemamani/" target='blank'><i
                                    className='bx bxl-linkedin-square'></i></a></li>
                    </ul>

                    </div>
                    </div>

                    <br/>

                    </div>

        
   
  )
}

export default Footer