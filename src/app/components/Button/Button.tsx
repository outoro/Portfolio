import Link from "next/link";

export default function Button({ text, link }) {
  return (
    <div className="relative bg-[#f5f4ff] text-[#4479e2]  rounded-md font-medium border-solid border-[1px] border-[#f5f4ff] cursor-pointer hover:border-[#4479e2]">
      <Link href={link} target="_blank" className="block px-[14px] py-[10px]">
        {text}
      </Link>
    </div>
  );
}
