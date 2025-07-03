import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ftr from "../assets/ftr.png";
import so from "../assets/so.png";
import fia from "../assets/fia.png";

const slides = [
  { src: ftr, title: "Félix Tello Rojas" },
  { src: so, title: "Saco Oliveros" },
  { src: fia, title: "Ingeniería de Sistemas - USMP" },
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    position: "absolute",
  }),
};

const Carousel = () => {
  const [[index, direction], setIndex] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev]) => {
        const nextIndex = (prev + 1) % slides.length;
        return [nextIndex, 1];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-frame">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="carousel-slide"
          >
            <img
              src={slides[index].src}
              alt={slides[index].title}
              className="carousel-image"
            />
            <div className="carousel-title">{slides[index].title}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Carousel;
