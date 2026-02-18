"use client";
import { useState } from "react";

export default function PriceSummary() {
    const [occupancy, setOccupancy] = useState("Quad");

    const pricing = {
        Quad: { current: "5,999", original: "6,499" },
        Triple: { current: "6,999", original: "7,499" },
        Dual: { current: "7,999", original: "8,499" }
    };

    return (
        <section className="w-full bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[20px] font-poppins mb-[30px]">
            <h5 className="text-[18px] md:text-[20px] font-extrabold text-[#200f0d] mb-2 leading-[1.2]" style={{ fontWeight: 800 }}>Price Summary</h5>
            <hr className="my-4 border-t border-[#dee2e6] opacity-25" />

            <div className="w-full">
                <div className="flex justify-between items-center mb-4">
                    <h5 className="text-[14px] md:text-[16px] leading-[26px] font-medium text-black m-0">Occupancy</h5>
                    <div className="flex list-none p-0 m-0">
                        {["Quad", "Triple", "Dual"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setOccupancy(type)}
                                className={`ml-2 px-2 py-[2px] text-[13px] md:text-[14px] font-normal transition-all relative ${occupancy === type
                                    ? "text-[#2755b0] border-b-[3px] border-[#2755b0]"
                                    : "text-[#222]"
                                    }`}
                                type="button"
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price Block Item - Refined Styling */}
                <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[6px] p-[4px_12px] flex justify-between items-center mt-[10px] mb-[20px]">
                    <h5 className="text-[13px] md:text-[15px] leading-[25px] font-medium text-black mb-[6px]">{occupancy} Occupancy</h5>
                    <div className="flex flex-col items-end ml-[15px]">
                        <strike className="text-[11px] md:text-[13px] leading-[17px] font-semibold text-black opacity-40">₹{pricing[occupancy].original}</strike>
                        <h4 className="text-[16px] md:text-[18px] leading-[17px] font-semibold text-black m-0">₹{pricing[occupancy].current}</h4>
                        <span className="text-[9px] md:text-[11px] leading-[11px] font-normal text-black opacity-80">Per Person</span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col gap-3">
                <a
                    href="/booking-details/chopta-tungnath-deoriatal"
                    className="w-full py-3 px-4 rounded-full text-[16px] font-bold text-center transition-all bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0] shadow-md"
                >
                    Book Now
                </a>
                <div className="flex justify-between items-center gap-3">
                    <a
                        href="https://wa.me/919266710039"
                        className="flex-1 py-2.5 px-4 rounded-full text-[14px] font-semibold text-center transition-all bg-white text-[#2755b0] border-2 border-[#2755b0] hover:bg-[#2755b0] hover:text-white"
                    >
                        Whatsapp
                    </a>
                    <button
                        className="flex-1 py-2.5 px-4 rounded-full text-[14px] font-semibold text-center transition-all bg-white text-[#2755b0] border-2 border-[#2755b0] hover:bg-[#2755b0] hover:text-white"
                    >
                        Itinerary PDF
                    </button>
                </div>
            </div>
        </section>
    );
}
