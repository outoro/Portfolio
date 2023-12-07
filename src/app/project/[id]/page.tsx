"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import YouTube from "react-youtube";
import Button from "@/app/components/Button";
import { projects } from "@/app/utils/project";

export default function Project() {
  const params = useParams();
  const matchedItem = projects.find((project) => project.id === +params.id);

  if (!matchedItem) {
    return <p>프로젝트를 찾을 수 없습니다</p>;
  }

  const { name, service, readme, github, videoId, techStack } = matchedItem;

  return (
    <div className="margincenter pt-[150px] pb-[50px] max-w-[62.5rem] px-[20px] desktop:px-0">
      <div className="pt-[50px] pb-[30px]">
        <p className="text-[56px] font-bold">{name}</p>
        <p className="text-[#4f576c] text-base pt-10 dark:text-[#98a1b6]">
          Remonth는 다시를 뜻하는 접두사 Re-를 month와 결합하여 만든 단어입니다.{" "}
          <br />
          그냥 흘러버릴 일들도 기록하고 생각해보면 그 또한 나를 행복하게
          만들어주는 소중한 추억 이었다는 걸 느끼게 됩니다. 보통의 순간들을
          기록하고 공유하며
        </p>
        <div className="flex items-center flex-wrap flex-row gap-3 pt-5">
          <Button text="Demo Video" link={service} />
          <Button text="Service Link" link={service} />
          <Button text="README" link={readme} />
          <Button text="GitHub" link={github} />
        </div>
      </div>
      <div className="pb-20">
        <div className="w-full overflow-hidden relative h-[521px]">
          {videoId ? (
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                height: "521",
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
            />
          ) : (
            <Image
              src={"/project" + +params.id + ".jpg"}
              alt="project-image"
              layout="fill"
              objectFit="cover"
            />
          )}
        </div>
      </div>
      <div className="pb-20">
        <p className="text-[32px] font-bold pt-8 pb-5">기술 스택</p>
        <div className="flex gap-2 flex-wrap flex-row">
          {techStack.map((stack, i) => (
            <span key={i} className="px-[16px] py-[10px] rounded-full border">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
