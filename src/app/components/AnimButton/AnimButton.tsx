import Link from "next/link";
import "./AnimButton.css";

export default function AnimButton({ label, link }) {
  return (
    <div className="anim-button">
      <Link href={link} target="_blank">
        <PerspectiveText label={label} />
      </Link>
    </div>
  );
}

function PerspectiveText({ label }) {
  return (
    <div className="pp-text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
