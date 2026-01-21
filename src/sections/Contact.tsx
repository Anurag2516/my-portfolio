import Form from "../components/Form";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <section className="w-full mt-34 sm:mt-40 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-0">
      <div className="relative max-w-6xl mx-auto border border-white/20 rounded-xl overflow-hidden px-6 sm:px-10 py-14">

        <div className="absolute -top-35 -left-35 h-125 w-125 rounded-full bg-purple-500/15 blur-[120px]" />
        <div className="absolute top-30 left-40 h-125 w-125 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.6))]" />

        <div className="relative flex flex-col gap-8 justify-center items-center lg:flex-row lg:gap-0 lg:justify-between">
          <div className="max-w-125 w-full flex flex-col items-center text-center gap-3 lg:items-start lg:text-start">
            <h1 className="text-3xl sm:text-4xl font-bold text-purple-400">
              Let's work together.
            </h1>
            <p className="text-base sm:text-lg font-normal">
              Have a project in mind? I'm open to freelance opportunities and
              collaborations.
            </p>
            <Socials
              size={22}
              colors="[&_svg]:text-white [&_svg]:hover:text-white/50"
            />
          </div>

          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
