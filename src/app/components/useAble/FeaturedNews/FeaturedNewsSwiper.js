
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function FeaturedNewsSwiper() {
  const items = [
    { title: "Item 1", src: "https://go4explore.com/assets/img/news/1.webp" },
    { title: "Item 2", src: "https://go4explore.com/assets/img/news/2.webp" },
    { title: "Item 3", src: "https://go4explore.com/assets/img/news/3.webp" },
    { title: "Item 4", src: "https://go4explore.com/assets/img/news/4.webp" },
    { title: "Item 5", src: "https://go4explore.com/assets/img/news/5.webp" },
    { title: "Item 6", src: "https://go4explore.com/assets/img/news/6.webp" },
    // { title: "Item 7", src: "https://go4explore.com/assets/img/news/7.webp" },
  ];

  return (
    <div className="max-w-screen-xl pt-2 md:py-4 md:py-8 px-10">
      <div className="max-w-screen-xl mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          loop={true}
          speed={5000} // higher = slower marquee
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          modules={[Autoplay]}
          className="[&_.swiper-wrapper]:!ease-linear"
          breakpoints={{
            320: { slidesPerView: 3.5 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {/* Card */}
              <div className=" h-[110px]  flex items-center justify-center ">
                {/* Image wrapper (required for fill) */}
                <div className="relative w-full h-[70px]">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-contain size-3 md:size-20"
                  
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}



