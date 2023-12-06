import Button from "./components/Button";
import Double from "./components/Double";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <div className="w-[1200px] mx-auto my-0 mt-[150px] mb-[100px]">
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
            text="TIL(Today I Learned)"
            link="https://github.com/outoro"
          />
          <Button text="About Me" link="https://github.com/outoro" />
        </div>
      </div>
      <Double />
    </div>
  );
}
