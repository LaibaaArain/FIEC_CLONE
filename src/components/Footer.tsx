import React, { useState, useEffect } from "react";
import { Facebook, Youtube, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import fiacLogo from "@/assets/fiec-logo.png";
import bgFooter from "@/assets/bg_footer.png"; // ✅ background effect image

const Footer = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollToTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <footer
      className="relative text-white bg-[#0E447A] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-6 py-12">
        {/* ✅ Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-center lg:text-left">
          
          {/* Left Section */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
              <img src={fiacLogo} alt="FIEC Logo" className="h-10 mr-2" />
            </div>

            <p className="text-sm opacity-90 mb-4 max-w-lg mx-auto lg:mx-0">
              A world-class venue designed to host exhibitions, trade shows, and global
              business events. The Expo Center connects industries, innovators, and
              opportunities under one dynamic roof.
            </p>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-3 mt-6">
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white hover:bg-gray-200">
                <Youtube className="h-5 w-5 text-blue-800" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white hover:bg-gray-200">
                <Facebook className="h-5 w-5 text-blue-800" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-white hover:bg-gray-200">
                <Instagram className="h-5 w-5 text-blue-800" />
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scroll To Top */}
        {showScrollToTop && (
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-green-500 text-white border-none shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            <ArrowUp className="h-6 w-6" />
          </Button>
        )}

        {/* Footer bottom text */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>All Rights Reserved. | Developed by SAR ZONE</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
