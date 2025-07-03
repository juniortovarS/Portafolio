import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/DrawerNav.css";

const navItems = [
  {
    label: "SOBRE MÍ",
    path: "/sobremi",
    submenu: [
      { label: "PERFIL PROFESIONAL", path: "/sobremi#perfil" },
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
      { label: "DESARROLLO DE SOFTWARE", path: "/experiencia#software" },
      { label: "ATENCIÓN AL CLIENTE Y VENTAS", path: "/experiencia#clientes" },
      { label: "OPERACIONES Y LOGÍSTICA", path: "/experiencia#logistica" },
      { label: "SERVICIOS DE ALIMENTOS", path: "/experiencia#alimentos" },
      { label: "RESPONSABILIDAD Y RESOLUCIÓN", path: "/experiencia#resolucion" },,
    ],
  },
];

const DrawerNav = () => {
  const [activeSubmenu, setActiveSubmenu] = useState([]);

  return (
    <div
      className={`nav-wrapper ${activeSubmenu.length > 0 ? "with-submenu" : ""}`}
      onMouseLeave={() => setActiveSubmenu([])}
      onMouseEnter={() => {}}
    >
      <nav className="full-navbar">
        <div className="nav-container">
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

        {activeSubmenu.length > 0 && (
          <div className="submenu-inside">
            {activeSubmenu.map(({ label, path }) => (
              <NavLink key={path} to={path} className="submenu-item">
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default DrawerNav;
