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
          <div className="flex flex-col mt-12 gap-6 md:gap-12 mx-4 ">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} data={project} />
            ))}
          </div>
        </section>
      </div>
    </Animated>
  );
}
