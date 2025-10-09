import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/bg_hero.png";
import colorEffect from "@/assets/coloreffect_hero.png";

const HeroSection = () => {
  const [selectedHall, setSelectedHall] = useState("hall-1");

  const halls = [
    { value: "hall-1", label: "Hall 1 (at Level-1)" },
    { value: "hall-2", label: "Hall 2 (at Level-1)" },
    { value: "hall-3", label: "Hall 3 (at Level-2)" },
    { value: "hall-4", label: "Hall 4 (at Level-2)" },
    { value: "function", label: "Function Hall (at Level-2)" },
  ];

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Two Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${colorEffect}), url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        {/* ✅ Responsive heading spacing */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
          mb-4 sm:mb-6 md:mb-8 leading-snug md:leading-tight animate-fade-in"
        >
          WHERE BUSINESS MEETS
          <br />
          <span className="text-white font-bold">OPPORTUNITY</span>
        </h1>

        {/* Hall Selection + CTA */}
        <div className="max-w-2xl mx-auto mt-32 sm:mt-40 md:mt-48 lg:mt-60 bg-black/15 backdrop-blur-md rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <Select value={selectedHall} onValueChange={setSelectedHall}>
              <SelectTrigger className="w-full md:w-[300px] bg-white text-foreground rounded-2xl">
                <SelectValue placeholder="Select a hall" />
              </SelectTrigger>
              <SelectContent className="rounded-2xl">
                {halls.map((hall) => (
                  <SelectItem key={hall.value} value={hall.value}>
                    {hall.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex gap-3">
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 active:bg-white active:text-black transition-colors duration-300 rounded-2xl"
                asChild
              >
                <a href="#contact">Book Now</a>
              </Button>
              <Button
                size="lg"
                className="bg-green-600 text-white hover:bg-green-700 active:bg-white active:text-black transition-colors duration-300 rounded-2xl"
                asChild
              >
                <a href={`#${selectedHall}`}>Details</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
