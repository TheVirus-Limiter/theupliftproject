import { CheckCircle, ExternalLink, DollarSign } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function WaysToDonate() {
  const handleDonateClick = (source: string) => {
    trackEvent('donate_button_click', 'donation', source);
  };

  const acceptedSources = [
    {
      title: "Cash, Checks, and Credit Cards",
      description: "Make a direct donation using your preferred payment method"
    },
    {
      title: "Stock Transfers",
      description: "Donate appreciated securities and potentially reduce your tax burden"
    },
    {
      title: "Donor Advised Funds",
      description: "Recommend a grant from your donor advised fund to support our campaign"
    },
    {
      title: "Corporate Sponsorships",
      description: "Partner with us through your company's community giving program"
    },
    {
      title: "Facebook Fundraisers",
      description: "Create a Facebook fundraiser linked to our campaign to amplify your impact"
    },
    {
      title: "Matching Gifts & Volunteer Grants",
      description: "Double your donation impact through your employer's matching program"
    }
  ];

  const southCentralTexasStats = {
    households: "2,164",
    copayAssistance: "$3,412,000",
    financialAssistance: "$362,900",
    patients: "478"
  };

  return (
    <section id="ways-to-donate" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Ways to Donate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Support our mission to end blood cancer through these accepted donation methods. 
            Your contribution will count toward our $50,000 fundraising goal.
          </p>
        </div>

        {/* Quick Donate Button */}
        <div className="text-center mb-12">
          <a
            href="https://pages.lls.org/svoy/stx/svoysa26/rrajlf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleDonateClick('main_ways_to_donate')}
            className="inline-flex items-center px-8 py-4 bg-uplift-red text-white text-lg font-semibold rounded-lg hover:bg-red-700 transition-colors shadow-lg"
          >
            <DollarSign className="w-6 h-6 mr-2" />
            Donate Now
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>

        {/* Accepted Sources */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Accepted Donation Methods</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {acceptedSources.map((source, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-green-500">
                <h4 className="font-semibold text-gray-900 mb-2">{source.title}</h4>
                <p className="text-gray-600 text-sm">{source.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* South Central Texas Impact */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              South Central Texas Regional Impact FY24
            </h3>
            <p className="text-gray-600">
              The impact of your donations in our local community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">{southCentralTexasStats.households}</div>
              <div className="text-xs text-gray-600">Total patients and caregivers served</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">{southCentralTexasStats.copayAssistance}</div>
              <div className="text-xs text-gray-600">Co-Pay Assistance awarded to patients</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">{southCentralTexasStats.financialAssistance}</div>
              <div className="text-xs text-gray-600">Total Patient Financial Assistance provided</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">{southCentralTexasStats.patients}</div>
              <div className="text-xs text-gray-600">Patients in local education programs</div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Patient Support Highlights</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Served over <span className="font-semibold">2,100 households</span></li>
                <li>• Completed <span className="font-semibold">47 First Connection matches</span></li>
                <li>• Served <span className="font-semibold">296 local patients</span> through our Information Resource Center</li>
                <li>• Clinical Trial Support Center assisted <span className="font-semibold">18 patients</span></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Financial Assistance Breakdown</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <span className="font-semibold">$123,000</span> in Urgent Need funds to <span className="font-semibold">1,041 patients</span></li>
                <li>• <span className="font-semibold">$34,000</span> in General Travel Assistance to 36 patients</li>
                <li>• <span className="font-semibold">$20,000</span> in Pre-CaT Travel Assistance</li>
                <li>• <span className="font-semibold">$1,829,913</span> in research funding at <span className="font-semibold">4 institutions</span></li>
                <li>• <span className="font-semibold">2 college scholarships</span> awarded to blood cancer survivors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}