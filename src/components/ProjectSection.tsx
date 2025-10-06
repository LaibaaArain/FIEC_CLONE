import React from "react";
import { Card } from "@/components/ui/card";
import card_item from "@/assets/card_item.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      id: "idex",
      title: "International Dairy Expo 2026 (IDEX)",
      description:
        "Explore The Future Of Dairy At IDEX 2026 – A Global Platform Showcasing Innovation, Technology, And Excellence In The Dairy Industry.",
      image: card_item,
    },
    {
      id: "leftover-festival",
      title: "LEFT OVER FESTIVAL",
      description:
        "A Unique Celebration Of Sustainability, Creativity, And Conscious Living.",
      image: card_item,
    },
    {
      id: "lokvirsa-expo",
      title: "Lokvirsa Expo",
      description:
        "Lok Virsa Celebrates The Rich Cultural Heritage Of Pakistan Through Art, Music, Crafts, And Traditions.",
      image: card_item,
    },
    {
      id: "textile-asia",
      title: "Textile Asia Expo",
      description:
        "Asia’s Premier Exhibition For The Textile And Garment Industry. Showcasing Cutting-Edge Technology And Innovations.",
      image: card_item,
    },
    {
      id: "bed-home-expo",
      title: "Bed & Home Expo",
      description:
        "Discover The Latest In Bedding, Furniture, And Home Décor At The Ultimate Lifestyle Showcase From Comfort To Style. Explore Innovative Solutions.",
      image: card_item,
    },
    {
      id: "crockery-festival",
      title: "Crockery Festival",
      description:
        "Celebrate Elegance And Functionality With The Finest Selection Of Crockery, Tableware, And Kitchen Essentials.",
      image: card_item,
    },
  ];

  return (
    <section id="about" className="pt-40 pb-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-600">
            Our Projects
          </h2>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="relative w-[340px] h-[240px] overflow-hidden rounded-xl shadow-lg cursor-pointer group transition-transform transform hover:scale-[1.04] duration-300 ease-in-out"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Default White Overlay (visible before hover) */}
              <div className="absolute inset-0 bg-white/50 opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>

              {/* Hover Blue Overlay */}
              <div className="absolute inset-0 bg-[#0E447A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Text */}
              <div className="absolute  mt-12 inset-0 flex flex-col items-center justify-center text-center z-10 transition-colors duration-300 text-[#0E447A] group-hover:text-white px-6">
                <h3 className="text-[20px]  font-bold mb-3">
                  {project.title}
                </h3>
                <p className="text-[12px] leading-relaxed max-w-[90%]">
                  {project.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
