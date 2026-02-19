"use client";
import { useState } from "react";
import { tripData } from "../../data";

export default function Batches() {
    const [activeMonth, setActiveMonth] = useState("February");
    const months = ["February", "March", "April"];

    return (
        <section className="w-full bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-[15px] p-[30px] mb-[30px] font-poppins">
            <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#200f0d] mb-2 leading-[1.2]">
                Batches Available
            </h4>
            <hr className="my-4 border-t border-current opacity-25" />

            {/* Tabs Navigation */}
            <div className="flex justify-end p-3">
                <ul className="flex flex-wrap list-none p-0 m-0 gap-2">
                    {months.map((month) => (
                        <li key={month} className="border-none!">
                            <button
                                onClick={() => setActiveMonth(month)}
                                className={`block px-2 py-[2px] transition-all duration-150 cursor-pointer text-[16px] ${activeMonth === month
                                    ? "text-[#2755b0] border-b-[3px] border-[#2755b0] font-medium"
                                    : "text-[#222] font-normal hover:text-[#0a58ca]"
                                    }`}
                                type="button"
                            >
                                {month}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tab Content */}
            <div className="mt-2">
                <ul className="flex flex-wrap justify-between list-none p-0 m-0 w-full">
                    {tripData.batches
                        .filter(batch => batch.date.toLowerCase().includes(activeMonth.substring(0, 3).toLowerCase()))
                        .map((batch, idx) => (
                            <li key={idx} className="w-full md:w-[48%] my-[6px]">
                                <div className="flex items-center justify-between border border-[#ddd] p-3 rounded-[10px] transition-all hover:border-[#2755b0] hover:bg-[#85a4e334]/20 group">
                                    <h5 className="text-[12px] leading-4 text-black font-medium m-0 transition-colors group-hover:text-[#2755b0]">
                                        {batch.date}
                                    </h5>
                                    <div className="flex items-center">
                                        <button
                                            type="button"
                                            className="bg-[#127c42] text-white px-2 py-[3px] rounded-[80px] text-[10px] leading-4 border-none font-medium tracking-tight"
                                        >
                                            Seats Available
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    {tripData.batches.filter(batch => batch.date.toLowerCase().includes(activeMonth.substring(0, 3).toLowerCase())).length === 0 && (
                        <div className="w-full text-center py-10">
                            <p className="text-gray-400 text-[14px]">No batches available for {activeMonth}</p>
                        </div>
                    )}
                </ul>
            </div>
        </section>
    );
}

