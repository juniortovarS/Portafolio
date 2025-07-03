import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

const Estudios = () => {
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
    <section className="estudios-section">
      <motion.h2
        className="estudios-titulo"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Estudios
      </motion.h2>

      <motion.div
        className="estudios-bloque"
        id="academicos"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>Estudios Académicos</h3>
        <p>
          Estudiante de Ingeniería de Sistemas en etapa final. Formación integral con énfasis en tecnologías de información, bases de datos y desarrollo de software.
        </p>
      </motion.div>

      <motion.div
        className="estudios-bloque"
        id="idiomas"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Idiomas</h3>
        <p>
          Nivel avanzado de inglés certificado por el ICPNA. Lectura técnica fluida y capacidad para mantener conversaciones en contextos profesionales.
        </p>
      </motion.div>

      <motion.div
        className="estudios-bloque"
        id="certificaciones"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3>Certificaciones</h3>
        <p>
          Cursos y certificaciones en programación, algoritmos, diseño web, bases de datos y herramientas de desarrollo backend y frontend.
        </p>
      </motion.div>
    </section>
  );
};

export default Estudios;
