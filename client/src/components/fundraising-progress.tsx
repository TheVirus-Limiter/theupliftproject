import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FundraisingProgress() {
  const currentAmount = 12500;
  const goalAmount = 50000;
  const donorCount = 127;
  const progressPercentage = (currentAmount / goalAmount) * 100;

  const handleDonateClick = () => {
    window.open("https://pages.lls.org/mwoy/or/port25/theupliftproject", "_blank");
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
                <p className="text-2xl font-bold text-uplift-red">Jan 16</p>
                <p className="text-gray-600">Campaign Start</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-uplift-red">Mar 16</p>
                <p className="text-gray-600">Campaign End</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-center">
          <Button 
            onClick={handleDonateClick}
            className="bg-uplift-red text-white px-12 py-4 rounded-full text-xl font-semibold hover:bg-red-800 transition-colors shadow-lg inline-block"
          >
            <Heart className="w-5 h-5 mr-2" />
            Support Our Mission
          </Button>
        </div>
      </div>
    </section>
  );
}
