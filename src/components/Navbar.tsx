import { useState } from "react";
import { House, FolderKanban, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar=() =>{

  const { theme, toggleTheme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-fit fixed inset-x-0 mx-auto z-50 bg-white/60 backdrop-blur-md dark:bg-zinc-900 shadow-box dark:shadow-none rounded-xl mt-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center py-2 px-5 transition-all duration-300 ${
          isHovered ? "gap-5" : "gap-3"
        }`}
      >
        <a
          href="#"
          aria-label="Home"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          <House size={21} />
        </a>
        <a
          href="#"
          aria-label="Projects"
          rel="noopener noreferrer"
          className="p-2 rounded transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          <FolderKanban size={21} />
        </a>
        <a
          href="#"
          aria-label="Contact"
          rel="noopener noreferrer"
          className="p-2 rounded transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          <Mail size={21} />
        </a>
        <div className="shrink-0 w-px bg-black dark:bg-white h-4 hidden sm:block"></div>
        <button
          type="button"
          onClick={toggleTheme}
          className="p-2 rounded cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          {theme === "dark" ? <Sun size={21} /> : <Moon size={21} />}
        </button>
      </div>
    </div>
  );
}
export default Navbar