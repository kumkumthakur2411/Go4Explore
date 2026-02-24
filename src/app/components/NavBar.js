"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";

const topMenu = [
  { name: "About Us", href: "#" },
  { name: "Blogs", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Payments", href: "#" },
  { name: "Contact Us", href: "#" },
];
const bottomMenu = [
  { name: "Upcoming Group Trips",
     icon: "https://go4explore.com/assets/img/head-bottom/1.png" ,
     href:"/upcoming-trips",
      submenu: [
      { name: "Himachal Trips", href: "/group-trips/himachal" },
      { name: "Kashmir Trips", href: "/group-trips/kashmir" },
      { name: "Uttarakhand Trips", href: "/group-trips/uttarakhand" },
    ], 
  },
  { name: "International Trips", 
    icon: "https://go4explore.com/assets/img/head-bottom/2.png" ,
    href:"/trips-category/international-trips",
      submenu: [
      { name: "Himachal Trips", href: "/group-trips/himachal" },
      { name: "Kashmir Trips", href: "/group-trips/kashmir" },
      { name: "Uttarakhand Trips", href: "/group-trips/uttarakhand" },
    ],
  },
  { name: "Domestic Trips", icon: "https://go4explore.com/assets/img/head-bottom/3.png",
    href:"/trips-category/domestic-trips",
      submenu: [
      { name: "Himachal Trips", href: "/group-trips/himachal" },
      { name: "Kashmir Trips", href: "/group-trips/kashmir" },
      { name: "Uttarakhand Trips", href: "/group-trips/uttarakhand" },
    ], },
  { name: "Weekend Trips", icon: "https://go4explore.com/assets/img/head-bottom/4.png" ,
    href:"/trips-category/weekend-trips",
      submenu: [
      { name: "Himachal Trips", href: "/group-trips/himachal" },
      { name: "Kashmir Trips", href: "/group-trips/kashmir" },
      { name: "Uttarakhand Trips", href: "/group-trips/uttarakhand" },
    ], },
  { name: "Backpacking Trips", icon: "https://go4explore.com/assets/img/head-bottom/5.png",
    href:"/trips-category/backpacking-trips" ,
      submenu: [
      { name: "Himachal Trips", href: "/group-trips/himachal" },
      { name: "Kashmir Trips", href: "/group-trips/kashmir" },
      { name: "Uttarakhand Trips", href: "/group-trips/uttarakhand" },
    ],},
  { name: "Corporate Tours", icon: "https://go4explore.com/assets/img/head-bottom/6.png",
    href:"/corporate-tours",
      submenu: [
      { name: "Himachal Trips", href: "/group-trips/himachal" },
      { name: "Kashmir Trips", href: "/group-trips/kashmir" },
      { name: "Uttarakhand Trips", href: "/group-trips/uttarakhand" },
    ], },
];


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">

  {/* ===== TOP NAV ===== */}
  <div className="h-22 md:h-[74px] border-b border-gray-100">
    <div className="max-w-screen-2xl mx-auto h-full px-4 md:px-19 flex items-center justify-between">

      {/* Logo */}
      <div className="hidden md:block flex items-center gap-6">
        <Link href="/">
          <Image
            src="https://go4explore.com/assets/img/logo.webp"
            alt="Go4Explore"
            width={150}
            height={50}
            priority
          />
        </Link>

      </div>

      {/* Desktop  Offer  + Menu */}
      <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-gray-800">
        
        {/* Early Bird Button - Desktop only */}
        <Link href="/">
        <button className="hidden lg:flex btn-cycle px-2 py-2 
        rounded-full text-xs font-bold text-white items-center gap-2 border border-transparent hover:bg-white hover:text-red-600 hover:border-red-600 transition-all">
          <Image
            src="https://go4explore.com/assets/img/sale-page/sale-nav-bar-icon.png"
            alt="offer"
            width={18}
            height={18}
          />
          EARLY BIRD OFFERS 2026
        </button>
        </Link>
        {topMenu.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-[#2755B0] transition">
            {item.name}
          </Link>
        ))}
              {/* Right Side Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:+919266710039"
          className="flex items-center gap-2 
          border-1 border-[#2755B0] px-3 py-2 rounded-full text-[#2755B0] text-xs font-bold hover:bg-[#2755B0] hover:text-white transition"
        >
          <RiWhatsappLine size={18} />
          +91 9266710039
        </a>

        <div className="w-[2px] h-7 bg-gray-700 "></div>

        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#2755B0] text-white cursor-pointer hover:bg-blue-800 transition">
          <IoPersonOutline size={20} />
        </div>
      </div>
      </nav>



      {/* Mobile Controls */}
      <div className="flex w-full  md:hidden items-center justify-between">

  {/* Mobile Logo */} 
  <Link href="/">
   <Image src="https://go4explore.com/assets/img/footer-logo.webp" 
