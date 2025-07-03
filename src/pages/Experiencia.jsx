import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

const Experiencia = () => {
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
    <section className="experiencia-section">
      <motion.h2
        className="experiencia-titulo"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Experiencia Laboral
      </motion.h2>

      <motion.div
        className="experiencia-bloque"
        id="software"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Desarrollo de Software</h3>
        <p>
          Experiencia desarrollando aplicaciones web modernas utilizando tecnologías como React, Node.js, Express y bases de datos SQL.
        </p>
      </motion.div>

      <motion.div
        className="experiencia-bloque"
        id="clientes"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>Atención al Cliente y Ventas</h3>
        <p>
          Interacción directa con clientes, resolución de dudas, soporte postventa y asesoramiento comercial personalizado.
        </p>
      </motion.div>

      <motion.div
        className="experiencia-bloque"
        id="logistica"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3>Operaciones y Logística</h3>
        <p>
          Coordinación de entregas, inventario y control de stock. Trabajo en equipo bajo presión en entornos logísticos.
        </p>
      </motion.div>

      <motion.div
        className="experiencia-bloque"
        id="alimentos"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h3>Servicios de Alimentos</h3>
        <p>
          Atención al cliente en puntos de venta, preparación básica, control de calidad y cumplimiento de normas de higiene.
        </p>
      </motion.div>

      <motion.div
        className="experiencia-bloque"
        id="resolucion"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3>Responsabilidad y Resolución</h3>
        <p>
          Capacidad para asumir roles de liderazgo, resolver conflictos y aportar soluciones efectivas de forma proactiva.
        </p>
      </motion.div>
    </section>
  );
};

export default Experiencia;
