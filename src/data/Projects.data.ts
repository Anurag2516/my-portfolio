import blogVerseHomeImg from "../assets/blogVerseHome.webp";
import deployForgeImg from "../assets/deployForge.webp";
import devDashboardImg from "../assets/devDashboard.webp";

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
    id: "devDashboard",
    featured: true,
    image: devDashboardImg,
    title: "DevDashboard",
    description: "A modern, responsive multi-API dashboard.",
    languages: ["React", "TailwindCSS", "Javascript", "SwiperJS"],
    liveLink: "https://devdashboard-project.netlify.app/",
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
