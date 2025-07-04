import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

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
    </section>
  );
};

export default Estudios;
