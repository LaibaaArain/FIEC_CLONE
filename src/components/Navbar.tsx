import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Import logo
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const venueLinks = [
    { name: "Hall 1 - Level 1", href: "#hall-1" },
    { name: "Hall 2 - Level 1", href: "#hall-2" },
    { name: "Hall 3 - Level 2", href: "#hall-3" },
    { name: "Hall 4 - Level 2", href: "#hall-4" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0E447A] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ml-6 h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img
              src={logoImage}
              alt="Expo Center Logo"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation (visible from lg and up) */}
          <div className="hidden lg:flex items-center space-x-2">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              asChild
            >
              <a href="#home">Home</a>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              asChild
            >
              <a href="#about">About Us</a>
            </Button>

            {/* Venue Info Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/20">
                    Venue Info
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-1 p-2">
                      {venueLinks.map((link) => (
                        <li key={link.name}>
                          <NavigationMenuLink asChild>
                            <a
                              href={link.href}
                              className="block rounded-md p-3 text-sm font-medium hover:bg-[#0E447A]/10"
                            >
                              {link.name}
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              asChild
            >
              <a href="#gallery">Gallery</a>
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20"
              asChild
            >
              <a href="#events">Events</a>
            </Button>
          </div>

          {/* Mobile + Tablet Navigation (shown below lg) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <nav className="flex flex-col space-y-4 mt-8">
                <a
                  href="#home"
                  className="text-lg font-medium hover:text-[#0E447A]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-lg font-medium hover:text-[#0E447A]"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                <div>
                  <div className="text-lg font-medium mb-2">Venue Info</div>
                  <div className="pl-4 space-y-2">
                    {venueLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="block text-gray-600 hover:text-[#0E447A]"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href="#gallery"
                  className="text-lg font-medium hover:text-[#0E447A]"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#events"
                  className="text-lg font-medium hover:text-[#0E447A]"
                  onClick={() => setIsOpen(false)}
                >
                  Events
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
