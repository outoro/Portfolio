"use client";

import { motion } from "framer-motion";

interface SpinTransition {
  repeat: number;
  repeatType: "loop";
  ease: string;
  duration: number;
}

const spinTransition: SpinTransition = {
  repeat: Infinity,
  repeatType: "loop",
  ease: "linear",
  duration: 1,
};

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[660px]">
      <motion.span
        className="block w-12 h-12 rounded-[50%] border-solid border-[0.5rem] border-[#e9e9e9] border-t-[0.5rem] border-t-[#3298db]"
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
    </div>
  );
}
