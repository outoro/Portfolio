"use client";

import Link from "next/link";
import SideMenu from "./SideMenu/SideMenu";

export default function Header() {
  return (
    <header className="flex justify-between p-[50px] w-full">
      <h1 className="font-semibold text-lg leading-6">
        <Link href="/">
          Jeongeun <br /> Lee •
        </Link>
      </h1>
      <SideMenu />
    </header>
  );
}
