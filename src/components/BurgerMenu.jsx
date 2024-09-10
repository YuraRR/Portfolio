import Button from "../ui/Button";
import ThemeButton from "../ui/ThemeButton";

export default function BurgerMenu({ isActive }) {
  return (
    <section
      className={`absolute w-full h-screen bg-gray-def  transition-all ease-in-out duration-300 z-50 sm:hidden ${
        isActive ? "translate-y-0" : "translate-y-[450px] pointer-events-none"
      }`}
    >
      <span className="w-[700px] h-1 border-b border-gray-100 absolute top-2 -left-32 bg-transition"> </span>

      <nav className="flex flex-col h-full w-full justify-between text-gray-600 gap-4 max-h-72 p-8 mx-auto max-w-md *:font-medium">
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>

        <div className="flex  items-center justify-between relative">
          <span className="w-[700px] h-1 border-b border-gray-100 absolute -top-2 -left-32 bg-transition"> </span>
          <span className="font-normal">Switch theme</span>
          <ThemeButton />
        </div>

        <Button width="max-w-96">Download CV</Button>
      </nav>
    </section>
  );
}
