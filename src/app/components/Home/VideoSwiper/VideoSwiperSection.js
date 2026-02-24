import Image from "next/image";
import VideoSwiper from "./VideoSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function VideoSwiperSection({ videos }) {
  return (
    // Switched to max-width and removed fixed vh for zoom stability
    <section className="w-full max-w-7xl mx-auto py-10 px-4 md:px-30 relative z-10">
      <div className="bg-white/90 shadow-[0_15px_60px_-15px_rgba(0,0,0,0.2)] rounded-3xl p-6 md:p-10 border border-white/50">
        
        {/* Heading + Navigation */}
        <div className="w-full flex flex-col mb-8 text-center lg:text-left">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-4"> 
            <h1 className="text-2xl md:text-4xl font-black text-[#2755B0] tracking-tight">
              Fuel Your Wanderlust 
            </h1>
            
            {/* Navigation Buttons - Hidden on Mobile */}
            <div className="hidden lg:flex gap-3">
              <button className="custom-prev bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition shadow-lg active:scale-90">
                <IoIosArrowBack size={20}/>
              </button>
              <button className="custom-next bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition shadow-lg active:scale-90">
                <IoIosArrowForward size={20}/>
              </button>
            </div>
          </div> 
          
          <p className="text-[#222229] font-bold text-sm md:text-lg mt-3 max-w-md">
            Ever growing travel community of 200K+ Explorers!
          </p>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* SIDE IMAGE: Only visible on Desktop, uses aspect ratio for zoom safety */}
          <div className="hidden lg:block lg:w-1/4 
          relative min-h-[400px]  overflow-hidden  ">
            <Image
              src="https://go4explore.com/assets/img/wanderlust/bg.webp"
              alt="Wanderlust"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 0vw, 25vw"
              priority
            />
            
          </div>

          {/* SWIPER: Full width on mobile, 75% on desktop */}
          <div className="w-full lg:w-3/4 min-w-0">
             {/* min-w-0 is critical for Swiper inside flex containers during zoom */}
            <VideoSwiper 
              prevEl="custom-prev" 
              nextEl="custom-next" 
              videos={videos}
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}