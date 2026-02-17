'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef(null);

  // Start video on first user interaction (click or scroll)
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
    <div className="relative w-full h-[80vh]">

      {/* Bottom Background */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh]">
        <Image
          src="https://go4explore.com/assets/img/banner/bg.webp"
          alt="background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 flex justify-center items-end z-10">
        <div className="relative w-[84vw] h-[93%]  rounded-xl shadow-xl overflow-hidden">

          {/* Banner Image (always present as fallback) */}
          <Image
            src="https://go4explore.com/assets/img/banner/home-v-banner.webp"
            alt="banner"
            fill
            priority
            className="object-cover"
          />

          {/* Video loads only after interaction */}
          {playVideo && (
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setVideoReady(true)}
            >
              <source
                src="https://d2qa7a8q0vuocm.cloudfront.net/assets/images/hero.mp4"
                type="video/mp4"
              />
            </video>
          )}
<div className="absolute inset-0 bg-black/40"></div>
        </div>
         
        {/* Center Content Overlay */}
<div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 ">

  <h1 className="text-white text-4xl font-normal mb-4">
    Spreading <span className="text-[#FFF401]">Happiness & </span>Crafting
     <span className="text-[#FFF401]">Stories</span> 
  </h1>

  <h2 className="text-white text-7xl font-black my-5 flex flex-row justify-center items-center gap-5">
    Across Globe
    <Image src="https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fbanner%2F1.png&w=48&q=75"
    alt="global" width={50} height={50}/>
  </h2>

  <form className="flex w-[50%] mt-3 px-5 py-3 rounded-full text-sm font-semibold border border-gray-300 bg-white text-gray-700">
    <input
      type="text"
      placeholder="Pick best suitable packages, destinations & more for you"
      className="flex-1  focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
<button
  type="submit"
  className="w-[20%] h-full flex items-center justify-end"
>
  <Image
    src="https://go4explore.com/assets/img/banner/2.webp"
    alt="search"
    width={40}
    height={40}
  />
</button>

  </form>

</div>

      </div>
    </div>
  );
}
