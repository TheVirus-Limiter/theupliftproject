import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const handleInstagramClick = () => {
    window.open("https://instagram.com/theupliftproject25", "_blank");
  };

  const handleSectionClick = (sectionId: string) => {
    if (location !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMenuOpen(false);
  };

 const handleLogoClick = () => {
  if (location === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }
  setIsMenuOpen(false);
};
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
            <img 
              src="https://thevirus-limiter.github.io/filestorage/dsda.png" 
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
              data-testid="link-about"
            >
              About
            </button>
            <button 
              onClick={() => handleSectionClick("news")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
              data-testid="link-news"
            >
              News
            </button>
            <button 
              onClick={() => handleSectionClick("best-day-ever")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
              data-testid="link-best-day-ever"
            >
              Best Day Ever
            </button>
            <button 
              onClick={() => handleSectionClick("honored-hero")}
              className="text-gray-700 hover:text-uplift-red transition-colors"
              data-testid="link-miguel"
            >
              Miguel
            </button>
            <Button 
              onClick={handleInstagramClick}
              data-testid="button-follow-us"
              className="bg-uplift-red text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-medium"
            >
              <Instagram className="w-4 h-4 mr-2" />
              Follow Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-uplift-red"
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
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
                onClick={() => handleSectionClick("news")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                News
              </button>
              <button 
                onClick={() => handleSectionClick("best-day-ever")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                Best Day Ever
              </button>
              <button 
                onClick={() => handleSectionClick("honored-hero")}
                className="text-gray-700 hover:text-uplift-red transition-colors py-2 text-left"
              >
                Miguel
              </button>
              <Button 
                onClick={handleInstagramClick}
                data-testid="button-follow-us-mobile"
                className="bg-uplift-red text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors font-medium mt-2"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Follow Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
