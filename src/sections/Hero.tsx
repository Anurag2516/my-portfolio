import Socials from "../components/Socials";

const Hero = () => {
  return (
    <section className="max-w-3xl w-full mx-auto pt-32 px-8 lg:px-0 flex flex-col gap-8 justify-center items-center bg-radial-purple text-white">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-5 w-full">
        <img src="pic3.jpeg" alt="ok" className="w-36 md:w-52 rounded-full" />
        <div className="flex flex-col gap-2 text-4xl md:text-5xl font-bold tracking-wide uppercase">
          <h1 className="">
            Hey, I am{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Anurag.
            </span>{" "}
          </h1>{" "}
          <h1>
            A{" "}
            <span className="bg-primary bg-clip-text text-transparent">
              Web Developer.
            </span>
          </h1>
        </div>
      </div>
      <div className="text-justify text-xl w-full tracking-normal">
        <p>
          A frontend developer passionate about crafting seamless user
          experiences.
        </p>{" "}
        <p>
          I bring ideas to life with clean, accessible code and thoughtful,
          eye-catching design.
        </p>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="px-4 py-2 bg-slate-800 hover:bg-slate-600 cursor-pointer transition-all ease-in-out text-white text-lg font-semibold rounded-lg"
        >
          View Project
        </button>
        <Socials />
      </div>
    </section>
  );
};

export default Hero;
