import Icon from "../ui/Icon";

export default function Footer() {
  return (
    <>
      {" "}
      <div className=".container">
        <footer className="flex flex-col center">
          <h3>Get in touch</h3>
          <p className="mt-4 mb-12 max-w-[576px] text-center text-xl">
            What's next? Feel free to reach out to me if you're looking for a designer or a developer, have a
            query, or simply want to connect.
          </p>

          <div className="flex gap-5">
            <Icon name="inbox" />
            <a href="mailto:yurii.dev.frontend@gmail.com" className="text-4xl font-semibold">
              yurii.dev.frontend@gmail.com
            </a>
            <Icon name="copy" />
          </div>
          <div className="flex gap-5 mt-4">
            <Icon name="inbox" />
            <a href="tel:+380660912049" className="text-4xl font-semibold">
              +380 660912049
            </a>
            <Icon name="copy" />
          </div>

          <span className="mt-12">You may also find me on these platforms!</span>
        </footer>
      </div>
      <div className="flex center gap-2 bg-gray-50 bg-transition w-full py-6 mt-24">
        <Icon name="copyright" size="w-4" />
        <span>2024 | Coded with ❤️️ by Yurii Halushko</span>
      </div>
    </>
  );
}
