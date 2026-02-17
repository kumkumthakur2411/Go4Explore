"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BannerVideo() {
  // Video Array
  const videos = [
    "https://go4explore.com/assets/img/vietnam-hm-slider.mp4",
    "https://go4explore.com/assets/img/georgia-hm-slider.mp4",
    "https://go4explore.com/assets/img/bali-hm-slider.mp4",
    "https://go4explore.com/assets/img/kazakhstan-hm-slider.mp4",
  ];

  return (
<div className="w-full flex justify-center mt-5">
  <div className="w-[90%] h-[75vh] relative">

    <Carousel className="w-full h-full">
      
      <CarouselContent className="h-full">
        {videos.map((videoSrc, index) => (
          <CarouselItem key={index} className="basis-full h-full">
            
            <div className="relative w-full h-full rounded-3xl overflow-hidden ">

              {/* Video */}
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* Optional Dark Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

            </div>

          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Custom Positioned Arrows */}
      <div className="absolute bottom-5 right-4 flex gap-3">
        <CarouselPrevious className="relative static bg-blue-600 text-white hover:bg-blue-700" />
        <CarouselNext className="relative static bg-blue-600 text-white hover:bg-blue-700" />
      </div>

    </Carousel>

  </div>
</div>


  );
}




