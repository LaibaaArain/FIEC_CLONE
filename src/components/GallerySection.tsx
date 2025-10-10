import React from "react";
import colorEffect from "@/assets/bg_footer.png";
import img1 from "@assets/G_0.svg";
import img2 from "@assets/G_1.svg";
import img3 from "@assets/G_2.svg";
import img4 from "@assets/G_3.svg";
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

      {/* Gallery Section */}
     
  </div>  );
};

export default GallerySection;
