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
<section className="w-full py-10    bg-white">
  <div className="md:w-[1110px] mx-auto">

    {/* VIDEO CONTAINER */}
    <div className="relative
      
      rounded-2xl overflow-hidden border border-gray-100">

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
          className="w-full h-full rounded-xl overflow-hidden"
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
    <div className="flex items-center justify-center md:justify-end mt-3">


      {/* Pagination (mobile only) */}
      <div className="custom-pagination md:hidden flex items-center justify-center " />

      {/* Navigation (desktop only) */}
      <div className="hidden lg:flex gap-3 ">
        <button
          ref={prevRef}
          className="bg-[#2556B0] w-8 h-8 rounded-full
          flex items-center justify-center text-white
          "
        >
          <IoIosArrowBack />
        </button>

        <button
          ref={nextRef}
          className="bg-[#2556B0] w-8 h-8 rounded-full
          flex items-center justify-center text-white
          "
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>

  </div>
</section>
  );
}


