"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { slideUp, firstName, lastName, letter } from "./anim";

export default function Preloader() {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

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
              {"A\u00A0life\u00A0grows,".split("").map((str, i) => (
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
            className="overflow-hidden z-[1] pb-3"
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.span variants={lastName}>
              {"awakening\u00A0new\u00A0zest.".split("").map((str, i) => (
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
        </div>
      )}
    </motion.div>
  );
}
