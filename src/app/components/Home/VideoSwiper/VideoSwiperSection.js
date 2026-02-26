import Image from "next/image";
import VideoSwiper from "./VideoSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function VideoSwiperSection({ videos }) {
  return (


<section className="w-full py-8 md:py-0 px-4 md:px-10 lg:px-30 bg-white md:mt-10">
  
  <div className="max-w-7xl mx-auto 
    bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] 
    rounded-xl overflow-hidden border border-gray-50">

    {/* Header */}
    <div className="p-6 md:p-10 pb-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
        
        <div className="text-center md:text-left">
          <h1 className="text-xl md:text-3xl font-[800] text-[#2556B0] tracking-tight">
            Fuel Your Wanderlust
          </h1>
          <p className="text-gray-800 font-medium text-sm md:text-lg mt-1">
            Ever growing travel community of 200K+ Explorers!
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden md:flex gap-3 mb-1">
          <button className="custom-prev bg-[#2556B0] w-8 h-8 rounded-full flex items-center justify-center text-white">
            <IoIosArrowBack size={20} />
          </button>
          <button className="custom-next bg-[#2556B0] w-8 h-8 rounded-full flex items-center justify-center text-white">
            <IoIosArrowForward size={20} />
          </button>
        </div>

      </div>
    </div>

    {/* Content Area — Same structure as other sections */}
    <div className="flex flex-col md:flex-row px-2 py-5 md:p-5 lg:p-10 md:gap-3 lg:gap-8 items-stretch">

      {/* Side Image — visible from md like others */}
      <div className="hidden md:block md:w-1/4 relative min-h-[350px] rounded-2xl overflow-hidden">
        <Image
          src="https://go4explore.com/assets/img/wanderlust/bg.webp"
          alt="Wanderlust"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Swiper Area */}
      <div className="w-full lg:w-3/4 flex items-center overflow-hidden">
        <div className="w-full h-full min-h-0">
          <VideoSwiper
            prevEl="custom-prev"
            nextEl="custom-next"
            videos={videos}
          />
        </div>
      </div>

    </div>

  </div>
</section>
  );
}