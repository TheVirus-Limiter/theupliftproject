import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  const handleInstagramClick = () => {
    trackEvent('instagram_click', 'engagement', 'hero_section');
    window.open("https://instagram.com/theupliftproject25", "_blank");
  };

  const scrollToAbout = () => {
    trackEvent('learn_more_click', 'navigation', 'hero_section');
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative pt-24 pb-20 overflow-hidden" style={{ background: "linear-gradient(180deg, #ffffff 0%, #fff5f5 40%, #ffe8e8 70%, #fef2f2 100%)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(131,25,25,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(131,25,25,0.03) 0%, transparent 40%), radial-gradient(circle at 50% 80%, rgba(220,38,38,0.02) 0%, transparent 50%)" }} />
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-[0.04] pointer-events-none" style={{ background: "radial-gradient(circle, #831919, transparent 70%)" }} />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none" style={{ background: "radial-gradient(circle, #831919, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in-up">
            <img 
              src="https://thevirus-limiter.github.io/filestorage/dsda.png" 
              alt="The Uplift Project Logo" 
              className="mx-auto mb-4 h-48 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold mb-4 animate-fade-in-up-delay-1" style={{ background: "linear-gradient(135deg, #831919 0%, #a52a2a 40%, #831919 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Launching Hope
          </h1>
          <p className="font-playfair text-3xl sm:text-4xl text-gray-700 mb-8 animate-fade-in-up-delay-2">
            Ending Blood Cancer
          </p>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay-3">
            Our Blood Cancer United (formerly LLS) Student Visionaries of the Year campaign has concluded.
            Thank you to everyone who supported our mission to end blood cancer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay-3">
            <Button 
              onClick={handleInstagramClick}
              data-testid="button-view-instagram"
              className="relative bg-uplift-red text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              <Instagram className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">View Our Instagram</span>
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              data-testid="button-learn-more"
              className="relative border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold group overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:border-red-700"
            >
              <div className="absolute inset-0 bg-uplift-red opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <span className="relative z-10 group-hover:text-red-700 transition-colors duration-300">Learn More</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(131,25,25,0.15), transparent)" }} />
    </section>
  );
}
