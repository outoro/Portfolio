import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      className="flex items-center justify-center w-9 h-9 bg-[#ededed] rounded-full dark:bg-[#1a2230] border-solid border-[#ededed] dark:border-[#1a2230] duration-300 border-[1px]  hover:shadow-themeButton hover: hover:border-[#4479e2]"
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
