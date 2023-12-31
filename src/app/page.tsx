"use client";

import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Preloader";
import { projects } from "../constants/project";
import Link from "next/link";
import Double from "../components/Double/Double";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div className="h-full pt-[130px]">
        <div className="max-w-[1200px] mx-auto my-0 mt-[150px] mb-[100px] px-[20px] desktop:px-0">
          <p className="text-3xl leading-snug font-medium pb-8 desktop:text-5xl desktop:leading-[1.4]">
            <span>Welcome to my portfolio </span>
            <Image
              src="/logo.png"
              width="30"
              height="30"
              alt=""
              style={{ objectFit: "cover" }}
              className="inline-block"
            />{" "}
            <span className="opacity-50">
              {" "}
              I&apos;m Jeongeun and here are some of my featured web projects.
            </span>
          </p>
          <div className="flex items-center gap-3">
            <Button text="GitHub" link="https://github.com/outoro" />
            <Button
              text="TIL"
              link="https://sand-newt-068.notion.site/TIL-Today-I-Learned-59d6cb1f145a4c23b17940d8cb55de31?pvs=4"
            />
            <Button
              text="About Me"
              link="https://sand-newt-068.notion.site/Jeongeun-Lee-5904b005d0fc47c2964209ea04448d33?pvs=4"
            />
          </div>
        </div>
        <motion.div className="flex flex-col pb-10 desktop:hidden">
          <motion.div className="w-full">
            <Link href={`/project/${projects[0].id}`}>
              <div className="w-full h-[643px] relative overflow-hidden">
                <Image
                  src="/project1.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </motion.div>
          <motion.div className="w-full">
            <Link href={`/project/${projects[1].id}`}>
              <div className="w-full h-[643px] relative overflow-hidden">
                <Image
                  src="/project2.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </motion.div>
        </motion.div>
        <Double />
      </div>
    </>
  );
}
