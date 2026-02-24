"use client";

import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function BannerVideo({ videos }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
<section className="w-full py-10 md:py-20 px-4 md:px-10 bg-white">
  <div className="max-w-7xl mx-auto">

    {/* VIDEO CONTAINER */}
    <div className="relative
      
      rounded-[2.5rem] overflow-hidden border border-gray-100">

      {isLoaded && (
        <Swiper
          modules={[Pagination, Navigation]}
          loop
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full h-full rounded-[2.5rem] overflow-hidden"
        >
          {videos.map((videoSrc, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <video
                src={videoSrc}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>

    {/* BELOW VIDEO ROW */}
    <div className="flex items-center justify-between mt-6">

      {/* Pagination (mobile only) */}
      <div className="custom-pagination md:hidden" />

      {/* Navigation (desktop only) */}
      <div className="hidden lg:flex gap-3">
        <button
          ref={prevRef}
          className="bg-[#2556B0] w-10 h-10 rounded-full
          flex items-center justify-center text-white
          hover:bg-blue-700 transition"
        >
          <IoIosArrowBack />
        </button>

        <button
          ref={nextRef}
          className="bg-[#2556B0] w-10 h-10 rounded-full
          flex items-center justify-center text-white
          hover:bg-blue-700 transition"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>

  </div>
</section>
  );
}


