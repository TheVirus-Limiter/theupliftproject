import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FundraisingProgress() {
  const currentAmount = 0;
  const goalAmount = 50000;
  const donorCount = 0;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  const handleDonateClick = () => {
    window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank");
  };

  return (
    <section className="bg-uplift-light py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">Our Fundraising Goal</h2>
          <p className="text-lg text-gray-600">Every penny goes to those struggling with blood cancer and in need</p>
        </div>
        
        <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <CardContent className="p-0">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-uplift-red">
                  ${currentAmount.toLocaleString()}
                </h3>
                <p className="text-gray-600">raised of ${goalAmount.toLocaleString()} goal</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-700">{donorCount} donors</p>
                <p className="text-gray-600">supporting our cause</p>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
              <div 
                className="bg-uplift-red h-4 rounded-full transition-all duration-1000" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-uplift-red">Jan 16, 2026</p>
                <p className="text-gray-600">Campaign Start</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-uplift-red">Mar 7, 2026</p>
                <p className="text-gray-600">Campaign End</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex justify-center">
          <Button 
            onClick={handleDonateClick}
            className="relative bg-uplift-red text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg flex items-center justify-center overflow-hidden group transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <div className="absolute inset-0 bg-white/15 -rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700 w-12"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-300 to-red-500 rounded-full opacity-0 group-hover:opacity-40 blur transition-opacity duration-400"></div>
            <Heart className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 group-hover:text-red-100 transition-all duration-300 group-hover:drop-shadow-lg" />
            <span className="relative z-10 group-hover:drop-shadow-lg transition-all duration-300">Support Our Mission</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
