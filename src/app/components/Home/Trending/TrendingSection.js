import Image from "next/image";
import TrendingSwiper from "./TrendingSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function TrendingSection() {
  return (
    <section className="w-full flex justify-center py-2 px-4 md:px-30"> 
      {/* 1. Added mx-auto and max-w-7xl to fix zoom-out issues 
         2. Removed fixed vh height to prevent content cutoff on zoom-in
      */}
      <div className="w-full max-w-7xl mx-auto bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]
        rounded-2xl py-8 px-4 md:p-10">
        
        <div className="w-full flex justify-center 
        lg:justify-between items-center mb-10 px-2">        
          <h1 className="text-xl md:text-3xl font-[800] text-[#2556B0] flex items-center gap-2">
            Trending Destinations
            <Image 
              src="https://go4explore.com/assets/img/trending-places/icon.png" 
              alt="icon" width={20} height={20} 
              className="w-6 h-6 "
            />
          </h1>

          <div className="hidden md:flex gap-3">
            <div className="swiper-prev bg-[#2556B0] w-8 h-8 
            rounded-full flex items-center justify-center text-white cursor-pointer
              ">
              <IoIosArrowBack size={20}/>
            </div>
            <div className="swiper-next bg-[#2556B0] w-8 h-8 rounded-full flex items-center
             justify-center text-white cursor-pointer ">
              <IoIosArrowForward size={20}/>
            </div>
          </div>
        </div>

        <TrendingSwiper />
      </div>
    </section>
  );
}