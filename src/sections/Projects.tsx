import { FolderKanban } from "lucide-react";
import { projectsData, type ProjectConfig } from "../data/Projects.data";
import ProjectsCard from "../components/cards/ProjectCard";

const Projects = () => {
  const featuredProjects: ProjectConfig[] = projectsData.filter(
    (project) => project.featured === true,
  );

  return (
    <section className="my-20 sm:my-26 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-0">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl">Featured Projects</h1>
          <p className="font-normal text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Selected projects showcasing my approach to front-end development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-none md:grid-rows-2 gap-4">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className={
                project.bentoVertical === true
                  ? "md:row-span-2"
                  : "md:row-span-1"
              }
            >
              <ProjectsCard project={project} />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="flex items-center gap-2 px-4 py-3 bg-white hover:bg-gray-200 dark:bg-btn-bg-dark dark:hover:bg-btn-accent-dark dark:border dark:border-btn-accent-dark shadow-box dark:shadow-none hover:shadow-box-hover cursor-pointer hover:scale-105 transition-all duration-200 ease-out rounded-lg"
          >
            <FolderKanban size={20} />
            <span className="text-sm sm:text-base font-bold">
              View All Projects
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
