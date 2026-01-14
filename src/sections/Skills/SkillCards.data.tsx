import { Code2, Layers, Puzzle } from "lucide-react";
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
    icon: <Code2 size={38} />,
    title: "Frontend Development",
    description:
      "I build modern, responsive web interfaces focused on maintainable component structures.",
    blocks: [
      {
        type: "list",
        items: [
          "Responsive Web Interfaces",
          "React & TypeScript Applications",
          "Component-Based Development",
          "Responsive Web Design",
          "API Integration",
        ],
      },
    ],
  },
  {
    id: "Tech Stack",
    icon: <Layers size={38} />,
    title: "Tech Stack",
    description: "I use modern tools to build reliable front-end applications.",
    blocks: [
      {
        type: "labeled-list",
        label: "Frontend",
        items: [
          "React",
          "Tailwind CSS",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
        ],
      },
      {
        type: "labeled-list",
        label: "Backend",
        items: ["Node.js", "ExpressJS", "Currently learning and improving"],
      },
      {
        type: "labeled-list",
        label: "Other",
        items: ["Git", "Github"],
      },
    ],
  },
  {
    id: "Development Approach",
    icon: <Puzzle size={38} />,
    title: "Approach",
    description:
      "I turn designs and ideas into functional web applications using modern front-end tools.",
    blocks: [
      {
        type: "list",
        items: [
          "Converting designs into code",
          "Reusable and scalable components",
          "Modern & Clean UI",
          "Mobile-first, responsive layouts",
          "Real-world project organization",
        ],
      },
    ],
  },
];
