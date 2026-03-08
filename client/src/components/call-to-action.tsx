import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: "linear-gradient(135deg, #831919 0%, #6b1515 30%, #831919 60%, #9a1e1e 100%)", backgroundSize: "200% 200%", animation: "gradient-shift 8s ease infinite" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.03) 0%, transparent 40%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-playfair text-4xl font-bold text-white mb-6 animate-fade-in-up" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
          Thank You for Launching Hope
        </h2>
        <p className="text-xl text-red-100 mb-4 leading-relaxed animate-fade-in-up-delay-1">
          Our campaign raised <span className="font-bold text-white" style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}>$15,931</span> to support families affected by blood cancer.
          Thank you to everyone who donated, shared, and believed in our mission.
        </p>
        <p className="text-lg text-red-200 mb-8 animate-fade-in-up-delay-2">
          Follow us on Instagram to stay connected and see the lasting impact of your generosity.
        </p>
        <div className="flex justify-center animate-fade-in-up-delay-3">
          <Button
            onClick={() => window.open("https://instagram.com/theupliftproject25", "_blank")}
            className="relative bg-white text-uplift-red px-8 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-white/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/30 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
            <Instagram className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10 group-hover:text-red-700 transition-colors duration-300">Follow Us on Instagram</span>
          </Button>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)" }} />
    </section>
  );
}
