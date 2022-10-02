import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navabar";
import "./Contacto.css";
import contacto from "../Assets/contacto.jpeg";
import Form from "../Components/Form/Form.jsx";
const Contacto = () => {
  return (
    <>
      <Navbar />
      <div className="contact-content">
        <img src={contacto} alt="" />
        <div className="contatoInfo">
          <span className="infoText">
            Si tienes alguna duda o pregunta, contacta con nosotros en el:
          </span>
          <span className="infoPhone">Numero de telefono del cliente</span>
          <span className="infoText">¡Estaremos encantados de atenderte!</span>
          <div className="infoMapForm">
            <div className="contactInfoFlex">
              <span className="spanGrande">Horario</span>
              <span>Lunes, martes y jueves</span>
              <span>9:30 a 13:30</span>
              <span>16:00 a 20:45</span>
              <span className="spanGrande">Contacto</span>
              <span>Calle</span>
              <span>Correo@gmail.com</span>
              <span>Teléfono</span>
              <span></span>
              <span></span>
            </div>
            <iframe
              className="map-content"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11578.695905436463!2d-5.656322149999999!3d43.4882738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3663b5b56c0739%3A0x4f4ab34173adfd30!2sCarri%C3%B3%20Maquinaria%20Agr%C3%ADcola!5e0!3m2!1ses!2ses!4v1664396640239!5m2!1ses!2ses"
            ></iframe>
          </div>
        </div>
        <Form />
      </div>
      <Footer />
    </>
  );
};

export default Contacto;
