"use client";

import { useParams } from "next/navigation";
import { projects } from "../data";
import Image from "next/image";
import YouTube from "react-youtube";
import Link from "next/link";

export default function Project() {
  const params = useParams();
  const matchedItem = projects.find((project) => project.id === +params.id);
  const { name, techStack, videoId, serviceLink, githubLink, readmeLink } =
    matchedItem;

  return (
    matchedItem && (
      <div className="">
        <div className="margincenter w-[1000px]">
          <p className="text-center pt-[50px] pb-[60px]">
            <p className="text-[56px] font-bold">{name}</p>
            <div className="flex items-center justify-center gap-3 text-[#AAAAAA] py-5 uppercase">
              <Link href={serviceLink} target="_blank">
                project
              </Link>
              <span className="w-[1px] h-[10px] bg-[#AAAAAA]" />
              <span>January 22, 2013</span>
              <span className="w-[1px] h-[10px] bg-[#AAAAAA]" />
              <Link href={githubLink} target="_blank">
                github
              </Link>
            </div>
          </p>
          <div className="pb-20">
            <p className="text-[32px] font-bold pt-8 pb-5">시연 영상</p>
            <YouTube
              videoId={videoId}
              opts={{
                width: "1000",
                height: "561",
                playerVars: {
                  autoplay: 1,
                  rel: 0,
                  modestbranding: 1,
                },
              }}
              onEnd={(e) => {
                e.target.stopVideo(0);
              }}
            />
          </div>
          <div className="pb-20">
            <p className="text-[32px] font-bold pt-8 pb-5">프로젝트 소개</p>
            <div className="bg-[#f5f5f5] p-14 text-lg leading-7 rounded overflow-hidden">
              학생 인권 보호인가? 교권 보호인가? 최근 한국 사회를 뒤흔든 이
              문제에 정말 진지하게 접근하고자 한다면 을 봐야 할 것이다. 어느
              한쪽의 주장이 아닌 사건의 실체를 보여주기 위해 고레에다 감독은
              사려 깊은 태도를 보여준다. 누군가를 매도하는 손쉬운 해결책을
              피하는 그의 영화는 개인과 가족과 사회의 여러 측면을 두루 조망한다.
              초등학교 5학년 미나토가 담임 선생님에게 입에 담지 못할 말을 듣고
              구타도 당했다는 얘기를 듣고 화가 난 어머니가 항의를 하러 간다.
              학교는 정확한 진상을 파악하는 대신 형식적인 사과만 반복한다.
              하지만 선생님의 시점에서 전개되는 다음 장에서 미나토의 문제는
              선생님의 폭력에서 비롯된 것이 아니다. 어디서 무엇이 잘못된 것일까?
              그 답을 얻자면 우리는 미나토와 그의 친구 호시카와의 이야기를
              들어봐야 한다. 에서 고레에다 감독은 나처럼 깊이 들여다봐야 알 수
              있는 사회 문제를 소년의 이야기로 풀어낸다. 누구나 류이치
              사카모토의 음악이 흘러나오는 엔딩에 이르면 가슴이 먹먹할 영화다.
              (남동철)
            </div>
          </div>

          <div className="pb-20">
            <p className="text-[32px] font-bold pt-8 pb-5">README</p>
            <Link href={readmeLink} target="_blank">
              {readmeLink}
            </Link>
          </div>
          <div className="pb-20">
            <p className="text-[32px] font-bold pt-8 pb-5">기술 스택</p>
            <div className="flex gap-2">
              {techStack.map((stack, i) => (
                <span
                  key={i}
                  className="px-[16px] py-[10px] rounded-full border"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>
          <div className="pb-20">
            <p className="text-[32px] font-bold pt-8 pb-5">배포 링크</p>
            <Link href={serviceLink} target="_blank">
              {serviceLink}
            </Link>
          </div>
        </div>
      </div>
    )
  );
}
