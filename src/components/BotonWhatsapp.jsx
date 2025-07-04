import React from "react";
import "../styles/BotonWhatsapp.css";

const BotonWhatsapp = () => {
  return (
    <a
      href="https://wa.me/51987654321?text=Hola%2C%20estoy%20interesado%20en%20tu%20portafolio"
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <img src="/whatsapp-icon.svg" alt="WhatsApp" />
    </a>
  );
};

export default BotonWhatsapp;


