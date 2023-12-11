"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "../NavButton/NavButton";
import { useEffect, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton";
import SideBar from "../SideBar/SideBar";
import { motion } from "framer-motion";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let scrollTop = 0;
    window.addEventListener("scroll", function () {
      scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-10 bg-white dark:bg-[#121212] border-b-[1px] border-solid duration-300" +
        (isScrolled
          ? " border-[#e8e8e8] dark:border-[#29282e]"
          : " border-white dark:border-[#121212]")
      }
    >
      <motion.div
        className={
          "relative flex z-[999] justify-between items-center max-w-[1200px] mx-auto my-0 px-[20px] duration-300 desktop:px-0" +
          (isScrolled ? " py-[20px]" : " py-[50px]")
        }
      >
        <h1 className="font-semibold text-lg leading-6">
          <Link href="/">
            <Image src="/logo.png" width="37" height="37" alt="image" />
          </Link>
        </h1>
        <div className="flex gap-3">
          <ThemeButton />
          <NavButton isActive={isActive} setIsActive={setIsActive} />
        </div>
      </motion.div>
      <SideBar isActive={isActive} />
    </header>
  );
}
