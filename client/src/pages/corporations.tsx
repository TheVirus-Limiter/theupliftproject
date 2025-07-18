import { Building2, Heart, Users, Award, CheckCircle, Mail, Phone, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const corporateFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  sponsorshipLevel: z.string().min(1, "Please select a sponsorship level"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type CorporateFormData = z.infer<typeof corporateFormSchema>;

export default function Corporations() {
  const { toast } = useToast();
  
  const form = useForm<CorporateFormData>({
    resolver: zodResolver(corporateFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      sponsorshipLevel: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: CorporateFormData) => {
      return apiRequest("/api/corporate-inquiry", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: (response: any) => {
      toast({
        title: "Thank you for your interest!",
        description: "We'll be in touch within 24 hours to discuss partnership opportunities.",
      });
      
      // Open default email client with pre-filled email
      if (response.emailData) {
        const emailUrl = `mailto:${response.emailData.to}?subject=${encodeURIComponent(response.emailData.subject)}&body=${encodeURIComponent(response.emailData.body)}`;
        window.open(emailUrl);
      }
      
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "There was an issue submitting your inquiry. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: CorporateFormData) => {
    submitMutation.mutate(data);
  };

  const benefits = [
    {
      icon: Heart,
      title: "Tax-Deductible Contributions",
      description: "All donations are fully tax-deductible as LLS is a 501(c)(3) nonprofit organization, maximizing your corporate tax benefits."
    },
    {
      icon: Users,
      title: "Brand Visibility & Recognition",
      description: "Your company logo and name will be prominently featured on our website, social media, and all campaign materials reaching thousands of supporters."
    },
    {
      icon: Award,
      title: "Corporate Social Responsibility",
      description: "Demonstrate your commitment to healthcare and community support, enhancing your company's reputation and employee pride."
    },
    {
      icon: Building2,
      title: "Networking Opportunities",
      description: "Connect with other corporate sponsors, community leaders, and LLS representatives at exclusive events and recognition ceremonies."
    },
    {
      icon: CheckCircle,
      title: "Measurable Impact",
      description: "Receive detailed reports on how your contribution directly supports blood cancer research, patient services, and advocacy programs."
    },
    {
      icon: Heart,
      title: "Employee Engagement",
      description: "Boost team morale and unity by involving employees in a meaningful cause that saves lives and advances medical breakthroughs."
    }
  ];

  const sponsorshipLevels = [
    {
      level: "Mission Impact Portfolio",
      amount: "$100,000",
      benefits: [
        "Company highlighted as Presenting Sponsor",
        "Prominent logo placement from Grand Finale lectern",
        "Opportunity to speak at Grand Finale",
        "Company logo displayed at VISIONARY Display Lights",
        "Lunch & Learn opportunity within your company",
        "First right of refusal on next year's sponsorship",
        "Dedicated social post on region profiles",
        "VIP seating at Grand Finale program"
      ]
    },
    {
      level: "Visionary Sponsor",
      amount: "$50,000",
      benefits: [
        "Logo displayed on Workshop, Kickoff, and Grand Finale",
        "Recognition in social media announcements",
        "On-stage recognition at all major events",
        "Company logo on programs and event signage",
        "Recognition on event screens during Grand Finale",
        "10 Grand Finale guests included",
        "Mission Impact Meeting with LLS leadership"
      ]
    },
    {
      level: "Platinum Sponsor", 
      amount: "$35,000",
      benefits: [
        "Logo recognition on unique event activation",
        "Logo displayed on Student Visionaries webpage",
        "Recognition in group social media posts",
        "Continual logo placement on audio visual scroll",
        "8 Grand Finale guests included",
        "Listing in LLS Annual Report"
      ]
    },
    {
      level: "Gold Sponsor",
      amount: "$25,000", 
      benefits: [
        "Logo recognition on event materials",
        "Recognition in candidate communications",
        "Company logo displayed on programs",
        "8 Grand Finale guests included",
        "Recognition on event screens"
      ]
    },
    {
      level: "Silver Sponsor",
      amount: "$15,000",
      benefits: [
        "Logo displayed on event signage",
        "Recognition in social media posts",
        "6 Grand Finale guests included",
        "Company logo on workshop materials"
      ]
    },
    {
      level: "Hero Circle Contributor",
      amount: "$10,000",
      benefits: [
        "4 Guest invitations to Grand Finale Celebration", 
        "Name featured on Honored Hero Table signage",
        "Name featured in Pre-Event Scroll",
        "Receive Honored Hero artwork",
        "Meet virtually with honored hero at midpoint"
      ]
    },
    {
      level: "Digital Program Journal",
      amount: "Under $5,000",
      benefits: [
        "Premier Program Book Tribute ($5,000)",
        "Full Page Program Book Tribute ($3,500)",
        "Half Page Program Book Tribute ($2,500)",
        "Quarter Page Program Book Tribute ($1,500)",
        "Digital advertising opportunities",
        "Program recognition and visibility"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-uplift-red to-red-600 text-white pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-playfair text-5xl font-bold mb-6">
              Corporate Partnership Opportunities
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
              Join The Uplift Project and the Leukemia & Lymphoma Society in the fight against blood cancer. 
              Your corporate partnership creates lasting impact while providing valuable business benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white text-uplift-red hover:bg-gray-100"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Partnership Info
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-uplift-red"
                onClick={() => window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank")}
              >
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
              Partnership Investment Levels
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the partnership level that best fits your company's philanthropic goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' })}>
                <CardHeader className="text-center">
                  <CardTitle className="text-uplift-red text-xl">{level.level}</CardTitle>
                  <p className="text-2xl font-bold text-gray-900">{level.amount}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {level.benefits.slice(0, 4).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                    {level.benefits.length > 4 && (
                      <li className="text-sm text-gray-500 italic">
                        +{level.benefits.length - 4} more benefits
                      </li>
                    )}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full border-uplift-red text-uplift-red hover:bg-uplift-red hover:text-white"
                    onClick={(e) => {
                      e.stopPropagation();
                      document.getElementById('download-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Download Info
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Corporate partnerships with LLS Student Visionaries provide meaningful business value 
              while supporting life-saving research and patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="bg-uplift-red text-white p-3 rounded-full">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download-section" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-uplift-red mb-4">
              Download Partnership Materials
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get detailed information about our sponsorship opportunities and partnership benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-uplift-red mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Partnership Benefits Guide</h3>
                <p className="text-gray-600 text-sm mb-4">Comprehensive overview of all sponsorship levels and benefits</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    window.open('/downloads/partnership-benefits.html', '_blank');
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-uplift-red mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Hero Circle Form</h3>
                <p className="text-gray-600 text-sm mb-4">Special recognition program for major contributors</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    window.open('/downloads/hero-circle-form.html', '_blank');
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 text-uplift-red mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Digital Program Journal</h3>
                <p className="text-gray-600 text-sm mb-4">Advertising opportunities in our event program</p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    window.open('/downloads/digital-program-journal.html', '_blank');
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
              Your Impact
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you partner with LLS, you're supporting proven results in the fight against blood cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-uplift-red mb-2">$1.3B+</div>
              <p className="text-gray-600">Research Investment Since 1949</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-uplift-red mb-2">26 of 32</div>
              <p className="text-gray-600">FDA Approved Treatments Since 2017</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-uplift-red mb-2">70%</div>
              <p className="text-gray-600">Leukemia 5-Year Survival Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-uplift-red mb-2">1.7M+</div>
              <p className="text-gray-600">People Living with Blood Cancer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
              Partner With Us Today
            </h2>
            <p className="text-lg text-gray-600">
              Ready to make a difference? Fill out the form below and we'll contact you within 24 hours 
              to discuss partnership opportunities.
            </p>
          </div>

          <Card className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Full Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="sponsorshipLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interested Sponsorship Level</FormLabel>
                      <FormControl>
                        <select 
                          {...field}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-uplift-red"
                        >
                          <option value="">Select a sponsorship level</option>
                          <option value="platinum">Platinum Partner ($10,000+)</option>
                          <option value="gold">Gold Sponsor ($5,000 - $9,999)</option>
                          <option value="silver">Silver Supporter ($2,500 - $4,999)</option>
                          <option value="bronze">Bronze Contributor ($1,000 - $2,499)</option>
                          <option value="custom">Custom Partnership</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your company's interest in partnering with The Uplift Project..."
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-uplift-red hover:bg-red-700"
                  disabled={submitMutation.isPending}
                >
                  {submitMutation.isPending ? "Sending..." : "Send Partnership Inquiry"}
                </Button>
              </form>
            </Form>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:rehanraj0911@gmail.com" 
                className="flex items-center space-x-2 text-uplift-red hover:text-red-700"
              >
                <Mail className="w-5 h-5" />
                <span>rehanraj0911@gmail.com</span>
              </a>
              <a 
                href="tel:2109926174" 
                className="flex items-center space-x-2 text-uplift-red hover:text-red-700"
              >
                <Phone className="w-5 h-5" />
                <span>210 992 6174</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}