import React from "react";
import { Link } from "react-router-dom";

const Portafolio = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#c0e6b9] dark:from-black dark:to-gray-900 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white text-black">
        ¡Bienvenido a mi portafolio profesional!
      </h1>

      <div className="flex gap-6 mt-4 flex-wrap justify-center">
        <Link
          to="/sobremi"
          className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-md transition-all duration-300"
        >
          Ver Portafolio
        </Link>

        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-gray-800 hover:bg-black text-white rounded-2xl shadow-md transition-all duration-300"
        >
          Descargar CV
        </a>
      </div>
      
    </section>
  );
};

export default Portafolio;
