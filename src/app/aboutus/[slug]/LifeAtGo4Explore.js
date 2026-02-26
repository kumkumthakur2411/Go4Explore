"use client";
import React from "react";

export default function LifeAtGo4Explore() {
    return (
        <section className="py-[40px] md:py-[60px] bg-white font-poppins overflow-hidden text-[#35211f]">
            <div className="container mx-auto px-4 max-w-[1320px]">

                {/* Section Title */}
                <div className="text-center mb-[40px] md:mb-[40px]">
                    <h4 className="text-[18px] md:text-[28px] lg:text-[30px] font-extrabold leading-tight">
                        Life at Go4Explore
                    </h4>
                </div>

                {/* Row Grid Layout */}
                <div className="flex flex-wrap -mx-1 md:-mx-2 gap-y-4 mt-6">

                    {/* Column 1: Portrait (Left) */}
                    <div className="w-full md:w-1/6 px-1 md:px-1">
                        <div
                            className="bg-cover bg-center bg-no-repeat rounded-[15px] w-full min-h-[250px] md:h-full transition-transform duration-300 hover:scale-[1.02]"
                            style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-1.webp')" }}
                        ></div>
                    </div>

                    {/* Column 2: Large + Split (Nested Row) */}
                    <div className="w-full md:w-1/3 px-1 md:px-1">
                        <div className="flex flex-col gap-[0.25rem]">
                            <div
                                className="bg-cover bg-center bg-no-repeat rounded-[15px] w-full h-[250px] transition-transform duration-300 hover:scale-[1.02]"
                                style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-2.webp')" }}
                            ></div>
                            <div className="flex gap-[0.5rem] mt-[0.25rem]">
                                <div
                                    className="w-1/3 md:w-1/2 bg-cover bg-center bg-no-repeat rounded-[15px] h-[200px] transition-transform duration-300 hover:scale-[1.02]"
                                    style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-3.webp')" }}
                                ></div>
                                <div
                                    className="w-2/3 md:w-1/2 bg-cover bg-center bg-no-repeat rounded-[15px] h-[200px] transition-transform duration-300 hover:scale-[1.02]"
                                    style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-4.webp')" }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Stacked Small + Square */}
                    <div className="w-1/2 md:w-1/6 px-1 md:px-1">
                        <div className="flex flex-col">
                            <div
                                className="bg-cover bg-center bg-no-repeat rounded-[15px] w-full h-[250px] transition-transform duration-300 hover:scale-[1.02]"
                                style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-5.webp')" }}
                            ></div>
                            <div
                                className="bg-cover bg-center bg-no-repeat rounded-[15px] w-full h-[200px] mt-[0.5rem] transition-transform duration-300 hover:scale-[1.02]"
                                style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-6.webp')" }}
                            ></div>
                        </div>
                    </div>

                    {/* Column 4: Big Image (Right) */}
                    <div className="w-1/2 md:w-1/3 px-1 md:px-1">
                        <div
                            className="bg-cover bg-center bg-no-repeat rounded-[15px] w-full h-full min-h-[458px] transition-transform duration-300 hover:scale-[1.02]"
                            style={{ backgroundImage: "url('https://go4explore.com/assets/img/career/golife-7.webp')" }}
                        ></div>
                    </div>

                </div>
            </div>
        </section>
    );
}
