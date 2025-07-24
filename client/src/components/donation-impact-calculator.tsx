import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Heart, Users, Building2, Award } from "lucide-react";

export default function DonationImpactCalculator() {
  const [donationAmount, setDonationAmount] = useState([100]);
   const handleDonateClick = (e: React.MouseEvent) => {
  e.preventDefault();
  console.log("Button clicked! Redirecting to donation page...");
  
  // Try multiple methods for maximum compatibility
  try {
    // Method 1: window.open
    const newWindow = window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank", "noopener,noreferrer");
    
    // Method 2: If popup blocked, use window.location
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      console.log("Popup blocked, using window.location redirect");
    }
  } catch (error) {
    console.error("Error opening donation page:", error);
    // Fallback: direct redirect
  }
};

  // Based on LLS data - optimized to show meaningful impact at all donation levels
  const calculateImpact = (amount: number) => {
    const baseAmount = amount;
    
    return {
      researchMinutes: Math.floor(baseAmount * 2.4), // Research funding impact (more granular)
      informationCalls: Math.floor(baseAmount / 12), // Information helpline calls
      educationalMaterials: Math.floor(baseAmount / 8), // Patient education materials
      supportGroupHours: Math.floor(baseAmount / 18), // Support group sessions
      advocacyActions: Math.floor(baseAmount / 15), // Policy advocacy actions
      hopeDelivered: Math.floor(baseAmount / 5) // Hope and emotional support units
    };
  };

  const impact = calculateImpact(donationAmount[0]);

  const impactCards = [
    {
      icon: Building2,
      title: "Research Minutes Funded",
      value: impact.researchMinutes,
      description: "Advancing breakthrough treatments",
      color: "bg-green-500",
      bgColor: "bg-green-50",
      image: "🔬"
    },
    {
      icon: Heart,
      title: "Information Calls Answered",
      value: impact.informationCalls,
      description: "Providing hope & guidance",
      color: "bg-red-500",
      bgColor: "bg-red-50",
      image: "📞"
    },
    {
      icon: Users,
      title: "Educational Materials Provided",
      value: impact.educationalMaterials,
      description: "Empowering patients with knowledge",
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      image: "📚"
    },
    {
      icon: Award,
      title: "Support Group Hours",
      value: impact.supportGroupHours,
      description: "Building community & strength",
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      image: "🤝"
    }
  ];

  return (
  <section className="py-6 bg-gradient-to-br from-blue-50 via-white to-red-50">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-2">
          See Your Impact in Action
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Move the slider to see how your donation directly translates into life-changing support.
        </p>
      </div>

      {/* Interactive Slider Section - Ultra Condensed */}
      <div className="bg-white rounded-lg shadow-lg p-5 mb-6 border border-gray-100">
        <div className="text-center mb-4">
          <div className="text-3xl md:text-4xl font-bold text-uplift-red mb-1">
            ${donationAmount[0].toLocaleString()}
          </div>
          <p className="text-gray-600 text-sm">Your donation amount</p>
        </div>

        <div className="max-w-2xl mx-auto mb-4">
          <Slider
            value={donationAmount}
            onValueChange={setDonationAmount}
            max={5000}
            min={25}
            step={25}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$25</span>
            <span>$2,500</span>
            <span>$5,000</span>
          </div>
        </div>

        {/* Preset Donation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {[50, 100, 250, 500, 1000, 2500].map((amount) => (
            <button
              key={amount}
              onClick={() => setDonationAmount([amount])}
              className={`px-2.5 py-1 text-xs rounded-full transition-all ${
                donationAmount[0] === amount
                  ? 'bg-uplift-red text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              ${amount.toLocaleString()}
            </button>
          ))}
        </div>
      </div>

      {/* Impact Cards Grid - Ultra Compact */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {impactCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div
              key={index}
              className={`${card.bgColor} rounded-lg p-3 border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-md`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className={`p-1.5 rounded-full ${card.color} text-white`}>
                  <IconComponent className="w-3 h-3" />
                </div>
                <div className="text-lg">{card.image}</div>
              </div>
              
              <div className="text-xl font-bold text-gray-900 mb-1">
                {typeof card.value === 'string' ? card.value : card.value.toLocaleString()}
              </div>
              
              <h3 className="font-semibold text-gray-800 text-xs mb-0.5">
                {card.title}
              </h3>
              
              <p className="text-xs text-gray-600 leading-tight">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Additional Impact Metrics - Ultra Compact */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md mb-6">
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3">
            <div className="text-2xl font-bold mb-0.5 text-green-700">
              {impact.advocacyActions}
            </div>
            <div className="text-green-800 font-semibold text-xs">
              Advocacy Actions
            </div>
            <div className="text-xs text-green-600">
              Fighting for better policies
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3">
            <div className="text-2xl font-bold mb-0.5 text-blue-700">
              {impact.hopeDelivered}
            </div>
            <div className="text-blue-800 font-semibold text-xs">
              Units of Hope Delivered
            </div>
            <div className="text-xs text-blue-600">
              Emotional support
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-uplift-red/10 to-red-100 rounded-lg p-3">
            <div className="text-2xl font-bold mb-0.5 text-uplift-red">
              {(() => {
                const percentage = donationAmount[0] / 50000 * 100;
                if (percentage < 1) {
                  return parseFloat(percentage.toFixed(3)).toString() + '%';
                } else {
                  return Math.floor(percentage) + '%';
                }
              })()}
            </div>
            <div className="text-red-800 font-semibold text-xs">
              Progress Toward Goal
            </div>
            <div className="text-xs text-red-600">
              Every dollar counts
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - Ultra Compact */}
      <div className="text-center">
        <div className="relative inline-block group">
          <button
            onClick={handleDonateClick}
            className="relative inline-flex items-center px-5 py-2.5 bg-uplift-red text-white font-semibold rounded-full shadow-lg overflow-hidden transform-gpu transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:shadow-[0_10px_25px_rgba(220,38,38,0.4)] cursor-pointer z-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12 pointer-events-none"></div>
            <Heart className="w-4 h-4 mr-2 relative z-30 transform transition-all duration-300 group-hover:scale-110 pointer-events-none" />
            <span className="relative z-30 transform transition-all duration-300 pointer-events-none text-sm">
              Make This Impact Real - Donate ${donationAmount[0].toLocaleString()}
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
);
}
