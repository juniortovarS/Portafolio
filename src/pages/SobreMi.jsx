import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

import reseña1 from "../assets/reseña1.png";
import reseña2 from "../assets/reseña2.png";
import reseña3 from "../assets/reseña3.png";
import reseña4 from "../assets/reseña4.png";
import reseña5 from "../assets/reseña5.png";
import wpIcon from "../assets/wp.png"; // ✅ Aquí importas tu imagen

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
            Soy Junior Tovar, estudiante de Ingeniería de Sistemas con experiencia en desarrollo web full stack, enfocado en crear soluciones digitales modernas, escalables e intuitivas. Domino lenguajes como JavaScript, TypeScript, Python, Java, C#, PHP y SQL, y trabajo con tecnologías frontend como React, Next.js, Tailwind CSS y frameworks backend como Node.js, Express, .NET Core y Spring Boot. Desarrollo APIs REST seguras con autenticación JWT y manejo bases de datos como MySQL, PostgreSQL, SQLite, MongoDB y Firebase. Uso herramientas como Git, Docker, Render, Vercel, Swagger y Postman, aplicando principios de diseño responsivo, arquitectura MVC y programación orientada a objetos. Soy autodidacta, proactivo y apasionado por crear experiencias digitales que combinan lógica y diseño centrado en el usuario.
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
            Mi misión es crear soluciones tecnológicas innovadoras, accesibles y funcionales que generen un impacto positivo en personas, empresas y comunidades. Combino pensamiento analítico y creatividad para desarrollar productos que resuelvan problemas reales y aporten valor a largo plazo. Me guío por la responsabilidad, ética profesional, mejora continua y aprendizaje constante. Valoro la colaboración, diversidad de ideas y compromiso con la calidad, enfocándome en la usabilidad, rendimiento, seguridad y escalabilidad. Aspiro a crecer como un profesional íntegro, que aporte a una industria tecnológica más humana y orientada al futuro.
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
            Fuera del desarrollo, busco equilibrio entre lo profesional y personal. Disfruto jugar fútbol, actividad que fortalece valores como trabajo en equipo, disciplina y estrategia. Como freelancer, diseño páginas web profesionales donde aplico creatividad y técnica. También me relaja la música, y mantengo el bienestar físico asistiendo al gimnasio. Soy curioso y autodidacta, interesado en tecnología, desarrollo personal y tendencias actuales, buscando siempre optimizar habilidades y crecer tanto técnica como humanamente. Cada interés aporta a mi visión integral como profesional comprometido y en constante evolución.
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
            Mi diferencia está en un enfoque integral que combina técnica, creatividad y compromiso humano. Domino herramientas y frameworks modernos, pero también entiendo profundamente las necesidades del usuario y negocio. Trabajo tanto en frontend como backend, siendo un puente entre diseño y funcionalidad. Soy autodidacta, resiliente y adaptable, siempre anticipándome a nuevos aprendizajes. Tengo ética y responsabilidad, enfocándome en detalles, eficiencia y mejora continua. Me involucro con pasión, buscando que mis proyectos no solo funcionen, sino que inspiren, aporten valor real y perduren. Mi valor no es solo lo que sé, sino cómo lo hago: con visión crítica, empatía y actitud de crecimiento.
          </p>
        </div>
      </motion.div>

      {/* Botón flotante de WhatsApp con imagen desde src/assets/wp.png */}
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

export default SobreMi;
