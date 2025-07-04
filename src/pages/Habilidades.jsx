import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";
import wpIcon from "../assets/wp.png"; // ✅ Importación del ícono de WhatsApp

const Habilidades = () => {
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

  const categorias = [
    {
      titulo: "Lenguajes de Programación",
      items: [
        { alt: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { alt: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { alt: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { alt: "C#", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        { alt: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { alt: "PHP", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      ],
    },
    {
      titulo: "Frameworks y Librerías Frontend",
      items: [
        { alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { alt: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { alt: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        { alt: "Adobe XD", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobexd.svg" },
        { alt: "Canva", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg" },
      ],
    },
    {
      titulo: "Desarrollo Backend y APIs",
      items: [
        { alt: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { alt: "Express.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { alt: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
        { alt: "ASP.NET Core", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
      ],
    },
    {
      titulo: "Bases de Datos",
      items: [
        { alt: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { alt: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { alt: "SQLite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { alt: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { alt: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      ],
    },
    {
      titulo: "Herramientas de Desarrollo y DevOps",
      items: [
        { alt: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { alt: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { alt: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { alt: "VSCode", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
        { alt: "Postman", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg" },
        { alt: "Swagger", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/swagger.svg" },
        { alt: "Vercel", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg" },
        { alt: "Netlify", src: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netlify.svg" },
      ],
    },
  ];

  return (
    <section className="sobre-mi-section">
      <motion.div
        className="sobre-mi-contenido"
        id="habilidades"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="perfil-texto">
          <h3>Habilidades Técnicas</h3>
          <p>
            Durante mi formación y experiencia freelance, he adquirido sólidas habilidades en desarrollo de software. Domino lenguajes como JavaScript, TypeScript, Python, Java, C#, PHP y SQL, y frameworks frontend como React, Next.js, Tailwind CSS y Framer Motion. En backend trabajo con Node.js, Express, .NET Core, ASP.NET MVC y Spring Boot, creando APIs REST seguras y escalables. Manejo bases de datos MySQL, PostgreSQL, SQLite, SQL Server, MongoDB y Firebase, aplicando arquitectura MVC, programación orientada a objetos y seguridad con JWT. Además, me enfoco en documentación técnica, optimización y diseño responsivo con enfoque mobile-first.
          </p>

          <div id="blandas"></div>
          <h3 style={{ marginTop: "60px" }}>Habilidades Blandas</h3>
          <p>
            Más allá de lo técnico, soy autodidacta, proactivo y adaptable, capaz de aprender rápido y afrontar retos con soluciones innovadoras. Valoro la organización, responsabilidad y pensamiento crítico para gestionar proyectos y tomar decisiones informadas. Me comunico clara y efectivamente, ideal para equipos multidisciplinarios. Mantengo una actitud positiva y resiliente, fomentando relaciones basadas en respeto, empatía y colaboración.
          </p>

          <div id="software"></div>
          <h3 style={{ marginTop: "60px" }}>Herramientas y Software</h3>
          <p>
            Uso herramientas como Visual Studio Code, IntelliJ, Git con GitHub/GitLab, y plataformas CI/CD. Para diseño y UX trabajo con Figma, Adobe XD y Canva. En gestión de bases de datos empleo MySQL Workbench, pgAdmin y Firebase Console. Para pruebas y documentación utilizo Postman, Swagger e Insomnia. También manejo plataformas de despliegue como Render, Vercel, Netlify y Firebase Hosting, y tengo conocimientos básicos en Docker y herramientas de escritorio como XAMPP y Electron.js.
          </p>
        </div>

        <div className="categorias-habilidades">
          {categorias.map((cat, index) => (
            <div key={index} className="bloque-categoria">
              <h4>{cat.titulo}</h4>
              <div className="icon-row">
                {cat.items.map((icon, i) => (
                  <img
                    key={i}
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.alt}
                    className="svg-icon"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* ✅ Botón de WhatsApp flotante a la izquierda */}
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

export default Habilidades;
