// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Icon from "../ui/Icon";

export default function SwiperComponent({ images }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);
  return (
    <>
      <div className="*:absolute *:transform *:-translate-y-1/2 *:hidden *:xs:block *:top-[50%] *:w-12 *:md:w-7 *:lg:w-12 *:opacity-40">
        <button ref={prevRef} className="rotate-180 left-0 md:-left-1 lg:left-0">
          <Icon name="arrow" />
        </button>
        <button ref={nextRef} className="right-0 md:-right-1 lg:right-0">
          <Icon name="arrow" />
        </button>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        className="rounded-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={`./images/projects/${img}`} alt={img} className="select-none" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
