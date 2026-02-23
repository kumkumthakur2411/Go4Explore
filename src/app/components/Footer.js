import { Instagram, Youtube, Linkedin, MessageCircle, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

  const Company_items = [
  {text:"About Us" , href:"/aboutus"},
  {text:"Contact Us" , href:"/contactus"},
  {text:"Career With Us" , href:"/career"},
  {text:"Our Blogs" , href:"/blogs"},
];

const weekend_trips = [
{text:"Chopta Tungnath" , href:"/chopta"},
{text:"Manali Sissu" , href:"/manali" },
{text:"Manali Sissu Kasol" , href:"/kasol" },
{text:"Jibhi & Tirthan Valley" , href:"/jibhi" },
{text:"Kasol Kheerganga" , href:"/kheerganga" },
{text:"Mcleodganj Triund" , href:"/triund" },
];

const backpacking_trips = [ 
  {text:"Spiti Valley" , href:"/spiti" },
  {text:"leh & Ladakh" , href:"/leh" },
  {text:"Himachal Backpacking" , href:"/himachal" },
  {text:"Meghalaya" , href:"/meghalaya" },
];

const international_trip = [
  {text:"Vietnam" , href:"/vietnam" },
  {text:"Thailand" , href:"/thailand" },
  {text:"Kazakhstan" , href:"/kazakhstan" },
  {text:"Bali" , href:"/bali" },
  {text:"Dubai" , href:"/dubai" },
  {text:"Bhutan" , href:"/bhutan" },
];

const domestic_trip = [
  {text:"Himachal" , href:"/himachal" },
  {text:"Kashmir" , href:"/kashmir" },
  {text:"Kerala" , href:"/kerala" },
  {text:"Rajasthan" , href:"/rajasthan" },
  {text:"Uttarakhand" , href:"/uttarakhand" },
];

const quick_links = [
  {text:"Privacy Policy" , href:"/privacy" },
  {text:"Terms & Conditions" , href:"/terms" },
  {text:"Cancellation & Refund Policy" , href:"/refund" },
  {text:"Sitemap" , href:"/sitemap" },
];


export default function Footer() {
  return (
    <footer className="w-full w-[90%] bg-slate-50 py-10 px-4 ">
      <div className=" mx-auto    flex flex-col items-center justify-between">

        {/* ================= TOP GRID LINKS ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb:gap-10">

          {/* Company */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-xs text-gray-600 mb-8">
              {Company_items.map((item, index) => (
  <li key={index} className="hover:text-blue-700 cursor-pointer">
    <Link href={item.href}>{item.text}</Link>
  </li>
))}

            </ul>
          </div>

          {/* Weekend Trips */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">Weekend Trips</h3>
            <ul className="space-y-2 text-xs text-gray-600 mb-8">
              {weekend_trips.map((item, index) => (
  <li key={index} className="hover:text-blue-7">
    <Link href={item.href}>{item.text}</Link>
  </li>
))}

            </ul>
                        <h3 className="text-blue-800 font-semibold text-lg mb-4">Backpacking Trips</h3>
            <ul className="space-y-2 text-xs text-gray-600 mb-8">
             {backpacking_trips.map((item, index) => (
  <li key={index} className="hover:text-blue-7">
    <Link href={item.href}>{item.text}</Link>
  </li>
))}


            </ul>
          </div>

          {/* Backpacking */}


          {/* International + Domestic */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">International</h3>
            <ul className="space-y-2 text-xs text-gray-600 mb-8">
             {international_trip.map((item, index) => (
  <li key={index} className="hover:text-blue-7">
    <Link href={item.href}>{item.text}</Link>
  </li>
))}
            </ul>

            <h3 className="text-blue-900 font-semibold text-lg mb-4">Domestic</h3>
            <ul className="space-y-2 text-xs text-gray-600 mb-8">
             {domestic_trip.map((item, index) => (
  <li key={index} className="hover:text-blue-7">
    <Link href={item.href}>{item.text}</Link>
  </li>
))}
            </ul>
          </div>

          {/* Quick Links + Presence */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs text-gray-600 mb-8">
             {quick_links.map((item, index) => (
  <li key={index} className="hover:text-blue-7">
    <Link href={item.href}>{item.text}</Link>
  </li>
))}
            </ul>

            <h3 className="text-blue-800 font-semibold text-lg mb-3">Our Presence</h3>
            <p className="text-xs text-gray-600 mb-2">
              <span className="font-bold text-gray-900">Registered Office - </span>
              14/4, Girdhar Marg, Malviya Nagar, Jaipur (Rajasthan) - 302017
            </p>
            <p className="text-xs text-gray-600 mb-2">
              <span className="font-bold  text-gray-900">Corporate Office - </span>
              401, C-23, Sector 63, Noida (UP) - 201301
            </p>
            <p className="text-xs text-gray-600">+91-9266710039</p>
            <p className="text-xs text-gray-600">contact@go4explore.com</p>
          </div>
        </div>



        {/* ================= BRAND + PAYMENTS ================= */}
<div className="flex flex-col w-full md:flex-row w-[90%] 
rounded-xl bg-white/90 shadow-2xl p-4 justify-between items-center gap-8 mb-6">

  {/* 1. LOGO (Start/Left) */}
  <div className="w-full md:w-1/5 flex justify-center md:justify-start">
    <div className="relative w-[150px] h-[100px]">
      <Image
        src="https://go4explore.com/assets/img/footer-logo.webp"
        alt="Go4Explore Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>

  {/* 2. COPYRIGHT + PAYMENT (Center) */}
  <div className="flex flex-col items-center  w-full md:w-2/5">
    <div className="relative w-full max-w-[350px] h-[60px]">
      <Image
        src="https://go4explore.com/assets/img/payment.webp"
        alt="Payment Methods"
        fill
        className="object-contain"
        priority
      />
    </div>
    <hr className="border-gray-300 w-full mb-3" />
    <p className="text-gray-600 text-xs lg:text-xs font-medium text-center">
      © 2017-2025 Go4Explore Community Private Limited. All Rights Reserved.
    </p>
  </div>

  {/* 3. SOCIALS (End/Right) */}
  <div className="flex items-center justify-center md:justify-end w-full md:w-1/5 gap-1">
    <a href="#" className="p-2 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full hover:scale-110 transition-transform">
      <Instagram size={12} />
    </a>
    <a href="#" className="p-2 bg-red-600 text-white rounded-full hover:scale-110 transition-transform">
      <Youtube size={10} />
    </a>
    <a href="#" className="p-2 bg-blue-700 text-white rounded-full hover:scale-110 transition-transform">
      <Linkedin size={12} />
    </a>
    <a href="#" className="p-2 bg-green-500 text-white rounded-full hover:scale-110 transition-transform">
      <MessageCircle size={12} />
    </a>
  </div>

</div>
      </div>
    </footer>
  );
}
