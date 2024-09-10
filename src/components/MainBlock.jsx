import Icon from "../ui/Icon";
import BorderedImage from "./BorderedImage";

export default function MainBlock() {
  return (
    <div className="container">
      <section className="flex w-full justify-between min-h-[374px] gap-10 flex-col-reverse md:flex-row pb-24 pt-32">
        <div className="flex flex-col max-w-[768px] w-full text-gray-600">
          <h1 className="text-gray-900">Hi, I`m Yurii 👋</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error excepturi adipisci vel natus! Sequi,
            officiis obcaecati, commodi facilis quidem optio at voluptas quasi, cum nostrum laboriosam sunt minima
            sapiente minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quaerat dolore nulla
            alias a nihil aliquam. Voluptatem, reprehenderit? Ipsam dignissimos odit mollitia fuga magni in sit
            dolorem expedita amet ullam.
          </p>

          <div className="flex flex-col gap-2 mt-12">
            <div className="flex items-center gap-2">
              <Icon name="location" size="w-6" />
              <span>Poltava, Ukraine</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="/icons/online.svg" alt="online" className="w-6" />
              <span>Available for new projects</span>
            </div>
          </div>
        </div>
        <BorderedImage src="me.jpg" shadowPos={"right"} borderColor="border-gray-def" />
      </section>
    </div>
  );
}
