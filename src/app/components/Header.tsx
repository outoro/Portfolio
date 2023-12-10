"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton/NavButton";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton";
import AnimButton from "./AnimButton/AnimButton";

const menu = {
  open: {
    height: "100vh",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

const nav = {
  open: {
    opacity: 1,
    transition: {
      duration: 0.75,
      delay: 0.4,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.75,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212]">
      <div className="relative flex z-[999] justify-between items-center max-w-[1200px] mx-auto my-0 py-[50px] px-[20px] desktop:px-0">
        <h1 className="font-semibold text-lg leading-6">
          <Link href="/">
            <Image src="/logo.png" width="37" height="37" alt="image" />
          </Link>
        </h1>
        <div className="flex gap-3">
          <ThemeButton />
          <NavButton isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
      <motion.div
        variants={menu}
        initial="closed"
        animate={isActive ? "open" : "closed"}
        exit="closed"
        className="fixed top-0 left-0 w-full text-[#0B1100] bg-[#c9fd74]"
      >
        {isActive && (
          <motion.ul
            variants={nav}
            initial="closed"
            animate={isActive ? "open" : "closed"}
            exit="closed"
            className="relative max-w-[1200px] mx-auto my-0 pt-[340px] flex flex-col gap-20 text-3xl font-normal text-[#002300] pb-64 px-[20px] tracking-widest tablet:text-6xl desktop:px-0 tablet:pt-[400px]"
          >
            <li className="flex gap-0 flex-col tablet:flex-row tablet:gap-6">
              <AnimButton label="Home" link="/" />
              <span className="opacity-30 hidden tablet:block">-</span>
              <AnimButton
                label="About Me"
                link="https://www.notion.so/Jeongeun-Lee-5904b005d0fc47c2964209ea04448d33?pvs=4"
              />
              {/* <span className="opacity-50 hidden tablet:block">-</span>
              <AnimButton label="Overview" link="/" /> */}
            </li>
            <li className="flex gap-0 flex-col tablet:flex-row tablet:gap-6">
              <AnimButton label="Remonth" link="https://remonth.vercel.app/" />
              <span className="opacity-30 hidden tablet:block">-</span>
              <AnimButton
                label="2023 Portfolio"
                link="https://portfolio-phi-indol-46.vercel.app"
              />
            </li>
            <li className="flex justify-between items-end">
              <div className="flex gap-0 text-lg flex-col tablet:flex-row tablet:text-2xl tablet:gap-6">
                <AnimButton label="Velog" link="https://velog.io/@outoro" />
                <span className="opacity-30 hidden tablet:block">-</span>
                <AnimButton label="GitHub" link="https://github.com/outoro" />
                <span className="opacity-30 hidden tablet:block">-</span>
                <AnimButton
                  label="TIL(Today I Learned)"
                  link="https://www.notion.so/Study-c1604f9b752e4182bb20a20c16fd0b67?pvs=4"
                />
              </div>
            </li>
          </motion.ul>
        )}
      </motion.div>
    </header>
  );
}
