"use client";
import { useState } from "react";
import { tripData } from "../../data";

export default function Batches() {
    const [activeMonth, setActiveMonth] = useState("February");
    const months = ["February", "March", "April"];

    return (
        <section className="w-full bg-white p-5 lg:p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24 border border-[#eee]">
            <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#200f0d] mb-4 tracking-tight">Batches Available</h4>
            <hr className="my-3 border-t border-black opacity-30" />

            {/* Month Tabs */}
            <div className="flex justify-start lg:justify-end mb-6 overflow-x-auto no-scrollbar pb-2">
                <ul className="flex list-none p-0 m-0 gap-4">
                    {months.map((month) => (
                        <li key={month}>
                            <button
                                onClick={() => setActiveMonth(month)}
                                className={`px-0 py-1 text-[14px] lg:text-[15px] font-semibold transition-all relative whitespace-nowrap ${activeMonth === month
                                    ? "text-[#2755b0]"
                                    : "text-gray-400 hover:text-[#2755b0]"
                                    }`}
                                type="button"
                            >
                                {month}
                                {activeMonth === month && (
                                    <div className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-[#2755b0] rounded-full" />
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Batch Cards Grid */}
            <div className="w-full">
                <ul className="flex flex-wrap list-none p-0 m-0 gap-3 lg:justify-between">
                    {tripData.batches.slice(0, 2).map((batch, idx) => (
                        <li key={idx} className="w-full lg:w-[48%]">
                            <div className="flex items-center justify-between border border-[#eee] p-3.5 rounded-xl transition-all duration-300 hover:bg-[#f4f6fc] hover:border-[#2755b0] group">
                                <div className="flex flex-col">
                                    <h5 className="text-[13px] lg:text-[14px] leading-tight text-black font-bold m-0 group-hover:text-[#2755b0]">
                                        {idx === 0 ? "20 Feb 2026 - 24 Feb 2026" : "27 Feb 2026 - 03 Mar 2026"}
                                    </h5>
                                    <span className="text-[10px] text-gray-500 font-medium mt-1">Ex-Delhi</span>
                                </div>

                                <div className="shrink-0">
                                    <button
                                        type="button"
                                        className="bg-[#127c42] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                    >
                                        Available
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
