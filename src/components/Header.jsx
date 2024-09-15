import { useState } from "react";
import Burger from "../ui/Burger/Burger";
import Button from "../ui/Button";
import ThemeButton from "../ui/ThemeButton";
import BurgerMenu from "./BurgerMenu";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  function openMenu() {
    setIsActive((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "";
      return !prev;
    });
  }
  return (
    <div className="bg-gray-def fixed z-50 w-full bg-transition">
      <header className="max-w-[1440px] flex center-between py-4 px-8 lg:px-24 mx-auto max-h-[68px]">
        <a href="#" className="relative">
          <img
            src="icons/logo.png"
            alt="logo"
            className="object-contain w-16 cursor-pointer hover:rotate-[360deg] transition-transform duration-1000 active:rotate-[-360deg] active:duration-200 active:translate-y-1"
          />
        </a>

        <nav className="hidden sm:flex max-w-[433px] w-full text-gray-600 bg-transition center-between">
          <a className="link" href="#about">
            About
          </a>
          <a className="link" href="#projects">
            Projects
          </a>
          <a className="link" href="#contact">
            Contact
          </a>
          <ThemeButton />
          <Button>Download CV</Button>
        </nav>
        <Burger {...{ openMenu, isActive }} />
      </header>
      <BurgerMenu {...{ openMenu, isActive, setIsActive }} />
    </div>
  );
}
