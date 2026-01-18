import Form from "../components/Form";
import Socials from "../components/Socials";

const Contact = () => {
  return (
    <section className="relative max-w-6xl w-full mx-auto mt-16 sm:mt-20 mb-20 px-4 sm:px-14 py-14 border border-white/20 rounded-xl overflow-hidden">
      <div className="absolute -top-35 -left-35 h-125 w-125 rounded-full bg-purple-500/15 blur-[120px]" />
      <div className="absolute top-30 left-40 h-125 w-125 rounded-full bg-custom-red blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-100 w-100 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.6))]" />

      <div className="relative flex justify-between items-center">
        <div className="max-w-125 w-full flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-purple-400">
            Turning ideas into working products.
          </h1>
          <h1 className="text-4xl font-bold text-purple-400">
            {" "}
            Let’s build something real.
          </h1>
          <p className="text-lg font-normal">
            Have a project in mind or want to collaborate? Let’s connect.
          </p>
          <Socials />
        </div>

        <Form />
        
      </div>
    </section>
  );
}

export default Contact
