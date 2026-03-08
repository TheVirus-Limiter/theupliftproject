import { Heart, Clock, TrendingUp, Microscope, Pill, Users } from 'lucide-react';

const gradients = [
  'linear-gradient(135deg, #fef2f2 0%, #fce7e7 100%)',
  'linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%)',
  'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
  'linear-gradient(135deg, #fefce8 0%, #fef9c3 100%)',
  'linear-gradient(135deg, #fdf4ff 0%, #fae8ff 100%)',
  'linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%)',
];

export default function BloodCancerFacts() {
  const facts = [
    {
      icon: Users,
      value: "1.5 Million",
      description: "People in the US are living with or in remission from blood cancer"
    },
    {
      icon: Clock,
      value: "Every 3 Minutes",
      description: "Someone in the US is diagnosed with a blood cancer"
    },
    {
      icon: TrendingUp,
      value: "65%",
      description: "Five-year survival rate has more than doubled since 1960"
    },
    {
      icon: Microscope,
      value: "$1.3 Billion",
      description: "Blood Cancer United has invested in blood cancer research since 1949"
    },
    {
      icon: Pill,
      value: "65+",
      description: "FDA-approved therapies for blood cancer patients"
    },
    {
      icon: Heart,
      value: "Hope",
      description: "Every donation brings us closer to a cure"
    }
  ];

  return (
    <section id="facts" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">Why This Matters</h2>
          <p className="text-lg text-gray-600">Understanding the impact of blood cancer and the importance of research</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => {
            const IconComponent = fact.icon;
            return (
              <div 
                key={index} 
                className="rounded-xl p-8 text-center transition-all duration-300 cursor-default"
                style={{
                  background: gradients[index],
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -12px rgba(131, 25, 25, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
                }}
                data-testid={`card-fact-${index}`}
              >
                <div className="flex justify-center mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(131, 25, 25, 0.08) 0%, rgba(131, 25, 25, 0.15) 100%)' }}
                  >
                    <IconComponent className="w-8 h-8 text-uplift-red" />
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold text-uplift-red mb-4">{fact.value}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
