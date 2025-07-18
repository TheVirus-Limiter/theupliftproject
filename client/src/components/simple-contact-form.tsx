import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SimpleContactForm() {
  return (
    <section id="contact-form" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Partner With Us Today
          </h2>
          <p className="text-lg text-gray-600">
            Ready to make a difference? Contact us directly to discuss partnership opportunities.
          </p>
        </div>

        <Card className="p-8">
          {/* Google Form Embed Placeholder */}
          <div className="text-center mb-8">
            <div className="bg-gray-100 rounded-lg p-12 border-2 border-dashed border-gray-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Partnership Interest Form
              </h3>
              <p className="text-gray-600 mb-6">
                To embed your Google Form here:
              </p>
              <ol className="text-left text-sm text-gray-600 max-w-md mx-auto space-y-2">
                <li>1. Create a Google Form with corporate partnership questions</li>
                <li>2. Click "Send" → "Embed" ({"<>"} icon)</li>
                <li>3. Copy the iframe code</li>
                <li>4. Replace this placeholder with your iframe</li>
              </ol>
            </div>
          </div>
          
          {/* Direct Contact Section */}
          <div className="text-center border-t pt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Us Directly
            </h3>
            <p className="text-gray-600 mb-6">
              Prefer to reach out directly? We'd love to hear from you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                className="flex items-center border-uplift-red text-uplift-red hover:bg-uplift-red hover:text-white"
                onClick={() => window.open('mailto:rehanraj0911@gmail.com?subject=Corporate Partnership Inquiry - The Uplift Project', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </Button>
              <Button
                variant="outline"
                className="flex items-center border-uplift-red text-uplift-red hover:bg-uplift-red hover:text-white"
                onClick={() => window.open('tel:2109926174', '_blank')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </Button>
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-600">
              <p>rehanraj0911@gmail.com</p>
              <p>(210) 992-6174</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}