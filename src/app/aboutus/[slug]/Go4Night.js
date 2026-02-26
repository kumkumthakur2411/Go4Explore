"use client";
import React from "react";

export default function Go4Night() {
    return (
        <section
            className="relative py-[25px] md:py-[60px] px-4 md:px-0 bg-center bg-no-repeat bg-cover overflow-hidden font-poppins"
            style={{ backgroundImage: "url('https://go4explore.com/assets/img/about/aim-night.png')" }}
        >
            <div className="container mx-auto max-w-[1320px]">
                {/* Title Section */}
                <div className="relative w-full py-[30px] md:py-[10px] overflow-hidden">

                    {/* Subtle Image-Matching Gradient */}
                    <div className="absolute inset-0 bg-gradient"></div>

                    <div className="relative z-10 max-w-[1000px] mx-auto px-4 text-center">

                        <h4 className="text-[18px] md:text-[34px] lg:text-[28px] font-bold text-white leading-tight mb-2">
                            Go4Explore’s AIM Night
                        </h4>

                        <p className="text-[14px] md:text-[16px] font-medium text-white/90 leading-[22px]">
                            <span className="font-semibold text-[#fff500]">
                                AIM Night 2025
                            </span>{" "}
                            – the annual general meeting (AGM) and award ceremony of Go4Explore,
                            brought together the company's core team members, employees,
                            business vendors and distinguished guests to review the company’s
                            performance, discuss future strategies, and recognize outstanding
                            contributions in the company’s growth.
                        </p>

                    </div>
                </div>

                {/* Image Gallery */}
                <div className="flex flex-wrap md:flex-nowrap -mx-1 md:mx-0 gap-y-2 md:gap-2 items-stretch mt-4 md:mt-12">
                    {/* Left Column - Large Image (7/12 width) */}
                    <div className="w-full px-1 md:px-0 md:w-[58.333%]">
                        <div className="relative overflow-hidden rounded-[20px] shadow-lg h-[250px] md:h-[405px] group">
                            <img
                                src="https://go4explore.com/assets/img/about/aim-night-1.jpg"
                                alt="AIM Night Highlight"
                                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    </div>

                    {/* Right Section - Small Images Grid (5/12 width) */}
                    <div className="w-full px-1 md:px-0 md:w-[41.666%] grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-2">
                            <div className="relative overflow-hidden rounded-[20px] shadow-md h-[200px] group">
                                <img
                                    src="https://go4explore.com/assets/img/about/aim-night-2.jpg"
                                    alt="AIM Night Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="relative overflow-hidden rounded-[20px] shadow-md h-[200px] group">
                                <img
                                    src="https://go4explore.com/assets/img/about/aim-night-4.jpg"
                                    alt="AIM Night Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="relative overflow-hidden rounded-[20px] shadow-md h-[200px] group">
                                <img
                                    src="https://go4explore.com/assets/img/about/aim-night-3.jpg"
                                    alt="AIM Night Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="relative overflow-hidden rounded-[20px] shadow-md h-[200px] group">
                                <img
                                    src="https://go4explore.com/assets/img/about/aim-night-5.jpg"
                                    alt="AIM Night Gallery"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
