
import { Hero_Image } from "./Hero_Image";
import Hand_Pick_by_Expert from "./Hand_Pick_by_Expert";
import LeadForm from "./LeadForm";
import Package_Swiper_div from "./Package_swiper_div";

async function getVitnamData() {
  const res = await fetch("http://localhost:5009/api/landingPage/getLandingPageBySlug/vietnam", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}

export default async function Home() {
 const response = await getVitnamData();
 const landingData = response.data;

  // console.log("Landing Page Data:", response);
    return (
    <>
      {/* Normal Sections with Padding */}
      <Hero_Image  />
      <div className="w-full   flex flex-col gap-10 items-start">
        <Hand_Pick_by_Expert handpicked={landingData.handpickedData}/>
        <LeadForm/>
        <Package_Swiper_div/>        
      </div>
      
    </>
     )}; 

  


