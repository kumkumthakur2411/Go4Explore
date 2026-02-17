"use client";
import { useState } from "react";
import { tripData } from "../../data";

export default function Batches() {
    const [activeMonth, setActiveMonth] = useState("February");
    const months = ["February", "March", "April"];

    return (
        <section id="batches" className="w-full bg-white p-[30px] rounded-[15px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] font-poppins scroll-mt-24">
            <h4 className="text-[24px] font-semibold text-[#200f0d] mb-4 tracking-normal">Batches Available</h4>
            <hr className="border-[#dee2e6] mb-8 opacity-50" />

            {/* Month Tabs */}
            <div className="flex justify-end p-[12px] mb-8">
                <ul className="flex list-none p-0 m-0">
                    {months.map((month) => (
                        <li key={month} className="ml-2">
                            <button
                                onClick={() => setActiveMonth(month)}
                                className={`px-2 py-0.5 text-[14px] font-normal transition-all relative ${activeMonth === month
                                    ? "text-[#2755b0] border-b-[3px] border-[#2755b0]"
                                    : "text-[#222] hover:text-[#2755b0]"
                                    }`}
                                type="button"
                            >
                                {month}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Batch Cards Grid */}
            <div className="w-full">
                <ul className="flex flex-wrap list-none p-0 m-0 justify-between">
                    {tripData.batches.slice(0, 2).map((batch, idx) => (
                        <li key={idx} className="inline-block w-full md:w-[47%] m-[6px]">
                            <div className="flex items-center justify-between border border-[#dddddd] p-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#85a4e334] hover:border-[#2755b0] group">
                                <h5 className="text-[12px] leading-[16px] text-black font-medium m-0 group-hover:text-[#2755b0]">
                                    {idx === 0 ? "20 Feb 2026 - 24 Feb 2026" : "27 Feb 2026 - 03 Mar 2026"}
                                </h5>

                                <div className="btn-fe9 seats-fsz">
                                    <button
                                        type="button"
                                        className="bg-[#127c42] text-white px-2 py-0.5 rounded-[80px] text-[10px] pointer-events-none"
                                    >
                                        Seats Available
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
