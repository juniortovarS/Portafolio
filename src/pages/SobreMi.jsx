
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

import reseña1 from "../assets/reseña1.png";
import reseña2 from "../assets/reseña2.png";
import reseña3 from "../assets/reseña3.png";
import reseña4 from "../assets/reseña4.png";
import reseña5 from "../assets/reseña5.png";

const SobreMi = () => {
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
      {/* Perfil Profesional */}
      <motion.div
        className="sobre-mi-contenido"
        id="perfil"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="perfil-texto centrado">
          <h3>Perfil Profesional</h3>
          <p>
            Soy Junior Tovar, estudiante de Ingeniería de Sistemas con experiencia en desarrollo web full stack, enfocado en construir soluciones digitales modernas, escalables e intuitivas. Manejo lenguajes como JavaScript, TypeScript, Python, Java, C#, PHP y SQL, y trabajo con tecnologías frontend como React, Next.js, Tailwind CSS, Bootstrap, SASS, Vite y Framer Motion. En backend utilizo Node.js, Express, .NET Core, ASP.NET MVC y Spring Boot, desarrollando APIs REST seguras con autenticación JWT. Tengo dominio de bases de datos como MySQL, PostgreSQL, SQLite, MongoDB, SQL Server y Firebase. Además, uso herramientas como Git, GitHub, GitLab, Docker, Render, Vercel, Swagger y Postman, aplicando principios de diseño responsivo, arquitectura MVC, programación orientada a objetos y documentación técnica. Me considero autodidacta, proactivo y apasionado por crear experiencias digitales de alto impacto que combinan lógica estructurada con diseño centrado en el usuario.
          </p>
        </div>
      </motion.div>

      {/* Reseñas y Proyectos */}
    <motion.div
  id="resenas"
  className="sobre-mi-contenido"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>
  <div className="perfil-texto centrado">
    <h3>Reseñas y Proyectos</h3>
    <div className="reseñas-galeria">
      {[reseña1, reseña2, reseña3, reseña4, reseña5].map((img, idx) => (
        <motion.img
          key={idx}
          src={img}
          alt={`Reseña ${idx + 1}`}
          className="reseña-img"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  </div>
</motion.div>


      {/* Misión y Valores */}
      <motion.div
        id="mision"
        className="sobre-mi-contenido"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="perfil-texto centrado">
          <h3>Misión y Valores</h3>
          <p>
            Mi misión como futuro ingeniero de sistemas es desarrollar soluciones tecnológicas innovadoras, funcionales y accesibles que generen un impacto positivo en las personas, empresas y comunidades. Busco combinar el pensamiento analítico con la creatividad para construir productos digitales que no solo resuelvan problemas reales, sino que también aporten valor a largo plazo. Me guío por valores fundamentales como la responsabilidad, la ética profesional, la mejora continua y el aprendizaje constante. Creo firmemente en la colaboración, el respeto por la diversidad de ideas y el compromiso con la calidad en cada etapa del desarrollo. Mi enfoque está centrado en el usuario, priorizando la usabilidad, el rendimiento y la experiencia final, sin perder de vista la escalabilidad, la seguridad y la sostenibilidad tecnológica. Aspiro a crecer como profesional íntegro, que no solo domine herramientas y lenguajes, sino que también contribuya a construir una industria tecnológica más humana, transparente y orientada al futuro.
          </p>
        </div>
      </motion.div>

      {/* Intereses y Pasatiempos */}
      <motion.div
        id="interes"
        className="sobre-mi-contenido"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="perfil-texto centrado">
          <h3>Intereses y Pasatiempos</h3>
          <p>
            Más allá del mundo del desarrollo, me apasiona mantener un equilibrio entre el crecimiento profesional y personal. En mis tiempos libres disfruto jugar fútbol, una actividad que no solo me permite mantenerme activo, sino también reforzar valores como el trabajo en equipo, la disciplina y la estrategia. Como freelancer, encuentro satisfacción diseñando páginas web profesionales y funcionales, donde puedo aplicar mi creatividad y conocimientos técnicos para transformar ideas en experiencias digitales impactantes. También me gusta escuchar música, ya que me ayuda a relajarme y concentrarme en mis procesos creativos. Asisto regularmente al gimnasio, priorizando el bienestar físico como parte fundamental de mi productividad y enfoque. Además, soy una persona curiosa y autodidacta: me gusta leer sobre tecnología, desarrollo personal y actualidad, y constantemente busco nuevas formas de optimizar mis habilidades, mantenerme actualizado con las últimas tendencias del sector y crecer tanto a nivel técnico como humano. Considero que cada interés personal aporta a mi visión integral como profesional comprometido, disciplinado y en constante evolución.
          </p>
        </div>
      </motion.div>

      {/* ¿Qué me diferencia? */}
      <motion.div
        id="diferencia"
        className="sobre-mi-contenido"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="perfil-texto centrado">
          <h3>¿Qué me diferencia?</h3>
          <p>
            Lo que me diferencia de los demás es mi enfoque integral y equilibrado entre la técnica, la creatividad y el compromiso humano. No solo domino herramientas, lenguajes y frameworks modernos, sino que también me esfuerzo por comprender profundamente las necesidades del usuario, del negocio y del contexto en el que se implementa una solución. Mi capacidad para trabajar tanto en el frontend como en el backend me permite tener una visión completa del desarrollo, y eso me convierte en un puente entre el diseño y la funcionalidad. Soy una persona autodidacta, resiliente y altamente adaptable: no espero a que alguien me diga qué aprender, me anticipo y me capacito constantemente. Además, tengo un fuerte sentido de responsabilidad y una ética de trabajo enfocada en los detalles, la eficiencia y la mejora continua. Me involucro con pasión en cada proyecto, ya sea personal, académico o freelance, buscando siempre que lo que construyo no solo funcione, sino que inspire, aporte valor real y se sostenga en el tiempo. Lo que me diferencia no es solo lo que sé hacer, sino cómo lo hago: con actitud, visión crítica, empatía y una mentalidad orientada a crecer y aportar soluciones que marquen la diferencia.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreMi;
