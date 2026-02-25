"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { IoIosArrowDown , IoIosArrowUp} from "react-icons/io";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const travelTypes = [
  {
    title: "Backpacking Trips",
    description:
      "Imagine walking through lush verdant valleys surrounded by majestic mountain views and a meandering river. Far away from the hustle-bustle of city life, disappear in nature’s lap.",
  },
  {
    title: "Weekend Trips",
    description:
      "Experience a swift trip, ideal for those who have less time, offering a quick weekend getaway with like-minded travellers.",
  },
  {
    title: "Corporate Tours",
    description:
      "Beyond the four walled cubicle office, a whole new world awaits you with fun activities and adventure. Get closer with your office mates and elevate your team performance.",
  },
  {
    title: "Honeymoon Trips",
    description:
      "Wander through the charming lanes, bask in the romantic experience of candlelight dinners. Our honeymoon packages create a magical journey to draw you closer to your loved ones.",
  },
  {
    title: "Family Tours",
    description:
      "Planning a trip with kids can be stressful on your own. Leave your worries to us, we curate tailor made packages to ensure your family tour is an enjoyable one.",
  },
  {
    title: "Group Tours",
    description:
      "Whether you are a solo traveller who wishes to share your journey with other kindred spirits or a bunch of friends wishing to expand your travel circle, our group tours help you to venture seamlessly to adventures.",
  },
  {
    title: "Adventure Treks",
    description:
      "Explore thrilling trekking trails with Go4Explore into the Himalayas and other parts of India.",
  },
];



export function AboutUs() {
  const [open, setOpen] = useState(false);

  return (
    // Changed to max-width and added responsive padding for zoom stability
    <section className="w-full max-w-7xl mx-auto px-4 pt-5">
      <Card className="w-full bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)] rounded-xl border-none bg-white overflow-hidden">
        
        {/* Header - Using flex-col with center alignment for scaling */}
        <CardHeader className="text-center pt-5  px-2">
          <CardTitle className="text-2xl md:text-4xl font-black text-[#2755B0] mb-4">
            About Go4Explore
          </CardTitle>

          <div className="flex justify-center">
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed text-start px-4">
              Go4explore takes pride in curating meticulous tour packages that ensure a thrilling and serene experience. 
              We believe that travelling evolves you, the adventure transforms you and the journey traverses through 
              every sense to form the tapestry of memories...
            </p>
          </div>
        </CardHeader>

        <CardContent className="px-6 md:px-12 pb-4">
          <Accordion
            type="single"
            collapsible
            value={open ? "about" : ""}
            onValueChange={(val) => setOpen(val === "about")}
          >
            <AccordionItem value="about" className="border-none">
              
              {/* Toggle Button Container */}
              <div className="flex justify-center ">
                {!open && (
                  <button
                    onClick={() => setOpen(true)}
                    className="font-bold text-gray-700 px-6 
                      text-sm flex items-center gap-2 transition-all active:scale-95"
                  >
                    View More
                    <IoIosArrowDown size={18} />
                  </button>
                )}
              </div>

              {/* Content Area - Uses relative spacing for zoom-in safety */}
              <AccordionContent className="text-left mt-8 space-y-6 text-gray-700">
                <div className="prose prose-blue max-w-none">
                  <p className="text-sm md:text-base leading-relaxed">
                    Whether you are a solo traveller or planning to book holiday packages, our meticulously 
                    designed itineraries cater to every explorer's soul.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed">
                    Our expert teams are full of local insights and passion for travel, ensuring your 
                    safety and comfort while you push your boundaries.
                  </p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0 mt-6">
                    {travelTypes.map((item, index) => (
                      <li key={index} className="bg-gray-50 p-4 rounded-xl border-l-4 border-[#2755B0]">
                        <strong className="text-[#2755B0] block mb-1">{item.title}</strong>
                        <span className="text-xs md:text-sm">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Show Less Button at END */}
                {open && (
                  <div className="flex justify-center pt-8">
                    <button
                      onClick={() => setOpen(false)}
                      className="font-bold text-gray-500 hover:text-[#2755B0] text-sm flex items-center gap-2 transition-all"
                    >
                      Show Less
                      <IoIosArrowUp size={18} />
                    </button>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  );
}
