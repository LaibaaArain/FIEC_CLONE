import React from "react";
import colorEffect from "@/assets/bg_footer.png";
import img1 from "@assets/G_0.svg";
import img2 from "@assets/G_1.svg";
import img3 from "@assets/G_2.svg";
import img4 from "@assets/G_3.svg";
import img5 from "@assets/G_5.svg";
import img6 from "@assets/G_6.jpg";
import img7 from "@assets/G_6.svg";
import img9 from "@assets/G_8.svg";
import img10 from "@assets/G_9.svg";

const GallerySection = () => {
  return (
    <div
      className="flex flex-col items-center text-gray-800 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, #0E447A, #0E447A00), url(${colorEffect})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B4B88]/80 to-white/90 -z-10"></div>

      {/* Header */}
      <section className="w-full text-center py-16 relative z-10">
        <h1 className="text-3xl mt-10 font-extrabold text-white tracking-wide drop-shadow-lg">
          Gallery
        </h1>
        <p className="text-lg text-white leading-relaxed mx-4 md:mx-16">
          Explore our gallery to experience the highlights of our events,
          exhibitions, and milestones. Each image captures the energy,
          creativity, and moments that define who we are. Take a visual journey
          through our story.
        </p>
      </section>

      {/* ===== Row 1 ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 py-6">
        <div className="sm:col-span-2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={img1}
            alt="Large Gallery"
            className="w-full h-full object-cover brightness-110"
          />
        </div>

        <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={img2}
            alt="Small Gallery"
            className="w-full h-full object-cover brightness-110"
          />
        </div>
      </div>

      {/* ===== Row 2 ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 py-6">
        {[img2, img4, img5].map((image, i) => (
          <div
            key={i}
            className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={image}
              alt="Gallery"
              className="w-full h-full object-cover brightness-110"
            />
          </div>
        ))}
      </div>

      {/* ===== Row 3 ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 py-6">
        <div className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={img6}
            alt="Large Gallery"
            className="w-full h-full object-cover brightness-110"
          />
        </div>

        <div className="sm:col-span-1 lg:col-span-2 h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
          <img
            src={img3}
            alt="Small Gallery"
            className="w-full h-full object-cover brightness-110"
          />
        </div>
      </div>

      {/* ===== Row 4 ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-10 py-6">
        {[img9, img7, img10].map((image, i) => (
          <div
            key={i}
            className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={image}
              alt="Gallery"
              className="w-full h-full object-cover brightness-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
