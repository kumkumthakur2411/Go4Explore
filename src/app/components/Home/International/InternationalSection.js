import Image from "next/image";
import InternationalSwiper from "./InternationalSwiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function InternationalSection() {
  return (
    <section className="w-full py-8 md:py-0 px-4 md:px-30 bg-white md:mt-10">
      
      {/* Same Outer Container as Domestic */}
      <div className="max-w-7xl mx-auto 
      bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl overflow-hidden border border-gray-50">
        
        {/* Header Section (Same Layout) */}
        <div className="p-6 md:p-10 pb-0">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
            
            <div className="text-center md:text-left">
              <h1 className="text-xl md:text-3xl font-[800] text-[#2556B0] tracking-tight">
                International Getaways
              </h1>
              <p className="text-gray-700 font-medium text-sm md:text-lg mt-1">
                Fly beyond the homeland to create 
                <br/>unforgettable memories
              </p>
            </div>
            {/* Navigation Buttons */}
            <div className="hidden md:flex gap-3 mb-1">
              <button className="International-swiper-prev bg-[#2556B0]
               w-8 h-8 rounded-full flex items-center justify-center text-white
                ">
                <IoIosArrowBack size={20} />
              </button>
              <button className="International-swiper-next bg-[#2556B0] w-8 h-8 rounded-full 
              flex items-center justify-center text-white 
             ">
                <IoIosArrowForward size={20} />
              </button>
            </div>

          </div>
        </div>

        {/* Content Area (Same Structure as Domestic) */}
        <div className="flex flex-col lg:flex-row px-2 py-5 md:p-6 md:p-10 gap-6 lg:gap-8 items-stretch">

          {/* Side Image */}
          <div className="hidden lg:block lg:w-1/4 relative min-h-[350px] rounded-2xl overflow-hidden">
            <Image
              src="https://go4explore.com/assets/img/international/bg.webp"
              alt="International Getaways"
              fill
              className="object-cover  "
              priority
            />
          </div>

          {/* Swiper Area */}
          <div className="w-full lg:w-3/4 flex items-center overflow-hidden">
            <div className="w-full h-full min-h-0">
              <InternationalSwiper
                prevEl="International-swiper-prev"
                nextEl="International-swiper-next"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}