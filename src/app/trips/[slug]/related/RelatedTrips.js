"use client";
import { useRef } from "react";
import { tripData } from "../../data";

export default function RelatedTrips() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            // Scroll by one card width + gap on mobile, or by a set amount
            const scrollAmount = window.innerWidth < 768 ? 265 : 330;
            const scrollTo = direction === "left"
                ? scrollLeft - scrollAmount
                : scrollLeft + scrollAmount;

            scrollRef.current.scrollTo({
                left: scrollTo,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="py-[30px] scroll-mt-[66px] xl:scroll-mt-24 font-poppins bg-[#f9f9f9]">
            <div className="container mx-auto max-w-full xl:max-w-[1320px] lg:max-w-[1140px] md:max-w-[960px] sm:max-w-[720px]">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-3">
                    <div className="w-full md:w-3/4">
                        <div className="relative">
                            <h4 className="text-[18px] leading-[28px] text-center mt-2 mb-1 md:mt-0 md:mb-0 md:text-left md:text-[30px] font-extrabold md:leading-[40px] text-black">
                                Related Trips For You
                            </h4>
                        </div>
                    </div>

                    <div className="hidden md:flex md:w-1/4 justify-end">
                        <div className="flex gap-1">
                            <button
                                onClick={() => scroll("left")}
                                className="text-white rounded-full bg-[#2755b0] w-[30px] h-[30px] flex items-center justify-center m-[5px]"
                                aria-label="Scroll Left"
                            >
                                <i className="bi bi-chevron-left text-[14px] font-bold"></i>
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="text-white rounded-full bg-[#2755b0] w-[30px] h-[30px] flex items-center justify-center m-[5px]"
                                aria-label="Scroll Right"
                            >
                                <i className="bi bi-chevron-right text-[14px] font-bold"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cards Slider Section */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        className="flex gap-[15px] overflow-x-auto scroll-smooth pb-8 no-scrollbar touch-pan-x"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {tripData.relatedTrips.map((trip, idx) => (
                            <div
                                key={idx}
                                className="relative z-[1] flex-shrink-0 w-[250px] h-full md:w-[312px] lg:w-[calc((100%-45px)/4)] border border-[#ddd] rounded-[14px] overflow-hidden group transition-transform duration-500 ease-in-out bg-white hover:shadow-2xl hover:border-blue-100 flex flex-col box-content"
                            >
                                {/* Image Container */}
                                <a href={`/trips/${trip.title.toLowerCase().replace(/\s+/g, '-')}`} className="block relative overflow-hidden h-[200px] md:h-[300px]">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
                                    <img
                                        src={trip.image}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={trip.title}
                                    />
                                </a>

                                {/* Card Body */}
                                <div className="p-[12px] flex flex-col flex-grow">
                                    <h5 className="text-[16px] font-bold text-black mb-3 pb-3 border-b border-[#a9a9a985] h-[54px] overflow-hidden leading-[21px] flex items-center group-hover:text-[#2755b0] transition-colors">
                                        {trip.title}
                                    </h5>

                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex flex-col">
                                            <span className="text-[13px] font-extrabold text-[#200f0d] leading-[20px]">₹{trip.price}</span>
                                            <em className="text-[9px] font-semibold text-gray-500 not-italic block">per person</em>
                                        </div>

                                        <div className="flex items-center gap-2 justify-end">
                                            {/* Phone Icon/Action */}
                                            <div className="w-[32px] h-[32px] rounded-full border border-[#2755b0] flex items-center justify-center text-[#2755b0] transition-all duration-300 group-hover:bg-[#2755b0] group-hover:text-white cursor-pointer">
                                                <i className="bi bi-telephone-outbound text-[14px]"></i>
                                            </div>

                                            {/* Details Button */}
                                            <a
                                                href={`/trips/${trip.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                className="text-[11px] font-bold bg-[#2755b0] text-white px-3 py-2 rounded-sm border border-[#2755b0] transition-all duration-300 hover:bg-white hover:text-[#2755b0] active:scale-95 shadow-sm"
                                            >
                                                Trip Details
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Fading Edges for scroll indicator */}
                    <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-gray-50/50 to-transparent pointer-events-none hidden md:block"></div>
                </div>
            </div>
        </div>
    );
}

