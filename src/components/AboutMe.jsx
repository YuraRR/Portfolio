import React from "react";
import BorderedImage from "./BorderedImage";
import Animated from "./Animated";

export default function AboutMe() {
  return (
    <div className="w-full bg-gray-50 bg-transition">
      <div className="container">
        <Animated delay={0.3}>
          <section id="about" className="py-16 md:py-24">
            <h3>About me</h3>
            <div className="flex flex-col md:flex-row mt-12 gap-10">
              <BorderedImage src="me2.webp" size="big" borderColor="border-gray-50" />
              <div className="flex flex-col text-gray-600 gap-4 md:w-3/4 lg:w-1/2">
                <h2 className="mb-2">Curious about me? Here you have it:</h2>
                <p>
                  As a Frontend Developer, I am passionate about crafting engaging and intuitive web experiences.
                  Since beginning my programming journey in 2022, I have worked on a variety of projects that have
                  honed my skills and deepened my knowledge of modern web technologies.
                </p>
                <p>
                  I specialize in using React, Redux, and Vite to build scalable, high-performance applications. My
                  proficiency with CSS frameworks like TailwindCSS and SASS/SCSS ensures that my designs are both
                  visually appealing and functional. Additionally, I utilize Firebase for backend services and
                  GitHub for version control, enabling me to manage and deploy projects efficiently.
                </p>
                <p>
                  I am committed to staying updated with industry trends and continuously expanding my knowledge. I
                  focus on understanding user behavior and applying best practices to create smooth and accessible
                  experiences.
                </p>
                <p>
                  I am enthusiastic about collaborating with teams that value innovation and excellence. I thrive
                  in environments where I can contribute to impactful projects and tackle challenges that advance
                  the field of web development.
                </p>
              </div>
            </div>
          </section>
        </Animated>
      </div>
    </div>
  );
}
