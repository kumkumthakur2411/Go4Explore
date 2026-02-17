import Image from "next/image";
import TrendingSwiper from "./TrendingSwiper";

export default function TrendingSection() {
  return (
    <div className="w-[90%] h-[100%] bg-white/90 shadow-2xl rounded-xl p-6">
      
      {/* Heading + Navigation */}
      <div className="h-[10%] w-full flex justify-between items-center mb-6">
        
        <h1 className="text-[32px] font-extrabold text-[#2556B0] flex items-center gap-2">
          Trending Destinations
          <Image
            src="https://go4explore.com/assets/img/trending-places/icon.png"
            alt="icon"
            width={28}
            height={28}
          />
        </h1>

        {/* Custom Navigation Buttons */}
        <div className="flex gap-3">
          <div className="swiper-prev bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light">‹</span>
          </div>

          <div className="swiper-next bg-[#2556B0] w-9 h-9 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition">
            <span className="text-lg font-light">›</span>
          </div>
        </div>

      </div>

      {/* Swiper */}
      <TrendingSwiper />
    </div>
  );
}
