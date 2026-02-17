"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const destinations_row1 = [
  { name: "a", src: "https://go4explore.com/assets/img/international/i1.webp" },
  { name: "b", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "c", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "d", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "e", src: "https://go4explore.com/assets/img/international/i5.webp" },
  { name: "f", src: "https://go4explore.com/assets/img/international/i6.webp" },
  { name: "g", src: "https://go4explore.com/assets/img/international/i1.webp" },
  { name: "h", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "i", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "j", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "k", src: "https://go4explore.com/assets/img/international/i5.webp" },
  { name: "l", src: "https://go4explore.com/assets/img/international/i6.webp" },
];

const destinations_row2 = [
  { name: "m", src: "https://go4explore.com/assets/img/international/i7.webp" },
  { name: "n", src: "https://go4explore.com/assets/img/international/i8.webp" },
  { name: "o", src: "https://go4explore.com/assets/img/international/i9.webp" },
  { name: "p", src: "https://go4explore.com/assets/img/international/i10.webp" },
  { name: "q", src: "https://go4explore.com/assets/img/international/i11.webp" },
  { name: "r", src: "https://go4explore.com/assets/img/international/i12.webp" },
  { name: "s", src: "https://go4explore.com/assets/img/international/i1.webp" },
  { name: "t", src: "https://go4explore.com/assets/img/international/i2.webp" },
  { name: "u", src: "https://go4explore.com/assets/img/international/i3.webp" },
  { name: "v", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "w", src: "https://go4explore.com/assets/img/international/i5.webp" },
  { name: "", src: "https://go4explore.com/assets/img/international/i6.webp" },
];

export default function TrendingSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={4}
      slidesPerView={8}
      navigation={{
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      }}

      loop={true}
    >
      {destinations_row1.map((item1, index) => {
        const item2 = destinations_row2[index];

        return (
          <SwiperSlide key={index}>
            {/* One slide = Two rows */}
            <div className="flex flex-col items-center gap-2">

              {/* Row 1 */}
              <div className="relative w-28 h-40 rounded-full overflow-hidden shadow-lg">
                <Image
                  src={item1.src}
                  alt={item1.name}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="font-semibold">{item1.name}</p>

              {/* Row 2 */}
              {item2 && (
                <>
                  <div className="relative w-28 h-40 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={item2.src}
                      alt={item2.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-semibold">{item2.name}</p>
                </>
              )}

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

  );
}
