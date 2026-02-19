'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const startVideo = () => {
      setPlayVideo(true);
      window.removeEventListener("click", startVideo);
      window.removeEventListener("scroll", startVideo);
    };
    window.addEventListener("click", startVideo);
    window.addEventListener("scroll", startVideo);
    return () => {
      window.removeEventListener("click", startVideo);
      window.removeEventListener("scroll", startVideo);
    };
  }, []);

  return (
    // Height adjusted to fit mobile screens better (90vh on mobile, 80vh on desktop)
    <div className="relative w-full md:w-[100vw] h-[90vh] md:h-[82vh]  md:mt-8">

      {/* Bottom Background - Hidden on mobile using 'hidden md:block' */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] hidden md:block">
        <Image
          src="https://go4explore.com/assets/img/banner/bg.webp"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Main Container */}
      <div className="absolute inset-0 flex justify-center items-center md:items-end z-10">
        <div className="relative w-[95vw] md:w-[88vw] 
        h-[100%] md:h-[90%] md:rounded-2xl shadow-xl overflow-hidden">

          {/* Fallback Banner */}
          <Image
            src="https://go4explore.com/assets/img/banner/home-v-banner.webp"
            alt="banner"
            fill
            priority
            className="object-cover"
          />

          {playVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              autoPlay muted loop playsInline preload="auto"
              onCanPlay={() => setVideoReady(true)}
            >
              <source src="https://d2qa7a8q0vuocm.cloudfront.net/assets/images/hero.mp4" type="video/mp4" />
            </video>
          )}
          
          {/* Overlay Darkener */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content Overlay - Centered for mobile */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
            
            {/* H1: Adjusted text size (3xl mobile, 4xl desktop) */}
            <h1 className="text-white text-3xl md:text-4xl font-normal leading-tight">
              Spreading <span className="text-[#FFF401]">Happiness</span> <br className="md:hidden" />
              & Crafting <span className="text-[#FFF401]">Stories</span> 
            </h1>

            {/* H2: Adjusted text size (4xl mobile, 7xl desktop) */}
            <h2 className="text-white text-4xl md:text-6xl font-black 
            mt-8 mb-8 flex flex-row justify-center items-center gap-3">
              Across Globe
              <Image 
                src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.png&w=48&q=75"
                alt="global" 
                width={40} 
                height={40}
                className="w-8 h-8 md:w-12 md:h-12"
              />
            </h2>

            {/* Search Bar: Full width on mobile, 50% on desktop */}
            <form className="flex w-full md:w-[60%] lg:w-[50%] items-center px-4 py-2 md:py-3 rounded-full bg-white shadow-lg">
              <input
                type="text"
                placeholder="Pick Best Suitable Packages, Destinations & More For"
                className="flex-1 text-xs md:text-sm font-medium focus:outline-none text-gray-700 placeholder:text-gray-400"
              />
              <button type="submit" className="ml-2">
                <Image
                  src="https://go4explore.com/assets/img/banner/2.webp"
                  alt="search"
                  width={35}
                  height={35}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
              </button>
            </form>

            {/* Trust Badges (The yellow checkmarks in your image) */}
            <div className="mt-15 md:mt-10  flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] 
            md:text-sm font-normal text-white uppercase tracking-wider">
               <div className="flex items-center gap-1">
                 <span className="text-[#FFF500] text-sm flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline></IoMdCheckmarkCircleOutline>500+</span>  Destinations
               </div>
               <div className="flex items-center gap-1 border-l border-white/30 pl-4">
                 <span className="text-[#FFF500] text-sm flex items-center gap-2"><IoMdCheckmarkCircleOutline/>Seamless</span>  Booking |
               </div>
               <div className="w-full md:w-auto flex justify-center items-center gap-1 mt-2 md:mt-0">
                 <span className="text-[#FFF500] text-sm flex items-center gap-2"><IoMdCheckmarkCircleOutline/>8+ Years</span>  Experience
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
