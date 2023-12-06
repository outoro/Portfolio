"use client";

import Link from "next/link";
import Image from "next/image";
import NavButton from "./NavButton/NavButton";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <header className="flex justify-between max-w-[1200px] mx-auto my-0 px-[20px] py-[50px] desktop:px-0">
      <h1 className="font-semibold text-lg leading-6">
        <Link href="/">
          <Image src="/logo.png" width="37" height="37" alt="image" />
        </Link>
      </h1>
      {/* <div className="flex gap-3">
        <NavButton label="Home" link="/" />
        <NavButton label="About Me" link="/about" />
      </div> */}
      <ThemeButton />
    </header>
  );
}
