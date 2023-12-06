"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { projects } from "../utils/project";

export default function Double() {
  const firstImage = useRef<HTMLDivElement>(null);
  const secondImage = useRef<HTMLDivElement>(null);
  let requestAnimationFrameId: any = null;

  let xPercent = 0;
  let currentXPercent = 0;

  const speed = 0.15;

  const manageMouseMove = (e: any) => {
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

    if (firstImage.current) {
      firstImage.current.style.width = `${firstImagePercent}%`;
    }
    if (secondImage.current) {
      secondImage.current.style.width = `${secondImagePercent}%`;
    }

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
          <div className="pb-[66.66%] relative">
            <Image
              src="/project1.jpg"
              alt="image"
              fill={true}
              className="object-cover"
            />
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
          <div className="pb-[66%] relative ">
            <Image
              src="/project2.jpg"
              alt="image"
              fill={true}
              className="object-cover"
            />
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
