"use client";
import React, { useRef } from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { SlPhone } from "react-icons/sl";


const TourCard = ({ tour }) => {
    return (
<<<<<<< HEAD
        <div className="flex-shrink-0 w-[170.87px] md:w-[305px] h-[300px] md:h-[400px] relative rounded-[16px] overflow-hidden shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] transition-all duration-400 group">
=======
        <div className="flex-shrink-0 w-[170.87px] md:w-[305px] h-[300px] md:h-[400px] relative rounded-[10px] overflow-hidden shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] transition-all duration-400 group">
>>>>>>> a69f63122113dea3d4b7027dc5595f7fefecba4d
            <a href={tour.link} className="block h-full relative border-none!">
                {/* Image Overlay/Container */}
                <div className="relative h-full rounded-[16px] overflow-hidden">
                    <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Badges Container */}
                    <div className="absolute top-[3%] left-0 w-full z-[2]">
<<<<<<< HEAD
                        <span className="inline-block text-white px-[8px] py-[3px] md:px-[14px] md:py-[6px] rounded-r-[4px] text-[9px] md:text-[11px] font-extrabold md:font-bold uppercase tracking-[0.5px] md:tracking-[0.8px] shadow-[0_4px_12px_rgba(39,85,176,0.4)] bg-gradient-to-r from-[#ff3532] via-[#ff6640] to-[#ff8b4b]">
                            Discount: ₹{tour.discount} OFF
                        </span>
                        <span className="absolute bottom-[-100%] md:bottom-[-14%] right-[4%] bg-[#fff500] text-black px-[6px] py-[4px] md:px-[8px] md:py-[6px] rounded-[6px] md:rounded-[8px] text-[10px] md:text-[12px] font-bold md:font-semibold backdrop-blur-[10px] border border-white/30 translate-y-[140px] md:translate-y-[200px]">
=======
                        <span className="inline-block text-white px-[8px] py-[3px] md:px-[14px] md:py-[6px] rounded-r-[1px] text-[9px] md:text-[11px] font-extrabold md:font-bold uppercase tracking-[0.5px] md:tracking-[0.8px] shadow-[0_4px_12px_rgba(39,85,176,0.4)] bg-gradient-to-r from-[#ff3532] via-[#ff6640] to-[#ff8b4b]">
                            Discount: ₹{tour.discount} OFF
                        </span>
                        <span className="absolute bottom-[-100%] md:bottom-[-110%] right-[4%] bg-[#fff500] text-black px-[6px] py-[4px] md:px-[10px] md:py-[8px] rounded-[6px] md:rounded-[8px] text-[10px] md:text-[12px] font-bold md:font-semibold backdrop-blur-[5px] border border-white/30 translate-y-[140px] md:translate-y-[200px]">
>>>>>>> a69f63122113dea3d4b7027dc5595f7fefecba4d
                            {tour.duration}
                        </span>
                    </div>
                </div>

                {/* Content Section (Bottom Gradient) */}
<<<<<<< HEAD
                <div className="absolute bottom-0 left-0 w-full p-[40px_10px_15px] md:p-[80px_20px_20px] bg-gradient-to-t from-black via-black/80 to-transparent z-[3]">
                    <h5 className="text-[13px] md:text-[16px] font-bold md:font-medium text-white mb-2 leading-[1.2] transition-colors group-hover:text-[#fff500] line-clamp-1">
                        {tour.title}
                    </h5>

                    <div className="flex flex-col gap-2">
                        <div className="text-white flex items-baseline gap-1 flex-wrap">
                            <span className="text-[14px] md:text-[18px] font-extrabold">₹{tour.currentPrice}</span>
                            <span className="text-[10px] md:text-[11px] text-[#eee] line-through">₹{tour.originalPrice}</span>
                            <em className="text-[9px] font-medium not-italic text-[#ccc]">per person</em>
                        </div>

                        <div className="flex items-center justify-between gap-1">
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-white/50 flex items-center justify-center transition-colors group-hover:bg-white group-hover:text-black">
                                <i className="bi bi-telephone text-[12px] md:text-[14px]"></i>
                            </div>
                            <span className="bg-white text-black text-[10px] md:text-[12px] font-bold px-[10px] py-[6px] md:px-[6px] md:py-[5px] rounded-[4px] md:rounded-[6px] border border-white shrink-0">
=======
                <div className="absolute bottom-0 left-0 w-full p-[80px_20px_20px] bg-[linear-gradient(180deg,rgba(148,118,47,0)_0%,#000000_100%)] z-[3]">
                    <div>
                        <h5 className="text-[15px] leading-[20px] md:text-[18px] md:leading-[22px] text-white border-b border-white/50 pb-[10px] mb-2 font-medium font-poppins">
                            {tour.title}
                        </h5>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-[14px] leading-[15px]">
                            <span className="text-[13px] leading-[20px] font-bold text-white">₹{tour.currentPrice}</span>
                            <span className="text-[11px] text-[#eee] line-through ml-1">₹{tour.originalPrice}</span>
                            <em className="block text-[9px] leading-[10px] text-[#eee] font-medium not-italic whitespace-nowrap">per person</em>
                        </div>

                        <div className="flex items-center justify-end w-full">
                            <div className="mx-[3px] w-8 h-8 rounded-full border border-white flex justify-center items-center transition-all duration-400 hover:bg-[#2755b0] hover:border-[#2755b0]">
                                <SlPhone className="text-[17px] text-white" />
                            </div>
                            <a
                                href={tour.link}
                                className="text-[12px] font-semibold text-black rounded-[6px] px-[6px] py-[5px] border border-white bg-white no-underline transition-all duration-400 hover:bg-[#2755b0] hover:border-[#2755b0] hover:text-white shrink-0"
                            >
>>>>>>> a69f63122113dea3d4b7027dc5595f7fefecba4d
                                Trip Details
                            </a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

const TourSection = ({ title, tours }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 330;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="mt-12">
            {/* Category Header */}
            <div className="flex flex-wrap items-center justify-between mb-8">
                <div className="w-full md:w-3/4">
                    <h4 className="text-[24px] md:text-[30px] font-bold text-black">
                        {title}
                    </h4>
                </div>
                <div className="hidden md:flex w-1/4 justify-end">
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="w-[30px] h-[30px] flex justify-center items-center bg-[#2755b0] text-white rounded-full hover:bg-opacity-80 transition-colors"
                        >
                            <GoChevronLeft />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-[30px] h-[30px] flex justify-center items-center bg-[#2755b0] text-white rounded-full hover:bg-opacity-80 transition-colors"
                        >
                            <GoChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {/* Tours Slider */}
            <div className="relative overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-[10px] md:gap-[17px] overflow-x-auto no-scrollbar scroll-smooth snap-x touch-pan-x pb-4"
                >
                    {tours.map((tour, index) => (
                        <div key={index} className="snap-start">
                            <TourCard tour={tour} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function Tours() {
    const ladakhTours = [
        {
            title: "Manali Leh Backpacking Bike Trip",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/22840620250217141818.png",
            discount: "3500",
            duration: "9 Days 8 Nights",
            currentPrice: "29,999",
            originalPrice: "33,499",
            link: "/trips/manali-leh-backpacking-bike-trip"
        },
        {
            title: "Manali Leh Srinagar",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/24468820250217151702.png",
            discount: "3000",
            duration: "10 Days 9 Nights",
            currentPrice: "29,999",
            originalPrice: "32,999",
            link: "/trips/manali-leh-srinagar"
        },
        {
            title: "Leh Ladakh with Turtuk",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/34294120250217145015.png",
            discount: "2000",
            duration: "7 Days 6 Nights",
            currentPrice: "22,999",
            originalPrice: "24,999",
            link: "/trips/leh-ladakh-with-turtuk"
        },
        {
            title: "Leh Ladakh With Tso Moriri Hanle & Umlingla",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/20011020250217145838.png",
            discount: "2000",
            duration: "9 Days 8 Nights",
            currentPrice: "20,999",
            originalPrice: "22,999",
            link: "/trips/leh-ladakh-with-umlingla-hanle"
        },
        {
            title: "Manali Leh Srinagar With Tso Moriri Hanle & Umlingla",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/38552720250308073455.png",
            discount: "3000",
            duration: "12 Days 11 Nights",
            currentPrice: "31,999",
            originalPrice: "34,999",
            link: "/trips/manali-leh-srinagar-with-umlingla-hanle"
        }
    ];

    const spitiTours = [
        {
            title: "Winter Spiti",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/39542020240830061322.png",
            discount: "2000",
            duration: "7 Days 6 Nights",
            currentPrice: "17,999",
            originalPrice: "19,999",
            link: "/trips/winter-spiti"
        },
        {
            title: "Spiti Valley- Manali Edition",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/9191320250203134935.png",
            discount: "2000",
            duration: "5 Days 4 Nights",
            currentPrice: "14,499",
            originalPrice: "16,499",
            link: "/trips/spiti-valley-manali-edition"
        },
        {
            title: "Spiti Valley- Manali Edition",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/9191320250203134935.png",
            discount: "2000",
            duration: "5 Days 4 Nights",
            currentPrice: "14,499",
            originalPrice: "16,499",
            link: "/trips/spiti-valley-manali-edition"
        },
        {
            title: "Spiti Valley- Manali Edition",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/9191320250203134935.png",
            discount: "2000",
            duration: "5 Days 4 Nights",
            currentPrice: "14,499",
            originalPrice: "16,499",
            link: "/trips/spiti-valley-manali-edition"
        },
        {
            title: "Spiti Valley- Manali Edition",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/9191320250203134935.png",
            discount: "2000",
            duration: "5 Days 4 Nights",
            currentPrice: "14,499",
            originalPrice: "16,499",
            link: "/trips/spiti-valley-manali-edition"
        }
    ];

    const weekendTours = [
        {
            title: "Jibhi & Tirthan Valley",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/30341920250625101558.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "6,499",
            originalPrice: "6,999",
            link: "/trips/jibhi-tirthan-valley"
        },
        {
            title: "Kasol Kheerganga Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/957820240826103048.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "6,499",
            originalPrice: "6,999",
            link: "/trips/kasol-kheerganga-trek"
        },
        {
            title: "Kasol Kheerganga Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/957820240826103048.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "6,499",
            originalPrice: "6,999",
            link: "/trips/kasol-kheerganga-trek"
        },
        {
            title: "Kasol Kheerganga Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/957820240826103048.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "6,499",
            originalPrice: "6,999",
            link: "/trips/kasol-kheerganga-trek"
        },
        {
            title: "Kasol Kheerganga Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/957820240826103048.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "6,499",
            originalPrice: "6,999",
            link: "/trips/kasol-kheerganga-trek"
        }
    ];

    const backpackingTours = [
        {
            title: "Meghalaya Backpacking",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/34404220250703080227.png",
            discount: "3000",
            duration: "6 Days 5 Nights",
            currentPrice: "20,999",
            originalPrice: "23,999",
            link: "/trips/meghalaya-backpacking"
        },
        {
            title: "Meghalaya Backpacking",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/34404220250703080227.png",
            discount: "3000",
            duration: "6 Days 5 Nights",
            currentPrice: "20,999",
            originalPrice: "23,999",
            link: "/trips/meghalaya-backpacking"
        },
        {
            title: "Meghalaya Backpacking",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/34404220250703080227.png",
            discount: "3000",
            duration: "6 Days 5 Nights",
            currentPrice: "20,999",
            originalPrice: "23,999",
            link: "/trips/meghalaya-backpacking"
        },
        {
            title: "Meghalaya Backpacking",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/34404220250703080227.png",
            discount: "3000",
            duration: "6 Days 5 Nights",
            currentPrice: "20,999",
            originalPrice: "23,999",
            link: "/trips/meghalaya-backpacking"
        }
    ];

    const trekTours = [
        {
            title: "Yulla Kanda Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/6499120250402063156.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "7,999",
            originalPrice: "8,499",
            link: "/trips/yulla-kanda-trek"
        },
        {
            title: "Yulla Kanda Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/6499120250402063156.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "7,999",
            originalPrice: "8,499",
            link: "/trips/yulla-kanda-trek"
        },
        {
            title: "Yulla Kanda Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/6499120250402063156.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "7,999",
            originalPrice: "8,499",
            link: "/trips/yulla-kanda-trek"
        },
        {
            title: "Yulla Kanda Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/6499120250402063156.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "7,999",
            originalPrice: "8,499",
            link: "/trips/yulla-kanda-trek"
        },
        {
            title: "Yulla Kanda Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/6499120250402063156.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "7,999",
            originalPrice: "8,499",
            link: "/trips/yulla-kanda-trek"
        },
        {
            title: "Yulla Kanda Trek",
            image: "https://d2qa7a8q0vuocm.cloudfront.net/images/6499120250402063156.png",
            discount: "500",
            duration: "3 Days 2 Nights",
            currentPrice: "7,999",
            originalPrice: "8,499",
            link: "/trips/yulla-kanda-trek"
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1320px] mx-auto px-4 lg:px-6">
                {/* Main Title Section */}
                <div className="text-center mb-12">
                    <h4 className="text-[18px] leading-[28px] text-center mt-2 mb-1 md:mt-0 md:mb-2 md:text-[30px] md:leading-[40px] font-extrabold text-black">
                        Early Bird Offers : Season&apos;s Top Demand!
                    </h4>
                    <p className="max-w-[1430px] mx-auto text-[16px] font-medium leading-[24px] text-[#222] mt-3">
                        Where do you wish to go this season 2026? From exciting Backpacking Trips to quick
                        Weekend Getaways and scenic Himalayan Treks, checkout the wide range of destinations you can travel to.
                    </p>
                </div>

                {/* Categories */}
                <TourSection title="Leh Ladakh Tours 2026" tours={ladakhTours} />
                <TourSection title="Spiti Valley Tours 2026" tours={spitiTours} />
                <TourSection title="Weekend Getaways" tours={weekendTours} />
                <TourSection title="Backpacking Trips" tours={backpackingTours} />
                <TourSection title="Himalayan Treks" tours={trekTours} />
            </div>
        </section>
    );
}
