"use client";

import Link from "next/link";
import SideMenu from "./SideMenu/SideMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between w-[1200px] mx-auto my-0 py-[50px]">
      <h1 className="font-semibold text-lg leading-6">
        <Link href="/">
          <Image src="/logo.png" width="37" height="37" alt="image" />
        </Link>
      </h1>
      <SideMenu />
    </header>
  );
}
