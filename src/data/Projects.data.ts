import blogVerseHomeImg from "../assets/blogVerseHome.webp";
import deployForgeImg from "../assets/deployForge.webp";
import invioImg from "../assets/invio.webp";

export interface ProjectConfig {
  id: string;
  featured: boolean;
  image: string;
  title: string;
  description: string;
  languages: string[];
  liveLink: string;
  bentoVertical?: boolean;
}

export const projectsData: ProjectConfig[] = [
  {
    id: "deployForge",
    featured: true,
    image: deployForgeImg,
    title: "DeployForge",
    description: "A fully responsive, production-grade SaaS landing page.",
    languages: ["React", "TailwindCSS", "Javascript", "Motion"],
    liveLink: "https://deployforge.netlify.app/",
    bentoVertical: true,
  },
  {
    id: "invio",
    featured: true,
    image: invioImg,
    title: "Invio",
    description:
      "Create, manage, and export invoices as PDF - with a live preview as you type.",
    languages: ["React", "TypeScript", "TailwindCSS", "Shadcn", "Zustand"],
    liveLink: "https://invio-eight.vercel.app/",
  },
  {
    id: "blogVerseBlog",
    featured: true,
    image: blogVerseHomeImg,
    title: "BlogVerse",
    description: "A simple and clean blog application.",
    languages: ["React", "TailwindCSS", "Javascript", "Lottie"],
    liveLink: "https://blog-verse-react.netlify.app/",
  },
];
