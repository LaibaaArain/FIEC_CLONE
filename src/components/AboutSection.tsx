  import React from "react";
import aboutMain from "/main.jpg";
import aboutSmall from "/card.jpg";
import colorEffect from "@/assets/bg_footer.png";

const About = () => {
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
          ABOUT US
        </h1>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl w-full px-6 md:px-12 mb-16 relative z-10 flex flex-col md:items-start text-left">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl mt-36 font-extrabold text-[#0BB530] mb-4">
            Introduction to FIEC
          </h2>
          <p className="text-lg text-[#0E447A] md:text-gray-800 leading-relaxed">
     FIEC is a state-of-the-art venue in the heart of Faisalabad, designed to host exhibitions, trade shows, and business events. It serves as a dynamic platform connecting industries, fostering innovation, and driving regional economic growth.
          </p>
        </div>
      </section>

      {/* Image Section */}
      <section className="relative w-full flex justify-start mb-20 px-6 md:px-12 z-10">
        <div className="relative w-[762.32px] h-[491.9px] max-w-6xl ml-10">
          {/* Main Image with Hover Shadow */}
          <img
            src={aboutMain}
            alt="Main FIEC Venue"
            className="rounded-[39px] w-full h-auto object-cover transform translate-x-[-20px] cursor-pointer transition-all duration-300 shadow-md hover:shadow-2xl hover:scale-[1.02]"
          />

          {/* Small Overlay Image with Hover Effect */}
          <div className="absolute -bottom-[-150px] right-[-260px] w-[300px] md:w-[400px] shadow-md rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
            <img
              src={aboutSmall}
              alt="FIEC Exhibition"
              className="rounded-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
