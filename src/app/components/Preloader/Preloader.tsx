"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      className="h-screen w-screen bg-black fixed top-0 left-0 z-[99] text-white flex items-center justify-center text-3xl font-bold desktop:text-7xl"
    >
      {dimension.width > 0 && (
        <div className="flex flex-col">
          <motion.div
            className="overflow-hidden z-[1] pb-3 mb-[15px] desktop:mb-[60px]"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.span variants={firstName}>
              <motion.span variants={letter} className="inline-block relative">
                A
              </motion.span>
              <motion.span variants={letter} className="inline-block relative">
                {"\u00A0"}
              </motion.span>
              {"life".split("").map((str, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block relative"
                >
                  {str}
                </motion.span>
              ))}
              <motion.span variants={letter} className="inline-block relative">
                {"\u00A0"}
              </motion.span>
              {"grows,".split("").map((str, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block relative"
                >
                  {str}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
          <motion.div
            className="overflow-hidden z-[1] mb-0 pb-3"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.span variants={lastName}>
              {"awakening".split("").map((str, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block relative"
                >
                  {str}
                </motion.span>
              ))}
              <motion.span variants={letter} className="inline-block relative">
                {"\u00A0"}
              </motion.span>
              {"new".split("").map((str, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block relative"
                >
                  {str}
                </motion.span>
              ))}
              <motion.span variants={letter} className="inline-block relative">
                {"\u00A0"}
              </motion.span>
              {"zest.".split("").map((str, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block relative"
                >
                  {str}
                </motion.span>
              ))}
            </motion.span>
          </motion.div>
          {/* <motion.div
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
          </motion.div> */}
        </div>
      )}
    </motion.div>
  );
}
