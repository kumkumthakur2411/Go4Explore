"use client";
import { useState } from "react";

export default function Overview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="overview"

      className="w-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-6 md:p-10 text-[16px] leading-[24px] font-normal tracking-normal text-gray-700 scroll-mt-24 border border-gray-100 cursor-default"
    >

      {/* Main Title */}
      <div className="mb-4">
        <h4 className="text-[24px] font-semibold text-[#200f0d] mb-4 tracking-normal">Overview</h4>
        <hr className="border-[#dee2e6] opacity-50" />
      </div>

      <div className={`relative transition-all duration-700 ease-in-out overflow-hidden ${expanded ? "max-h-[5000px]" : "max-h-[110px]"}`}>

        <div className="space-y-6">
          <p>
            If you are planning a refreshing getaway in the Himalayas, the
            <strong className="text-gray-900 font-semibold"> Chopta Tungnath Trek Package</strong> by
            <strong className="text-gray-900 font-semibold"> Go4Explore</strong> is the perfect option.
            Known for its calm meadows, ancient temples, and snow-covered peaks, this trek offers a mix of spirituality and adventure.
            It is an ideal choice for beginners as well as seasoned trekkers looking for a scenic short escape from city life.
          </p>

          <SectionTitle>About Chopta Tungnath & Deoriatal</SectionTitle>
          <p>
            Chopta, often called the 'Mini Switzerland of Uttarakhand', is a picturesque village surrounded by lush forests and snowy peaks.
            From here begins the trek to <strong className="text-gray-900 font-semibold">Tungnath Temple</strong>, the highest Shiva temple in the world,
            located at an altitude of about 3,680 meters. This ancient shrine, believed to be over a thousand years old,
            holds great significance in Hindu mythology and is a part of the sacred Panch Kedar temples.
          </p>
          <p>
            After visiting Tungnath, trekkers continue the trail to Chandrashila Peak, which stands at 3,700 meters.
            From this summit, one can enjoy a mesmerizing 360° view of major Himalayan peaks like Nanda Devi, Trishul, Kedar Dome, and Chaukhamba.
            The Chopta Tungnath Trek Package combines natural beauty, spiritual exploration, and adventure in one memorable journey.
          </p>

          <SectionTitle>Starting the Chopta Tungnath Trip from Delhi</SectionTitle>
          <p>
            The <strong className="text-gray-900 font-semibold">Chopta Tungnath Trip from Delhi</strong> begins with an overnight journey to Chopta.
            This drive passes through scenic towns like Rishikesh, Devprayag, and Rudraprayag, giving travelers glimpses of river valleys,
            confluences, and mountain views. Once you reach Chopta, you are greeted by the crisp mountain air and pine forests,
            the perfect start for your Himalayan adventure.
          </p>
          <p>
            Go4Explore’s Chopta Tour Package From Delhi ensures comfortable transportation, delicious meals,
            and experienced trek leaders who make the trip enjoyable and safe for all participants.
          </p>

          <SectionTitle>Route Details for Chopta Tungnath & Deoriatal Trek</SectionTitle>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-gray-900 font-semibold">Day 1:</strong> Depart from Delhi, overnight journey to Chopta.</li>
            <li><strong className="text-gray-900 font-semibold">Day 2:</strong> Reach Chopta and start your Chopta Tungnath Trek Package experience. The 3.5 km trail to Tungnath is easy to moderate, ideal for first-time trekkers. Visit the sacred Tungnath Temple, and for those who wish to explore further, hike 1.5 km more to Chandrashila Peak.</li>
            <li><strong className="text-black font-semibold">Day 3:</strong> Trek to Deoriatal, a crystal-clear lake offering reflections of the mighty Chaukhamba peaks. Later, descend to Sari Village.</li>
            <li><strong className="text-black font-semibold">Day 4:</strong> Return journey to Delhi with lifelong memories from your <strong className="text-black font-semibold">Chopta Tungnath Weekend Trip</strong>.</li>
          </ul>

          <SectionTitle>Highlights of the Chopta Tungnath Group Trip</SectionTitle>
          <ul className="list-disc pl-5 space-y-3">
            <li>Visit the <strong className="text-gray-900 font-semibold">highest Shiva temple</strong> in the world.</li>
            <li>Witness snow-clad Himalayan peaks from <strong className="text-gray-900 font-semibold">Chandrashila</strong>.</li>
            <li>Camp in scenic meadows and enjoy bonfire evenings.</li>
            <li>Explore the serene <strong className="text-gray-900 font-semibold">Deoriatal Lake</strong>.</li>
            <li>Perfect for beginners and nature lovers.</li>
          </ul>

          <SectionTitle>Places to Visit During the Chopta Tungnath Trip from Delhi</SectionTitle>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong className="text-gray-900 font-semibold">Chopta:</strong> This small but beautiful valley offers captivating views of the Himalayas. Its tranquil atmosphere makes it ideal for nature walks and camping.</li>
            <li><strong className="text-gray-900 font-semibold">Tungnath Temple:</strong> The centerpiece of the <strong className="text-gray-900 font-semibold">Chopta Tungnath Group Trip</strong>, this temple attracts both trekkers and devotees for its beauty and mythological importance.</li>
            <li><strong className="text-gray-900 font-semibold">Chandrashila Peak:</strong> One of the most rewarding viewpoints in Uttarakhand. The sunrise view from the summit is breathtaking.</li>
            <li><strong className="text-gray-900 font-semibold">Deoriatal Lake:</strong> The reflection of snow-capped mountains in the lake’s crystal-clear water is a sight to remember.</li>
            <li><strong className="text-gray-900 font-semibold">Sari Village:</strong> The base point for the Deoriatal trek, famous for its traditional Garhwali homes and warm hospitality.</li>
            <li><strong className="text-gray-900 font-semibold">Ukhimath & Rudraprayag:</strong> Both towns are known for ancient temples and scenic river confluences, often included in the Chopta Tour Package From Delhi itinerary.</li>
          </ol>

          <SectionTitle>Activities to Try with Go4Explore’s Chopta Tungnath Trek Package</SectionTitle>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-gray-900 font-semibold">Trekking & Hiking:</strong> Experience one of the easiest yet most rewarding treks in the Garhwal Himalayas.</li>
            <li><strong className="text-gray-900 font-semibold">Camping:</strong> Stay under a starlit sky, surrounded by alpine meadows.</li>
            <li><strong className="text-gray-900 font-semibold">Photography:</strong> Capture sunrise views from Chandrashila, reflections at Deoriatal, and the beauty of Tungnath Temple.</li>
            <li><strong className="text-gray-900 font-semibold">Bird Watching:</strong> Chopta is home to many Himalayan species like Monal, making it a paradise for bird lovers.</li>
            <li><strong className="text-gray-900 font-semibold">Meditation & Spiritual Time:</strong> Feel a divine calm at the sacred Tungnath Temple.</li>
          </ul>

          <SectionTitle>Best Time to Visit with Go4Explore’s Chopta Tungnath Weekend Trip Packages</SectionTitle>
          <ul className="list-disc pl-5 space-y-3">
            <li><strong className="text-gray-900 font-semibold">March to May (Spring):</strong> Pleasant weather, blooming rhododendrons and clear mountain views.</li>
            <li><strong className="text-gray-900 font-semibold">June to August (Summer):</strong> Ideal for those who enjoy lush greenery and mild rain.</li>
            <li><strong className="text-gray-900 font-semibold">September to November (Autumn):</strong> Crystal-clear skies and colorful valleys, great for photography.</li>
            <li><strong className="text-gray-900 font-semibold">December to February (Winter):</strong> Perfect for snow trekking and those who wish to see Tungnath covered in snow.</li>
          </ul>

          <SectionTitle>Accommodation & Food</SectionTitle>
          <p>
            With <strong className="text-gray-900 font-semibold">Go4Explore’s</strong> Chopta Tungnath Trek Package, travelers stay in comfortable camps or guesthouses with clean bedding and hygienic food.
            Meals include nutritious vegetarian options, perfect to fuel your trekking journey.
          </p>

          <SectionTitle>Cost & Inclusions</SectionTitle>
          <p>
            The Chopta Tungnath Group Trip package starts at just Rs. 7499 per person (on quad sharing) from Delhi for 3 Days & 2 Nights. The cost covers:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Transportation (Delhi to Delhi)</li>
            <li>Accommodation and Meals</li>
            <li>Experienced trek guides</li>
            <li>Permits and basic first aid</li>
          </ul>

          <SectionTitle>Why Choose Go4Explore for Chopta Tungnath Trek Package?</SectionTitle>
          <ul className="list-disc pl-5 space-y-3">
            <li>100% safety assurance with expert leaders</li>
            <li>Transparent pricing with no hidden costs</li>
            <li>Small group batches for a personalized experience</li>
            <li>Quality campsites with scenic views</li>
            <li>Trusted by 10,000+ happy trekkers across India</li>
          </ul>

          <p className="italic text-gray-600 leading-relaxed font-normal">
            Join Go4Explore and plan your Chopta Tungnath Trek now for an unforgettable Himalayan journey.
            Enjoy stunning views, ancient temples, and peaceful meadows on this well-organized Chopta Tungnath Group Trip from Delhi.
            Whether seeking adventure, nature photography, or spiritual calm, this short yet exciting trip provides everything for travelers of all kinds.
            Each moment from Chopta to Chandrashila promises serenity, joy, and lifelong memories of mountain beauty, divine energy, and thrilling exploration
            that make this Chopta Tour Package From Delhi truly special and worth every step you take.
          </p>

          <SectionTitle>Chopta Tungnath Chandrashila Deoriatal Trek Video</SectionTitle>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-gray-100 shadow-md">
            <iframe
              src="https://www.youtube.com/embed/bauToLOL-ZI?si=7dLCsJ8GxPyMzfp7"
              title="Chopta Tungnath Trek Video"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="pt-6">
            <p className="font-semibold text-gray-900 mb-2">Explore our travel packages:</p>
            <div className="flex flex-wrap gap-2 text-[#2f5db3] font-medium text-[14px]">
              <a href="/trips/rishikesh-chopta-tungnath" className="hover:underline">Rishikesh Chopta Tungnath</a> |
              <a href="/trips/kedarkantha-trek" className="hover:underline">Kedarkantha Trek</a> |
              <a href="/trips/har-ki-doon-trek" className="hover:underline">Haar Ki Doon Trek</a> |
              <a href="/trips/valley-of-flowers-trek" className="hover:underline">Valley of Flowers Trek</a> |
              <a href="/trips/hampta-pass-trek" className="hover:underline">Hampta Pass Trek</a> |
              <a href="/trips/ny-rishikesh-chopta-tungnath" className="hover:underline">New Year Rishikesh Chopta Tungnath</a> |
              <a href="/trips/kedarnath-dham" className="hover:underline">Kedarnath Dham</a>
            </div>
          </div>

          <SectionTitle>FAQs about Chopta Tungnath Trek Package</SectionTitle>
          <div className="space-y-6">
            <Faq
              q="What is the best time for the Chopta Tungnath Trek?"
              a="The best time to plan the Chopta Tungnath Trek is between March to May and September to November when the weather stays clear, comfortable, and perfect for scenic exploration and adventure activities."
            />
            <Faq
              q="How far is Chopta from Delhi?"
              a="Chopta is approximately 450 kilometers from Delhi, and the road journey generally takes about 12 to 13 hours offering mesmerizing views of valleys, rivers, and beautiful mountain terrains throughout the route."
            />
            <Faq
              q="How difficult is the Chopta Tungnath Trip from Delhi?"
              a="The Chopta Tungnath Trip from Delhi is considered an easy to moderate trek suitable for beginners and casual travelers who wish to experience Himalayan trekking without any technical climbing requirements."
            />
            <Faq
              q="Can I join a Chopta Tungnath Group Trip solo?"
              a="Yes, solo travelers can comfortably join the Chopta Tungnath Group Trip and enjoy traveling with like-minded adventurers while making new friends and sharing unforgettable mountain experiences together."
            />
            <Faq
              q="Does the Chopta Tour Package From Delhi include Deoriatal?"
              a="Yes, almost all Chopta Tour Package From Delhi options offered by Go4Explore include the enchanting Deoriatal Lake which is famous for its stunning reflection of the snow-covered Himalayan peaks."
            />
            <Faq
              q="Is there snowfall during the Chopta Tungnath Trip from Delhi?"
              a="Yes, between December and February heavy snowfall graces the Chopta region creating mesmerizing winter landscapes ideal for snow trekking, photography, and serene Himalayan camping experiences."
            />
          </div>
        </div>

        {/* Bottom Fade + Ellipsis exactly at the cutoff line */}
        {!expanded && (
          <div className="absolute bottom-0 right-0 left-0 h-10 bg-gradient-to-t from-white via-white/40 to-transparent flex items-end justify-end px-0.5 pointer-events-none">
            <span className="text-gray-700 bg-white px-0.5 mb-1 leading-none text-[15px]">...</span>
          </div>
        )}
      </div>

      {/* Toggle Button - Matching Image */}
      <div className="mt-4 flex justify-start">
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-gray-600 font-normal text-[15px] hover:text-black transition-all"
        >
          {expanded ? "View Less" : "View More"}
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

    </section>
  );
}

/* Reusable Sub-components for better hierarchy */

function SectionTitle({ children }) {
  return (
    <h3 className="text-[19px] font-semibold text-gray-900 mt-10 mb-4 tracking-normal">
      {children}
    </h3>
  );
}

function Faq({ q, a }) {
  return (
    <div className="border-b border-gray-50 pb-5 last:border-0 last:pb-0">
      <p className="font-semibold text-gray-900 mb-2 leading-[24px] tracking-normal">Q. {q}</p>
      <p className="text-gray-600 pl-4 border-l-2 border-blue-100/50 leading-[24px] tracking-normal">{a}</p>
    </div>
  );
}
