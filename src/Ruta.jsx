import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CitaPrevia from "./Pages/CitaPrevia";
import Home from "./Pages/Home";
import Instalaciones from "./Pages/Instalaciones";
import Contacto from "./Pages/Contacto.jsx";

const Ruta = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instalaciones" element={<Instalaciones />} />
        <Route path="/sobre-nosotros" element={<CitaPrevia />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Ruta;
