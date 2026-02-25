"use client";
import React from "react";

export default function Founder() {
    return (
        <>
            {/* Mobile View - Only visible on screens smaller than 768px */}
            <section
                className="block md:hidden pt-[30px] pb-0 bg-center bg-no-repeat bg-cover font-poppins text-[#35211f] overflow-x-hidden"
                style={{
                    backgroundImage:
                        "url('https://go4explore.com/assets/img/about/about.png')",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col">

                        {/* Founder Text */}
                        <div className="w-full">
                            <div className="founder-text text-center">

                                <div className="mb-4">
                                    <h4 className="text-[18px] font-extrabold text-[#200f0d]">
                                        Meet the Founder
                                    </h4>
                                </div>

                                <div className="mb-6 flex items-center justify-start gap-3">
                                    <div className="bg-[#212529] px-3 py-1 rounded-[12px]">
                                        <span className="text-[16px] font-medium text-white">
                                            Jony Jindal
                                        </span>
                                    </div>
                                    <h6 className="text-[16px] font-bold text-[#35211f]">
                                        CEO, Founder
                                    </h6>
                                </div>

                                <div className="space-y-4 text-[12px] leading-[18px] text-left">
                                    <p>
                                        In 2017, Mr Jony Jindal started his journey and went on his solo
                                        trip from Kashmir to Kanyakumari & further Amritsar to Manipur at
                                        the age of 19. He has successfully done some amazing high altitude
                                        treks like Mount Everest base camp, Gokyo Lake trek, Alpather Lake
                                        trek, climbed Mount Friendship Peak and many more.
                                    </p>

                                    <p>
                                        He combined his passion for traveling and skills of digital
                                        marketing to create a platform helping out people who want to
                                        travel in a budget-friendly manner with like-minded people and
                                        solving the problem of traveling in Himalayan regions by
                                        organizing group trips to offbeat and untouched places.
                                    </p>

                                    <p>
                                        He worked with various tourism boards and hospitality brands like
                                        Incredible India, Nepal Tourism, Manipur Tourism, Madhya Pradesh
                                        Tourism, Delhi Tourism and Sterling Holidays to name a few.
                                        Recently he got invited by the Ministry of Tourism to discuss the
                                        “future of travel industry” with the Tourism Minister of India.
                                        Mr Jony Jindal also managed the Indian Ice Hockey team in the
                                        Asian Championship at Bangkok.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Founder Image (Touches Bottom) */}
                        <div className="relative w-full mt-8">
                            <img
                                src="https://go4explore.com/assets/img/about/founder.png"
                                alt="Founder"
                                className="w-full max-w-[350px] mx-auto h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* Desktop View - Hidden on mobile, visible on md and larger */}
            < section
                className="hidden md:flex relative w-full md:min-h-[75vh] lg:min-h-[75vh] bg-center bg-no-repeat bg-cover py-12 md:py-[70px] items-center overflow-hidden font-poppins"
                style={{ backgroundImage: "url('https://go4explore.com/assets/img/about/about.png')" }
                }
            >
                <div className="max-w-[1320px] mx-auto px-4 w-full h-full">
                    <div className="flex items-center">

                        {/* Text Content Column */}
                        <div className="w-full lg:w-[80%] xl:w-1/2 z-[2]">
                            <div className="text-black">

                                {/* Title Section */}
                                <div className="mb-8 text-center md:text-left">
                                    <h4 className="text-[24px] md:text-[30px] font-bold md:font-extrabold leading-tight text-black">
                                        Meet the Founder
                                    </h4>
                                </div>

                                {/* Founder Name & Title Pill */}
                                <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
                                    <div className="bg-[#212529] px-4 py-2 rounded-xl">
                                        <span className="text-[18px] md:text-[15px] font-medium text-white">
                                            Jony Jindal
                                        </span>
                                    </div>
                                    <h6 className="text-[16px] md:text-[15px] font-bold leading-none m-0 text-black">
                                        CEO, Founder
                                    </h6>
                                </div>

                                {/* Bio Paragraphs */}
                                <div className="space-y-6 text-[14px] md:text-[14px] lg:text-[16px] leading-[22px] md:leading-[26px] font-normal text-left">
                                    <p>
                                        In 2017, Mr Jony Jindal started his journey and went on his solo trip from Kashmir to Kanyakumari &amp; further Amritsar to Manipur at the age of 19. He has successfully done some amazing high altitude treks like Mount Everest base camp, Gokyo Lake trek, Alpather Lake trek, climbed Mount Friendship Peak and many more.
                                    </p>
                                    <p>
                                        He combined his passion for traveling and skills of digital marketing to create a platform helping out people who want to travel in a budget-friendly manner with like-minded people. and solving the problem of traveling in Himalayan regions by organizing group trips to offbeat and untouched places.
                                    </p>
                                    <p>
                                        He worked with various tourism boards and hospitality brands like Incredible India, Nepal Tourism, Manipur Tourism, Madhya Pradesh Tourism, Delhi Tourism and Sterling Holidays to name a few. Recently He got invited by the Ministry of Tourism to discuss the “future of travel industry” with the Tourism Minister of India. Mr Jony Jindal also managed the Indian Ice Hockey team in the Asian Championship at Bangkok.
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Founder Image Column (Desktop) */}
                        <div className="hidden lg:block lg:w-[80%] xl:w-1/2 relative min-h-[550px]">

                            <img
                                src="https://go4explore.com/assets/img/about/founder.png"
                                alt="Founder"
                                className="absolute top-3 right-0 max-w-[450px] xl:max-w-[500px] h-auto object-contain"
                            />
                        </div>

                    </div>
                </div>
            </section >
        </>
    );
}

