"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { useRouter } from "next/navigation";

export const TextGenerateEffect = ({
  words,
  className = "",
  filter = true,
  duration = 0.5,
}) => {
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
        duration: duration,
        delay: stagger(0.2),
      }
    );
  }, [scope]);

  return (
    <div className={`font-bold ${className}`}>
      <motion.div
        ref={scope}
        className="dark:text-white text-black text-3xl sm:text-4xl md:text-5xl tracking-wide text-center"
      >
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block"
            style={{ filter: filter ? "blur(10px)" : "none" }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
