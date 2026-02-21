import { Hand, Package } from "lucide-react";

import { Hero_Image } from "./Hero_Image";
import Hand_Pick_by_Expert from "./Hand_Pick_by_Expert";
import LeadForm from "./LeadForm";
import Package_Swiper_div from "./Package_swiper_div";

export default function Home() {
  return (
    <>
      {/* Normal Sections with Padding */}
      <Hero_Image />
      <div className="w-full px-12 py-8 flex flex-col gap-10 items-start">
        <Hand_Pick_by_Expert/>
        <LeadForm/>
        <Package_Swiper_div/>
        

      </div>
      
    </>
  );
}

