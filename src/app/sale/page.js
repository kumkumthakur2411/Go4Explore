import Banner from "./[slug]/banner";
import Benefit from "./[slug]/benefit";
import Bestseller from "./[slug]/bestseller";
import Tours from "./[slug]/tours";
import TestimonialSection from "../components/useAble/testimonials/TestimonialsSection";
import VideoSwiper from "../components/useAble/VideoSwiper/VideoSwiper";

const videos = [
    { name: "Video 1", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-1.mp4" },
    { name: "Video 2", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-2.mp4" },
    { name: "Video 3", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-3.mp4" },
    { name: "Video 4", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-4.mp4" },
    { name: "Video 5", src: "https://d2qa7a8q0vuocm.cloudfront.net/assets/images/img/wanderlust/v-5.mp4" },
];
export default function SalePage() {
    return (
        <>
            <Banner />
            <div className="px-0 md:px-16 pb-28">
                <Benefit />
                <Bestseller />
                <Tours />
                <VideoSwiper videos={videos} />
                <TestimonialSection />
            </div>
        </>
    );
}