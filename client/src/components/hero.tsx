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
    <section className="bg-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6 animate-fade-in-up">
            <img 
              src="https://thevirus-limiter.github.io/filestorage/dsda.png" 
              alt="The Uplift Project Logo" 
              className="mx-auto mb-4 h-48 w-auto object-contain"
            />
          </div>
          <h1 className="font-playfair text-5xl sm:text-6xl font-bold text-uplift-red mb-4 animate-fade-in-up-delay-1">
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
              className="bg-uplift-red text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-red-800 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              View Our Instagram
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              data-testid="button-learn-more"
              className="border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-50 transition-colors duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
