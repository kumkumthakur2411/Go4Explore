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
    <main className="pt-[95px] min-h-screen pb-24 font-poppins bg-[#f9f9f9]">
      <div className="max-w-[1320px] mx-auto px-[calc(1.5rem*0.5)]">

        {/* Hero Section */}
        <Hero />

        {/* Combined Container Structure from Snippet */}
        <div className="flex flex-wrap mt-[70px] mx-[calc(-0.5*1.5rem)]">

          {/* Left Column (col-zzj / 66.6%) */}
          <div className="w-full lg:w-[66.6667%] px-[calc(1.5rem*0.5)] space-y-[30px]">

            <QuickInfo />

            {/* Mobile/Tablet Booking Card (Visible only on < 992px) */}
            <div className="lg:hidden w-full">
              <div className="bg-white shadow-[0_2px_8px_rgba(99,99,99,0.2)] rounded-[15px] p-[30px] flex flex-col items-start">
                <h5 className="text-[20px] font-medium text-[#200f0d] mb-2">Starting Price</h5>
                <div className="flex items-end mb-4">
                  <h4 className="text-[38px] leading-[45px] font-semibold text-black m-0 mr-2">₹5,999</h4>
                  <h5 className="text-[23px] leading-[37px] font-bold text-black m-0 opacity-40 line-through">₹6,499</h5>
                </div>
                <p className="text-[16px] leading-[23px] font-medium text-black mb-[25px]">Per Person on Quad Sharing Occupancy</p>
                <button type="button" className="w-full py-[8px] px-[14px] rounded-[50px] font-semibold transition-all bg-[#2755b0] border-2 border-[#2755b0] text-white hover:bg-white hover:text-[#2755b0]">
                  Send Query Here
                </button>
              </div>
            </div>

            <Tabs />

            <div id="overview" className="scroll-mt-[100px]">
              <Overview />
            </div>

            <div id="itinerary" className="scroll-mt-[100px]">
              <Itinerary />
            </div>

            <div id="inclusions" className="scroll-mt-[100px] space-y-[30px]">
              <Inclusion />
              <div id="exclusions" className="scroll-mt-[100px]">
                <Exclusion />
              </div>
            </div>

            <div id="batches" className="scroll-mt-[100px]">
              <Batches />
            </div>

            <div id="info-pack" className="scroll-mt-[100px]">
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
              {/* Optional footer to push card up or down */}
            </div>
          </div>

        </div>

        {/* Full width section */}
        <div className="w-full mt-12 px-[calc(1.5rem*0.5)]">
          <RelatedTrips />
        </div>

      </div>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 flex items-center justify-between z-50 lg:hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div>
          <span className="text-gray-400 text-xs block font-bold uppercase tracking-wider">Prices from</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-gray-900">₹{tripData.price.toLocaleString()}</span>
            <span className="text-gray-400 text-xs text-nowrap">/ person</span>
          </div>
        </div>
        <button className="bg-[#2755b0] text-white font-bold px-8 py-3 rounded-xl shadow-lg active:scale-95 transition-transform hover:bg-[#1e4491]">
          Book Now
        </button>
      </div>
    </main>
  );
}
