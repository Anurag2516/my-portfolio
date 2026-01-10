import { Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="max-w-250 w-full m-auto flex justify-between items-center py-4 text-white">
      <div className="font-bold text-2xl">Anurag.</div>
      <div className="font-semibold text-lg flex gap-6">
        <a href="">Home</a>
        <a href="">Projects</a>
      </div>
      <div className="font-semibold text-lg">
        <Sun />
      </div>
    </div>
  );
};

export default Navbar;
