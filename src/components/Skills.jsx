import { skillsIcons } from "../constants/data";
import Animated from "./Animated";

export default function Skills() {
  return (
    <div className="container">
      <Animated>
        <section className="flex flex-col my-24">
          <h3>Skills</h3>
          <span className="mx-auto mt-4">The skills, tools and technologies I am really good at:</span>
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 mt-12">
            {skillsIcons.map((icon) => (
              <Animated key={icon} delay={Math.random() * 0.5} duration={0.7}>
                <figure className="flex flex-col center w-[110px] mx-auto transition-transform hover:scale-110">
                  <img src={`icons/stackIcons/${icon}.svg`} alt={icon} className="h-[64px] w-16" />
                  <span className="text-gray-600 text-lg mt-2">{icon}</span>
                </figure>
              </Animated>
            ))}
          </div>
        </section>
      </Animated>
    </div>
  );
}
