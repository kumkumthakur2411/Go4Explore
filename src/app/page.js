import { Inter } from "next/font/google";


import InternationalSection from "./components/Home/International/InternationalSection";
import TrendingSection from "./components/Home/Trending/TrendingSection";

import { BannerVideo } from "./components/Home/BannerVideo";
import ExploreCategories from "./components/Home/ExploreCategories";
import DomesticSection from "./components/Home/DomesticSection/DomesticSection";
import UpcomingTrips from "./components/Home/UpcomingTrips";
import FeaturedNews from "./components/Home/FeaturedNews/FeaturedNews";
import PlanTripSection from "./components/Home/PlanTripSection";
import WhyChoose from "./components/useAble/WhyChoose";
import TopBlogReads from "./components/Home/TopBlogReads";
import { AboutUs } from "./components/Home/AboutUs";
import Hero from "./components/Home/Hero";

import BrandsMarquee from "./components/Home/BrandMarquee";
import VideoSwiperSection from "./components/useAble/VideoSwiper/VideoSwiperSection";
import { FaqsSection } from "./components/useAble/Faqs";
import TestimonialSection from "./components/useAble/testimonials/TestimonialsSection";

const videos = [
  { name: "Video 1", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-1.mp4" },
  { name: "Video 2", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-2.mp4" },
  { name: "Video 3", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-3.mp4" },
  { name: "Video 4", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-4.mp4" },
  { name: "Video 5", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-5.mp4" },
];
const faqArray = [
  {
    question: "I am a solo traveller, can I join the group trips?",
    content: "Yes, we absolutely love solo travellers and would love to host you on our community trips. These group or community trips are crafted keeping in mind every kind of travellers be it solo, couples and a group of friends. The motive behind these fun-filled community trips is to provide hassle-free travel experience to solo travellers especially when you’ve that urge to travel and that too under minimal budget."
  },
  {
    question: "I want to book a trip but how can I trust Go4Explore before paying?",
    content: "Go4Explore is a registered travel company under the name Wander N Explore Pvt. Ltd. and a MSME registered organization. You can simply have a look about the same on the official MSME government website. We have been operational for more than 5 years and thus have a strong backend and ground team to provide a hassle-free and amazing travel experience. Our web presence is quite strong in terms of our website and social media platforms like Instagram & Facebook. Feel free to do a thorough research about our travel community and read reviews before booking your travel. Also, when you’re proceeding ahead with the trip bookings, you’re paying in the brand's current bank account and not in the savings account."
  },
  {
    question: "Is it safe for solo female traveller to join a group trip consisting of strangers?",
    content: "Yes, it is very much safe for female solo travelers to travel with us. We salute the spirit of solo female travelling and thus we make sure to provide an absolutely safe environment while hosting them on our trips. From our experienced trip captains, verified hosts to transport vendors, everybody working with us are trusted folks and easily reachable to raise any kind of safety complaints during an ongoing trip. We always work hard to resolve the problem at the earliest."
  },
  {
    question: "Once I book a trip, how will I receive the confirmation of the payment?",
    content: "Firstly, your payments are absolutely secure. Once we receive the payment, we send you a payment receipt/booking confirmation mail of the same within 24 hours of paying the amount. You need to share the screenshot of the payment with your respective sales team representative and he/she will further communicate with the finance department."
  },
  {
    question: "What if the trip I booked gets cancelled? What is the refund policy?",
    content: "There are numerous factors due to which your trip booking gets cancelled or modified. In this case, we provide you the best possible resolution or a credit note valid for a year of the same amount. In case the traveller cancels the trip from his/her end, the booking amount is non refundable ever and will be treated as per the cancellation policy given here - https://phplaravel-961095-3395580.cloudwaysapps.com/Cancellation-and-Refund-Policy."
  }
];

export default function Home() {
  return (
    <>
      {/* Normal Sections with Padding */}
      <div className="w-full px-4 flex flex-col gap-10 items-center">
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
        <VideoSwiperSection video={videos} />
        <TestimonialSection/>
        <WhyChoose />
        <TopBlogReads />
        <FaqsSection faqArray={faqArray} />
        <AboutUs />
      </div>
    </>
  );
}
