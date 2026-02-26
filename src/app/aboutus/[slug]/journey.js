"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Journey() {
    const timelineData = [
        { year: "2017", text: "On 19th May, We started our journey to explore", side: "left", isSpecial: true },
        { year: "2018", text: "Collaborated With Nepal Tourism Board for Himalayan Travel Mart", side: "right" },
        { year: "2019", text: "Successfully summited mt. Friendship Peak near Manali", side: "left" },
        { year: "2020", text: "Invited by Honorable tourism minister of India to discuss post-covid scenario", side: "right" },
        { year: "2021", text: "Hosted travellers on our first ever International trip", side: "left" },
        { year: "2022", text: "Managed travel ops of india Ice Hockey team (under 20) at Asia & Oceania Championship", side: "right" },
        { year: "2023", text: "Expended our travel oprations in 11+ countries", side: "left" },
        { year: "2024", text: "Invited by Meta for Asia-Pacific Travel Summit in Singapore Headquarters", side: "right" },
        { year: "2025", text: "Here we are spreading happiness through travel", side: "left" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);
    const lineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveIndex(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0.5,
            }
        );

        itemRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-[10px] bg-white font-poppins overflow-hidden">
            <div className="max-w-[1320px] mx-auto px-4 md:px-[60px]">

                {/* Title */}
                <div className="flex justify-center mb-16">
                    <h4 className="text-[18px] md:text-[28px] font-bold text-[#200f0d]">
                        Our Journey So Far
                    </h4>
                </div>

                <div className="relative">

                    {/* Black dashed base line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-0 border-l-1 border-dashed border-black -translate-x-1/2 block"></div>

                    {/* Blue animated progress line */}
                    <div
                        ref={lineRef}
                        style={{
                            height: `${(activeIndex / (timelineData.length - 1)) * 100}%`,
                        }}
                        className="absolute left-1/2 top-0 w-0 border-l-2 border-[#2755b0] -translate-x-1/2 block z-[1] transition-all duration-700 ease-out"
                    />

                    <div className="space-y-4 md:space-y-0">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                data-index={index}
                                ref={(el) => (itemRefs.current[index] = el)}
                                className="relative h-[110px] md:h-[120px] flex items-center"
                            >

                                {/* Dot */}
                                <div
                                    className={`absolute left-1/2 -translate-x-1/2 w-[16px] md:w-[24px] h-[16px] md:h-[24px] rounded-full z-10 block transition-all duration-500
                                    ${index <= activeIndex
                                            ? "bg-[#2755b0] shadow-[0_0_12px_rgba(39,85,176,0.6)] scale-110"
                                            : "bg-black"}
                                    `}
                                ></div>

                                <div className={`flex flex-row items-center w-full ${item.side === "left" ? "flex-row" : "flex-row-reverse"}`}>

                                    {/* Year */}
                                    <div className={`w-1/2 flex justify-center 
                                        ${item.side === "left"
                                            ? "justify-end pr-[15px] md:pr-[25px]"
                                            : "justify-start pl-[15px] md:pl-[25px]"
                                        }`}
                                    >
                                        <div
                                            className={`border rounded-[10px] py-[3px] md:py-[5px] px-[10px] md:px-[16px] font-bold text-[14px] md:text-[18px] transition-all duration-500
                                            ${index <= activeIndex
                                                    ? "text-[#2755b0] border-[#2755b0] bg-[#eef3ff]"
                                                    : "text-black border-black"}
                                            `}
                                        >
                                            {item.year}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className={`w-1/2 flex justify-center
                                        ${item.side === "left"
                                            ? "justify-start pl-[15px] md:pl-[25px]"
                                            : "justify-end pr-[15px] md:pr-[25px]"
                                        }`}
                                    >
                                        <div className="rounded-[10px] bg-[#f1f3f7] py-[5px] md:py-[5px] px-[10px] md:px-[16px] text-center text-[10px] md:text-[14px] font-medium max-w-[140px] md:max-w-[280px] shadow-sm leading-tight">
                                            {item.text}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}