import Image from "next/image";
import VideoSwiper from "./VideoSwiper";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function VideoSwiperSection({ videos }) {
  return (
    // Switched to max-width and removed fixed vh for zoom stability
    //   <section className="w-full py-8 md:py-0 px-4 md:px-30 bg-white">
      
    //   {/* Same Outer Container as Domestic */}
    //   <div className="max-w-7xl mx-auto 
    //         bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl overflow-hidden border border-gray-50">
        
       
    //     {/* Heading + Navigation */}
    //    <div className="p-6 md:p-10 pb-0">
    //     <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4">
            
    //         <div className="text-center md:text-left">
    //           <h1 className="text-xl md:text-3xl font-[800] text-[#2556B0] tracking-tight">
    //            Fuel Your Wanderlust 
    //         </h1>
            
    //         {/* Navigation Buttons - Hidden on Mobile */}
    //         <div className="hidden lg:flex gap-3">
    //           <button className="custom-prev bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition shadow-lg active:scale-90">
    //             <IoIosArrowBack size={20}/>
    //           </button>
    //           <button className="custom-next bg-[#2556B0] w-10 h-10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-700 transition shadow-lg active:scale-90">
    //             <IoIosArrowForward size={20}/>
    //           </button>
    //         </div>
    //       </div> 
          
    //       <p className="text-[#222229] font-medium text-sm md:text-lg mt-3 max-w-md">
    //         Ever growing travel community of 200K+ Explorers!
    //       </p>
    //     </div>

    //     {/* Content Area */}
    //     <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
    //       {/* SIDE IMAGE: Only visible on Desktop, uses aspect ratio for zoom safety */}
    //       <div className="hidden lg:block lg:w-1/4 
    //       relative min-h-[400px]  overflow-hidden  ">
    //         <Image
    //           src="https://go4explore.com/assets/img/wanderlust/bg.webp"
    //           alt="Wanderlust"
    //           fill
    //           className="object-cover transition-transform duration-700 hover:scale-105"
    //           sizes="(max-width: 1024px) 0vw, 25vw"
    //           priority
    //         />
            
    //       </div>

    //       {/* SWIPER: Full width on mobile, 75% on desktop */}
    //       <div className="w-full lg:w-3/4 min-w-0">
    //          {/* min-w-0 is critical for Swiper inside flex containers during zoom */}
    //         <VideoSwiper 
    //           prevEl="custom-prev" 
    //           nextEl="custom-next" 
    //           videos={videos}
    //         />
    //       </div>
    //     </div>
        
    //   </div>
    //   </div>
    // </section>

    <section className="w-full py-8 md:py-0 px-4 md:px-30 bg-white">
      
      {/* Same Outer Container as Domestic */}
      <div className="max-w-7xl mx-auto 
            bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl overflow-hidden border border-gray-50">
        
        {/* Header Section (Same Layout) */}
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

            {/* Navigation Buttons: Hidden on Mobile */}
            <div className="hidden md:flex gap-3 mb-1">
              <button className="custom-prev bg-[#2556B0] w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all active:scale-90 shadow-lg">
                <IoIosArrowBack size={20} />
              </button>
              <button className="custom-next bg-[#2556B0] w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all active:scale-90 shadow-lg">
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
              src="https://go4explore.com/assets/img/wanderlust/bg.webp"
              alt="Wanderlust"
              fill
              className="object-cover "
              priority
            />
            
               </div>

          {/* SWIPER: Flexible width calculation */}
          <div className="w-full lg:w-3/4 flex items-center overflow-hidden">
            <div className="w-full h-full min-h-0"> 
              {/* min-h-0 is a flexbox fix for Swiper inside nested divs */}
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