import Icon from "../ui/Icon";
import Animated from "./Animated";
import BorderedImage from "./BorderedImage";

export default function MainBlock() {
  return (
    <div className="container">
      <Animated>
        <section className="flex w-full justify-between min-h-[374px] gap-10 flex-col-reverse md:flex-row pb-20 md:pb-32 pt-24 md:pt-40">
          <div className="flex flex-col max-w-[768px] w-full text-gray-600">
            <div className="flex">
              <h1 className="text-gray-900">Hi, I`m Yurii </h1>
              <span className="text-[32px] lg:text-[60px] animate-wave origin-bottom-right">👋</span>
            </div>

            <p>
              I am a Frontend Developer with experience in React, focused on building modern, fast, and responsive
              web applications. My goal is to grow as a professional by working on real-world projects and learning
              new technologies. When working on my projects, I always prioritize code quality, accessibility, and
              performance optimization. I am looking for opportunities to develop within a team of professionals
              where I can enhance my skills and contribute to creating innovative products.
            </p>

            <div className="flex flex-col gap-2 mt-12">
              <div className="flex items-center gap-2">
                <Icon name="location" styles="w-6" />
                <span>Poltava, Ukraine</span>
              </div>
              <div className="flex items-center gap-2">
                <img src="icons/online.svg" alt="online" className="w-6 animate-pulse" />
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
          <BorderedImage src="me.webp" shadowPos={"right"} borderColor="border-gray-def" />
        </section>
      </Animated>
    </div>
  );
}
