import Image from "next/image";
import Link from "next/link";
import { Phone, User } from "lucide-react";

const topMenu = [
  { name: "About Us", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Payments", href: "#" },
  { name: "Contact Us", href: "#" },
];

const bottomMenu = [
  { name: "Upcoming Group Trips", icon: "https://go4explore.com/assets/img/head-bottom/1.png" },
  { name: "International Trips", icon: "https://go4explore.com/assets/img/head-bottom/2.png" },
  { name: "Domestic Trips", icon: "https://go4explore.com/assets/img/head-bottom/3.png" },
  { name: "Weekend Trips", icon: "https://go4explore.com/assets/img/head-bottom/4.png" },
  { name: "Backpacking Trips", icon: "https://go4explore.com/assets/img/head-bottom/5.png" },
  { name: "Corporate Tours", icon: "https://go4explore.com/assets/img/head-bottom/6.png" },
];
export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full h-[18%] z-50 bg-white ">
      <div className="w-[90%] h-[55%] mx-auto flex items-center justify-between px-10 py-2 ">

        {/* Logo */}
        <Link href="/" className="">
          <Image
            src="https://go4explore.com/assets/img/logo.webp"   // put your logo in public folder
            alt="Go4Explore"
            width={120}
            height={120}
            priority
          />
        
        </Link>

        {/* Early Bird Button */}
        <div className="flex flex-row p-2 gap-5">
        <div className="flex flex-row p-2">
<button
  className="
  mr-4
    btn-cycle
    px-3 py-1
    rounded-full
    text-xs
    font-bold
    text-white
    border-1 border-transparent
    transition-all duration-300
 flex flex-row items-center gap-2
    hover:bg-white
    hover:text-red-600
    hover:border-red-600
    hover:shadow-lg
    hover:animate-none
  "
>
  <Image src="https://go4explore.com/assets/img/sale-page/sale-nav-bar-icon.png" alt="offer" width={20} height={20}/>
  Early Bird offer 2026
</button>


        {/* Menu */}
        <div className="hidden md:flex items-center gap-5 text-sm font-bold text-gray-700">
          {topMenu.map((item, index) => (
            <Link key={index} href={item.href} className="hover:text-blue-600">
              {item.name}
            </Link>
          ))}
        </div>
</div>
        {/* Right Side */}
        <div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 border border-[#2755B0] px-2 py-1 rounded-full 
text-[#2755B0] cursor-pointer transition-all duration-300 hover:bg-[#2755B0] hover:text-white">
  <Phone size={16} />
  <span className="text-sm font-medium">+91 9266710039</span>
</div>


          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2755B0] text-white">
            <User size={18} />
          </div>
        </div>
        </div>
      </div>

      {/* ===== BOTTOM NAV ===== */}
      <div className=" h-[45%] bg-[#2755B0] text-white px-10 py-1 flex items-center justify-between">
        <div className="w-[90%] mx-auto flex items-center justify-between py-3 text-sm font-medium overflow-x-auto">
          {bottomMenu.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap hover:text-yellow-300 cursor-pointer"
            >
              <Image src={item.icon} alt={item.name} width={20} height={20} />  
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
