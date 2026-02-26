"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

/* ================= INDIVIDUAL VIDEO SLIDE ================= */

function VideoSlide({ video, index, activeIndex, setActiveIndex }) {
  const videoRef = useRef(null);

  const isMuted = activeIndex !== index;

  useEffect(() => {
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.muted = true;
    } else {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play().catch(() => {});
    }
  }, [isMuted]);

  const toggleMute = () => {
    if (activeIndex === index) {
      // If already active → mute it
      setActiveIndex(null);
    } else {
      // Make this active → others auto mute
      setActiveIndex(index);
    }
  };

  return (
    <div
      className="relative w-full
      h-[350px] lg:h-[420px] rounded-2xl overflow-hidden "
    >
      <div>
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full  object-contain "
        muted
        loop
        playsInline
        autoPlay
      />
</div>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4
        bg-black/60 backdrop-blur-sm
        text-white p-2 rounded-full
        hover:bg-black/80 transition"
      >
        {isMuted ? <HiVolumeOff size={15} /> : <HiVolumeUp size={15} />}
      </button>
    </div>
  );
}

/* ================= MAIN SWIPER ================= */

export default function VideoSwiper({ videos = [], prevEl, nextEl }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Swiper
      modules={[Navigation]}
      
      loop={true}
      navigation={{
        prevEl: `.${prevEl}`,
        nextEl: `.${nextEl}`,
      }}
      breakpoints={{
        0: { slidesPerView: 1.5 ,spaceBetween: 10},
        480: { slidesPerView: 2, spaceBetween: 10 },
        1080: { slidesPerView: 3, spaceBetween: 10 },
      }}
      className="w-full"
    >
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <VideoSlide
            video={video}
            index={index}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}