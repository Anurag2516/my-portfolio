import blogVerseHomeImg from "../../assets/blogVerseHome.png";
import deployForgeImg from "../../assets/deployForge.png";
import devDashboardImg from "../../assets/devDashboard.png";

export interface ProjectConfig {
  id: string;
  featured: boolean;
  image: string;
  title: string;
  description: string;
  languages: string[];
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
    bentoVertical: true,
  },
  {
    id: "devDashboard",
    featured: true,
    image: devDashboardImg,
    title: "DevDashboard",
    description: "A modern, responsive multi-API dashboard.",
    languages: ["React", "TailwindCSS", "Javascript", "SwiperJS"],
  },
  {
    id: "blogVerseBlog",
    featured: true,
    image: blogVerseHomeImg,
    title: "BlogVerse",
    description: "A simple and clean blog application.",
    languages: ["React", "TailwindCSS", "Javascript", "Lottie"],
  },
];
