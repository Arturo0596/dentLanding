import React from "react";
import './CitaPrevia.css'
import Navbar from "../Components/Navbar/Navabar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Valores from "../Components/Valores/Valores.jsx";
import cita from '../../src/Assets/citaprevia.jpeg'
const CitaPrevia = () => {
  return (
    <>
      <Navbar />
      <div className="cita-content">
        <h1 className="cita-title">CITA PREVIA</h1>
        <div className="cita-flex">
          <img src={cita} alt="" />
          <div className="cita-list">
            <h3>
              Nuestra metodología de trabajo en la primera visita se basa en:
            </h3>
            <ul>
              <li>Exploración clínica detallada.</li>
              <li>Radiografías.
              </li>
              <li>Fotografías.
              </li>
              <li>Valoración de tus expectativas.
              </li>
            </ul>
            <span>Los objetivos que perseguimos en la primera visita son:
            </span>
            <ul>
              <li> Diagnóstico personalizado.
              </li>
              <li>Asesoramiento.
              </li>
              <li>Plan del tratamiento.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Valores />
      <Footer />
    </>
  );
};

export default CitaPrevia;
