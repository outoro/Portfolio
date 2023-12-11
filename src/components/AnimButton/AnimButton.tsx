import Link from "next/link";
import "./AnimButton.css";
import PerspectiveText from "../PerspectiveText/PerspectiveText";

export default function AnimButton({
  label,
  link,
}: {
  label: string;
  link: string;
}) {
  return (
    <div className="anim-button">
      <Link href={link} target={link === "/" ? "_self" : "_blank"}>
        <PerspectiveText label={label} />
      </Link>
    </div>
  );
}
