import React from "react";
import BorderedImage from "./BorderedImage";

export default function AboutMe() {
  return (
    <div className="w-full bg-gray-50 bg-transition">
      <div className="container">
        <section className="py-24">
          <h3>About me</h3>
          <div className="flex flex-col md:flex-row mt-12 gap-10">
            <BorderedImage src="me2.png" size="big" borderColor="border-gray-50" />
            <div className="flex flex-col text-gray-600 gap-4 md:w-3/4 lg:w-1/2">
              <h2 className="mb-2">Curious about me? Here you have it:</h2>
              <p>
                I'm a passionate, self-proclaimed designer who specializes in UX Designing and Web Development
                (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design, and writing clear, readable,
                highly performant code matters to me.
              </p>
              <p>
                I have started my journey over a year back as a designer and a web developer in 2023, and since
                then, I've continued to grow and evolve as a designer and a developer, taking on new challenges and
                learning the latest technologies along the way.
              </p>
              <p>
                I am trying to learn and evolve everyday by taking up new challenges and learning new things on a
                day to day basis. I love learning about user psychology and make a valuable user experience for all
                type of users.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on products end to end, from ideation all
                the way to development.
              </p>
              <p>Finally, some quick bits about me.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
