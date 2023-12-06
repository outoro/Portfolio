import Button from "./components/Button/Button";
import Double from "./components/Double";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "remonth(다시 한 달)",
    description: "New web design for the blockchain investment fund Maven 11.",
    year: "January, 2013",
    techStack: [
      "React",
      "Redux Toolkit",
      "Firestore Database",
      "Firebase Auth",
      "Sass",
      "Framer Motion",
      "Vercel",
    ],
    videoId: "G5Gz6EIQZPI",
    serviceLink: "https://remonth.vercel.app/",
    githubLink: "https://github.com/outoro/remonth",
    readmeLink:
      "https://www.notion.so/Remonth-669f8169764f4d66b9eee269913d4d33?pvs=4",
  },
  {
    id: 2,
    name: "2023 Portfolio",
    description: "New web design for the blockchain investment fund Maven 11.",
    year: "January, 2013",
    techStack: ["Tailwind CSS", "Vercel"],
    serviceLink: "https://www.naver.com/",
    githubLink: "https://github.com/outoro/portfolio",
    readmeLink: "https://github.com/outoro/remonth",
  },
];

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
      <Double projects={[projects[0], projects[1]]} reversed={false} />
    </div>
  );
}
