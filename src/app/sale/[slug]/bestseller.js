"use client";
import React, { useRef } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";

export default function Bestseller() {
    const scrollRef = useRef(null);

    const destinations = [
        {
            title: "Leh Ladakh",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-1.jpg&w=828&q=75",
            link: "/trip/leh-ladakh-tour-packages",
        },
        {
            title: "Spiti Valley",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-2.jpg&w=828&q=75",
            link: "/trip/spiti-valley-tour-packages",
        },
        {
            title: "Kedarnath",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-3.jpg&w=828&q=75",
            link: "/trip/kedarnath-tour-packages",
        },
        {
            title: "Valley of Flowers",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-4.jpg&w=828&q=75",
            link: "/trips/valley-of-flowers-trek",
        },
        {
            title: "Hampta Pass",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-5.jpg&w=828&q=75",
            link: "/trips/hampta-pass-trek",
        },
        {
            title: "Manali",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-6.jpg&w=828&q=75",
            link: "/trip/manali-tour-packages",
        },
        {
            title: "Meghalaya",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-7.jpeg&w=828&q=75",
            link: "/trips/meghalaya-backpacking",
        },
        {
            title: "Kerala",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-8.jpeg&w=828&q=75",
            link: "/trips/kerala-backpacking-4n5d",
        },
        {
            title: "Valley of Flowers",
            img: "https://go4explore.com/_next/image?url=%2Fassets%2Fimg%2Fsale-page%2Fbestseller-4.jpg&w=828&q=75",
            link: "/trips/valley-of-flowers-trek",
        },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="max-w-[1320px] mx-auto px-4 lg:px-6 py-8">
            <div className="bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[15px] p-[30px]">
                {/* Header Section */}
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-[75%]">
                        <h4 className="text-[24px] font-extrabold leading-[35px] text-black">
                            Bestseller Destinations
                        </h4>
                    </div>
                    <div className="hidden lg:flex w-[25%] justify-end">
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="w-[30px] h-[30px] flex justify-center items-center bg-[#2755b0] text-white rounded-full hover:bg-opacity-100 transition-colors"
                                aria-label="Previous"
                            >
                                <GoChevronLeft />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="w-[30px] h-[30px] flex justify-center items-center bg-[#2755b0] text-white rounded-full hover:bg-opacity-100 transition-colors"
                                aria-label="Next"
                            >
                                <GoChevronRight />
                            </button>
                        </div>
                    </div>
                </div>

                {/* destinations Slider */}
                <div className="mt-5 md:mt-10 overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex gap-[10px] overflow-x-auto no-scrollbar scroll-smooth snap-x touch-pan-x"
                    >
                        {destinations.map((destination, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[142px] md:w-[calc((100%-30px)/4)] xl:w-[142px] snap-start group"
                            >
                                <a href={destination.link} className="block text-center">
                                    <div className="overflow-hidden aspect-[1.9/2.8] rounded-[98px]">
                                        <img
                                            src={destination.img}
                                            alt={destination.title}
                                            width={400}
                                            height={300}
                                            className="w-full h-full object-cover rounded-[100px] transition-transform duration-1000 group-hover:scale-105"
                                        />
                                    </div>
                                    <h5 className="mt-3 text-[16px] leading-[20px] font-medium text-[#222] capitalize">
                                        {destination.title}
                                    </h5>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
