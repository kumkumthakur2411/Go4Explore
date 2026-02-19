"use client";

export default function DayRow({ day, title, description, open, onClick }) {
  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden">

      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white"
      >
        <div className="flex items-center gap-4">

          {/* Day Badge */}
          <div className="bg-[#2f5db3] text-white text-sm font-semibold px-4 py-1.5 rounded-full">
            Day {day}
          </div>

          {/* Title */}
          <p className="text-gray-900 font-medium">
            {title}
          </p>
        </div>

        {/* Arrow */}
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* Expand Content */}
      {open && (
        <div className="px-5 pb-5 pt-1 text-gray-600 border-t bg-white leading-relaxed">
          {description}
        </div>
      )}
    </div>
  );
}
