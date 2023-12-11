import "./PerspectiveText.css";

export default function PerspectiveText({ label }: { label: string }) {
  return (
    <div className="perspective-text">
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
