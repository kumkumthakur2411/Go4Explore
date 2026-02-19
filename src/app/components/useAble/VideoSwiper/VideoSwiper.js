"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function VideoSwiper({videos, prevEl, nextEl }) {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={8}      
      loop={true}
      navigation={{
        prevEl: `.${prevEl}`, // Matches the class passed from parent
        nextEl: `.${nextEl}`, // Matches the class passed from parent
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full h-full"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <video
              src={video.src}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay // Added so videos start playing
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
