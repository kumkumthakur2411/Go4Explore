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
    // 1. Outer wrapper: Full width, relative, handles the overall height
    <section className="relative flex w-full h-[85vh] md:h-[80vh] justify-end items-center overflow-hidden ">
      
      {/* 2. BACKGROUND LAYER: Full width decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] hidden md:block z-0">
        <Image
          src="https://go4explore.com/assets/img/banner/bg.webp"
          alt="background decoration"
          fill
          priority
          className=" opacity-90"
        />
      </div>

      {/* 3. MAIN CONTENT CONTAINER: Capped at max-w-7xl and centered */}
      <div className="relative w-full max-w-screen-2xl mx-auto h-[97%] 
         z-10 flex items-center justify-end md:items-end">
        
        {/* 4. THE BANNER BOX: The actual rounded container with video/image */}
        <div className="relative bottom-0 left-0 w-full h-[95%] md:h-[75vh] rounded-3xl
         overflow-hidden ">
          
          {/* Fallback Banner Image */}
          <Image
            src="https://go4explore.com/assets/img/banner/home-v-banner.webp"
            alt="banner"
            fill
            priority
            className="object-cover"
          />

          {/* Video Layer */}
          {playVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              autoPlay muted loop playsInline preload="auto"
              onCanPlay={() => setVideoReady(true)}
            >
              <source src="https://d2qa7a8q0vuocm.cloudfront.net/assets/images/hero.mp4" type="video/mp4" />
            </video>
          )}
          
          {/* Subtle Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>

          {/* 5. TEXT & INTERFACE OVERLAY */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4 text-center">
            
            {/* Top Content: Headlines & Search */}
            <div className="flex flex-col items-center text-center w-full gap-5 md:gap-12">
              <h1 className="text-white text-xl md:text-4xl font-normal leading-tight ">
                Spreading <span className="text-[#FFF401] ">Happiness &</span> <br className="md:hidden" /> 
                Crafting <span className="text-[#FFF401] ">Stories</span> 
              </h1>

              <h2 className="text-white text-4xl md:text-7xl font-bold leading-tight 
               flex items-center gap-3 ">
                Across Globe
                <Image 
                  src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.png&w=48&q=75"
                  alt="global icon" 
                  width={45} 
                  height={45}
                  className=" object-cover "
                />
              </h2>

              {/* Search Bar Container */}
              <div className="flex w-full max-w-md md:max-w-xl 
              items-center mx-6  rounded-full bg-white shadow-2xl
               transform transition-transform ">
                <input 
                  type="text"
                  placeholder="Pick Best Suitable Packages, Destinations & more for you"
                  className="text-xs md:text-sm flex-1 px-5 py-2 focus:outline-none 
                  text-gray-800 placeholder:text-gray-500"
                />
                <button type="submit" className="p-1 md:p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Image
                    src="https://go4explore.com/assets/img/banner/2.webp"
                    alt="search"
                    width={35}
                    height={35}
                    className="object-cover"
                  />
                </button>
              </div>
              {/* Bottom Content: Trust Badges */}
            <div className="w-full flex flex-col md:flex-row gap-4 
            items-center justify-center  py-5  ">
              
              <div className="flex items-center justify-center text-white gap-1">
                <div className="flex items-center gap-1.5">
                  <IoMdCheckmarkCircleOutline className="text-[#FFF500] text-xl" />
                  <span className="text-xs md:text-sm font-normal tracking-wide uppercase">
                    <span className="text-[#FFF500]">500+</span> Destinations
                  </span>
                </div>

                <div className="h-4 w-px bg-white/40"></div>

                <div className="flex items-center gap-1.5">
                  <IoMdCheckmarkCircleOutline className="text-[#FFF500] text-xl" />
                  <span className="text-xs md:text-sm font-normal tracking-wide uppercase">
                    <span className="text-[#FFF500]">Seamless</span> Booking
                  </span>
                </div>
              </div>

              <div className="hidden md:block h-4 w-px bg-white/40"></div>

              <div className="flex items-center justify-center gap-1.5 text-white">
                <IoMdCheckmarkCircleOutline className="text-[#FFF500] text-xl" />
                <span className="text-xs md:text-sm font-normal tracking-wide uppercase">
                  <span className="text-[#FFF500]">8+ Years</span> Experience
                </span>
              </div>
            </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}

