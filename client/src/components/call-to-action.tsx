import { Heart, Share } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  const handleDonateClick = () => {
    window.open("https://pages.lls.org/mwoy/or/port25/theupliftproject", "_blank");
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleDonateClick}
            className="bg-white text-uplift-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Heart className="w-5 h-5 mr-2" />
            Make a Donation
          </Button>
          <Button 
            onClick={handleShareClick}
            variant="outline"
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-uplift-red transition-colors"
          >
            <Share className="w-5 h-5 mr-2" />
            Share Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}
