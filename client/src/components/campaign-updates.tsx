import { Megaphone, Star, Rocket } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CampaignUpdates() {
  const updates = [
    {
      icon: Star,
      title: "Corporate Sponsorships Open",
      date: "July 17, 2025",
      content: "We're excited to announce that corporate sponsorships are now open! Businesses and organizations can now partner with The Uplift Project to support our mission of ending blood cancer. If you're interested in sponsoring our campaign, please contact us to learn about the various partnership opportunities available."
    },
    {
      icon: Megaphone,
      title: "Instagram Account Made",
      date: "July 12, 2025",
      content: "Follow us on Instagram @theupliftproject25! We've launched our social media presence to share updates, behind-the-scenes content, and stories from our campaign. Follow along as we document our journey to raise $50,000 for blood cancer research and patient support."
    },
    {
      icon: Rocket,
      title: "The Uplift Project Begins",
      date: "May 30, 2025",
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
