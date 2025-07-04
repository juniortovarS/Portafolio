import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

// Importa tus imágenes
import freelanceImg from "../assets/logoJT.png";
import subwayImg from "../assets/subway.png";
import pardosImg from "../assets/pardos.png";

const experiencias = [
  {
    id: "freelance",
    titulo: "Desarrollo de Software",
    imagen: freelanceImg,
    texto: `Actualmente me desempeño como desarrollador freelance, creando soluciones digitales a medida para diferentes empresas y emprendimientos. Mi enfoque está centrado en la automatización de procesos, el diseño de interfaces modernas y el desarrollo de aplicaciones web funcionales utilizando herramientas como React, Node.js, Express, SQLite y Tailwind CSS.

Cada proyecto que realizo integra principios de arquitectura limpia, diseño centrado en el usuario y rendimiento optimizado. Uno de los proyectos más significativos que he desarrollado es mi propio CV online, una página hecha con React donde presento de forma interactiva mis habilidades, experiencia y visión como ingeniero.

Esta plataforma no solo refleja mis conocimientos técnicos, sino también mi capacidad para transmitir identidad profesional a través del código. Desarrollar software no es solo mi trabajo, es mi vocación: me apasiona resolver problemas reales mediante soluciones tecnológicas eficientes, escalables y visualmente atractivas.`
  },
  {
    id: "pardos",
    titulo: "Atención al Cliente – Pardos Chicken",
    imagen: pardosImg,
    texto: `Trabajé como Mozo en Pardos Chicken, gestionando pedidos, resolviendo consultas y ofreciendo una atención personalizada. Aprendí a escuchar activamente, comprender las necesidades del usuario y responder con empatía, proactividad y enfoque al detalle.`
  },
  {
    id: "subway",
    titulo: "Servicios de Alimentos – Subway",
    imagen: subwayImg,
    texto: `Fui parte del equipo de atención en Subway como Sandwich Artist, desempeñando funciones como atención al cliente, preparación de alimentos, seguimiento de normas de higiene y control de calidad. Esta experiencia fortaleció mis habilidades de trabajo en equipo, puntualidad y eficiencia operativa.`
  }
];

const Experiencia = () => {
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
      <motion.div
        className="sobre-mi-contenido"
        id="experiencia"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="experiencias-container">
          {experiencias.map((exp, index) => (
            <motion.div
              key={index}
              id={exp.id} // Esto hace que funcione con el submenú (#freelance, #pardos, #subway)
              className="experiencia-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={exp.imagen}
                alt={`Imagen de ${exp.titulo}`}
                className={`experiencia-img ${
                  exp.id === "freelance"
                    ? "fondo-negro"
                    : exp.id === "subway"
                    ? "fondo-negro-subway"
                    : ""
                }`}
              />
              <div className="experiencia-content">
                <h3>{exp.titulo}</h3>
                <p>{exp.texto}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experiencia;
