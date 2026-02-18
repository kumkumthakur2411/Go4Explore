"use client";
import { useState, useEffect, useRef } from "react";

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("overview");
    const isScrollingRef = useRef(false);

    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "itinerary", label: "Itinerary" },
        { id: "inclusions", label: "Inclusions" },
        { id: "exclusions", label: "Exclusions" },
        { id: "batches", label: "Batches" },
        { id: "info-pack", label: "Things To Pack" },
    ];

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-120px 0px -70% 0px",
            threshold: 0,
        };

        const observerCallback = (entries) => {
            if (isScrollingRef.current) return;

            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        tabs.forEach((tab) => {
            const element = document.getElementById(tab.id);
            if (element) observer.observe(element);
        });

        return () => {
            tabs.forEach((tab) => {
                const element = document.getElementById(tab.id);
                if (element) observer.unobserve(element);
            });
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            isScrollingRef.current = true;
            setActiveTab(id);

            const offset = 140;
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
            className=" sticky top-[115px] z-[9] w-full bg-[#f4f6fc] p-[16px_12px] rounded-[10px] mb-[30px] font-poppins overflow-x-auto no-scrollbar scroll-smooth"
        >
            <ul className="flex items-center justify-between list-none p-0 m-0 w-full lg:min-w-full overflow-x-auto no-scrollbar">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`relative py-[6px] px-[22px] transition-colors cursor-pointer group shrink-0`}
                        onClick={() => scrollToSection(tab.id)}
                    >
                        <button
                            className={`text-[16px] leading-[26px] font-medium bg-transparent border-0 cursor-pointer p-0 focus:outline-none transition-colors ${activeTab === tab.id ? "text-[#1d4ed8]" : "text-[#222] hover:text-[#1d4ed8]"
                                }`}
                        >
                            {tab.label}
                        </button>
                        {activeTab === tab.id && (
                            <div className="absolute bottom-0 left-[22px] right-[22px] h-[2px] bg-[#1d4ed8]" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
