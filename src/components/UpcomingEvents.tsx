import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import eventImage from "@/assets/event.jpg";

const events = [
  {
    id: 1,
    title: "Furniture Expo",
    description:
      "Step into the world of design, innovation, and craftsmanship at the Furniture Expo – the ultimate destination for home and commercial interiors. Explore a diverse range of furniture collections, from contemporary and minimalist to classic and luxurious styles.",
    images: [eventImage, eventImage, eventImage, eventImage],
  },
  {
    id: 2,
    title: "Textile Expo",
    description:
      "Asia’s premier exhibition for the textile and garment industry, showcasing cutting-edge technology and innovations.",
    images: [eventImage, eventImage, eventImage, eventImage],
  },
];

const UpcomingEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const event = events[currentIndex];
  const [mainImage, setMainImage] = useState(event.images[0]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? events.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setMainImage(events[newIndex].images[0]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === events.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setMainImage(events[newIndex].images[0]);
  };

  return (
<section id="events" className="py-10 mt-6 bg-white">
  <div className="container mx-auto px-4 space-y-16">

    {/* Section Heading (Always at top) */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold text-green-600">Upcoming Events</h2>
    </div>

    {/* -------- First Block -------- */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px]">
      {/* Left - Main Image */}
      <div className="w-[280px] sm:w-[320px] md:w-[360px] aspect-[3/4]">
        <img
          src={mainImage}
          alt="Event"
          className="w-full h-full object-cover rounded-[14px] shadow-md"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full max-w-[600px]">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
          {event.title}
        </h3>

        {/* Navigation */}
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={handlePrev}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-700 text-white hover:bg-blue-800"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <p className="text-gray-700 leading-relaxed mb-6">{event.description}</p>

        {/* Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {event.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={`w-full aspect-square object-cover rounded-[10px] cursor-pointer border-2 transition 
                ${mainImage === img ? "border-blue-600" : "border-transparent"}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>
    </div>

    {/* -------- Second Block: Static Info + Image -------- */}
    <div className="flex flex-col lg:flex-row items-center justify-center gap-[30px]">
      {/* Left - Text */}
      <div className="w-full max-w-[600px]">
        <h2 className="text-3xl font-bold text-green-600 mb-3">FIEC</h2>
        <h3 className="text-2xl text-[#0E447A] mb-3">
          Faisalabad International <br /> Expo Center
        </h3>
        <p className="text-gray-700 leading-relaxed">
          FIEC is a state-of-the-art venue in the heart of Faisalabad,
          designed to host exhibitions, trade shows, and business events. It
          serves as a dynamic platform connecting industries, fostering
          innovation, and driving regional economic growth.
        </p>
      </div>

      {/* Right - Static Image */}
      <div className="w-[280px] sm:w-[320px] md:w-[360px] lg:w-[500px] aspect-video">
        <img
          src={eventImage}
          alt="Highlight Event"
          className="w-full h-full object-cover rounded-[14px] shadow-md"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default UpcomingEvents;
