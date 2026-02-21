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
    <div className="relative w-full md:w-[100vw] h-[80vh] md:h-[82vh]  mt-3 md:mt-8">

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
          <div className="absolute top-15 inset-0 z-20 flex flex-col 
          justify-start items-center text-center px-2">
            
            {/* H1: Adjusted text size (3xl mobile, 4xl desktop) */}
            <h1 className="text-white text-2xl md:text-4xl font-normal leading-tight">
              Spreading <span className="text-[#FFF401]">Happiness <br className="md:hidden" /> & </span> 
             Crafting <span className="text-[#FFF401]">Stories</span> 
            </h1>

            {/* H2: Adjusted text size (4xl mobile, 7xl desktop) */}
            <h2 className="text-white text-3xl md:text-6xl font-extrabold leading-tight
            mt-5 mb-8 flex flex-row justify-center items-center gap-3">
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
            <form className="flex w-full md:w-[60%] lg:w-[50%] items-center 
            px-4  py-2 md:py-3 rounded-full bg-white shadow-lg">
              <input
                type="text"
                placeholder="Pick Best Suitable Packages, Destinations & More For"
                className="flex-1 text-[9px] md:text-sm font-sm focus:outline-none leading-tighter
                text-gray-800 placeholder:text-gray-400"
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


          </div>
          {/* Trust Badges (The yellow checkmarks in your image) */}
        {/* Trust Badges (The yellow checkmarks) */}
{/* Trust Badges Container */}
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 
                w-[90%]  flex flex-col items-center gap-2">
  
  {/* Top Row: Destinations and Booking */}
  <div className="flex items-center justify-center  text-[9px] md:text-sm uppercase tracking-tight text-white">
    <div className="flex items-center gap-1">
      <IoMdCheckmarkCircleOutline className="text-[#FFF500] text-lg" />
      <span className="text-xs font-bold text-[#FFF500]">500+</span> 
      <span className="font-medium">Destinations</span>
    </div>

    <div className="h-4 w-[2px] bg-white/40 mx-1"></div> {/* Vertical Divider */}

    <div className="flex items-center gap-1">
      <IoMdCheckmarkCircleOutline className="text-[#FFF500] text-lg" />
      <span className="text-xs font-bold text-[#FFF500]">Seamless</span> 
      <span className="font-medium">Booking</span>
    </div>
  </div>

  {/* Bottom Row: Experience */}
  <div className="flex items-center justify-center gap-1 text-[11px] md:text-sm uppercase tracking-wide text-white">
    <IoMdCheckmarkCircleOutline className="text-[#FFF500] text-lg" />
    <span className=" text-xs font-bold text-[#FFF500]">8+ Years</span> 
    <span className="font-medium">Experience</span>
  </div>
</div>
        </div>
      </div>
    </div>
  );
}
