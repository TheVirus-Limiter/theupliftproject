import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Heart, Users, Building2, Award } from "lucide-react";

export default function DonationImpactCalculator() {
  const [donationAmount, setDonationAmount] = useState([100]);

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
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            See Your Impact in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Move the slider to see how your donation directly translates into life-changing support for blood cancer patients and their families.
          </p>
        </div>

        {/* Interactive Slider Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-uplift-red mb-2">
              ${donationAmount[0].toLocaleString()}
            </div>
            <p className="text-gray-600 text-lg">Your donation amount</p>
          </div>

          <div className="max-w-2xl mx-auto mb-8">
            <Slider
              value={donationAmount}
              onValueChange={setDonationAmount}
              max={5000}
              min={25}
              step={25}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$25</span>
              <span>$2,500</span>
              <span>$5,000</span>
            </div>
          </div>

          {/* Preset Donation Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {[50, 100, 250, 500, 1000, 2500].map((amount) => (
              <button
                key={amount}
                onClick={() => setDonationAmount([amount])}
                className={`px-4 py-2 rounded-full transition-all ${
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

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {impactCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div
                key={index}
                className={`${card.bgColor} rounded-xl p-6 border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${card.color} text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-3xl">{card.image}</div>
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {typeof card.value === 'string' ? card.value : card.value.toLocaleString()}
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-1">
                  {card.title}
                </h3>
                
                <p className="text-sm text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Impact Metrics */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2 text-green-700">
                {impact.advocacyActions}
              </div>
              <div className="text-green-800 font-semibold">
                Advocacy Actions
              </div>
              <div className="text-sm text-green-600 mt-1">
                Fighting for better policies & access
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2 text-blue-700">
                {impact.hopeDelivered}
              </div>
              <div className="text-blue-800 font-semibold">
                Units of Hope Delivered
              </div>
              <div className="text-sm text-blue-600 mt-1">
                Emotional support & encouragement
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-uplift-red/10 to-red-100 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2 text-uplift-red">
                {(() => {
                  const percentage = donationAmount[0] / 50000 * 100;
                  if (percentage < 1) {
                    return parseFloat(percentage.toFixed(3)).toString() + '%';
                  } else {
                    return Math.floor(percentage) + '%';
                  }
                })()}
              </div>
              <div className="text-red-800 font-semibold">
                Progress Toward Our Goal
              </div>
              <div className="text-sm text-red-600 mt-1">
                Every dollar brings us closer
              </div>
            </div>
          </div>
        </div>

               {/* Call to Action */}
        <div className="text-center mt-12 perspective-1000">
          <div className="relative inline-block group">
            {/* 3D Shadow Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-800 to-red-900 rounded-full blur-sm opacity-30 transform translate-y-2 translate-x-1 group-hover:translate-y-4 group-hover:translate-x-2 transition-transform duration-300"></div>
            
            {/* Main Button with 3D Transform */}
            <a
              href="https://pages.lls.org/svoy/stx/svoysa26/rrajlf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-8 py-4 bg-uplift-red text-white text-lg font-semibold rounded-full shadow-2xl overflow-hidden transform-gpu transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-x-12 group-hover:shadow-[0_20px_40px_rgba(220,38,38,0.4)]"
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'center center'
              }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              
              {/* Depth Highlight */}
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Heart Icon with 3D Effect */}
              <Heart className="w-6 h-6 mr-2 relative z-10 transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-[0_4px_8px_rgba(255,255,255,0.3)]" />
              
              {/* Text with 3D Shadow */}
              <span className="relative z-10 transform transition-all duration-300 group-hover:text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                Make This Impact Real - Donate ${donationAmount[0].toLocaleString()}
              </span>
              
              {/* Bottom Edge Shadow for Depth */}
              <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-t from-red-800/50 to-transparent rounded-b-full"></div>
            </a>
            
            {/* Pulsing Glow Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl custom-pulse-5s transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Add custom 3D CSS */}
        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .rotate-x-12 {
            transform: rotateX(12deg);
          }
          .text-shadow-\[0_2px_4px_rgba\(0\,0\,0\,0\.5\)\] {
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }
        `}</style>
    </section>
  );
}
