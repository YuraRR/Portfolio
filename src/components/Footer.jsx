import { useState } from "react";
import Icon from "../ui/Icon";
import Animated from "./Animated";

export default function Footer() {
  const [tip, setTip] = useState({ email: false, phone: false });
  const phone = "+38(066)091-20-49";
  const email = "yurii.dev.frontend@gmail.com";
  function copyText(text) {
    navigator.clipboard.writeText(text);

    if (text == email) {
      setTip({ phone: false, email: true });
    } else {
      setTip({ email: false, phone: true });
    }
    setTimeout(() => setTip({ email: false, phone: false }), 3000);
  }

  function openLink(url) {
    window.open(url);
  }
  return (
    <Animated>
      <div className="container">
        <footer id="contact" className="flex flex-col center">
          <h3>Get in touch</h3>
          <p className="mt-4 mb-12 max-w-[576px] text-center md:text-xl">
            What's next? Feel free to reach out to me if you're looking for a designer or a developer, have a
            query, or simply want to connect.
          </p>

          <div className="flex flex-col center gap-4 *:flex *:gap-1 *:xs:gap-2 *:md:gap-5">
            <article className="cursor-pointer relative">
              <Icon name="inbox" styles={"w-5 md:w-8"} />
              {tip.email && <span className="absolute -top-4 -right-3 text-[9px] md:text-xs">Text copied</span>}
              <a href={`mailto:${email}`} className="md:text-4xl font-semibold">
                {email}
              </a>
              <Icon
                name="copy"
                styles={"w-5 md:w-8 hover:scale-110 transition easy duration-300"}
                onClick={() => copyText(email)}
              />
            </article>
            <article className="cursor-pointer relative">
              <Icon name="phone" styles={"w-5 md:w-8"} />
              {tip.phone && <span className="absolute -top-4 -right-3 text-[9px] md:text-xs">Text copied</span>}
              <a href={`tel:+${phone}`} className="md:text-4xl font-semibold">
                {phone}
              </a>
              <Icon
                name="copy"
                styles={"w-5 md:w-8 hover:scale-110 transition easy duration-300"}
                onClick={() => copyText(phone)}
              />
            </article>
          </div>

          <span className="mt-12 text-center mb-2">You may also find me on these platforms!</span>
          <div className="flex gap-1">
            <Icon
              name="linkedIn"
              styles="cursor-pointer"
              onClick={() => openLink("https://www.linkedin.com/in/yurii-halushko-699030328/")}
            ></Icon>
            <Icon
              name="tg"
              styles="cursor-pointer w-7"
              onClick={() => openLink("https://t.me/Halushko_Yura")}
            ></Icon>
          </div>
        </footer>
      </div>
      <div className="flex center gap-2 bg-gray-50 bg-transition w-full py-6 mt-24">
        <Icon name="copyright" styles="w-4" />
        <span className="text-center text-sm">2024 | Coded with ❤️️ by Yurii Halushko</span>
      </div>
    </Animated>
  );
}
