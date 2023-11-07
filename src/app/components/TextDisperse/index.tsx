"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { disperse } from "./anim";

export default function Index({ children, setBackground }) {
  const [isActive, setIsActive] = useState(false);

  const getChars = (element) => {
    let chars = [];
    if (children.length) {
      children.forEach((el, i) => {
        chars.push(splitWord(el.props.children, i));
      });
    } else {
      chars.push(splitWord(element.props.children, 1));
    }
    return chars;
  };

  const splitWord = (word: string, index: number) => {
    let chars = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={index * i}
          variants={disperse}
          animate={isActive ? "open" : "closed"}
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  const handleMouseEnter = () => {
    setIsActive(true);
    setBackground(true);
  };
  const handleMouseLeave = () => {
    setIsActive(false);
    setBackground(false);
  };

  return (
    <div
      onMouseEnter={() => {
        handleMouseEnter();
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
      className="line-flex cursor-pointer"
    >
      {getChars(children)}
    </div>
  );
}
