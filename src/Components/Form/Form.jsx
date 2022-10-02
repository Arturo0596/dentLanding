import React from "react";
import "../Form/Form.css";

const Form = () => {
  const Enviar = (e) => {
    e.PreventDefault();
  };
  return (
    <div className="contact" id="contact">
      <form onSubmit={Enviar}>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Nombre empresa" />
        <input type="text" placeholder="Teléfono" />
        <input type="Email" placeholder="email" />
        <textarea name="" id="" cols="70" rows="10"></textarea>
        <input type="submit" value="contactar" />
      </form>
      <div>
        <div className="texts-contacto">
          <label className="span-contact">
            Pregúntanos, Te Solucionamos Todas Tus Dudas
          </label>
          <h3>Estaremos Encantados De Conocerte Y De Ayudar A Tu Negocio</h3>
        </div>
      </div>
    </div>
  );
};

export default Form;
