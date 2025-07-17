import { Megaphone, Star, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CampaignUpdates() {
  const updates = [
    {
      icon: Megaphone,
      title: "Campaign Launch Success!",
      date: "February 1, 2026",
      content: "We're thrilled to announce that our campaign has officially launched! In just two weeks, we've already raised over $12,000 thanks to the incredible support from our community. Our upcoming gala event is scheduled for February 15th, and we're expecting amazing turnout."
    },
    {
      icon: Star,
      title: "Corporate Partnership Announced",
      date: "January 28, 2026",
      content: "We're excited to announce our partnership with several local businesses who have committed to supporting our cause. Their contributions will help us reach our goal of $50,000 and make a real impact in the fight against blood cancer."
    },
    {
      icon: Rocket,
      title: "The Uplift Project Begins",
      date: "January 16, 2026",
      content: "Today marks the official start of The Uplift Project! We're launching with hope and determination to end blood cancer. Our team of dedicated students is ready to make a difference over the next two months."
    }
  ];

  return (
    <section id="updates" className="py-20 bg-uplift-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">Campaign Updates</h2>
          <p className="text-lg text-gray-600">Stay tuned for more info and the latest developments</p>
        </div>
        
        <div className="space-y-8">
          {updates.map((update, index) => {
            const IconComponent = update.icon;
            return (
              <Card key={index} className="bg-white rounded-xl shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-uplift-red text-white p-2 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-bold text-gray-900">{update.title}</h3>
                      <p className="text-gray-500 text-sm">{update.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {update.content}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
