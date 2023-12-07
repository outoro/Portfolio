"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton/NavButton";
import { useState } from "react";
import { motion } from "framer-motion";
import ThemeButton from "./ThemeButton/ThemeButton";

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
    <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-black">
      <div className="relative flex z-[999] justify-between items-center max-w-[1200px] mx-auto my-0 py-5 px-[20px] desktop:px-0">
        <h1 className="font-semibold text-lg leading-6">
          <Link href="/">
            <Image src="/logo.png" width="37" height="37" alt="image" />
          </Link>
        </h1>
        <NavButton isActive={isActive} setIsActive={setIsActive} />
      </div>
      <motion.div
        variants={menu}
        initial="closed"
        animate={isActive ? "open" : "closed"}
        exit="closed"
        className="fixed top-0 left-0 w-screen text-[#0B1100] bg-[#c9fd74]"
      >
        {isActive && (
          <motion.ul
            variants={nav}
            initial="closed"
            animate={isActive ? "open" : "closed"}
            exit="closed"
            className="max-w-[1200px] mx-auto my-0 pt-[340px] flex flex-col gap-20 text-3xl font-normal text-[#002300] pb-64 px-[20px] tracking-widest tablet:text-6xl desktop:px-0 tablet:pt-[400px]"
          >
            <li className="flex gap-0 flex-col  tablet:flex-row tablet:gap-6">
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                Home
              </Link>
              <span className="opacity-50 hidden tablet:block">-</span>
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                About Me
              </Link>
              <span className="opacity-50 hidden tablet:block">-</span>
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                Overview
              </Link>
            </li>
            <li className="flex gap-0 flex-col tablet:flex-row tablet:gap-6">
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                Remonth
              </Link>
              <span className="opacity-50 hidden tablet:block">-</span>
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                2023 Portfolio
              </Link>
            </li>
            <li className="flex gap-0 text-lg flex-col tablet:flex-row tablet:text-2xl tablet:gap-6">
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                Velog
              </Link>
              <span className="opacity-50 hidden tablet:block">-</span>
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                GitHub
              </Link>
              <span className="opacity-50 hidden tablet:block">-</span>
              <Link
                href="/"
                className="opacity-50 hover:opacity-100 duration-300"
              >
                TIL(Today I Learned)
              </Link>
            </li>
            <li className="text-xl flex justify-end pr-6 mt-0 desktop:pr-0 desktop:mt-10">
              <ThemeButton setIsActive={setIsActive} />
            </li>
          </motion.ul>
        )}
      </motion.div>
    </header>
  );
}
