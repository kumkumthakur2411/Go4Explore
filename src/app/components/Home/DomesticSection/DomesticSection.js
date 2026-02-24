import Image from "next/image";
import DomesticSwiper from "./DomesticSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export default function DomesticSection() {

  return (
    <section className="w-full py-8 md:py-16 px-4 md:px-10 bg-white">
      {/* Outer container uses max-width to prevent stretching on ultra-wide screens */}
      <div className="max-w-7xl mx-auto shadow-[0_10px_50px_-15px_rgba(0,0,0,0.2)] rounded-[2rem] overflow-hidden border border-gray-50">
        
        {/* 1. Header Section */}
        <div className="p-6 md:p-10 pb-0">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-4xl font-black text-[#2755B0] tracking-tight">
                Domestic Escapes
              </h1>
              <p className="text-gray-600 font-medium text-sm md:text-lg mt-1">
                Explore breathtaking destinations within India
              </p>
            </div>

            {/* Navigation Buttons: Hidden on Mobile */}
            <div className="hidden md:flex gap-3 mb-1">
              <button className="Domestic-swiper-prev bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all active:scale-90 shadow-lg">
                <IoIosArrowBack size={20} />
              </button>
              <button className="Domestic-swiper-next bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all active:scale-90 shadow-lg">
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Content Area: Grid-based for stability during zoom */}
        <div className="flex flex-col lg:flex-row p-6 md:p-10 gap-6 lg:gap-8 items-stretch">
          
          {/* SIDE IMAGE: Uses aspect ratio instead of fixed height to survive zoom */}
          <div className="hidden lg:block lg:w-1/4 relative min-h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="https://go4explore.com/assets/img/domestic/bg.webp"
              alt="Domestic Getaways"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
            {/* Visual branding overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#2556B0]/50 via-transparent to-transparent" />
          </div>

          {/* SWIPER: Flexible width calculation */}
          <div className="w-full lg:w-3/4 flex items-center overflow-hidden">
            <div className="w-full h-full min-h-0"> 
              {/* min-h-0 is a flexbox fix for Swiper inside nested divs */}
              <DomesticSwiper 
                prevEl=".Domestic-swiper-prev" 
                nextEl=".Domestic-swiper-next" 
              />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
