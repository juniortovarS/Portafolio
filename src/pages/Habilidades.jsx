import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Section.css";

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
      setTimeout(scrollToSection, 300);
    }
  }, [location]);

  return (
    <section className="sobre-mi-section">
      <motion.div
        className="sobre-mi-contenido"
        id="habilidades"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Texto de habilidades técnicas, blandas y software */}
        <div className="perfil-texto">
          <h3>Habilidades Técnicas</h3>
          <p>
            A lo largo de mi formación universitaria, proyectos personales y experiencia freelance, he desarrollado una base sólida de habilidades técnicas que me permiten desempeñarme eficientemente en el desarrollo de software y soluciones digitales. Poseo dominio en lenguajes de programación como JavaScript, TypeScript, Python, Java, C#, PHP y SQL, así como experiencia en entornos de desarrollo frontend utilizando React.js, Next.js, Tailwind CSS, Bootstrap, Framer Motion, Vite y SASS. En el backend, trabajo con tecnologías como Node.js, Express.js, .NET Core, ASP.NET MVC y Spring Boot, desarrollando APIs RESTful seguras y escalables. Manejo sistemas de gestión de bases de datos como MySQL, PostgreSQL, SQLite, SQL Server, MongoDB y Firebase, aplicando principios de arquitectura MVC, programación orientada a objetos, seguridad con JWT y buenas prácticas de desarrollo. Además, me involucro en la documentación técnica, optimización del rendimiento y creación de interfaces responsivas y accesibles con enfoque mobile-first.
          </p>


          <div id="blandas"></div> {/* ← ESTE DIV ES CLAVE */}
          <h3 style={{ marginTop: "60px" }}>Habilidades Blandas</h3>
          <p>
            Más allá de lo técnico, me esfuerzo por cultivar y aplicar un conjunto de habilidades blandas fundamentales para cualquier entorno profesional. Me caracterizo por ser una persona autodidacta, proactiva y con alta capacidad de adaptación, cualidades que me permiten aprender rápidamente nuevas tecnologías, asumir retos y aportar soluciones innovadoras. Valoro profundamente la organización, la responsabilidad y el pensamiento crítico, lo que me permite gestionar proyectos de forma estructurada y tomar decisiones informadas. Poseo una comunicación clara y efectiva, tanto verbal como escrita, ideal para colaborar en equipos multidisciplinarios y comprender las necesidades de usuarios o clientes. Mantengo una actitud de mejora continua, con mentalidad positiva y resiliente ante los desafíos, y me esfuerzo por construir relaciones profesionales basadas en el respeto, la empatía y la colaboración.
          </p>


          <div id="software"></div> {/* si usarás #software en el submenú */}
          <h3 style={{ marginTop: "60px" }}>Herramientas y Software</h3>
          <p>
            He adquirido un dominio versátil de múltiples herramientas de desarrollo y productividad que me permiten abordar proyectos con eficiencia, orden y enfoque profesional. Utilizo entornos como Visual Studio Code, Visual Studio 2022, IntelliJ IDEA, Eclipse y NetBeans, adaptándome según el lenguaje y arquitectura del proyecto. Para el control de versiones empleo Git, integrando repositorios con plataformas como GitHub, GitLab y Bitbucket, implementando flujos CI/CD y estrategias de colaboración con ramas. En diseño de interfaces y experiencia de usuario, uso herramientas como Figma, Adobe XD y Canva para prototipado, wireframing y planificación visual. En el ámbito de gestión de bases de datos, manejo MySQL Workbench, pgAdmin, DBeaver, SQL Server Management Studio y Firebase Console. Para pruebas, documentación y monitoreo utilizo Postman, Swagger, Insomnia y Thunder Client, y me apoyo en herramientas como Notion, Trello y Jira para la planificación ágil y seguimiento de tareas. Además, tengo experiencia en despliegue de aplicaciones web mediante plataformas como Render, Vercel, Netlify y Firebase Hosting, así como conocimientos básicos en Docker para la contenerización de entornos y en herramientas de desarrollo de escritorio como XAMPP y Electron.js.
          </p>
        </div>

        {/* Columna de íconos SVG (vertical, completa hasta abajo) */}
        <div className="sobre-mi-foto-container habilidades-svg-columna">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="C#" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VSCode" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" />
          <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" alt="Netlify" />
          <img src="https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" alt="Vercel" />
        </div>
      </motion.div>
    </section>
  );
};

export default Habilidades;
