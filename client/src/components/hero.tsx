import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
import { Instagram } from "lucide-react";

export default function Hero() {
  const handleDonateClick = () => {
    trackEvent('donate_click', 'engagement', 'hero_section');
    window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank");
  };

  const scrollToAbout = () => {
    trackEvent('learn_more_click', 'navigation', 'hero_section');
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <img 
              src="https://thevirus-limiter.github.io/filestorage/dsda.png" 
              alt="The Uplift Project Logo" 
              className="mx-auto mb-4 h-48 w-auto object-contain"
            />
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-uplift-red mb-4">
            Launching Hope
          </h1>
          <p className="font-playfair text-3xl sm:text-4xl text-gray-700 mb-8">
            Ending Blood Cancer
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            We are a Blood Cancer United (formerly LLS) Student Visionaries of the Year fundraiser 
            seeking to raise thousands to support those struggling with blood cancer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleDonateClick}
              className="relative bg-uplift-red text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              <Heart className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Donate Now</span>
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              className="relative border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold group overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/20 hover:border-red-700"
            >
              <div className="absolute inset-0 bg-uplift-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10 group-hover:text-red-700 transition-colors duration-300">Learn More</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
