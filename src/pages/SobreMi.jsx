import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";
import foto from "../assets/fotocarne.png";

const SobreMi = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="sobre-mi-section">
     

      {/* Imagen de presentación */}
      <motion.div
        className="sobre-mi-foto-container"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={foto}
          alt="Foto profesional de perfil"
          className="foto-carnet-grande"
        />
      </motion.div>

      {/* Perfil Profesional */}
      <motion.div
        id="perfil"
        className="sobre-mi-info"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Perfil Profesional</h3>
        <p>
          Soy Junior Tovar, estudiante de Ingeniería de Sistemas con experiencia en desarrollo web tanto frontend como backend. Me especializo en la creación de soluciones digitales funcionales, interactivas y visualmente atractivas. Mi enfoque combina lógica estructurada con diseño centrado en el usuario.
        </p>
      </motion.div>

      {/* Misión y Valores */}
      <motion.div
        id="mision"
        className="sobre-mi-info"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h3>Misión y Valores</h3>
        <p>
          Mi propósito es desarrollar soluciones tecnológicas que generen impacto positivo, impulsadas por principios de integridad, compromiso profesional y aprendizaje continuo. Valoro la innovación responsable y la mejora constante.
        </p>
      </motion.div>

      {/* Intereses Profesionales */}
      <motion.div
        id="interes"
        className="sobre-mi-info"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3>Intereses Profesionales</h3>
        <p>
          Me apasionan el desarrollo web moderno, la inteligencia artificial aplicada a productos digitales, y las plataformas tecnológicas enfocadas en servicios financieros. Busco constantemente nuevas formas de optimizar la experiencia del usuario a través de soluciones funcionales y escalables.
        </p>
      </motion.div>

      {/* Valor Diferencial */}
      <motion.div
        id="diferencia"
        className="sobre-mi-info"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h3>¿Qué me diferencia?</h3>
        <p>
          Destaco por mi habilidad para integrar pensamiento analítico con creatividad visual, junto con un fuerte sentido de responsabilidad y un enfoque meticuloso en el usuario. Esta combinación me permite aportar soluciones innovadoras con impacto real.
        </p>
      </motion.div>
    </section>
  );
};

export default SobreMi;