"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton/NavButton";
import ThemeButton from "./ThemeButton/ThemeButton";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-10 right-0 px-[20px] py-[20px] backdrop-blur-md bg-white/[.7] shadow-shadow desktop:px-0 dark:bg-black/[.7]">
      <div className="flex justify-between items-center max-w-[1200px] mx-auto my-0">
        <h1 className="font-semibold text-lg leading-6">
          <Link href="/">
            <Image src="/logo.png" width="37" height="37" alt="image" />
          </Link>
        </h1>
        <NavButton label="Menu" link="/" />
      </div>
    </header>
  );
}
