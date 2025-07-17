import { Heart, Building2, Users, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ImpactStats() {
  const stats = [
    {
      icon: Heart,
      value: "150+",
      label: "Lives Impacted"
    },
    {
      icon: Building2,
      value: "$85K",
      label: "Research Funded"
    },
    {
      icon: Users,
      value: "75",
      label: "Families Supported"
    },
    {
      icon: GraduationCap,
      value: "25",
      label: "Students Involved"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-uplift-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">See how your support is making a real difference</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="bg-white rounded-xl text-center shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-uplift-red text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-uplift-red mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
