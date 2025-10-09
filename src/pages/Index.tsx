import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/ProjectSection";
import VenuSection from "../components/VenuSection";
import UpcomingEvents from "../components/UpcomingEvents";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <UpcomingEvents />
        <AboutSection />
        <VenuSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
