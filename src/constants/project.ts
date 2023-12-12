export type projectType = {
  id: number;
  name: string;
  description: string;
  detailInfo: string;
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
    detailInfo:
      "Remonth는 '다시'를 뜻하는 접두사 'Re-'를 'month'와 결합하여 만든 단어입니다. 좋은 영화, 사랑하는 사람과 함께한 순간, 맛있는 음식 등 일상의 소중한 순간을 기록하고 공유하며 추억을 간직할 할 수 있도록 하는 형태의 프로젝트입니다.",
    year: "2023",
    techStack: [
      "React.js",
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
      "https://www.notion.so/Remonth-9843e8b0c5c1493aba61b04e9b6e9c10?pvs=4",
  },
  {
    id: 2,
    name: "2023 Portfolio",
    description: "New web design for the blockchain investment fund Maven 11.",
    detailInfo:
      "진행했던 프로젝트들을 담은 포트폴리오 사이트입니다. Next.js를 사용하여 SEO 성능 향상을 고려하며 개발하였습니다.",
    year: "2023",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    service: "https://portfolio-phi-indol-46.vercel.app",
    github: "https://github.com/outoro/portfolio",
    readme:
      "https://www.notion.so/2023-Portfolio-60b1c9d0648f4b1bbd7ab46c81dba97d?pvs=4",
  },
];
