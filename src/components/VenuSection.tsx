import React from "react";
import venueImage from "@/assets/gatwala.png"; // replace with your image path
import mapImage from "@/assets/Map.png";       // replace with your map image path

const VenueInfo = () => {
  return (
    <section className="w-full py-10 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left: Venue image */}
        <div className="flex-shrink-0 w-full lg:w-[374px] flex justify-center lg:justify-start">
          <img
            src={venueImage}
            alt="Gatwala Commercial Hub"
            className="rounded-[24px] shadow-md w-full max-w-[374px] h-auto object-cover"
          />
        </div>

        {/* Middle: Venue details */}
        <div className="flex-1 text-center md:text-left">
          <h3
            className="text-green-600 font-extrabold uppercase"
            style={{
              fontFamily: "Open Sans",
              fontSize: "clamp(20px, 3vw, 32px)",
              lineHeight: "110%",
              letterSpacing: "-1%",
            }}
          >
            Venue Information
          </h3>

          <h2
            className="text-blue-900 font-extrabold uppercase mt-2"
            style={{
              fontFamily: "Open Sans",
              fontSize: "clamp(20px, 3vw, 32px)",
              lineHeight: "110%",
              letterSpacing: "-1%",
            }}
          >
            Gatwala Commercial Hub Faisalabad
          </h2>

          <p
            className="text-gray-700 mt-4 text-justify mx-auto md:mx-0"
            style={{
              fontFamily: "Open Sans",
              fontSize: "clamp(14px, 2vw, 16px)",
              lineHeight: "150%",
              letterSpacing: "-1%",
              maxWidth: "534px",
            }}
          >
            Gatwala Commercial Hub Faisalabad is a mega commercial project
            designed and developed by Shahnawaz Associates; an experienced
            real estate consultant and architect having iconic projects on his
            portfolio such as Kohinoor City, Lyallpur Galleria, Mediacom,
            Kohinoor 1, Rex City & more. Gatwala Commercial Hub Faisalabad is
            planned to be Punjab’s largest mixed-use real estate development
            with a covered area of 3.1 million sq.ft. The location of this
            project is very important as it has an average traffic count of 30
            vehicles per minute and is prospected to be the city’s next mega
            center for trade, commerce, industries and residential projects.
          </p>
        </div>

        {/* Right: Map */}
        <div className="flex-shrink-0 text-center mt-8 lg:mt-20 w-full lg:w-auto">
          <p className="text-gray-700 font-medium mb-2 text-base md:text-lg">
            Find on Map
          </p>
          <div className="flex justify-center lg:justify-end">
            <img
              src={mapImage}
              alt="Map location"
              className="rounded-[24px] shadow-md w-[180px] sm:w-[220px] md:w-[250px] lg:w-[194px] h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenueInfo;
