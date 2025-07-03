import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

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
      setTimeout(scrollToSection, 300);
    }
  }, [location]);

  return (
    <section className="sobre-mi-section">
      <motion.div
        className="sobre-mi-contenido"
        id="software"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="perfil-texto">
          <h3>Desarrollo de Software</h3>
          <p>
            Actualmente me desempeño como desarrollador freelance, creando soluciones digitales a medida para diferentes
            empresas y emprendimientos. Mi enfoque está centrado en la automatización de procesos, el diseño de
            interfaces modernas y el desarrollo de aplicaciones web funcionales utilizando herramientas como React,
            Node.js, Express, SQLite y Tailwind CSS.
            <br /><br />
            Cada proyecto que realizo integra principios de arquitectura limpia, diseño centrado en el usuario y rendimiento optimizado.
            Uno de los proyectos más significativos que he desarrollado es mi propio CV online, una página hecha con React donde presento de forma interactiva mis habilidades, experiencia y visión como ingeniero.
            <br /><br />
            Esta plataforma no solo refleja mis conocimientos técnicos, sino también mi capacidad para transmitir identidad profesional a través del código.
            Desarrollar software no es solo mi trabajo, es mi vocación: me apasiona resolver problemas reales mediante soluciones tecnológicas eficientes, escalables y visualmente atractivas.
          </p>

          <div id="clientes"></div>
          <h3 style={{ marginTop: "60px" }}>Atención al Cliente y Ventas</h3>
          <p>
            He trabajado en contacto directo con clientes, gestionando pedidos, resolviendo consultas y ofreciendo una
            atención personalizada y eficiente. Esta experiencia me ha enseñado a escuchar activamente, comprender las
            necesidades del usuario final y responder con empatía, proactividad y orientación al detalle.
          </p>

          <div id="logistica"></div>
          <h3 style={{ marginTop: "60px" }}>Operaciones y Logística</h3>
          <p>
            Durante mi tiempo en el sector de alimentos, estuve involucrado en tareas logísticas como control de
            inventarios, preparación de pedidos, organización de insumos y mantenimiento de zonas operativas, siempre bajo
            entornos de alta demanda y presión constante.
          </p>

          <div id="alimentos"></div>
          <h3 style={{ marginTop: "60px" }}>Servicios de Alimentos</h3>
          <p>
            Fui parte del equipo de atención en cadenas reconocidas como Subway (Sandwich Artist) y Pardos Chicken (Mozo),
            desempeñando funciones como atención al cliente, preparación de alimentos, seguimiento de normas de higiene y
            control de calidad. Estas experiencias fortalecieron mis habilidades de trabajo en equipo, puntualidad y
            eficiencia operativa.
          </p>

          <div id="resolucion"></div>
          <h3 style={{ marginTop: "60px" }}>Responsabilidad y Resolución</h3>
          <p>
            Siempre he asumido mis responsabilidades con seriedad, demostrando liderazgo, compromiso y capacidad para
            resolver conflictos de forma eficaz. En todos los entornos en los que he trabajado, he sido reconocido por mi
            capacidad para mantener la calma ante la presión, tomar decisiones con criterio y actuar con profesionalismo
            ante cualquier desafío.
          </p>
        </div>

        {/* Puedes dejar este div para mantener consistencia visual aunque no uses íconos */}
        <div className="sobre-mi-foto-container" />
      </motion.div>
    </section>
  );
};

export default Experiencia;
