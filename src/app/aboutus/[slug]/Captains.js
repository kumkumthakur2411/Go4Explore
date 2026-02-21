"use client";
import React from "react";

export default function Captains() {
    return (
        <div
            className="relative w-full min-h-[300px] md:min-h-[450px] flex items-center bg-no-repeat bg-cover bg-center overflow-hidden font-poppins"
            style={{ backgroundImage: "url('https://go4explore.com/assets/img/about/captionbg.webp')" }}
        >
            <div className="max-w-[1320px] mx-auto px-4 w-full">
                <div className="flex flex-wrap items-center py-10 md:py-0">

                    {/* Column 1: Description Text */}
                    <div className="w-full lg:w-1/3 order-2 lg:order-1 text-center lg:text-left mb-6 lg:mb-0 px-4">
                        <p className="text-white text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] font-medium">
                            We at Go4Explore are proud to boast that we have a team of over <strong className="font-bold text-[#fff500]">50+ strong & coolest Trip Captains</strong> who don't just have profound knowledge of the destination but also are committed to providing the best travel experience to our dear travellers.
                        </p>
                    </div>

                    {/* Column 2: Captain Image */}
                    <div className="w-full lg:w-1/3 order-3 lg:order-2 flex justify-center items-end relative h-[300px] md:h-[450px]">
                        <div className="absolute bottom-0 w-full flex justify-center">
                            <img
                                src="https://go4explore.com/assets/img/about/trip-captain.png"
                                alt="Trip Captain"
                                className="w-auto h-[270px] md:h-[450px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Column 3: 50+ Heading */}
                    <div className="w-full lg:w-1/3 order-1 lg:order-3 text-center lg:text-right mb-6 md:mb-10 lg:mb-0 px-4">
                        <div className="text-white text-center lg:text-right font-poppins">
                            <div className="inline-flex flex-col items-center lg:items-end leading-none">

                                {/* Row 1: 50+ on-ground & */}
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[35px] md:text-[45px] font-bold text-[#fff500] leading-[1] md:leading-[55px]">50+</span>
                                    <span className="text-[20px] md:text-[27px] font-semibold text-white leading-[1] md:leading-[37px]">on-ground &</span>
                                </div>

                                {/* Row 2: coolest Trip Captains */}
                                <div className="flex items-baseline gap-2 -mt-1 md:-mt-2 whitespace-nowrap">
                                    <span className="text-[20px] md:text-[27px] font-semibold text-white leading-[1] whitespace-nowrap">coolest</span>
                                    <span className="text-[35px] md:text-[45px] font-bold text-[#fff500] leading-[1] whitespace-nowrap">Trip Captains</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
