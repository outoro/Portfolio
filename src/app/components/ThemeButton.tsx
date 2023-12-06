import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
