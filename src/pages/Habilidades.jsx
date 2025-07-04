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
        {/* Texto descriptivo primero */}
        <div className="perfil-texto">
          <h3>Habilidades Técnicas</h3>
          <p>
            A lo largo de mi formación universitaria, proyectos personales y experiencia freelance, he desarrollado una base sólida de habilidades técnicas que me permiten desempeñarme eficientemente en el desarrollo de software y soluciones digitales. Poseo dominio en lenguajes de programación como JavaScript, TypeScript, Python, Java, C#, PHP y SQL, así como experiencia en entornos de desarrollo frontend utilizando React.js, Next.js, Tailwind CSS, Bootstrap, Framer Motion, Vite y SASS. En el backend, trabajo con tecnologías como Node.js, Express.js, .NET Core, ASP.NET MVC y Spring Boot, desarrollando APIs RESTful seguras y escalables. Manejo sistemas de gestión de bases de datos como MySQL, PostgreSQL, SQLite, SQL Server, MongoDB y Firebase, aplicando principios de arquitectura MVC, programación orientada a objetos, seguridad con JWT y buenas prácticas de desarrollo. Además, me involucro en la documentación técnica, optimización del rendimiento y creación de interfaces responsivas y accesibles con enfoque mobile-first.
          </p>

          <div id="blandas"></div>
          <h3 style={{ marginTop: "60px" }}>Habilidades Blandas</h3>
          <p>
            Más allá de lo técnico, me esfuerzo por cultivar y aplicar un conjunto de habilidades blandas fundamentales para cualquier entorno profesional. Me caracterizo por ser una persona autodidacta, proactiva y con alta capacidad de adaptación, cualidades que me permiten aprender rápidamente nuevas tecnologías, asumir retos y aportar soluciones innovadoras. Valoro profundamente la organización, la responsabilidad y el pensamiento crítico, lo que me permite gestionar proyectos de forma estructurada y tomar decisiones informadas. Poseo una comunicación clara y efectiva, tanto verbal como escrita, ideal para colaborar en equipos multidisciplinarios y comprender las necesidades de usuarios o clientes. Mantengo una actitud de mejora continua, con mentalidad positiva y resiliente ante los desafíos, y me esfuerzo por construir relaciones profesionales basadas en el respeto, la empatía y la colaboración.
          </p>

          <div id="software"></div>
          <h3 style={{ marginTop: "60px" }}>Herramientas y Software</h3>
          <p>
            He adquirido un dominio versátil de múltiples herramientas de desarrollo y productividad que me permiten abordar proyectos con eficiencia, orden y enfoque profesional. Utilizo entornos como Visual Studio Code, Visual Studio 2022, IntelliJ IDEA, Eclipse y NetBeans, adaptándome según el lenguaje y arquitectura del proyecto. Para el control de versiones empleo Git, integrando repositorios con plataformas como GitHub, GitLab y Bitbucket, implementando flujos CI/CD y estrategias de colaboración con ramas. En diseño de interfaces y experiencia de usuario, uso herramientas como Figma, Adobe XD y Canva para prototipado, wireframing y planificación visual. En el ámbito de gestión de bases de datos, manejo MySQL Workbench, pgAdmin, DBeaver, SQL Server Management Studio y Firebase Console. Para pruebas, documentación y monitoreo utilizo Postman, Swagger, Insomnia y Thunder Client, y me apoyo en herramientas como Notion, Trello y Jira para la planificación ágil y seguimiento de tareas. Además, tengo experiencia en despliegue de aplicaciones web mediante plataformas como Render, Vercel, Netlify y Firebase Hosting, así como conocimientos básicos en Docker para la contenerización de entornos y en herramientas de desarrollo de escritorio como XAMPP y Electron.js.
          </p>
        </div>

        {/* Bloque de categorías al final */}
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
    </section>
  );
};

export default Habilidades;
