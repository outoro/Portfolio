export type projectType = {
  id: number;
  name: string;
  description: string;
  year: string;
  techStack: string[];
  videoId?: string;
  youtube?: string;
  service: string;
  github: string;
  readme: string;
};

export const projects: projectType[] = [
  {
    id: 1,
    name: "Remonth",
    description: "New web design for the blockchain investment fund Maven 11.",
    year: "November, 2023",
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
    youtube: "https://youtu.be/G5Gz6EIQZPI",
    service: "https://remonth.vercel.app/",
    github: "https://github.com/outoro/remonth",
    readme:
      "https://www.notion.so/Remonth-669f8169764f4d66b9eee269913d4d33?pvs=4",
  },
  {
    id: 2,
    name: "2023 Portfolio",
    description: "New web design for the blockchain investment fund Maven 11.",
    year: "December, 2023",
    techStack: ["Tailwind CSS", "Vercel"],
    service: "https://portfolio-phi-indol-46.vercel.app",
    github: "https://github.com/outoro/portfolio",
    readme:
      "https://www.notion.so/2023-Portfolio-60b1c9d0648f4b1bbd7ab46c81dba97d?pvs=4",
  },
];
