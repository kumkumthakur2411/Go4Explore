import { Inter } from "next/font/google";


import InternationalSection from "./components/Home/International/InternationalSection";
import TrendingSection from "./components/Home/Trending/TrendingSection";
import { FaqsSection } from "./components/Home/Faqs";
import { BannerVideo } from "./components/Home/BannerVideo";
import ExploreCategories from "./components/Home/ExploreCategories";
import DomesticSection from "./components/Home/DomesticSection/DomesticSection";
import UpcomingTrips from "./components/Home/UpcomingTrips";
import FeaturedNews from "./components/Home/FeaturedNews/FeaturedNews";
import PlanTripSection from "./components/Home/PlanTripSection";
import WhyChoose from "./components/Home/WhyChoose";
import TopBlogReads from "./components/Home/TopBlogReads";
import { AboutUs } from "./components/Home/AboutUs";
import Hero from "./components/Home/Hero";
import TestimonialsSection from "./components/Home/testimonials/TestimonialsSection";
import BrandsMarquee from "./components/Home/BrandMarquee";
import VideoSwiperSection from "./components/Home/VideoSwiper/VideoSwiperSection";





export default function Home() {
  return (
    <>
      {/* Normal Sections with Padding */}
      <div className="w-full px-8 py-8 flex flex-col gap-10 items-center">
        <Hero />
        <TrendingSection />
        <ExploreCategories />
        <InternationalSection />
        <DomesticSection />
        <UpcomingTrips />
        <FeaturedNews />
        <BannerVideo />
      </div>

      {/* FULL WIDTH SECTION */}
      <PlanTripSection />

      {/* Back to Normal Sections */}
      <div className="w-full px-12 py-8 flex flex-col gap-10 items-center">
        <BrandsMarquee />
        <VideoSwiperSection/>
        <TestimonialsSection />
        <WhyChoose />
        <TopBlogReads />
        <FaqsSection />


        <AboutUs />
      </div>
    </>
  );
}
