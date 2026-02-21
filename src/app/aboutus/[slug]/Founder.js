"use client";
import React from "react";

export default function Founder() {
    return (
        <section
            className="relative w-full min-h-screen lg:min-h-[75vh] bg-center bg-no-repeat bg-cover py-12 md:py-[70px] flex items-center overflow-hidden font-poppins"
            style={{ backgroundImage: "url('https://go4explore.com/assets/img/about/about.png')" }}
        >
            <div className="max-w-[1320px] mx-auto px-4 w-full h-full">
                <div className="flex flex-wrap items-center">

                    {/* Text Content Column */}
                    <div className="w-full lg:w-[60%] xl:w-1/2 z-[2]">
                        <div className="text-black">

                            {/* Title Section */}
                            <div className="mb-8 text-center md:text-left">
                                <h4 className="text-[24px] md:text-[30px] font-bold md:font-extrabold leading-tight text-black">
                                    Meet the Founder
                                </h4>
                            </div>

                            {/* Founder Name & Title Pill */}
                            <div className="flex flex-wrap items-center justify-start gap-4 mb-8">
                                <div className="bg-[#212529] px-6 py-2 rounded-xl">
                                    <span className="text-[18px] md:text-[20px] font-bold text-white">
                                        Jony Jindal
                                    </span>
                                </div>
                                <h6 className="text-[16px] md:text-[18px] font-bold leading-none m-0 text-black">
                                    CEO, Founder
                                </h6>
                            </div>

                            {/* Bio Paragraphs */}
                            <div className="space-y-6 text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[26px] font-medium text-black text-left">
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
                    <div className="hidden lg:block lg:w-[40%] xl:w-1/2 relative min-h-[500px]">
                        <div className="absolute bottom-[-70px] right-0">
                            <img
                                src="https://go4explore.com/assets/img/about/founder.png"
                                alt="Founder"
                                className="max-w-[450px] xl:max-w-[500px] h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
