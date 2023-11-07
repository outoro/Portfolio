"use client";

import TextDisperse from "./components/TextDisperse";
import { useRef } from "react";

export default function Home() {
  const background = useRef(null);

  const setBackground = (value) => {
    background.current.style.opacity = value ? 0.8 : 0;
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[60vw]">
        <div className="line-flex font-black">
          <p className="m-0">jeongeun</p>
          <p className="m-0">lee</p>
        </div>
        <div className="line-flex">
          <p className="m-0">2023 portfolio</p>
          <p className="m-0">&</p>
        </div>
        <TextDisperse setBackground={setBackground}>
          <p className="m-0">+ web frontend</p>
        </TextDisperse>
        <div className="flex items-center justify-between">
          <TextDisperse setBackground={setBackground}>
            <p className="m-0">⇝ about</p>
          </TextDisperse>
          <TextDisperse setBackground={setBackground}>
            <p className="m-0">⇝ contact</p>
          </TextDisperse>
        </div>
      </div>
      <div
        ref={background}
        className="bg-black opacity-0 absolute w-full h-full pointer-events-none transition-opacity"
      ></div>
    </div>
  );
}
