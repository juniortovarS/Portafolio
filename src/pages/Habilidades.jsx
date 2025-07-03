import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

const Habilidades = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="habilidades-section">
      <motion.h2
        className="habilidades-titulo"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Habilidades
      </motion.h2>

      <motion.div
        className="habilidades-bloque"
        id="tecnicas"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Habilidades Técnicas</h3>
        <p>
          Dominio de desarrollo web con React, Node.js, Express, manejo de bases de datos SQL y NoSQL, y consumo de APIs REST.
        </p>
      </motion.div>

      <motion.div
        className="habilidades-bloque"
        id="blandas"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>Habilidades Blandas</h3>
        <p>
          Comunicación efectiva, pensamiento crítico, trabajo en equipo, adaptabilidad y responsabilidad profesional.
        </p>
      </motion.div>

      <motion.div
        className="habilidades-bloque"
        id="software"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Herramientas y Software</h3>
        <p>
          Manejo avanzado de herramientas como Git, GitHub, Visual Studio Code, Postman, Figma, SQLite, MySQL y entorno de desarrollo web moderno.
        </p>
      </motion.div>
    </section>
  );
};

export default Habilidades;