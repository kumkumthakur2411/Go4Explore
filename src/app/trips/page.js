import Exclusion from "./[slug]/inclusion-exclusion/Exclusion-slot";
import Inclusion from "./[slug]/inclusion-exclusion/Inclusion-slot";
import Itinerary from "./[slug]/itinerary-section/itinerary";
import Overview from "./[slug]/overview/overview";
import QuickInfo from "./[slug]/quickinfo/info";
import Hero from "./[slug]/sections/hero";
import BookingCard from "./[slug]/Booking-card/booking-card";
import Tabs from "./[slug]/sections/tabs";
import Batches from "./[slug]/batch-available/Batches";
import RelatedTrips from "./[slug]/related/RelatedTrips";
import ThingsToPack from "./[slug]/things-to-pack/ThingsToPack";
import Reviews from "./[slug]/Review/Reviews";
import { tripData } from "./data";

export const metadata = {
  title: "Chopta Tungnath Deoriatal Trek | Go4Explore",
  description: "Experience the magic of Chopta Tungnath with Go4Explore.",
};

export default function TripPage() {
  return (
    <main className="pt-[75px] lg:pt-[95px] min-h-screen pb-24 lg:pb-24 font-poppins bg-[#f9f9f9]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-[calc(1.5rem*0.5)]">

        {/* Hero Section */}
        <Hero />

        {/* Combined Container Structure from Snippet */}
        <div className="flex flex-wrap mt-8 lg:mt-[70px] mx-[-15px] lg:mx-[calc(-0.5*1.5rem)]">

          {/* Left Column (col-zzj / 66.6%) */}
          <div className="w-full lg:w-[66.6667%] px-[15px] lg:px-[calc(1.5rem*0.5)] space-y-6 lg:space-y-[30px]">

            <QuickInfo />

            {/* Mobile/Tablet Booking Card (Visible only on < 992px) */}
            <div className="lg:hidden w-full">
              <div className="bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-6 flex flex-col items-start border border-[#eee]">
                <h5 className="text-[18px] font-medium text-[#200f0d] mb-1">Starting Price</h5>
                <div className="flex items-end mb-4">
                  <h4 className="text-[32px] leading-[40px] font-bold text-black m-0 mr-2">₹5,999</h4>
                  <h5 className="text-[20px] leading-[30px] font-bold text-black m-0 opacity-40 line-through">₹6,499</h5>
                </div>
                <p className="text-[14px] leading-[20px] font-medium text-black/60 mb-5">Per Person on Quad Sharing Occupancy</p>
                <button type="button" className="w-full py-3 px-4 rounded-[50px] font-semibold transition-all bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0] shadow-md">
                  Send Query Here
                </button>
              </div>
            </div>

            <Tabs />

            <div id="overview" className="scroll-mt-[130px] lg:scroll-mt-[100px]">
              <Overview />
            </div>

            <div id="itinerary" className="scroll-mt-[130px] lg:scroll-mt-[100px]">
              <Itinerary />
            </div>

            <div id="inclusions" className="scroll-mt-[130px] lg:scroll-mt-[100px] space-y-[30px]">
              <Inclusion />
              <div id="exclusions" className="scroll-mt-[130px] lg:scroll-mt-[100px]">
                <Exclusion />
              </div>
            </div>

            <div id="batches" className="scroll-mt-[130px] lg:scroll-mt-[100px]">
              <Batches />
            </div>

            <div id="info-pack" className="scroll-mt-[130px] lg:scroll-mt-[100px]">
              <ThingsToPack />
            </div>

            <div id="reviews">
              <Reviews />
            </div>

          </div>

          {/* Right Column (col-v8y / 33.3%) - Sticky Sidebar */}
          <div className="hidden lg:block w-[33.3333%] px-[calc(1.5rem*0.5)]">
            <div className="sticky top-[88px] z-[9]">
              <BookingCard />
            </div>
          </div>

        </div>

        {/* Full width section */}
        <div className="w-full mt-10 lg:mt-12 px-[15px] lg:px-[calc(1.5rem*0.5)]">
          <RelatedTrips />
        </div>

      </div>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#eee] p-4 z-[50] shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[18px] font-bold text-black">₹5,999</span>
            <span className="text-[14px] font-medium text-black/40 line-through">₹6,499</span>
          </div>
          <span className="text-[10px] text-gray-500 font-medium">Per Person</span>
        </div>
        <button className="bg-[#2755b0] text-white px-8 py-3 rounded-full font-bold text-[14px] shadow-lg active:scale-95 transition-transform">
          SEND QUERY
        </button>
      </div>
    </main>
  );
}
