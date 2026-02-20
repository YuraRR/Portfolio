/* eslint-disable react/prop-types */
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Icon from "../ui/Icon";

export default function SwiperComponent({ images }) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const fsPrevRef = useRef(null);
  const fsNextRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isFullScreen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullScreen]);

  useEffect(() => {
    if (swiperRef.current && !isFullScreen) {
      const swiper = swiperRef.current.swiper;
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [isFullScreen]);

  const openFullScreen = (index) => {
    setActiveIndex(index);
    setIsFullScreen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <>
      {/* Main Slider */}
      <div className="relative group max-w-[800px] mx-auto w-full">
        <div className="*:absolute *:z-10 *:top-1/2 *:-translate-y-1/2 *:hidden *:xs:block *:w-10 *:opacity-60 hover:*:opacity-100 *:transition-opacity">
          <button ref={prevRef} className="rotate-180 -left-7">
            <Icon name="arrow" />
          </button>
          <button ref={nextRef} className="-right-7">
            <Icon name="arrow" />
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className="overflow-hidden shadow-md rounded-xl"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-[180px] xs:h-[300px] bg-gray-100 cursor-zoom-in"
                onClick={() => openFullScreen(index)}
              >
                <img
                  src={`./images/projects/${img}`}
                  alt={img}
                  className="object-cover w-full h-full select-none"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isFullScreen && (
        <div
          className="fixed inset-0 z-[50] bg-black/90 flex flex-col items-center justify-center animate-in fade-in duration-300"
          onClick={closeFullScreen}
        >
          <button
            className="absolute top-4 right-4 z-[120] text-white p-4 hover:scale-110 transition-transform"
            onClick={closeFullScreen}
          >
            <span className="text-4xl leading-none">&times;</span>
          </button>

          <div
            className="*:absolute *:z-[110] *:top-1/2 *:-translate-y-1/2 *:w-14 *:text-white/60 hover:*:text-white *:transition-all *:cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <button ref={fsPrevRef} className="rotate-180 left-4">
              <Icon name="arrow" />
            </button>
            <button ref={fsNextRef} className="right-4">
              <Icon name="arrow" />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, A11y]}
            initialSlide={activeIndex}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = fsPrevRef.current;
                swiper.params.navigation.nextEl = fsNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            pagination={{ clickable: true }}
            loop={true}
            className="w-full h-[85vh]"
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center p-4"
                onClick={closeFullScreen} // Close when clicking the slide area
              >
                <img
                  src={`./images/projects/${img}`}
                  alt={img}
                  className="object-contain max-w-full max-h-full shadow-2xl pointer-events-auto"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
}
