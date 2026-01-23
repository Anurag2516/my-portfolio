import type { ProjectConfig } from '../../data/Projects.data'
import { SquareArrowOutUpRight } from 'lucide-react'

interface ProjectsProps {
  project: ProjectConfig
}

const ProjectListCard = ({project}: ProjectsProps) => {
  return (
    <div className="relative min-h-[350px] sm:min-h-112.5 rounded-xl w-full h-full shadow-md dark:shadow-none border border-none dark:border-white/10  overflow-hidden group cursor-pointer">
      <div
        style={{
          backgroundImage: `url(${project.image})`,
        }}
        className="absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-300 ease-out group-hover:scale-105"
      ></div>

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-colors duration-300 ease-out"></div>

      <div className="absolute inset-x-0 bottom-0 text-white p-4 lg:p-6 flex flex-col gap-2 transform translate-y-0 group-hover:translate-y-0 transition-all duration-300 ease-out">
        <a
          className="flex items-center gap-1.5 hover:text-blue-400 hover:underline transition-colors duration-200 ease-out w-fit"
          href={project.liveLink}
          aria-label={`Visit ${project.title} live site`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="text-lg lg:text-xl font-bold line-clamp-1">
            {project.title}
          </h3>
          <SquareArrowOutUpRight size={18} className="shrink-0" />
        </a>

        <p className="text-sm line-clamp-2 opacity-90">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.languages.slice(0, 4).map((lang, index) => (
            <span
              key={index}
              className="bg-purple-500/80 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-xs font-medium"
            >
              {lang}
            </span>
          ))}
          {project.languages.length > 4 && (
            <span className="bg-purple-500/80 backdrop-blur-sm rounded-full px-2.5 py-0.5 text-xs font-medium">
              +{project.languages.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectListCard;
