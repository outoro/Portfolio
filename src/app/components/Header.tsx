"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "home", url: "/" },
  { label: "about", url: "/about" },
  { label: "project", url: "/project" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-[50px]">
      <nav>
        <motion.ul>
          {links.map(({ label, url }, index) => {
            return (
              <li key={index}>
                <Link href={url}>{label}</Link>
              </li>
            );
          })}
        </motion.ul>
      </nav>
    </header>
  );
}
