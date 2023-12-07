import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./ThemeButton.css";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="theme-button"
    >
      <PerspectiveText
        label={theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      />
    </button>
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
