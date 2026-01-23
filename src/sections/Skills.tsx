import { skillCardsConifg } from "../data/SkillCards.data";
import SkillCards from "../components/cards/SkillCard";

const Skills = () => {
  return (
    <section className="border-t border-t-black/20 dark:border-t-white/15 py-16 sm:py-20 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-0">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold text-2xl sm:text-3xl">What I Do</h1>
          <p className="font-normal text-base sm:text-lg text-gray-600 dark:text-gray-400">
            I build responsive websites and web applications that work
            seamlessly across all devices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
          {skillCardsConifg.map((card) => (
            <SkillCards key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
