import { Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const handleDonateClick = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Button clicked! Redirecting to donation page...");
    
    try {
      const newWindow = window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank", "noopener,noreferrer");
      
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        console.log("Popup blocked, using window.location redirect");
      }
    } catch (error) {
      console.error("Error opening donation page:", error);
    }
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "The Uplift Project - Launching Hope, Ending Blood Cancer",
        text: "Join us in raising $50,000 for blood cancer research and patient support!",
        url: window.location.href,
      });
    } else {
      // Fallback to copying to clipboard or social media
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section className="py-20 bg-uplift-red">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl font-bold text-white mb-6">
          Join Us in Launching Hope
        </h2>
        <p className="text-xl text-red-100 mb-8 leading-relaxed">
          Every donation, no matter the size, brings us closer to our goal of ending blood cancer. 
          Together, we can make a difference in the lives of patients and families affected by these diseases.
        </p>
        <div className="flex justify-center">
          <Button 
            onClick={handleDonateClick}
            className="relative bg-white text-uplift-red px-8 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-red-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-0 group-hover:opacity-30 blur transition-opacity duration-300"></div>
            <Heart className="w-5 h-5 mr-2 relative z-10 group-hover:scale-125 group-hover:-rotate-6 group-hover:text-red-600 transition-all duration-300" />
            <span className="relative z-10 group-hover:text-red-700 transition-colors duration-300">Make a Donation</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
