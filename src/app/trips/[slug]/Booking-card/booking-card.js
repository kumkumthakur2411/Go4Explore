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
            <div className="w-full bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[30px] mb-[30px] flex flex-col items-start translate-z-0">
                <h5 className="text-[20px] font-medium text-[#200f0d] mb-2 leading-[1.2]">Starting Price</h5>

                <div className="flex items-end mb-4">
                    <h4 className="text-[38px] leading-[45px] font-semibold text-black m-0 mr-2">₹{pricing.Quad.current}</h4>
                    <h5 className="text-[23px] leading-[37px] font-bold text-black m-0 opacity-40 line-through">
                        ₹{pricing.Quad.original}
                    </h5>
                </div>

                <p className="text-[16px] leading-[23px] font-medium text-black m-0 mb-[25px]">
                    Per Person on Quad Sharing Occupancy
                </p>

                <button
                    type="button"
                    className="w-full py-[8px] px-[14px] rounded-[50px] text-[16px] font-semibold transition-all duration-300 bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0]"
                >
                    Send Query Here
                </button>
            </div>

            {/* ========== PRICE SUMMARY CARD ========== */}
            <div className="w-full bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[30px]">
                <h5 className="text-[20px] font-medium text-[#200f0d] mb-2 leading-[1.2]">Price Summary</h5>
                <hr className="my-4 border-t border-[#dee2e6] opacity-25" />

                <div className="w-full mb-6">
                    <div className="flex justify-between items-center mb-4">
                        <h5 className="text-[16px] leading-[26px] font-medium text-black m-0">Occupancy</h5>
                        <ul className="flex list-none p-0 m-0">
                            {["Quad", "Triple", "Dual"].map((type) => (
                                <li key={type} className="ml-2">
                                    <button
                                        onClick={() => setOccupancy(type)}
                                        className={`px-2 py-0.5 text-[14px] font-normal transition-all relative ${occupancy === type
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

                    {/* Price Block Item - Matched to Image */}
                    <div className="w-full shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[6px] p-[12px_20px] flex justify-between items-center mt-[10px] mb-[20px]">
                        <h5 className="text-[18px] font-medium text-black m-0">{occupancy} Occupancy</h5>
                        <div className="flex flex-col items-end">
                            <strike className="text-[12px] font-normal text-black opacity-40">₹{pricing[occupancy].original}</strike>
                            <h4 className="text-[22px] font-extrabold text-black m-0 leading-tight">₹{pricing[occupancy].current}</h4>
                            <span className="text-[10px] font-normal text-black opacity-40">Per Person</span>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <a
                        href="/booking-details/chopta-tungnath-deoriatal"
                        className="block w-full py-[10px] px-[14px] rounded-[50px] text-[16px] font-semibold text-center transition-all duration-300 bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0]"
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
