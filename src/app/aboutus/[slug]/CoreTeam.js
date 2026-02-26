"use client";
import React from "react";

export default function CoreTeam() {
    const teamMembers = [
        { name: "Sahil Singh", role: "Business Dev. Manager", extra: "", image: "https://go4explore.com/assets/img/about/team-1.webp" },
        { name: "Tanya Kochhar", role: "Head of Sales", extra: "", image: "https://go4explore.com/assets/img/about/team-2.webp" },
        { name: "Amit Aggarwal", role: "Head of Operations", extra: "", image: "https://go4explore.com/assets/img/about/team-3.webp" },
        { name: "Priyanka Jindal", role: "Head of Finance", extra: "", image: "https://go4explore.com/assets/img/about/team-4.webp" },
        { name: "Pankaj Verma", role: "Deputy Sales Manager", extra: "(Fixed Departures)", image: "https://go4explore.com/assets/img/about/team-5.webp" },
        { name: "Anuj Kumar", role: "Deputy Sales Manager", extra: "(International Tours)", image: "https://go4explore.com/assets/img/about/team-6.webp" }
    ];

    return (
        <section className="py-[60px] bg-white font-poppins">
            <div className="max-w-[1320px] mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-[40px] md:mb-[60px]">
                    <h4 className="text-[18px] md:text-[30px] font-bold text-[#200f0d]">
                        Our Core Team
                    </h4>
                </div>

                {/* Responsive Grid */}
                <div className="flex flex-wrap -mx-2 md:-mx-3 gap-y-8 md:gap-y-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="w-1/2 lg:w-1/3 px-2 md:px-3">
                            <div className="p-3 md:p-5 rounded-[15px] md:rounded-[20px] shadow-[0_2px_8px_rgba(99,99,99,0.2)] text-center w-full max-w-[300px] mx-auto bg-white transition-transform hover:-translate-y-2 duration-300">

                                {/* Image Container */}
                                <div className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] flex items-center justify-center overflow-hidden rounded-full mx-auto border-2 border-[#2755b0] mb-3 md:mb-5">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-[70px] h-[70px] md:w-[140px] md:h-[140px] rounded-full object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="mt-3 md:mt-5 space-y-1 mb-4 md:mb-10">
                                    <h5 className="text-[11px] md:text-[15px] leading-[16px] md:leading-[22px] font-semibold bg-[#2755b0] text-white px-3 md:px-6 py-[4px] md:py-[8px] rounded-[40px] inline-block mb-1 md:mb-2 whitespace-nowrap w-full max-w-[130px] md:max-w-[250px] text-center">
                                        {member.name}
                                    </h5>

                                    <p className="text-[10px] md:text-[14px] leading-[14px] md:leading-[20px] font-medium text-black">
                                        {member.role}
                                    </p>

                                    {member.extra && (
                                        <span className="text-[9px] md:text-[12px] leading-[12px] md:leading-[16px] font-normal text-gray-600 block">
                                            {member.extra}
                                        </span>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}