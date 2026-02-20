"use client";
import React from "react";

export default function WeOffer() {
    const offers = [
        { title: "Fixed-Departures", icon: "https://go4explore.com/assets/img/about/offer-1.webp" },
        { title: "Customized Packages", icon: "https://go4explore.com/assets/img/about/offer-2.webp" },
        { title: "International Trips", icon: "https://go4explore.com/assets/img/about/offer-3.webp" },
        { title: "Trekking", icon: "https://go4explore.com/assets/img/about/offer-4.webp" },
        { title: "Bike Trips", icon: "https://go4explore.com/assets/img/about/offer-3.webp" },
        { title: "Corporate Trips", icon: "https://go4explore.com/assets/img/about/offer-4.webp" },
    ];

    return (
        <section className="py-[60px] bg-white font-poppins">
            <div className="max-w-[1320px] mx-auto px-4">

                {/* Section Title */}
                <div className="text-center mb-[40px] md:mb-[60px]">
                    <h4 className="text-[24px] md:text-[30px] font-bold text-[#200f0d]">
                        What We Offer
                    </h4>
                </div>

                {/* Offers Grid */}
                <div className="flex flex-wrap -mx-3 mt-12 md:mt-16">
                    {offers.map((offer, index) => (
                        <div key={index} className="w-1/2 md:w-1/6 px-3 mb-10 md:mb-0">
                            <div className="flex flex-col items-center">
                                {/* Icon Circle */}
                                <div className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full bg-[#2755b0] flex items-center justify-center transition-transform hover:scale-110 duration-300">
                                    <img
                                        src={offer.icon}
                                        alt={offer.title}
                                        className="w-[45px] md:w-[60px] h-auto object-contain"
                                    />
                                </div>
                                {/* Title */}
                                <h5 className="text-[14px] md:text-[15px] leading-[25px] font-semibold text-black text-center mt-4 md:mt-5">
                                    {offer.title}
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
