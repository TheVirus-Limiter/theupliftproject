export default function BloodCancerFacts() {
  const facts = [
    {
      emoji: "🩸",
      value: "1.5 Million",
      description: "People in the US are living with or in remission from blood cancer"
    },
    {
      emoji: "⏰",
      value: "Every 3 Minutes",
      description: "Someone in the US is diagnosed with a blood cancer"
    },
    {
      emoji: "📈",
      value: "65%",
      description: "Five-year survival rate has more than doubled since 1960"
    },
    {
      emoji: "🔬",
      value: "$1.3 Billion",
      description: "LLS has invested in blood cancer research since 1949"
    },
    {
      emoji: "💊",
      value: "65+",
      description: "FDA-approved therapies for blood cancer patients"
    },
    {
      emoji: "❤️",
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
          {facts.map((fact, index) => (
            <div key={index} className="bg-uplift-light rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">{fact.emoji}</div>
              <h3 className="font-playfair text-xl font-bold text-uplift-red mb-4">{fact.value}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
