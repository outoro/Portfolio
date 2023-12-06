"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

const slideUp = {
  initial: {
    y: "0",
  },
  exit: {
    y: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 1.2 },
  },
};

const firstName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ease: [0.6, 0.01, 0.3, 0.9] },
  },
};

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="preloader"
    >
      {dimension.width > 0 && (
        <div className="text-container">
          <motion.div
            className="model"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.span className="first" variants={firstName}>
              <motion.span variants={letter}>A </motion.span>
              <motion.span variants={letter}>{"\u00A0"}</motion.span>
              <motion.span variants={letter}>l</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>f</motion.span>
              <motion.span variants={letter}>e </motion.span>
              <motion.span variants={letter}>{"\u00A0"}</motion.span>
              <motion.span variants={letter}>g</motion.span>
              <motion.span variants={letter}>r</motion.span>
              <motion.span variants={letter}>o</motion.span>
              <motion.span variants={letter}>w</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>,</motion.span>
            </motion.span>
          </motion.div>
          <motion.div
            className="model"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.span className="last" variants={lastName}>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>w</motion.span>
              <motion.span variants={letter}>a</motion.span>
              <motion.span variants={letter}>k</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>i</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>g</motion.span>
              <motion.span variants={letter}>{"\u00A0"}</motion.span>
              <motion.span variants={letter}>n</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>w</motion.span>
              <motion.span variants={letter}>{"\u00A0"}</motion.span>
              <motion.span variants={letter}>z</motion.span>
              <motion.span variants={letter}>e</motion.span>
              <motion.span variants={letter}>s</motion.span>
              <motion.span variants={letter}>t</motion.span>
              <motion.span variants={letter}>.</motion.span>
            </motion.span>
          </motion.div>
          <motion.div
            className="model"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.p
              className="kor"
              initial={{
                y: 400,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                  duration: 1,
                  ease: [0.76, 0, 0.24, 1],
                },
              }}
            >
              삶은 성장한다, 새로운 열정을 깨우며.
            </motion.p>
          </motion.div>
        </div>
      )}
    </motion.div>
  );
}
