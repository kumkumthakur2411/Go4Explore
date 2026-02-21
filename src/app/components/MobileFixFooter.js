"use client";

import { Menu, MessageCircle, Send, Phone } from "lucide-react";

export default function MobileFixFooter() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] rounded-t-2xl z-50">
      <div className="flex justify-around items-center py-3">
        
        <div className="flex flex-col items-center text-xs text-blue-600">
          <Menu size={22} />
          <span className="mt-1">Menu</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-700">
          <MessageCircle size={22} />
          <span className="mt-1">Whatsapp</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-700">
          <Send size={22} />
          <span className="mt-1">Send Query</span>
        </div>

        <div className="flex flex-col items-center text-xs text-gray-700">
          <Phone size={22} />
          <span className="mt-1">Call</span>
        </div>

      </div>
    </div>
  );
}