// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComponent({ images }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={`/public/images/projects/${img}`} alt={img} className="rounded-xl select-none" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
