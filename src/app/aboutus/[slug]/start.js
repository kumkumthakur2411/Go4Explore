"use client";
import React from "react";

export default function Start() {
    return (
        <div className="relative w-full h-[79vh] flex justify-center items-center overflow-hidden font-poppins">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
            >
                <source src="https://d2qa7a8q0vuocm.cloudfront.net/assets/images/hero.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[2]"></div>

            {/* Content */}
            <div className="relative z-[3] text-center px-4">
                <h1 className="text-[35px] md:text-[65px] leading-[40px] md:leading-[75px] text-white font-bold">
                    We Hustle Together
                </h1>
            </div>
        </div>
    );
}
