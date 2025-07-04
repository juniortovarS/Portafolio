import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/DrawerNav.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const navItems = [
  {
    label: "SOBRE MÍ",
    path: "/sobremi",
    submenu: [
      { label: "PERFIL PROFESIONAL", path: "/sobremi#perfil" },
      { label: "RESEÑAS Y PROYECTOS", path: "/sobremi#resenas" },
      { label: "MISIÓN Y VALORES", path: "/sobremi#mision" },
      { label: "INTERESES Y PASATIEMPOS", path: "/sobremi#interes" },
      { label: "¿QUÉ ME HACE DIFERENTE?", path: "/sobremi#diferencia" },
    ],
  },
  {
    label: "ESTUDIOS",
    path: "/estudios",
    submenu: [
      { label: "ESTUDIOS ACADÉMICOS", path: "/estudios#academicos" },
      { label: "IDIOMAS", path: "/estudios#idiomas" },
      { label: "CERTIFICACIONES", path: "/estudios#certificaciones" },
    ],
  },
  {
    label: "HABILIDADES",
    path: "/habilidades",
    submenu: [
      { label: "HABILIDADES TÉCNICAS", path: "/habilidades#tecnicas" },
      { label: "HABILIDADES BLANDAS", path: "/habilidades#blandas" },
      { label: "HERRAMIENTAS Y SOFTWARE", path: "/habilidades#software" },
    ],
  },
  {
    label: "EXPERIENCIA LABORAL",
    path: "/experiencia",
    submenu: [
      { label: "DESARROLLO DE SOFTWARE", path: "/experiencia#freelance" },
      { label: "ATENCIÓN AL CLIENTE – PARDOS", path: "/experiencia#pardos" },
      { label: "SERVICIOS DE ALIMENTOS – SUBWAY", path: "/experiencia#subway" },
    ],
  },
];

const SocialIcons = () => (
  <div className="icons-inline">
    <a
      href="https://github.com/juniortovarS"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
    >
      <FaGithub />
      <div><FaGithub /></div>
    </a>
    <a
      href="https://www.linkedin.com/in/junior-tovar-873499208/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
    >
      <FaLinkedin />
      <div><FaLinkedin /></div>
    </a>
    <a
      href="https://wa.me/51951038509?text=Hola%20Junior%2C%20acabo%20de%20ver%20tu%20p%C3%A1gina%20web%20sobre%20tu%20Portafolio%20%26%20CV%2C%20me%20parece%20muy%20interesante."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
      <div><FaWhatsapp /></div>
    </a>
  </div>
);

const DrawerNav = () => {
  const [activeSubmenu, setActiveSubmenu] = useState([]);

  return (
    <div
      className={`nav-wrapper ${activeSubmenu.length > 0 ? "with-submenu" : ""}`}
      onMouseLeave={() => setActiveSubmenu([])}
    >
      <nav className="full-navbar">
        <div className="nav-container">
          <div className="nav-items-group">
            {navItems.map(({ label, path, submenu }) => (
              <div
                key={path}
                className="nav-item"
                onMouseEnter={() => setActiveSubmenu(submenu)}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {label}
                </NavLink>
              </div>
            ))}
          </div>

          {/* Íconos sociales visibles en escritorio */}
          <div className="icons-inline-desktop">
            <SocialIcons />
          </div>
        </div>

        {/* Submenú y redes sociales visibles solo en móvil */}
        {activeSubmenu.length > 0 && (
          <div className="submenu-inside">
            {activeSubmenu.map(({ label, path }) => (
              <NavLink key={path} to={path} className="submenu-item">
                {label}
              </NavLink>
            ))}

            {/* Íconos sociales también debajo del submenu en móvil */}
            <div className="submenu-icons">
              <SocialIcons />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default DrawerNav;
