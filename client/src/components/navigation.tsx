import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const handleDonateClick = () => {
    // Redirect to external donation platform
    window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank");
  };

  const handleSectionClick = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location !== '/') {
      navigate('/');
      // Wait for navigation then scroll to section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="https://media.discordapp.net/attachments/1212245437080408124/1395495142391152670/dsda.png?ex=687aa7a0&is=68795620&hm=2ac85c2bbf38d6effcce764f86f275c02124f4da2b2eec7a0915fe2715bb0da5&=&format=webp&quality=lossless&width=319&height=346" 
              alt="The Uplift Project Logo" 
              className="h-10 w-10 mr-3 object-contain flex-shrink-0"
            />
            <span className="font-playfair font-semibold text-xl text-uplift-red">
              The Uplift Project
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleSectionClick("about")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("impact")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
            >
              Impact
            </button>
            <button 
              onClick={() => handleSectionClick("updates")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
            >
              Updates
            </button>
            <button 
              onClick={() => handleSectionClick("facts")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
            >
              Facts
            </button>
            <Link href="/corporations" className="text-gray-700 hover:text-uplift-red transition-colors">
              For Corporations
            </Link>
            <Button 
              onClick={handleDonateClick}
              className="bg-uplift-red text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-medium"
            >
              Donate Now
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-uplift-red"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => handleSectionClick("about")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleSectionClick("impact")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                Impact
              </button>
              <button 
                onClick={() => handleSectionClick("updates")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                Updates
              </button>
              <button 
                onClick={() => handleSectionClick("facts")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                Facts
              </button>
              <Link href="/corporations" className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left">
                For Corporations
              </Link>
              <Button 
                onClick={handleDonateClick}
                className="bg-uplift-red text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-medium mt-2"
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
