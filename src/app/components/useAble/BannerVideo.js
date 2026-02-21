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
    <section className="w-full md:w-[85%] relative h-[20vh] 
    md:h-[80vh] overflow-hidden mb-10">
      {isLoaded && (
        <Swiper
          // 1. STRICTLY REMOVE 'Autoplay' from this array
          modules={[Pagination, Navigation]} 
          loop={true}
          // 2. EXPLICITLY set autoplay to false
          autoplay={false} 
          // 3. Ensure user can swipe manually
          allowTouchMove={true}
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
          className="w-full h-full 
           overflow-hidden "
        >
          {videos.map((videoSrc, index) => (
            <SwiperSlide key={index} 
            className="relative w-full h-[20] md:h-95">
              <video
                src={videoSrc}
                autoPlay // This stays so the video plays, but swiper won't move
                muted
                loop
                playsInline
                className="absolute inset-0 w-full 
                h-[110] md:h-[75%] object-cover rounded-3xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* MOBILE PAGINATION */}
     <div className="custom-pagination absolute bottom-2 
     left-0 right-0 flex justify-center md:hidden z-20" />

      {/* DESKTOP NAVIGATION */}
      <div className="hidden absolute 
bottom-20 right-0 lg:flex gap-3 z-30">
        <button
          ref={prevRef}
          className="bg-[#2556B0]
 w-9 h-9 rounded-full flex items-center
  justify-center text-white cursor-pointer
   hover:bg-blue-700 transition"  >
          <IoIosArrowBack  />
        </button>

        <button
          ref={nextRef}
          className="bg-[#2556B0] w-9 h-9 rounded-full 
          flex items-center justify-center text-white 
          cursor-pointer hover:bg-blue-700 transition"
 >   
          <IoIosArrowForward  />
        </button>
      </div>
    </section>
  );
}



