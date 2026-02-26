"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const reelsData = [
    {
        id: "v-9",
        video: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/about/v-9.mp4"
    },
    {
        id: "v-11",
        video: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/about/v-11.mp4"
    },
    {
        id: "v-12",
        video: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/about/v-12.mp4"
    },
    {
        id: "v-13",
        video: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/about/v-13.mp4"
    },
    {
        id: "v-14",
        video: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/about/v-14.mp4"
    },
    {
        id: "v-10",
        video: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/about/v-10.mp4"
    }
];

function ReelSlide({ reel, isActive }) {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isActive) {
            videoRef.current.play().catch(() => { });
        } else {
            videoRef.current.pause();
        }
    }, [isActive]);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    return (
        <div className="relative group w-full h-[400px] md:h-[600px] rounded-[20px] md:rounded-[20px] overflow-hidden bg-black transition-transform duration-500 hover:scale-[1.01]">
            <video
                ref={videoRef}
                src={reel.video}
                className="w-full h-full object-cover"
                muted={isMuted}
                loop
                playsInline
                autoPlay
            />

            {/* Bottom Right Mute Button */}
            <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 z-20 w-7 h-7 md:w-9 md:h-9 flex items-center justify-center bg-black/60 rounded-full text-white transition-all hover:bg-black/80 active:scale-90"
            >
                {isMuted ? <HiVolumeOff size={10} className="md:w-[18px] md:h-[18px]" /> : <HiVolumeUp size={10} className="md:w-[18px] md:h-[18px]" />}
            </button>

            <div className="absolute inset-x-0 bottom-0 h-16 md:h-24 bg-gradient-to-t from-black/40 to-transparent pointer-none"></div>
        </div>
    );
}

export default function AimNightReels() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-8 md:py-16 bg-white font-poppins overflow-hidden">
            <div className="container mx-auto px-4 max-w-[1320px]">
                {/* Navigation Section at Top Right */}
                <div className="flex justify-end mb-4 md:mb-8">
                    <div className="flex items-center gap-2 md:gap-8">
                        <button className="reel-nav-prev cursor-pointer w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#2556B0] text-white transition-all hover:bg-blue-700 active:scale-90 shadow-md">
                            <IoIosArrowBack size={10} className="md:w-[18px] md:h-[18px]" />
                        </button>
                        <button className="reel-nav-next cursor-pointer w-8 h-8 md:w-8 md:h-8 flex items-center justify-center rounded-full bg-[#2556B0] text-white transition-all hover:bg-blue-700 active:scale-90 shadow-md">
                            <IoIosArrowForward size={10} className="md:w-[18px] md:h-[18px]" />
                        </button>
                    </div>
                </div>

                {/* Swiper Section */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".reel-nav-prev",
                            nextEl: ".reel-nav-next",
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        loop={true}
                        spaceBetween={12}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 8,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 12,
                            }
                        }}
                        className="rounded-[20px] md:rounded-[30px]"
                    >
                        {reelsData.map((reel, index) => (
                            <SwiperSlide key={reel.id}>
                                <ReelSlide reel={reel} isActive={activeIndex === index} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}


