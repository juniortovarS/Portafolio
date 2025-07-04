import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";
import wpIcon from "../assets/wp.png"; // ✅ Esta línea es esencial para evitar el error


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
      setTimeout(scrollToSection, 500);
    }
  }, [location]);

  return (
    <section className="sobre-mi-section">
      {/* Estudios Académicos */}
      <motion.div className="sobre-mi-contenido" id="academicos" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="perfil-texto">
          <h3>Estudios Académicos</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2021 – Actualidad</div>
              <div className="timeline-content">
                Universidad de San Martín de Porres – Ingeniería de Computación y Sistemas (8.º ciclo)
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2016 – 2020</div>
              <div className="timeline-content">
                Colegio Saco Oliveros – Tercio superior, enfoque lógico-matemático
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2010 – 2015</div>
              <div className="timeline-content">
                I.E. Félix Tello Rojas – Educación Primaria
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Idiomas */}
      <motion.div className="sobre-mi-contenido" id="idiomas" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="perfil-texto">
          <h3>Idiomas</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                TOEFL aprobado – Excelente calificación en comprensión lectora y auditiva
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                Inglés Avanzado – ICPNA
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                Inglés Intermedio – ICPNA
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                Inglés Básico – ICPNA
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificaciones */}
      <motion.div className="sobre-mi-contenido" id="certificaciones" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
        <div className="perfil-texto">
          <h3>Mis Certificaciones</h3>
          <ul>
            <li>Python Desarrollo de Aplicaciones Web – Universidad Nacional de Ingeniería</li>
            <li>Python Fundamentos de Programación – Universidad Nacional de Ingeniería</li>
            <li>Algoritmo y Estructura de Datos (Avanzado) – Universidad Nacional de Ingeniería</li>
          </ul>
        </div>
      </motion.div>

          <a
  href="https://wa.me/51951038509?text=Hola%20Junior%2C%20acabo%20de%20ver%20tu%20p%C3%A1gina%20web%20sobre%20tu%20Portafolio%20%26%20CV%2C%20me%20parece%20muy%20interesante."
  className="whatsapp-button"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <img src={wpIcon} alt="WhatsApp" />
  <span className="tooltip-whatsapp">WhatsApp</span>
</a>
    </section>
  );
};

export default Estudios;
