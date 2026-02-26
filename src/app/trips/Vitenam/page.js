
import {HeroImage}  from "./HeroImage";
import HandPickByExpert from "./HandPickByExpert";
import LeadForm from "./LeadForm";
import PackageSwiperDiv from "./PackageSwiperDiv";

const handpickedData = [
  {
    title: "Vietnam Explorer 8D7N",
    price: "₹60,000",
    oldPrice: "₹65,000",
    duration: "8 Days 7 Nights",
    discount: "₹5000 OFF",
    img: "https://d2qa7a8q0vuocm.cloudfront.net/images/23211120230630105031.png",
  },
  {
    title: "Vietnam Signature - 10D9N",
    price: "₹70,000",
    oldPrice: "₹75,000",
    duration: "10 Days 9 Nights",
    discount: "₹5000 OFF",
    img: "https://d2qa7a8q0vuocm.cloudfront.net/images/396320230630111014.png",
  },
  {
    title: "Vietnam Trip with Flights",
    price: "₹79,999",
    oldPrice: "",
    duration: "7 Days 6 Nights",
    discount: "",
    img: "https://d2qa7a8q0vuocm.cloudfront.net/images/5980220230801183603.png",
  },
  {
    title: "Vietnam Backpacking",
    price: "₹59,999",
    oldPrice: "",
    duration: "8 Days 7 Nights",
    discount: "",
    img: "https://d2qa7a8q0vuocm.cloudfront.net/images/38391920240919072750.png",
  },
];
// async function getVitnamData() {
//   const res = await fetch("http://localhost:5009/api/landingPage/getLandingPageBySlug/vietnam", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch users");
//   }

//   return res.json();
// }

export default async function Home() {
//  const response = await getVitnamData();
//  const landingData = response.data;

  // console.log("Landing Page Data:", response);
    return (
    <>
      {/* Normal Sections with Padding */}
      <HeroImage/>
      <div className="w-full   flex flex-col gap-10 items-start">
        {/* <Hand_Pick_by_Expert handpicked={landingData.handpickedData}/> */}
        {/* <Hand_Pick_by_Expert handpicked={handpickedData} /> */}
        <HandPickByExpert handpicked={handpickedData} />
        <LeadForm/>
        <PackageSwiperDiv/>        
      </div>
      
    </>
     )}; 

  


