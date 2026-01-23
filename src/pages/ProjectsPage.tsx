import { projectsData } from "../data/Projects.data";
import ProjectPageCard from "../components/cards/ProjectListCard";

const ProjectsPage = () => {
  return (
    <section className="mt-20 sm:my-36 px-5 sm:px-10 md:px-14 lg:px-20 xl:px-0">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl sm:text-3xl">Projects</h1>
          <p className="font-normal text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Projects showcasing my approach to front-end development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 lg:gap-x-4 lg:gap-y-6">
          {projectsData.map((project) => (
            <ProjectPageCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
