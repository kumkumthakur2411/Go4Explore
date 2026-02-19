import Image from "next/image";
import TrendingSwiper from "./TrendingSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function TrendingSection() {
  return (
    // Adjust width for mobile (95%) vs desktop (90%)
    <div className="w-[100%] md:w-[85%] h-auto md:h-[95vh]
     bg-white/90 shadow-[0_0_60px_-15px_rgba(0,0,0,0.3)]  rounded-xl py-8 px-4 md:p-8 ">
      
      {/* Heading + Navigation */}
      <div className="w-full flex justify-center md:justify-between items-center mb-10">        
        <h1 className="text-lg md:text-2xl md:font-extrabold 
        leading-tight tracking-tight text-[#2556B0] 
        flex 
        items-center justify-center font-black md:justify-start gap-2 ">
          Trending Destinations
          <Image
            src="https://go4explore.com/assets/img/trending-places/icon.png"
            alt="icon"
            width={28}
            height={28}
            className="w-5 h-5 md:w-7 md:h-7"
          />
        </h1>

        {/* Custom Navigation Buttons - Hidden on Mobile (hidden), flex on Medium+ (md:flex) */}
        <div className="hidden md:flex gap-3">
          <div className="swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light"><IoIosArrowBack/></span>
          </div>

          <div className="swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light"><IoIosArrowForward/></span>
          </div>
        </div>

      </div>

      {/* Swiper */}
      <TrendingSwiper />
    </div>
  );
}