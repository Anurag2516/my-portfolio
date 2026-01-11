import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="max-w-187.5 w-full mx-auto pt-12 flex flex-col gap-8 justify-center items-center text-white">
      <div className="flex justify-center items-center gap-5 w-full">
        <img src="pic3.jpeg" alt="ok" className="w-36 md:w-52 rounded-full" />
        <div className="flex flex-col text-5xl gap-2">
          <h1 className="">Hey, I'm Anurag. </h1> <h1>I am a Web Developer.</h1>
        </div>
      </div>
      <div className=" text-xl w-full">
        A frontend developer passionate about crafting seamless user
        experiences. I bring ideas to life with clean, accessible code and
        thoughtful, eye-catching design.
      </div>
      <div className="flex items-center gap-4">
        <button type="button" className="p-2 bg-green-400 text-black text-lg font-semibold">
          View Project
        </button>
        <Socials />
      </div>
    </div>
  );
};

export default Hero;
