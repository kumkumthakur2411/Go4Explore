"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowOutward } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const International_destinations_row1 = [
  { name: "Bali",
     src: "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fassets%2Fimages%2Fhome-trips%2Fbali.jpg&w=640&q=75" },
  { name: "Dubai", 
    src: "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fassets%2Fimages%2Fhome-trips%2Fdubai.jpg&w=640&q=75" },
  { name: "Kazakhstan", 
    src: "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fassets%2Fimages%2Fhome-trips%2Fkazakhstan.jpg&w=640&q=75" },
  { name: "d", src: "https://go4explore.com/assets/img/international/i4.webp" },
  { name: "e", src: "https://go4explore.com/assets/img/international/i5.webp" },
];

const International_destinations_row2 = [
 { name: "Bali",
     src: "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fassets%2Fimages%2Fhome-trips%2Fbali.jpg&w=640&q=75" },
  { name: "Dubai", 
    src: "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fassets%2Fimages%2Fhome-trips%2Fdubai.jpg&w=640&q=75" },
  { name: "Kazakhstan", 
    src: "https://go4explore.com/_next/image?url=https%3A%2F%2Fd2qa7a8q0vuocm.cloudfront.net%2Fassets%2Fimages%2Fhome-trips%2Fkazakhstan.jpg&w=640&q=75" },
 
  { name: "p",price:"20000", src: "https://go4explore.com/assets/img/international/i10.webp" },
  { name: "q",price:"20000" ,src: "https://go4explore.com/assets/img/international/i11.webp" },
];

export default function InternationalSwiper() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation={{
        nextEl: ".international-swiper-next",
        prevEl: ".international-swiper-prev",
      }}
      loop={true}
      enabled={true}
      breakpoints={{
        0: { slidesPerView: 2.3, spaceBetween: 5 },
        768: { slidesPerView: 3, spaceBetween: 10 },
      }}
      className="w-full h-full"
    >
      {International_destinations_row1.map((item1, index) => {
        const item2 = International_destinations_row2[index];

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-between h-auto gap-4">
              {/* Row 1 - SYNCED CSS */}
              <div className="group relative w-[95%] h-[200px] md:h-[185px] rounded-xl overflow-hidden cursor-pointer group">
                <Image
                  src={item1.src}
                  alt={item1.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
                <div className="absolute bottom-3 left-3 z-10">
                  <div className="flex flex-col">
                    <h4 className="text-white font-semibold text-base">{item1.name}</h4>
                    <p className="text-white font-semibold text-xs md:text-sm">Starting From {item1.price || "N/A"}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3 border border-white rounded-full
                 w-8 h-8 flex items-center justify-center text-white z-10  group-hover:bg-white   group-hover:text-blue-800 transition">
                  <MdArrowOutward size={20} />
                </div>
              </div>

              {/* Row 2 - SYNCED CSS */}
              {item2 && (
                <div className="group relative w-[95%] h-[200px] md:h-[185px] rounded-xl overflow-hidden cursor-pointer group">
                  <Image
                    src={item2.src}
                    alt={item2.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition duration-300"></div>
                  <div className="absolute bottom-3 left-3 z-10">
                    <div className="flex flex-col">
                      <h4 className="text-white font-semibold text-base">{item2.name}</h4>
                      <p className="text-white font-semibold text-xs md:text-sm">Starting From {item2.price}</p>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 border border-white rounded-full
                   w-8 h-8 flex items-center justify-center text-white z-10 
                   group-hover:bg-white   group-hover:text-blue-800 transition">
                    <MdArrowOutward size={20} />
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}