import { projectsData } from "../constants/data";
import Animated from "./Animated";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <Animated>
      <div className=".container">
        <section id="projects" className="flex flex-col my-16 md:my-24 max-w-[1280px] mx-auto">
          <h3>Projects</h3>
          <span className="mx-auto mt-4">Some of the noteworthy projects I have built:</span>
          <div className="flex flex-col gap-6 mx-4 mt-12 md:gap-12 ">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </section>
      </div>
    </Animated>
  );
}