alt="Go4Explore" width={45} height={45} priority /> 
</Link> 
{/* Mobile WhatsApp Button (Icon + Number) */} 
<a href="tel:+919266710039"
 className="flex items-center gap-1 border border-[#2755B0] px-3 py-1.5 rounded-full text-[#2755B0]"> 
  <RiWhatsappLine size={18} /> 
  <span className="text-xs font-bold">+91 9266710039</span>
   </a>
   {/* Mobile Menu Button */}
    <button onClick={() => setIsOpen(true)} className="text-gray-800"> 
      <HiOutlineMenuAlt3 size={28} /> 
      </button>
      </div>

    </div>
  </div>

  {/* ===== BOTTOM NAV (Desktop Only) ===== */}
<div className="hidden md:block bg-[#2755B0] text-white">
  <div className="max-w-7xl mx-auto px-30">
    <div className="flex items-center justify-between py-3 text-sm font-semibold">

      {bottomMenu.map((item, index) => (
        <div key={index} className="relative group">

          {/* Main Menu Item */}
          <Link href={item.href}>
            <div className="flex items-center gap-2 cursor-pointer whitespace-nowrap hover:text-yellow-300 transition">
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
              />
              {item.name}
            </div>
          </Link>

          {/* Dropdown */}
          {item.submenu && (
            <div className="
              absolute left-0 top-full mt-3
              bg-white text-gray-800
              rounded-xl shadow-xl
              min-w-[200px]
              opacity-0 invisible
              group-hover:opacity-100 group-hover:visible
              transition-all duration-300
              z-50
            ">
              <div className="py-3">
                {item.submenu.map((subItem, subIndex) => (
                  <Link key={subIndex} href={subItem.href}>
                    <div className="px-5 py-3 hover:bg-gray-100 
                     transition cursor-pointer text-base font-medium ">
                      {subItem.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      ))}

    </div>
  </div>
</div>
</header>

{/* Spacer */}
<div className="h-[70px] md:h-[115px]"></div>
      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[100] overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">

          {/* Drawer Top */}
          <div className="flex justify-between items-center mb-4">
            <Image
              src="https://go4explore.com/assets/img/footer-logo.webp"
              alt="logo"
              width={50}
              height={50}
            />
            <button onClick={() => setIsOpen(false)}>
              <HiOutlineX size={28} />
            </button>
          </div>

          {/* Categories */}
            <h1>Categories</h1>
<div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-10">
  {bottomMenu.map((item, index) => (
    <div key={index} className="flex items-start gap-1">
      <Image src={item.icon} alt={item.name} width={22} height={22} className="filter grayscale invert" />
      <span className="font-medium text-sm leading-tight">
        {item.name}
      </span>
      <RiArrowDropDownLine size={16} />
    </div>
  ))}
</div>
<div className="flex justify-center items-center  py-7">
              <button
                className="
                  mr-4
                  btn-cycle
                  px-4 py-2
                  rounded-full
                  text-sm
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
                <Image
                  src="https://go4explore.com/assets/img/sale-page/sale-nav-bar-icon.png"
                  alt="offer"
                  width={20}
                  height={20}
                />
                Early Bird offer 2026
              </button>
</div>

         
<h1>More</h1>
          {/* More Links */}
          <div className="space-y-4 mt-5">
            {topMenu.map((item, index) => (
              <div key={index} className="font-medium">
                {item.name}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-center items-center  py-7">
        <a href="tel:+919266710039" className="flex items-center gap-1 border border-[#2755B0]
         px-3 py-1.5 rounded-full text-[#2755B0]">
          <RiWhatsappLine size={18} />
          <span className="text-xs font-bold">+91 9266710039</span>
        </a>
        <p className="text-3xl font-normal text-gray-700 px-2">|</p>
                <a href="tel:+919266710039" className="flex items-center gap-1 border border-[#2755B0]
         px-3 py-1.5 rounded-full text-[#2755B0]">
          <IoPersonOutline size={18} />
          <span className="text-xs font-bold">Login OR Register</span>
        </a>

        </div>
      </div>
    </>
  );
}

