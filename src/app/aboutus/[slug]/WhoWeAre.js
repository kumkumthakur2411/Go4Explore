"use client";
import React from "react";

export default function WhoWeAre() {
    return (
        <section
            className="w-full h-auto min-h-screen bg-top bg-no-repeat bg-cover pt-[300px] md:pt-[200px] pb-[50px] relative font-poppins"
            style={{ backgroundImage: "url('https://go4explore.com/assets/img/about/who-we.webp')" }}
        >
            <div className="absolute inset-0 bg-black/10 z-[1]"></div>

            <div className="relative z-[2] w-full mt-auto">
                <div className="max-w-[1320px] mx-auto px-4">
                    <div className="flex justify-center">
                        <div className="w-full md:w-[75%] text-center mt-25">

                            {/* Title */}
                            <div className="mb-4">
                                <h4 className="text-[24px] md:text-[30px] font-extrabold leading-[32px] md:leading-[40px] text-[#fff500]">
                                    Who We Are?
                                </h4>
                            </div>

                            {/* Description */}
                            <p className="text-white text-[12px] md:text-[16px] leading-[20px] md:leading-[26px] my-[20px] md:my-[20px] font-normal">
                                Go4Explore is a community of avid travellers badly bitten by the travel bug thus providing you an unmatched travel experience as per your interest and comfort.
                                We curate personalized and fun-filled trips to unexplored Himalayan destinations. Choose the destination which you want to explore and you're done.
                                Our enthusiastic community of wanderers create journeys that will exceed your expectations. From being an experience promoter to provider, who knows travel better than us?
                                We design well-planned trip itineraries, trekking & camping activities without exceeding your budget.
                            </p>

                            {/* Stats Grid */}
                            <div className="flex flex-wrap -mx-2 md:-mx-3 mt-10">

                                <StatBox
                                    icon="https://go4explore.com/assets/img/about/icon-1.png"
                                    text="2500+ Trips Hosted PAN India & Abroad"
                                />
                                <StatBox
                                    icon="https://go4explore.com/assets/img/about/icon-2.png"
                                    text="Proudly operating in 15+ countries"
                                />
                                <StatBox
                                    icon="https://go4explore.com/assets/img/about/icon-3.png"
                                    text="30,000+ Happy Travelers"
                                />
                                <StatBox
                                    icon="https://go4explore.com/assets/img/about/icon-4.png"
                                    text="Team of 100+ Travel Enthusiasts"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function StatBox({ icon, text }) {
    return (
        <div className="w-1/2 md:w-1/4 px-2 md:px-3 mb-5 md:mb-0">
            <div className="flex flex-col items-center">
                <img
                    src={icon}
                    alt="icon"
                    className="max-w-[45px] md:max-w-[60px] h-auto object-contain"
                />
                <h5 className="text-white text-[12px] md:text-[14px] leading-[18px] md:leading-[22px] font-medium mt-4 md:mt-[20px] mb-0">
                    {text}
                </h5>
            </div>
        </div>
    );
}
