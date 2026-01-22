import Socials from "../components/Socials";
import heroPic from "../assets/heroPic.jpeg";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen flex justify-center items-center mt-12 sm:mt-0 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-0 overflow-hidden">
      <div className="flex flex-col-reverse md:flex-row justify-center items-start gap-6 md:gap-16 w-full">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-2">
            <h1 className="dark:text-white/90 text-4xl sm:text-5xl font-extrabold tracking-tight uppercase">
              Anurag Yadav
            </h1>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 items-start sm:items-center text-gray-700 dark:text-gray-400">
              <h2 className="text-lg">Frontend Developer</h2>
              <div className="shrink-0 w-px bg-black dark:bg-white h-4 hidden sm:block"></div>
              <div className="flex items-center gap-1 justify-center">
                <MapPin size={16} />
                <h2 className="text-lg">Noida, India</h2>
              </div>
            </div>
          </div>
          <p className="md:max-w-112.5 text-left text-lg/7  dark:text-white/95 w-full tracking-wide line">
            I build fast and modern web applications with{" "}
            <span className="font-bold text-[19.5px]">React</span> and{" "}
            <span className="font-bold text-[19.5px]">TypeScript</span>
            .
            <br />
            Focused on clean code and great user experience.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              className="px-4 py-3 bg-white hover:bg-gray-200 dark:bg-btn-bg-dark dark:hover:bg-btn-accent-dark dark:border dark:border-btn-accent-dark shadow-box dark:shadow-none hover:shadow-box-hover cursor-pointer hover:scale-105 transition-all duration-300 ease-out text-base font-semibold rounded-lg"
            >
              View Projects
            </button>
            <Socials
              size={23}
              colors="[&_svg]:text-black/85 [&_svg]:hover:text-black dark:[&_svg]:text-white/90 dark:[&_svg]:hover:text-white/60"
            />
          </div>
        </div>
        <img
          src={heroPic}
          alt="ok"
          className="w-32 md:w-45 h-32 md:h-45 object-cover rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
