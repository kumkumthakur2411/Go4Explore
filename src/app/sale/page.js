import Banner from "./[slug]/banner";
import Benefit from "./[slug]/benefit";
import Bestseller from "./[slug]/bestseller";
import Tours from "./[slug]/tours";
import TestimonialSection from "../components/useAble/testimonials/TestimonialsSection";
<<<<<<< HEAD
import VideoSwiper from "../components/Home/VideoSwiper/VideoSwiper";

const videos = [
    { name: "Video 1", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-1.mp4" },
    { name: "Video 2", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-2.mp4" },
    { name: "Video 3", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-3.mp4" },
    { name: "Video 4", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-4.mp4" },
    { name: "Video 5", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-5.mp4" },
=======
import { BannerVideo } from "../components/useAble/BannerVideo";

const videos = [
    "https://go4explore.com/assets/img/vietnam-hm-slider.mp4",
    "https://go4explore.com/assets/img/georgia-hm-slider.mp4",
    "https://go4explore.com/assets/img/bali-hm-slider.mp4",
    "https://go4explore.com/assets/img/kazakhstan-hm-slider.mp4",
>>>>>>> a69f63122113dea3d4b7027dc5595f7fefecba4d
];
export default function SalePage() {
    return (
        <>
            <Banner />
            <div className="px-0 md:px-16 pb-28">
                <Benefit />
                <Bestseller />
                <Tours />
<<<<<<< HEAD
                <VideoSwiper videos={videos} />
                <TestimonialSection />
=======
                <BannerVideo videos={videos} />  {/* made by kumkum */}
                <TestimonialSection />  {/* made by kumkum */}
>>>>>>> a69f63122113dea3d4b7027dc5595f7fefecba4d
            </div>
        </>
    );
}