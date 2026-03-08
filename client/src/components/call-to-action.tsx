import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="py-20 bg-uplift-red">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl font-bold text-white mb-6">
          Thank You for Launching Hope
        </h2>
        <p className="text-xl text-red-100 mb-4 leading-relaxed">
          Our campaign raised <span className="font-bold text-white">$15,931</span> to support families affected by blood cancer.
          Thank you to everyone who donated, shared, and believed in our mission.
        </p>
        <p className="text-lg text-red-200 mb-8">
          Follow us on Instagram to stay connected and see the lasting impact of your generosity.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={() => window.open("https://instagram.com/theupliftproject25", "_blank")}
            className="relative bg-white text-uplift-red px-8 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Instagram className="w-5 h-5 mr-2 relative z-10 group-hover:scale-125 transition-all duration-300" />
            <span className="relative z-10 group-hover:text-red-700 transition-colors duration-300">Follow Us on Instagram</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
