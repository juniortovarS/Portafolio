import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/TakeoverLink.css";

import bgSobreMi from "../assets/sobreMi.png";
import bgEstudios from "../assets/estudios.png";
import bgHabilidades from "../assets/habilidades.png";
import bgExperiencia from "../assets/experiencia.png";
import logoJT from "../assets/logoJT.png";

const sections = [
  { name: "Sobre mí", key: "sobremi" },
  { name: "Estudios", key: "estudios" },
  { name: "Habilidades", key: "habilidades" },
  { name: "Experiencia Laboral", key: "experiencia" },
];

const sectionBackgrounds = {
  sobremi: bgSobreMi,
  estudios: bgEstudios,
  habilidades: bgHabilidades,
  experiencia: bgExperiencia,
};

// ✅ Recibe onSectionClick como prop
const TakeoverLink = ({ onSectionClick }) => {
  const [animatingSection, setAnimatingSection] = useState(null);
  const [overlayColor, setOverlayColor] = useState(null);
  const [animatedSections, setAnimatedSections] = useState({});
  const [activeSection, setActiveSection] = useState(null);
  const navigate = useNavigate();

  const handleHover = (sectionKey) => {
    if (animatedSections[sectionKey]) return;
    setOverlayColor(sectionKey);
    setAnimatingSection(sectionKey);
    setAnimatedSections((prev) => ({ ...prev, [sectionKey]: true }));
    setActiveSection(sectionKey);
    setTimeout(() => setAnimatingSection(null), 400);
  };

  const handleLeave = (sectionKey) => {
    setTimeout(() => {
      setAnimatedSections((prev) => ({ ...prev, [sectionKey]: false }));
    }, 500);
    setActiveSection(null);
  };

  const handleClick = (key) => {
    if (onSectionClick) onSectionClick(); // 👉 Oculta Takeover
    navigate(`/${key}`);
  };

  const activeBg =
    overlayColor && sectionBackgrounds[overlayColor]
      ? sectionBackgrounds[overlayColor]
      : bgSobreMi;

  return (
    <div
      className="takeover-fullscreen"
      style={{
        backgroundImage: `url(${activeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AnimatePresence>
        {overlayColor && (
          <motion.div
            key={overlayColor}
            className="overlay-slide"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <div className="menu-vertical">
        <img src={logoJT} alt="Logo JT" className="logo-jt-top" />
        {sections.map(({ name, key }) => (
          <motion.div
            key={key}
            className={`menu-item ${
              activeSection && activeSection !== key ? "inactive" : "active"
            }`}
            onMouseEnter={() => handleHover(key)}
            onMouseLeave={() => handleLeave(key)}
            onClick={() => handleClick(key)}
          >
            <AnimatePresence mode="wait">
              {animatingSection === key ? (
                <motion.div
                  key="disappear"
                  className="letter-wrapper"
                  variants={letterContainer}
                  initial="visible"
                  animate="hidden"
                  exit="exit"
                >
                  {[...name].map((char, i) => (
                    <motion.span
                      key={i}
                      className="letter"
                      variants={letterVariantOut}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="appear"
                  className="letter-wrapper"
                  variants={letterContainer}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {[...name].map((char, i) => (
                    <motion.span
                      key={i}
                      className="letter"
                      variants={letterVariantIn}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const letterContainer = {
  hidden: { transition: { staggerChildren: 0.02 } },
  visible: { transition: { staggerChildren: 0.02 } },
};

const letterVariantOut = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: -50, opacity: 0, transition: { duration: 0.2 } },
  exit: { y: -30, opacity: 0, transition: { duration: 0.2 } },
};

const letterVariantIn = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

export default TakeoverLink;
