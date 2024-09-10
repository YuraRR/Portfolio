import { projectsData } from "../constants/data";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className=".container">
      <section className="flex flex-col my-24">
        <h3>Projects</h3>
        <span className="mx-auto mt-4">Some of the noteworthy projects I have built:</span>
        <div className="flex flex-col mt-12 gap-12 mx-4 ">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
