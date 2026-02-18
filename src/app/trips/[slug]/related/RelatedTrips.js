"use client";
import { useRef } from "react";
import { tripData } from "../../data";

export default function RelatedTrips() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft } = scrollRef.current;
            const scrollTo = direction === "left"
                ? scrollLeft - 334 // Card width + gap
                : scrollLeft + 334;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="mt-10 mb-16 lg:mt-16 lg:mb-24 font-poppins">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-0">
                {/* Header with Title and Scroll Buttons */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-8 lg:mb-12 gap-4">
                    <h4 className="text-[20px] md:text-[23px] lg:text-[25px] font-extrabold text-[#200f0d] tracking-normal mb-0 text-center lg:text-left">
                        Related Trips For You
                    </h4>

                    <div className="hidden lg:flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-[30px] h-[30px] rounded-full bg-[#2755b0] text-white flex items-center justify-center transition-all hover:bg-blue-700"
                            type="button"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-[30px] h-[30px] rounded-full bg-[#2755b0] text-white flex items-center justify-center transition-all hover:bg-blue-700"
                            type="button"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrolling Trip Cards */}
                <div
                    ref={scrollRef}
                    className="flex gap-[15px] overflow-x-auto scroll-smooth pb-4 no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {tripData.relatedTrips.map((trip, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-[280px] lg:w-[calc((100%-45px)/4)] border border-[#ddd] rounded-[14px] overflow-hidden group transition-all duration-300 bg-white"
                        >
                            {/* Trip Image */}
                            <a href={trip.link || "#"}>
                                <div className="h-[250px] lg:h-[300px] overflow-hidden">
                                    <img
                                        src={trip.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={trip.title}
                                    />
                                </div>
                            </a>

                            {/* Trip Info */}
                            <div className="p-3">
                                <h5 className="text-[14.5px] lg:text-[16px] font-semibold text-black mb-3 pb-3 border-b border-[#a9a9a985] h-[50px] flex items-center">
                                    {trip.title}
                                </h5>

                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-black leading-[20px]">₹{trip.price}</span>
                                        <em className="text-[9px] font-medium text-[#333] not-italic whitespace-nowrap leading-[10px]">per person</em>
                                    </div>

                                    <div className="flex items-center gap-2 w-[65%] justify-end">
                                        {/* Contact Button */}
                                        <div className="w-[32px] h-[32px] rounded-full border border-[#2755b0] flex items-center justify-center transition-colors group-hover:bg-[#2755b0]">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2755b0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white transition-colors">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>

                                        {/* Trip Details Link */}
                                        <a
                                            href={trip.link || "#"}
                                            className="text-[12px] font-semibold bg-[#2755b0] text-white px-[6px] py-[5px] rounded-[6px] border border-[#2755b0] transition-colors group-hover:bg-white group-hover:text-[#2755b0]"
                                        >
                                            Trip Details
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
