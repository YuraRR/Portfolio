import Animated from "./Animated";

export default function Expirience() {
  return (
    <div className="w-full bg-gray-50 bg-transition">
      <div className="container">
        <Animated delay={0.3}>
          <section id="expirience" className="flex flex-col py-8 center md:py-20">
            <h3>Work expirience</h3>
            <div className="flex flex-col gap-3 mt-8 text-gray-600 md:w-3/4 lg:w-[700px]">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <img src="/icons/linear-logo.webp" alt="linear-logo" className="w-20" />
                <h4>Junior Frontend Developer, LinearDev</h4>
              </div>

              <i>March 2025 – January 2025</i>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                <li>Developed responsive layouts with React and Tailwind</li>
                <li>Connected frontend applications to backend and third-party services.</li>
                <li>Implemented state management using Redux Toolkit to handle complex application data.</li>
                <li>
                  Worked on the development of reusable UI components for the internal library, improving
                  development efficiency and consistency across projects.
                </li>
                <li>
                  Improved page loading speed by implementing lazy loading and image optimization techniques.
                </li>
              </ul>
            </div>
          </section>
        </Animated>
      </div>
    </div>
  );
}
