import React, { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Bienvenida.css";

export const TextGenerateEffect = ({ words, filter = true, duration = 0.5, onComplete }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.15),
      }
    ).then(() => {
      if (onComplete) onComplete();
    });
  }, [animate, filter, duration, onComplete]);

  return (
    <motion.div
      ref={scope}
      className="text-generate dark:text-white text-black"
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="word-span"
          style={{ filter: filter ? "blur(10px)" : "none" }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

const Bienvenida = () => {
  const navigate = useNavigate();
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  // Text lines
  const firstLine = "Soy Junior, y esto es más que una página web:";
  const secondLine = "Es la historia de cómo uso el código para construir experiencias y soluciones";

  return (
    <section className="bienvenida-section">
      <div className="contenido-bienvenida">
        <TextGenerateEffect
          words={firstLine}
          onComplete={() => setShowSecondLine(true)}
          duration={0.5}
        />

        {showSecondLine && (
          <TextGenerateEffect
            words={secondLine}
            onComplete={() => setShowButtons(true)}
            duration={0.5}
            filter={false} // Puedes quitar blur en la segunda linea si quieres
          />
        )}

        {showButtons && (
          <motion.div
            className="botones-bienvenida"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button
              onClick={() => navigate("/portafolio")}
              className="btn-ver"
            >
              Ver Portafolio
            </button>
           <a
  href="/Cv_Junior Tovar Salazar.pdf"
  download="Cv_Junior Tovar Salazar.pdf"
  className="btn-ver"
>
  Descargar CV
</a>

          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Bienvenida;
