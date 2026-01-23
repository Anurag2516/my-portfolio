import { Code2, Layers } from "lucide-react";
import type { ReactNode } from "react";

type CardBlocks =
  | { type: "list"; items: string[] }
  | { type: "labeled-list"; label: string; items: string[] };

export interface CardsConfig {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  blocks: CardBlocks[];
}

export const skillCardsConifg: CardsConfig[] = [
  {
    id: "Frontend Development",
    icon: <Code2 size={34} />,
    title: "Frontend Development",
    description:
      "I can help you build responsive, user-friendly web applications.",
    blocks: [
      {
        type: "list",
        items: [
          "Responsive Websites",
          "React & TypeScript Applications",
          "Maintainable UI Systems",
          "Component-Driven Architecture",
          "API Integration",
        ],
      },
    ],
  },
  {
    id: "Tech Stack",
    icon: <Layers size={34} />,
    title: "Tech Stack",
    description:
      "I use these technologies to build fast, responsive applications.",
    blocks: [
      {
        type: "labeled-list",
        label: "Frontend",
        items: [
          "ReactJS",
          "TypeScript",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
        ],
      },
      {
        type: "labeled-list",
        label: "Backend",
        items: ["Node.js", "ExpressJS"],
      },
      {
        type: "labeled-list",
        label: "Tools",
        items: ["Git", "Github", "VS Code"],
      },
    ],
  },
];
