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
            className="sticky top-[115px] z-[9] hidden lg:block w-full bg-[#f4f6fc] p-[10px_5px] rounded-[10px] font-poppins"

        >
            <ul className="flex items-center justify-between list-none p-0 m-0 w-full px-4">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`relative py-3 transition-colors cursor-pointer group`}
                        onClick={() => scrollToSection(tab.id)}
                    >
                        <button
                            className={`text-[16px] leading-[26px] font-medium bg-transparent border-0 cursor-pointer p-0 focus:outline-none transition-colors ${activeTab === tab.id ? "text-[#2755b0]" : "text-black hover:text-[#2755b0]"
                                }`}
                        >
                            {tab.label}
                        </button>
                        {activeTab === tab.id && (
                            <div className="absolute -bottom-[10px] left-0 right-0 h-[3px] bg-[#2755b0] rounded-t-full" />
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
