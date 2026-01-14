import { type CardsConfig } from "./SkillCards.data";

interface CardsProps {
  card: CardsConfig;
}

const SkillCards = ({ card }: CardsProps) => {
  return (
    <div
      className="rounded-xl border border-white/10 bg-linear-to-br from-white/5 to-white/0 backdrop-blur-xl px-4 py-8"
    >
      <div className="flex flex-col gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="text-primary">{card.icon}</div>
          <h1 className="text-2xl font-bold">{card.title}</h1>
        </div>
        <p className="text-base text-gray-400 font-medium">{card.description}</p>
      </div>
      {card.blocks.map((block, index) => {
        if (block.type === "list") {
          return (
            <ul
              key={index}
              className="list-disc space-y-2 pl-6 text-base text-white font-semibold"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === "labeled-list") {
          return (
            <ul key={index} className="mt-3 pl-6">
              <li className="list-disc text-lg font-normal text- font-semibold">
                {block.label}:
                <p className="text-base text-gray-400 font-semibold">
                  {block.items.join(", ")}
                </p>
              </li>
            </ul>
          );
        }

        return null;
      })}
    </div>
  );
};

export default SkillCards;
