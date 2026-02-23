"use client";

import { Menu, MessageCircle, Send, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCallOutline } from "react-icons/io5";
export default function MobileFixFooter() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 
    w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] rounded-t-3xl z-50">
      <div className="flex justify-around items-center py-3">
        
        <div className="flex flex-col items-center text-xs text-blue-600">
          <HiMenuAlt3 size={16} />
          <span className="mt-1">Menu</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-700">
          <FaWhatsapp size={16} />
          <span className="mt-1">Whatsapp</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-700">
          <IoPaperPlaneOutline size={16} />
          <span className="mt-1">Send Query</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-700">
          <IoCallOutline size={16} />
          <span className="mt-1">Call</span>
        </div>

      </div>
    </div>
  );
}