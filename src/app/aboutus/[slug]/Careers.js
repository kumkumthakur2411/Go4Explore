"use client";
import React from "react";
import Link from "next/link";

export default function Careers() {
    return (
        <section
            className="relative w-full min-h-[600px] flex items-end bg-cover bg-center bg-no-repeat overflow-hidden font-poppins"
            style={{
                backgroundImage:
                    "url('https://go4explore.com/assets/img/about/join-team.webp')",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[75%] bg-gradient-to-t from-[#2755b0]/80 via-[#2755b0]/60 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 w-full pt-[60px] px-[20px] md:px-[40px] pb-[50px]">
                <div className="container mx-auto max-w-[1320px] text-center">
                    <div className="space-y-4">
                        <p className="text-[14px] md:text-[20px] font-semibold leading-[25px] md:leading-[36px] text-white">
                            Here at{" "}
                            <span className="text-[#fff500]">Go4Explore</span>, we welcome
                            your creativity, hard work and dedication you'll bring to the
                            table.
                        </p>

                        <Link
                            href="/careers"
                            className="inline-block px-[20px] py-[10px] bg-white text-[#2755b0] rounded-[10px] text-[18px] font-medium transition-all duration-300 border border-transparent hover:bg-[#2755b0] hover:text-white hover:border-white"
                        >
                            Join Our Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}