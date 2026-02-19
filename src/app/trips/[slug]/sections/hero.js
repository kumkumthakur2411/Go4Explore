"use client";
import { useState, useEffect } from "react";
import { tripData } from "../../data";

export default function Hero() {
  const images = tripData.heroImages;
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 3000); // 3-second interval
    return () => clearInterval(interval);
  }, [isOpen, images.length]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="font-poppins">


      {/* Mobile Slider View (Visible only on small screens) */}
      <div className="lg:hidden w-full relative group px-0">
        <div className="w-full h-[250px] rounded-[30px] overflow-hidden bg-gray-100">
          <img
            src={images[currentIndex] || tripData.mainImage}
            alt="Trip Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navigation Dots - Matching the design in the image */}
        <div className="flex justify-center gap-1.5 mt-4">
          {images.slice(0, 10).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === i ? "bg-[#007bff]" : "bg-[#d9d9d9]"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Gallery Grid - Matching provided HTML/CSS structure */}
      <div className="hidden lg:block w-full">
        <div className="grid grid-cols-2 gap-1 items-start">

          {/* Main Large Image (Left) */}
          <div className="relative p-[2px] h-[500px]">
            <div
              onClick={() => openLightbox(0)}
              className="w-full h-full cursor-pointer overflow-hidden rounded-[20px]"
            >
              <img
                src={images[0] || tripData.mainImage}
                className="w-full h-full object-cover"
                alt="Featured"
              />
            </div>
          </div>

          {/* Right side 2x2 Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-0.5">
            {/* Top Left */}
            <div className="relative p-[2px] h-[250px]">
              <div onClick={() => openLightbox(1)} className="w-full h-full cursor-pointer overflow-hidden rounded-tl-[20px]">
                <img src={images[1]} className="w-full h-full object-cover" alt="Sub 1" />
              </div>
            </div>
            {/* Top Right */}
            <div className="relative p-[2px] h-[250px]">
              <div onClick={() => openLightbox(2)} className="w-full h-full cursor-pointer overflow-hidden rounded-tr-[20px]">
                <img src={images[2]} className="w-full h-full object-cover" alt="Sub 2" />
              </div>
            </div>
            {/* Bottom Left */}
            <div className="relative p-[2px] h-[250px]">
              <div onClick={() => openLightbox(3)} className="w-full h-full cursor-pointer overflow-hidden rounded-bl-[20px]">
                <img src={images[3]} className="w-full h-full object-cover" alt="Sub 3" />
              </div>
            </div>
            {/* Bottom Right with See All Overlay */}
            <div className="relative p-[2px] h-[250px]">
              <div onClick={() => openLightbox(4)} className="w-full h-full cursor-pointer overflow-hidden rounded-br-[20px] relative group">
                <img src={images[4]} className="w-full h-full object-cover" alt="Sub 4" />

                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-black/60">
                  <i
                    className="bi bi-arrow-right-circle text-white text-[35px] font-small leading-none inline-block antialiased align-[-0.125em] mb-2"
                    style={{ fontVariant: 'normal', textTransform: 'none' }}
                  ></i>
                  <span className="text-white text-[10px] md:text-[12px] lg:text-[14px] font-normal tracking-wide drop-shadow-lg ">
                    See All
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Slider Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-[110]"
            onClick={prevImage}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-[110]"
            onClick={nextImage}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slider Content */}
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="relative max-w-5xl w-full h-[70vh] flex items-center justify-center">
              <img
                src={images[currentIndex] || tripData.mainImage}
                alt={`Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="mt-6 text-white/60 font-medium tracking-widest text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
