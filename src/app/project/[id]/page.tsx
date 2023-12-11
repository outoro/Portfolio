"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import YouTube from "react-youtube";
import Button from "@/components/Button/Button";
import { projects } from "@/utils/project";

export default function Project() {
  const params = useParams();
  const matchedItem = projects.find((project) => project.id === +params.id);

  if (!matchedItem) {
    return <p>프로젝트를 찾을 수 없습니다.</p>;
  }

  const {
    name,
    detailInfo,
    youtube,
    service,
    readme,
    github,
    videoId,
    techStack,
  } = matchedItem;

  return (
    <div className="mx-auto my-0 pt-[150px] pb-[50px] max-w-[62.5rem] px-[20px] desktop:px-0">
      <div className="pt-[50px] pb-[30px]">
        <p className="text-[56px] font-bold">{name}</p>
        <p className="text-[#4f576c] text-base leading-7 pt-10 dark:text-[#98a1b6] whitespace-pre-line">
          {detailInfo}
        </p>
        <div className="flex items-center flex-wrap flex-row gap-3 pt-5">
          {youtube && <Button text="Demo Video" link={youtube} />}
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
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
      </div>
      <div className="pb-20">
        <p className="text-[32px] font-bold pt-8 pb-5">기술 스택</p>
        <div className="flex gap-2 flex-wrap flex-row">
          {techStack.map((stack, i) => (
            <span
              key={i}
              className="px-[16px] py-[10px] rounded-full border dark:border-[#1a2230]"
            >
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
