import Socials from "./Socials";

const Footer = () => {
  return (
    <div className="border-t border-t-white/15 mt-20 py-12 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-0">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col justify-start items-start gap-4 sm:flex-row sm:justify-between">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold">Anurag Yadav</h1>
            <Socials
              size={22}
              colors="[&_svg]:text-white/60 [&_svg]:hover:text-white"
            />
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <h2 className="text-white/70 text-base">
              Built with React, TypeScript and Tailwind CSS.
            </h2>
            <h2 className="text-xs sm:text-sm">
              © 2026 Anurag • All rights reserved
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
