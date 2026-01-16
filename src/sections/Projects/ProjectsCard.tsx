import type { ProjectConfig } from "./Projects.data";

interface ProjectsProps {
  project: ProjectConfig;
}

const ProjectsCard = ({ project }: ProjectsProps) => {
  return (
    <div className="relative min-h-64 sm:min-h-75 rounded-xl w-full h-full overflow-hidden group cursor-pointer">
      <div
        style={{ backgroundImage: `url(${project.image})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-out sm:group-hover:scale-105"
      ></div>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-transparent sm:from-black/50 sm:via-black/30 sm:group-hover:from-black/80 sm:group-hover:via-black/50 transition-colors duration-300 ease-out"></div>

      <div className="absolute bottom-0 left-0 w-full sm:-bottom-16 sm:group-hover:bottom-0 transition-all duration-300 ease-out flex flex-col gap-2 px-4 sm:px-6 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.description}</p>
        <div className="hidden sm:flex flex-wrap gap-2">
          {project.languages.map((lang, index) => (
            <div
              key={index}
              className="bg-purple-400 rounded-full px-2 py-1 text-xs"
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
