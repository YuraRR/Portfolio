import Icon from "../ui/Icon";
import SwiperComponent from "./SwiperComponent";

export default function ProjectCard({ data }) {
  return (
    <div className="flex rounded-xl min-h-[480px] flex-col md:flex-row md:even:flex-row-reverse overflow-hidden">
      <div className="flex center bg-gray-200 bg-transition p-6 xs:p-12 md:p-6 md:w-1/2 lg:p-12">
        <SwiperComponent images={data.images} />
        {/* <img src={`/images/projects/${data.title}.png`} alt={data.title} className="rounded-xl" /> */}
      </div>
      <div className="flex flex-col gap-6 bg-gray-100 bg-transition p-6 xs:p-12 md:p-6 md:w-1/2 lg:p-12">
        <h4>{data.title}</h4>
        <p>{data.text}</p>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, index) => (
            <span className="text-sm py-1 px-5 bg-gray-200 rounded-2xl" key={index}>
              {tag}
            </span>
          ))}
        </div>
        <button onClick={() => window.open(data.link)}>
          <Icon name="external-link" />
        </button>
      </div>
    </div>
  );
}
