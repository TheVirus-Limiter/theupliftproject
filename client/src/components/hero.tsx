import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const handleDonateClick = () => {
    window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank");
  };

  const scrollToAbout = () => {
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
              src="https://media.discordapp.net/attachments/1212245437080408124/1395495142391152670/dsda.png?ex=687aa7a0&is=68795620&hm=2ac85c2bbf38d6effcce764f86f275c02124f4da2b2eec7a0915fe2715bb0da5&=&format=webp&quality=lossless&width=319&height=346" 
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
            We are a Leukemia & Lymphoma Society Student Visionaries of the Year fundraiser 
            seeking to raise thousands to support those struggling with blood cancer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleDonateClick}
              className="bg-uplift-red text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-800 transition-colors shadow-lg"
            >
              <Heart className="w-5 h-5 mr-2" />
              Donate Now
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
             className="border-2 border-uplift-red text-uplift-red px-8 py-4 rounded-full text-lg font-semibold hover:bg-uplift-red hover:text-white hover:border-uplift-red transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}