import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-between p-[50px]">
      <ul className="flex">
        <li>
          <Link href="https://github.com/outoro" target="_blank">
            GITHUB
          </Link>
        </li>
        <li>
          <Link href="https://github.com/outoro" target="_blank">
            VELOG
          </Link>
        </li>
        <li>
          <Link href="https://github.com/outoro" target="_blank">
            NOTION (Today I Learned)
          </Link>
        </li>
      </ul>
      <p>이정응이 만들었어요~</p>
    </footer>
  );
}
