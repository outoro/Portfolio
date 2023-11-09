"use client";

import Link from "next/link";
import SideMenu from "./SideMenu/SideMenu";

export default function Header() {
  return (
    <header className="p-[50px] w-full">
      <h1>
        <Link href="/">
          Jeongeun <br /> Lee •
        </Link>
      </h1>
      <SideMenu />
    </header>
  );
}
