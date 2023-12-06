import { useState } from "react";
import "./NavButton.css";
import Link from "next/link";

interface NavButtonProps {
  label: string;
  link: string;
}

export default function NavButton({ label, link }: NavButtonProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="button">
      <Link href={link}>
        <PerspectiveText label={label} />
      </Link>
    </div>
  );
}

function PerspectiveText({ label }: any) {
  return (
    <div className="perspective-text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
