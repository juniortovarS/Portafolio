import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";
import Carousel from "../components/Carousel"; // Import corregido

const Estudios = () => {
  const location = useLocation();

  useEffect(() => {
  if (location.hash) {
    const scrollToSection = () => {
      const section = document.querySelector(location.hash);
      const navbarHeight = document.querySelector(".nav-wrapper")?.offsetHeight || 0;

      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: sectionTop - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    // Esperar un poco a que el DOM esté listo
    setTimeout(scrollToSection, 300);
  }
}, [location]);



  return (
    <section className="sobre-mi-section">
      {/* Estudios Académicos */}
      <motion.div
        className="sobre-mi-contenido"
        id="academicos"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="perfil-texto">
          <h3>Estudios Académicos</h3>
          <p>
            Mi formación académica ha sido un pilar fundamental en el desarrollo de mis capacidades técnicas, analíticas y personales. Inicié mis estudios escolares en la Institución Educativa Félix Tello Rojas, donde cursé desde el primer hasta el quinto grado de primaria, etapa en la que adquirí una base sólida en valores, responsabilidad y compromiso con el aprendizaje.
            <br /><br />
            A partir del sexto grado de primaria y durante toda mi educación secundaria, continué mi formación en el prestigioso Colegio Saco Oliveros, conocido por su enfoque académico riguroso y orientado al alto rendimiento. Durante esta etapa logré destacar como parte del tercio superior, consolidando mis habilidades lógico-matemáticas, mi pensamiento crítico y mi disciplina académica.
            <br /><br />
            Actualmente, me encuentro cursando el octavo ciclo de la carrera profesional de Ingeniería de Computación y Sistemas en la Universidad de San Martín de Porres, institución en la que he fortalecido mis conocimientos en desarrollo de software, estructuras de datos, bases de datos, seguridad informática, ingeniería de software, inteligencia artificial y gestión de proyectos.
            <br /><br />
            Esta etapa universitaria no solo ha potenciado mis competencias técnicas, sino que también ha reforzado en mí una mentalidad de mejora continua, adaptabilidad al cambio tecnológico y compromiso con la excelencia académica y profesional.
          </p>
        </div>
        <div className="sobre-mi-foto-container">
          <Carousel />
        </div>
      </motion.div>

      {/* Idiomas */}
      <motion.div
        className="sobre-mi-contenido"
        id="idiomas"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="perfil-texto">
          <h3>Idiomas</h3>
          <p>
            Mi formación lingüística ha sido una parte esencial en mi desarrollo académico y profesional, permitiéndome comunicarme de forma efectiva en distintos contextos y acceder a fuentes de conocimiento global.
            <br /><br />
            Mi lengua materna es el español, idioma en el que poseo un dominio nativo tanto a nivel oral como escrito. Además, he llevado una formación estructurada y progresiva en el idioma inglés, habiendo estudiado desde niveles básicos hasta alcanzar el nivel avanzado en el prestigioso instituto ICPNA (Instituto Cultural Peruano Norteamericano).
            <br /><br />
            A lo largo de este proceso he desarrollado competencias sólidas en comprensión lectora, redacción, conversación fluida y comprensión auditiva, lo cual me permite desenvolverme con seguridad en entornos académicos, profesionales y tecnológicos de habla inglesa.
            <br /><br />
            Esta preparación bilingüe representa una ventaja competitiva clave en el ámbito del desarrollo de software y me permite colaborar eficientemente en proyectos globales, comprender documentación avanzada y mantenerme actualizado con las últimas tendencias tecnológicas.
          </p>
        </div>
        <div className="sobre-mi-foto-container">
          {/* Aquí puedes añadir un ícono si deseas más adelante */}
        </div>
      </motion.div>

      {/* Certificaciones */}
      <motion.div
        className="sobre-mi-contenido"
        id="certificaciones"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="perfil-texto">
          <h3>Mis Certificaciones</h3>
          <ul>
            <li>Python Desarrollo de Aplicaciones Web – Universidad Nacional de Ingeniería</li>
            <li>Python Fundamentos de Programación – Universidad Nacional de Ingeniería</li>
            <li>Algoritmo y Estructura de Datos (Avanzado) – Universidad Nacional de Ingeniería</li>
          </ul>
        </div>
        <div className="sobre-mi-foto-container">
          {/* Puedes añadir imágenes si lo deseas */}
        </div>
      </motion.div>
    </section>
  );
};

export default Estudios;
