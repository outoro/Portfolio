export type projectType = {
  id: number;
  name: string;
  description: string;
  year: string;
  techStack: string[];
  videoId?: string;
  service: string;
  github: string;
  readme: string;
};

export const projects: projectType[] = [
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
    service: "https://remonth.vercel.app/",
    github: "https://github.com/outoro/remonth",
    readme:
      "https://www.notion.so/Remonth-669f8169764f4d66b9eee269913d4d33?pvs=4",
  },
  {
    id: 2,
    name: "2023 Portfolio",
    description: "New web design for the blockchain investment fund Maven 11.",
    year: "January, 2013",
    techStack: ["Tailwind CSS", "Vercel"],
    service: "https://www.naver.com/",
    github: "https://github.com/outoro/portfolio",
    readme: "https://github.com/outoro/remonth",
  },
];
