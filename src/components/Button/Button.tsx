import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

export default function Button({ text, link }: ButtonProps) {
  return (
    <div className="relative bg-[#f5f4ff] text-[#4479e2] rounded-md font-medium border-solid border-[1px] border-[#f5f4ff] cursor-pointer hover:border-[#4479e2] dark:bg-[#28233a] dark:border-[#28233a] hover:dark:border-[#4479e2] duration-300">
      <Link href={link} target="_blank" className="block px-[14px] py-[10px]">
        {text}
      </Link>
    </div>
  );
}
