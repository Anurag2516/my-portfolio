import { useState } from "react";
import { House, FolderKanban, Mail, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="max-w-fit fixed bottom-4 sm:top-4 sm:bottom-auto inset-x-0 mx-auto z-50 bg-white/60 backdrop-blur-md dark:bg-zinc-900 shadow-box dark:shadow-none rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center py-2 px-5 transition-all duration-300 ${
          isHovered ? "gap-5" : "gap-3"
        }`}
      >
        <Link
          to="/"
          aria-label="Home"
          className="p-2 rounded transition-all duration-200 hover:scale-110 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          <House size={21} />
        </Link>
        <Link
          to="/projects"
          aria-label="Projects"
          className="p-2 rounded transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          <FolderKanban size={21} />
        </Link>
        <a
          href="mailto:anuragyadav2516@gmail.com"
          aria-label="Send email"
          title="Send email"
          className="p-2 rounded transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/10"
        >
          <Mail size={21} />
        </a>
        <div className="shrink-0 w-px bg-black dark:bg-white h-4"></div>
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
};
export default Navbar;
