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
    <div className="w-[90%] mx-auto my-10">
      <Card className="w-full rounded-2xl shadow-lg border bg-white/90">

        {/* Header */}
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-2xl font-bold text-[#2755B0]">
            About Go4Explore
          </CardTitle>

          <p className="text-gray-700 font-medium max-w-5xl mb-[4px]">
            Go4explore takes pride in curating meticulous tour packages that ensure a thrilling and serene experience. We believe that travelling evolves you, the adventure transforms you and the journey traverses through every sense to form the tapestry....
          </p>
        </CardHeader>

        <CardContent className="text-center">
          <Accordion
            type="single"
            collapsible
            value={open ? "about" : ""}
            onValueChange={(val) => setOpen(val === "about")}
          >
            <AccordionItem value="about" className="border-none">

              {/* Show View More ONLY when closed */}
{!open && (
  <div className="flex justify-center ">
    <button
      onClick={() => setOpen(true)}
      className="font-semibold text-gray-800 hover:text-[#2755B0] text-sm flex items-center gap-2 transition"
    >
      View More
      <IoIosArrowDown size={16} />
    </button>
  </div>
)}
              <AccordionContent className="text-left mt-6 space-y-6 text-gray-700">

                <p>
                  Whether you are a solo traveller or planning to book holiday packages...
                </p>

                <p>
                  Our expert teams are full of local insights and passion for travel...
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  {travelTypes.map((item, index) => (
                    <li key={index}>
                      <strong>{item.title} - </strong>
                      {item.description}
                    </li>
                  ))}
                </ul>

                {/* Show Less Button at END */}
                {open && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => setOpen(false)}
                      className="font-semibold text-gray-800  text-sm hover:text-[#2755B0] 
                      flex items-center gap-2 transition" 
                    >
                      Show Less 
                       <IoIosArrowUp size={16} />
                    </button>
                  </div>
                )}

              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>

      </Card>
    </div>
  );
}

