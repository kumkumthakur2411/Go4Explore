"use client";
import { useState, useEffect, useRef } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("overview");
    const isScrollingRef = useRef(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "itinerary", label: "Itinerary" },
        { id: "inclusions", label: "Inclusions" },
        { id: "exclusions", label: "Exclusions" },
        { id: "batches", label: "Batches" },
        { id: "info-pack", label: "Things To Pack" },
    ];

    useEffect(() => {
        const checkRes = () => {
            setIsMobileView(window.innerWidth < 768);
        };
        checkRes();
        window.addEventListener("resize", checkRes);
        return () => window.removeEventListener("resize", checkRes);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (isScrollingRef.current) return;

            // Sync with dynamic sticky top
            const headerOffset = isMobileView ? 160 : 220;

            // Find the last section that has scrolled past the headerOffset line
            let active = "overview";
            tabs.forEach(tab => {
                const section = document.getElementById(tab.id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= headerOffset) {
                        active = tab.id;
                    }
                }
            });

            setActiveTab(active);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileView]);


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            isScrollingRef.current = true;
            setActiveTab(id);

            const offset = isMobileView ? 140 : 180;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 800);
        }
    };

    return (
        <nav
            className={isMobileView
                ? "sticky top-[8vh] md:top-[90px] z-[40] w-full bg-[#f4f6fc] p-[16px_8px] rounded-[10px] mb-[8px] font-poppins overflow-x-auto no-scrollbar scroll-smooth shadow-sm border border-gray-200/50 sticky-tabs sticky-packag-right-tabs"
                : "sticky top-[10vh] md:top-[120px] z-[40] w-full bg-[#f4f6fc] p-[16px_12px] rounded-[10px] mb-[30px] font-poppins overflow-x-auto no-scrollbar scroll-smooth shadow-sm border border-gray-200/50 sticky-tabs sticky-packag-right-tabs"
            }
        >
            <ul className="flex flex-nowrap items-center justify-start md:justify-between list-none p-0 m-0 w-max md:w-full">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`relative py-[6px] px-[10px] md:px-[15px] lg:px-[20px] transition-colors cursor-pointer shrink-0`}
                        onClick={() => scrollToSection(tab.id)}
                    >
                        <button
                            className={`text-[13px] md:text-[15px] lg:text-[16px] leading-[26px] transition-colors bg-transparent border-0 cursor-pointer p-0 focus:outline-none ${activeTab === tab.id ? "text-[#1d4ed8] font-medium" : "text-[#222] font-medium hover:text-[#1d4ed8]"
                                }`}
                        >
                            {tab.label}
                        </button>
                        {(!isMobileView && activeTab === tab.id) && (
                            <div className="absolute bottom-[0px] left-[10px] md:left-[15px] lg:left-[20px] right-[10px] md:right-[15px] lg:right-[20px] h-[1px] bg-[#1d4ed8] rounded-full" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
