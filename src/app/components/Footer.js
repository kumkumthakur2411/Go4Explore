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
<footer className="w-full bg-slate-50 py-12 px-4 md:px-30">
  <div className="max-w-7xl mx-auto flex flex-col items-center">
    
    {/* ================= TOP GRID LINKS ================= */}
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
      
      {/* Company */}
      <div className="flex flex-col">
        <h3 className="text-[#2755B0] font-bold text-base md:text-lg mb-4 uppercase tracking-wide">Company</h3>
        <ul className="space-y-3">
          {Company_items.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm text-gray-600 hover:text-[#2755B0] transition-colors">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Trips Column */}
      <div className="flex flex-col">
        <h3 className="text-[#2755B0] font-bold text-base md:text-lg mb-4 uppercase tracking-wide">Weekend Trips</h3>
        <ul className="space-y-3 mb-8">
          {weekend_trips.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm text-gray-600 hover:text-[#2755B0] transition-colors">{item.text}</Link>
            </li>
          ))}
        </ul>
        <h3 className="text-[#2755B0] font-bold text-base md:text-lg mb-4 uppercase tracking-wide">Backpacking</h3>
        <ul className="space-y-3">
          {backpacking_trips.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm text-gray-600 hover:text-[#2755B0] transition-colors">{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* International & Domestic */}
      <div className="flex flex-col">
        <h3 className="text-[#2755B0] font-bold text-base md:text-lg mb-4 uppercase tracking-wide">International</h3>
        <ul className="space-y-3 mb-8">
          {international_trip.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm text-gray-600 hover:text-[#2755B0] transition-colors">{item.text}</Link>
            </li>
          ))}
        </ul>
        <h3 className="text-[#2755B0] font-bold text-base md:text-lg mb-4 uppercase tracking-wide">Domestic</h3>
        <ul className="space-y-3">
          {domestic_trip.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm text-gray-600 hover:text-[#2755B0] transition-colors">{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links & Contact */}
      <div className="flex flex-col">
        <h3 className="text-[#2755B0] font-bold text-base md:text-lg mb-4 uppercase tracking-wide">Quick Links</h3>
        <ul className="space-y-3 mb-8">
          {quick_links.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="text-sm text-gray-600 hover:text-[#2755B0] transition-colors">{item.text}</Link>
            </li>
          ))}
        </ul>
        <h3 className="text-[#2755B0] font-bold text-base mb-4 uppercase tracking-wide">Our Presence</h3>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-900">Registered:</span> Jaipur, Rajasthan - 302017
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-900">Corporate:</span> Sector 63, Noida (UP) - 201301
          </p>
          <p className="text-sm font-bold text-[#2755B0]">+91-9266710039</p>
          <p className="text-sm text-gray-600">contact@go4explore.com</p>
        </div>
      </div>
    </div>

    {/* ================= BRAND + PAYMENTS ================= */}
    <div className="w-full flex flex-col md:flex-row rounded-3xl bg-white shadow-xl border border-gray-100 p-6 md:p-8 justify-between items-center gap-8">
      
      {/* 1. Logo */}
      <div className="flex-shrink-0">
        <Image
          src="https://go4explore.com/assets/img/footer-logo.webp"
          alt="Go4Explore Logo"
          width={150}
          height={80}
          className="h-16 w-auto object-contain"
        />
      </div>

      {/* 2. Center Content */}
      <div className="flex flex-col items-center flex-1 max-w-md">
        <div className="mb-4">
          <Image
            src="https://go4explore.com/assets/img/payment.webp"
            alt="Payment Methods"
            width={300}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </div>
        <div className="w-full h-px bg-gray-100 mb-4" />
        <p className="text-gray-500 text-[10px] md:text-xs font-medium text-center">
          © 2017-2026 Go4Explore Community Private Limited. <br className="md:hidden" /> All Rights Reserved.
        </p>
      </div>

      {/* 3. Social Icons */}
      <div className="flex items-center gap-3">
        {[
          { icon: <Instagram size={18} />, color: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600" },
          { icon: <Youtube size={18} />, color: "bg-[#FF0000]" },
          { icon: <Linkedin size={18} />, color: "bg-[#0077B5]" },
          { icon: <MessageCircle size={18} />, color: "bg-[#25D366]" }
        ].map((social, i) => (
          <a key={i} href="#" className={`${social.color} p-2.5 text-white rounded-full hover:scale-110 hover:-translate-y-1 transition-all shadow-md`}>
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>
  );
}
