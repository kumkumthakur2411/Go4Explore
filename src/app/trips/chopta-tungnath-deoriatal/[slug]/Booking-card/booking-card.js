"use client";
import { useState } from "react";

export default function BookingCard() {
    const [occupancy, setOccupancy] = useState("Quad");

    const pricing = {
        Quad: { current: "5,999", original: "6,499" },
        Triple: { current: "6,999", original: "7,499" },
        Dual: { current: "7,999", original: "8,499" }
    };

    return (
        <div className="w-full font-poppins sticky top-[100px] z-10">


            {/* ========== STARTING PRICE CARD ========== */}
            <div className="w-full font-poppins bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[30px] mb-[30px]">

                {/* Title */}
                <h5 className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-medium text-[#200f0d] mb-1 font-poppins">
                    Starting Price
                </h5>

                {/* Price Row */}
                <div className="flex items-end">
                    <h4 className="text-[20px] md:text-[23px] lg:text-[38px] font-semibold text-[#200f0d] mb-0 mr-2 leading-[1.2]">
                        ₹{pricing.Quad.current}
                    </h4>

                    <h5 className="text-[23px] leading-[37px] font-bold text-black m-0">
                        <del>₹{pricing.Quad.original}</del>
                    </h5>
                </div>

                {/* Subtitle */}
                <p className="text-[14px] md:text-[16px] lg:text-[16px] leading-[1.4] font-medium text-black mb-[25px]">
                    Per Person on Quad Sharing Occupancy
                </p>

                {/* Button */}
                <button
                    type="button"
                    className="w-full py-2 px-4 rounded-full text-[16px] font-semibold border-2 border-[#2755b0] bg-[#2755b0] text-white transition-all duration-300 hover:bg-white hover:text-[#2755b0]"
                >
                    Send Query Here
                </button>

            </div>


            {/* ========== PRICE SUMMARY CARD ========== */}
            <div className="w-full bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[30px]">
                <h5 className="text-[18px] md:text-[19px] lg:text-[20px] font-medium text-[#200f0d] mb-2 leading-[1.2]">Price Summary</h5>
                <hr className="my-3 border-t border-black opacity-30" />

                <div className="w-full mb-6">
                    <div className="flex justify-between items-center mb-3">
                        <h5 className="text-[14px] md:text-[15px] lg:text-[16px] leading-[26px] font-medium text-black mt-1">Occupancy</h5>
                        <ul className="flex list-none p-0 m-0">
                            {["Quad", "Triple", "Dual"].map((type) => (
                                <li key={type} className="ml-2">
                                    <button
                                        onClick={() => setOccupancy(type)}
                                        className={`px-1 py-[2px] mb-5 text-[14px] md:text-[15px] lg:text-[16px] font-normal transition-all relative ${occupancy === type
                                            ? "text-[#2755b0] border-b-[3px] border-[#2755b0]"
                                            : "text-[#222]"
                                            }`}
                                        type="button"
                                    >
                                        {type}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Block Item - Refined Styling */}
                    <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[6px] p-[4px_12px] flex justify-between items-center mt-[10px] mb-[20px]">
                        <h5 className="text-[13px] md:text-[14px] lg:text-[15px] leading-[25px] font-medium text-black mb-[4px]">{occupancy} Occupancy</h5>
                        <div className="flex flex-col items-end ml-[15px]">
                            <strike className="text-[11px] md:text-[12px] lg:text-[13px] leading-[17px] font-semibold text-black opacity-40 mb-1 mt-1">₹{pricing[occupancy].original}</strike>
                            <h4 className="text-[16px] md:text-[17px] lg:text-[18px] leading-[17px] font-semibold text-black mb-2">₹{pricing[occupancy].current}</h4>
                            <span className="text-[9px] md:text-[10px] lg:text-[11px] leading-[11px] font-normal text-black opacity-80">Per Person</span>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <a
                        href="/booking-details/chopta-tungnath-deoriatal"
                        className="block w-full py-2 px-4 rounded-[50px] text-[16px] font-semibold text-center transition-all duration-300 bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0]"
                    >
                        Book Now
                    </a>
                </div>

                <div className="flex justify-between items-center mt-5 gap-3">
                    <a
                        href="https://wa.me/919266710039"
                        className="w-[48%] py-[10px] px-[14px] rounded-[50px] text-[14px] font-semibold text-center transition-all duration-300 bg-white text-[#2755b0] border-2 border-[#2755b0] hover:bg-[#2755b0] hover:text-white"
                    >
                        Whatsapp
                    </a>
                    <button
                        className="w-[48%] py-[10px] px-[14px] rounded-[50px] text-[14px] font-semibold text-center transition-all duration-300 bg-white text-[#2755b0] border-2 border-[#2755b0] hover:bg-[#2755b0] hover:text-white"
                    >
                        Get PDF Itinerary
                    </button>
                </div>
            </div>
        </div>
    );
}
