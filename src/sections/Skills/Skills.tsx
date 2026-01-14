import { skillCardsConifg } from "./SkillCards.data";
import  SkillCards  from "./SkillCards";

const Skills = () => {
  return (
    <section className="max-w-6xl w-full mx-auto">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold text-3xl ">Crafting Modern Web Interfaces</h1>
        <p className="font-normal text-lg text-gray-400">
          I focus on building modern, responsive front-end interfaces and
          developing reliable web applications using current technologies.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 pt-10">
        {skillCardsConifg.map((card) => (
          <SkillCards key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
