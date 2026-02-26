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
    <section className="w-full max-w-7xl mx-auto px-4 md:px-0 pt-5">
      <Card className="w-full bg-white shadow-[0_2px_8px_0_rgba(99,99,99,0.2)]
       rounded-xl border-none bg-white overflow-hidden pb-1">
        
        {/* Header - Using flex-col with center alignment for scaling */}
        <CardHeader className="text-center pt-2  px-2">
          <CardTitle className="text-xl md:text-3xl font-[800] text-[#2755B0] mb-4">
            About Go4Explore
          </CardTitle>

          <div className="flex justify-center">
            <p className="text-gray-600 font-medium text-sm md:text-base leading-relaxed text-start px-2">
             Go4explore takes pride in curating meticulous 
             tour packages that ensure a thrilling and serene experience. 
             We believe that travelling evolves you, the adventure transforms
             you and the journey traverses through every sense to form the tapestry...
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
                    className="font-medium text-gray-900 px-6 
                      text-sm flex items-center gap-2 transition-all active:scale-95"
                  >
                    View More
                    <IoIosArrowDown size={18} />
                  </button>
                )}
              </div>

              {/* Content Area - Uses relative spacing for zoom-in safety */}
              <AccordionContent className="text-left mt-8 space-y-6 text-gray-700">
                          <h4 className=" text-center text-xl md:text-3xl font-[800] text-[#2755B0] mb-4">
           Why Choose Us Go4Explore?
          </h4>
                <div className="prose prose-blue max-w-none">
                  <p className="text-sm md:text-base leading-relaxed">
                    Whether you are a solo traveller, or planning to book holiday packages with 
                    your friends or family — our tailor made packages are created with detail, attention,
                     care and a passion for travel. Let us take you through the Majestic snow-capped mountains,
                      Pristine beaches and bustling lanes of cosmopolitan cities. Go4explore has an abundance of 
                      International packages to alluring and magnetic destinations like Kazakhstan, Dubai, Bali, Vietnam,
                       Thailand, Singapore, Azerbaijan and Georgia to provide you utmost thrill with the least worry. 
                       For those adventure and nature lovers, we got you covered too! Our Tour Packages include popular 
                       destinations like Leh & Ladakh, Spiti Valley, Uttarakhand, Meghalaya, Manali and Shimla and many more.
                     We work hard to trace the steps of India as well as beyond our borders.
                  </p>

                  <p className="text-sm md:text-base leading-relaxed mt-4">
                    Our expert teams are full of local insights and passion for travel, that diligently curate itineraries to help you in turning your dream destination into a reality. We carry years of on-ground experience and knowledge in our pockets, to 
                    create polished and immaculate affordable travel packages that make your trip a bit more memorable and under budget.
                  </p>

               <ul
  role="list"
  className="grid grid-cols-1 list-disc list-outside  gap-1 marker:text-[#000000] mt-4 pl-5"
>
  {travelTypes.map((item, index) => (
    <li key={index} className="p-1">
      <strong className="text-[#000000] text-xs md:text-base">
        {item.title} :
      </strong>
      <span className="text-xs md:text-base">
        {item.description}
      </span>
    </li>
  ))}
</ul>
                </div>

                {/* Show Less Button at END */}
                {open && (
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="font-medium text-gray-900  
                      text-base flex items-center gap-2 transition-all"
                    >
                      View Less
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
