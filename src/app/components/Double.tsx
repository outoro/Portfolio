"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

export default function Double({ projects, reversed }) {
  const firstImage = useRef(null);
  const secondImage = useRef(null);
  let requestAnimationFrameId = null;

  let xPercent = reversed ? 100 : 0;
  let currentXPercent = reversed ? 100 : 0;

  const speed = 0.15;

  const manageMouseMove = (e) => {
    const { clientX } = e;
    xPercent = (clientX / window.innerWidth) * 100;

    if (!requestAnimationFrameId) {
      requestAnimationFrameId = window.requestAnimationFrame(animate);
    }
  };

  const animate = () => {
    const xPercentDelta = xPercent - currentXPercent;

    currentXPercent = currentXPercent + xPercentDelta * speed;

    const firstImagePercent = 66.66 - currentXPercent * 0.33;
    const secondImagePercent = 33.33 + currentXPercent * 0.33;

    firstImage.current.style.width = `${firstImagePercent}%`;
    secondImage.current.style.width = `${secondImagePercent}%`;

    if (Math.round(xPercent) == Math.round(currentXPercent)) {
      window.cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    } else {
      window.requestAnimationFrame(animate);
    }
  };

  return (
    <div
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className="flex mb-[10vh] h-[45vw]"
    >
      <div ref={firstImage} className="w-[66.66%] ">
        <Link href={`/project/${projects[0].id}`}>
          <div className="pb-[66.66%] relative bg-slate-400">
            {/* <Image
            src={projects[0].src}
            fill={true}
            alt={"image"}
            priority
            className="object-cover"
          /> */}
          </div>
          <div className="p-3 text-base">
            <h3 className="text-xl mb-2 font-normal">{projects[0].name}</h3>
            <p>{projects[0].description}</p>
            <p>{projects[0].year}</p>
          </div>
        </Link>
      </div>

      <div ref={secondImage} className="w-[33.33%] ">
        <Link href={`/project/${projects[1].id}`}>
          <div className="pb-[66%] relative bg-orange-300">
            {/* <Image
            src={projects[1].src}
            fill={true}
            alt={"image"}
            priority
            className="object-cover"
          /> */}
          </div>
          <div className="p-3 text-base">
            <h3 className="text-xl mb-2 font-normal">{projects[1].name}</h3>
            <p>{projects[1].description}</p>
            <p>{projects[1].year}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
