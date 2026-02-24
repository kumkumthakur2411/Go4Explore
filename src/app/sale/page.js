import Banner from "./[slug]/banner";
import Benefit from "./[slug]/benefit";
import Bestseller from "./[slug]/bestseller";
import Tours from "./[slug]/tours";
import TestimonialSection from "../components/useable/TestimonialsSection";
import { BannerVideo } from "../components/useAble/BannerVideo";

const videos = [
    "https://go4explore.com/assets/img/vietnam-hm-slider.mp4",
    "https://go4explore.com/assets/img/georgia-hm-slider.mp4",
    "https://go4explore.com/assets/img/bali-hm-slider.mp4",
    "https://go4explore.com/assets/img/kazakhstan-hm-slider.mp4",
];
export default function SalePage() {
    return (
        <>
            <Banner />
            <div className="px-0 md:px-16 pb-28">
                <Benefit />
                <Bestseller />
                <Tours />
                <BannerVideo videos={videos} />  {/* made by kumkum */}
                <TestimonialSection />  {/* made by kumkum */}
            </div>
        </>
    );
}