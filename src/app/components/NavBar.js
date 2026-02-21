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
  { name: "Upcoming Group Trips", icon: "https://go4explore.com/assets/img/head-bottom/1.png" ,href:"/upcoming-trips" },
  { name: "International Trips", icon: "https://go4explore.com/assets/img/head-bottom/2.png" ,href:"/International-trips"},
  { name: "Domestic Trips", icon: "https://go4explore.com/assets/img/head-bottom/3.png",href:"/Domestic-trips" },
  { name: "Weekend Trips", icon: "https://go4explore.com/assets/img/head-bottom/4.png" ,href:"/Weekend-trips" },
  { name: "Backpacking Trips", icon: "https://go4explore.com/assets/img/head-bottom/5.png",href:"/upcoming-trips" },
  { name: "Corporate Tours", icon: "https://go4explore.com/assets/img/head-bottom/6.png",href:"/upcoming-trips" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<header className="fixed top-0 left-0 w-full md:h-[18vh] h-[10vh] z-50 bg-white ">
  {/* ===== TOP NAV ===== */}
  <div className="w-[95vw] md:w-[88vw] h-full md:h-[55%] mx-auto flex items-center justify-between px-2 md:px-5">
    
    {/* 1. Logo (Desktop) - Visible only on md and up */}
    <Link href="/" className="hidden md:block">
      <Image
        src="https://go4explore.com/assets/img/logo.webp"
        alt="Go4Explore"
        width={160}
        height={160}
        priority
      />
    </Link>

    {/* 2. Desktop Center Menu */}
    <div className="hidden md:flex items-center gap-5">
    <div className="hidden md:flex items-center gap-5">
      <button className="btn-cycle px-4 py-1 rounded-full
       text-sm font-bold text-white flex items-center gap-2 hover:bg-white 
      hover:text-red-600 hover:border-red-600 transition-all">
        <Image src="https://go4explore.com/assets/img/sale-page/sale-nav-bar-icon.png"
         alt="offer" width={20} height={20} />
        Early Bird offer 2026
      </button>
      <div className="flex items-center gap-6 text-base font-semibold text-[#000000]">
        {topMenu.map((item, index) => (
          <Link key={index} href={item.href} className="hover:text-blue-600">{item.name}</Link>
        ))}
      </div>
    </div>

    {/* 3. Desktop Right Side Actions */}
    <div className="hidden md:flex items-center justify-center gap-4">
      <div className="flex items-center gap-2 border border-[#2755B0] px-3 py-2 rounded-full text-[#2755B0] cursor-pointer hover:bg-[#2755B0] hover:text-white transition-all">
        <RiWhatsappLine size={20} />
        <span className="text-xs font-medium">+91 9266710039</span>
      </div>
      <p className="text-3xl font-semibold text-zinc-900">|</p>
      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2755B0] text-white">
        <IoPersonOutline size={18} />
      </div>
    </div>
    </div>

    {/* 4. MOBILE-ONLY NAVIGATION (Independent Layout) */}
    <div className="flex md:hidden w-full items-center justify-between ">
      {/* Mobile Logo */}
      <Link href="/">
        <Image
          src="https://go4explore.com/assets/img/footer-logo.webp"
          alt="Go4Explore"
          width={45} 
          height={45}
          priority
        />
      </Link>

      {/* Mobile Actions Container */}
      
        {/* Mobile WhatsApp Button (Icon + Number) */}
        <a href="tel:+919266710039" className="flex items-center gap-1 border border-[#2755B0]
         px-3 py-1.5 rounded-full text-[#2755B0]">
          <RiWhatsappLine size={18} />
          <span className="text-[10px] font-bold">+91 9266710039</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(true)} className="text-gray-800">
          <HiOutlineMenuAlt3 size={28} />
        </button>
    </div>
</div>
  

  {/* ===== BOTTOM NAV (Desktop Only) ===== */}
  <div className="hidden md:flex h-[45%] bg-[#2755B0] text-white items-center justify-center">
    <div className="w-[77%] flex items-center justify-between py-3 text-sm font-medium">
      {bottomMenu.map((item, index) => (
        <Link href={item.href} key={index}>
        <div  className="flex items-center gap-2 hover:text-yellow-300 cursor-pointer">
          

          <Image src={item.icon} alt={item.name} width={20} height={20} />
          <span>{item.name}</span>
          
        </div>
        </Link>
      ))}
    </div>
  </div>
</header>
      {/* ===== MOBILE DRAWER ===== */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-[100] transform transition-transform duration-300 ${
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
          <span className="text-[10px] font-bold">+91 9266710039</span>
        </a>
        <p className="text-3xl font-normal text-gray-700 px-2">|</p>
                <a href="tel:+919266710039" className="flex items-center gap-1 border border-[#2755B0]
         px-3 py-1.5 rounded-full text-[#2755B0]">
          <IoPersonOutline size={18} />
          <span className="text-[10px] font-bold">Login OR Register</span>
        </a>

        </div>
      </div>
    </>
  );
}

