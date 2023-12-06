"use client";

import { useEffect, useState } from "react";
import Button from "./components/Button";
import Double from "./components/Double";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import Preloader from "./components/Preloader/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="h-full">
        <div className="max-w-[1200px] px-[20px] mx-auto my-0 mt-[150px] mb-[100px] desktop:px-0">
          <p className="text-5xl leading-snug font-medium pb-8">
            <span>Welcome to my portfolio </span>
            <Image
              src="/logo.png"
              width="30"
              height="30"
              alt="image"
              className="inline-block"
            />{" "}
            <span className="opacity-50">
              {" "}
              I&apos;m Jeongeun and here I document my latest explorations.
            </span>
          </p>
          <div className="flex items-center gap-3">
            <Button text="GitHub" link="https://github.com/outoro" />
            <Button
              text="TIL"
              link="https://www.notion.so/Study-c1604f9b752e4182bb20a20c16fd0b67?pvs=4"
            />
            <Button
              text="About Me"
              link="https://www.notion.so/Jeongeun-Lee-5904b005d0fc47c2964209ea04448d33?pvs=4"
            />
          </div>
        </div>
        <Double />
      </div>
    </>
  );
}
