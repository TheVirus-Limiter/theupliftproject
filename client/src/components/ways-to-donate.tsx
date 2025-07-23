import { CheckCircle, AlertTriangle, XCircle, ExternalLink, DollarSign } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function WaysToDonate() {
  const handleDonateClick = (source: string) => {
    trackEvent('donate_button_click', 'donation', source);
  };

  const acceptedSources = [
    {
      title: "Cash, Checks, and Credit Cards",
      description: "Direct monetary donations through traditional payment methods"
    },
    {
      title: "Charitybuzz",
      description: "You are responsible for delivering any packages/items sold via Charitybuzz"
    },
    {
      title: "Stock Transfers",
      description: "Valued based on the date received by LLS's brokerage account"
    },
    {
      title: "Donor Advised Funds",
      description: "Must be coordinated with the \"donor's intent\""
    },
    {
      title: "Sponsorships",
      description: "Must be secured via a signed commitment form. Funds can be received from July 1st until the deadline"
    },
    {
      title: "Facebook Fundraisers",
      description: "Must be linked directly through LLS Fundraising Tools (note: not confidential to the public)"
    },
    {
      title: "Matching Gifts & Volunteer Grants",
      description: "Must follow specific guidelines. These must be tied to direct donations only (not raffles or ticket sales)"
    }
  ];

  const approvalRequired = [
    {
      title: "Silent Auction Donations for Grand Finale",
      description: "Must be credited at the sale amount (not actual item value). No firearms or live animals allowed"
    },
    {
      title: "Pharmaceutical or Biotech Companies",
      description: "Require written approval"
    },
    {
      title: "In-Kind Credit Donations",
      description: "First-come, first-served. Maximum of $10,000 per team"
    },
    {
      title: "Third-Party Platforms (besides Facebook)",
      description: "Requires approval from LLS National Office"
    },
    {
      title: "Consumer Campaigns, Promotions, and Retail",
      description: "Must be pre-approved"
    },
    {
      title: "National Corporation Donations",
      description: "Must be pre-approved and secured by LLS National"
    }
  ];

  const notCounted = [
    {
      title: "Workplace Giving or Employee Match Programs",
      description: "Unless unrestricted"
    },
    {
      title: "Bachelor/Bachelorette Auctions",
      description: "Not eligible for competition totals"
    },
    {
      title: "Restricted Funds",
      description: "Cannot be counted toward competition"
    },
    {
      title: "Portions of Multi-Year Pledges",
      description: "That go beyond the competition timeframe"
    },
    {
      title: "Commercial Co-Ventures/Charitable Sales Promotions",
      description: "Not eligible for competition totals"
    },
    {
      title: "Raffles/Gambling",
      description: "Unless legally compliant"
    }
  ];

  const southCentralTexasStats = {
    households: "2,100",
    firstConnections: "47",
    patients: "478",
    localPatients: "296",
    resourceCenter: "18",
    copayAssistance: "$3,412,000",
    southCentralTexas: "$362,900",
    urgentNeedFunds: "$123,000",
    patientsAssisted: "1,041",
    generalTravelAssistance: "$34,000",
    preCaTTravelAssistance: "$20,000",
    researchFunding: "$1,829,913",
    institutions: "4",
    scholarships: "2",
    totalPatients: "2,164",
    financialAssistance: "$362,900"
  };

  return (
    <section id="ways-to-donate" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Ways to Donate
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation guidelines for the Student Visionaries of the Year campaign. 
            All donations must comply with LLS policies to count toward competition totals.
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
            <h3 className="text-2xl font-bold text-gray-900">Accepted Donation Sources</h3>
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

        {/* Approval Required */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Donation Sources Requiring Prior LLS Staff Approval</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {approvalRequired.map((source, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-yellow-500">
                <h4 className="font-semibold text-gray-900 mb-2">{source.title}</h4>
                <p className="text-gray-600 text-sm">{source.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Not Counted */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <XCircle className="w-8 h-8 text-gray-500 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">Not Counted Toward Competition Totals</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {notCounted.map((source, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border-l-4 border-gray-400">
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
              <div className="text-3xl font-bold text-uplift-red mb-2">{southCentralTexasStats.totalPatients}</div>
              <div className="text-sm text-gray-600">Total patients and caregivers we serve including our Information Resource Center, Clinical Trial Support Center, and local patient education programs</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">${southCentralTexasStats.copayAssistance}</div>
              <div className="text-sm text-gray-600">Co-Pay Assistance awarded to patients in the South Central Texas region in FY24</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">${southCentralTexasStats.financialAssistance}</div>
              <div className="text-sm text-gray-600">Total Patient Financial Assistance provided in South Central Texas, including Patient Aid, Urgent Need, and Travel Assistance</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-uplift-red mb-2">{southCentralTexasStats.patients}</div>
              <div className="text-sm text-gray-600">Patients and caregivers who participated in local patient education programs in FY24</div>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Patient Support Highlights</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Served over <span className="font-semibold">{southCentralTexasStats.households} households</span></li>
                <li>• Completed <span className="font-semibold">{southCentralTexasStats.firstConnections} First Connection matches</span></li>
                <li>• Served <span className="font-semibold">{southCentralTexasStats.localPatients} local patients</span> through our Information Resource Center</li>
                <li>• Clinical Trial Support Center assisted <span className="font-semibold">{southCentralTexasStats.resourceCenter} patients</span></li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Financial Assistance Breakdown</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <span className="font-semibold">${southCentralTexasStats.urgentNeedFunds}</span> in Urgent Need funds to <span className="font-semibold">{southCentralTexasStats.patientsAssisted} patients</span></li>
                <li>• <span className="font-semibold">${southCentralTexasStats.generalTravelAssistance}</span> in General Travel Assistance to 36 patients</li>
                <li>• <span className="font-semibold">${southCentralTexasStats.preCaTTravelAssistance}</span> in Pre-CaT Travel Assistance</li>
                <li>• <span className="font-semibold">${southCentralTexasStats.researchFunding}</span> in research funding at <span className="font-semibold">{southCentralTexasStats.institutions} institutions</span></li>
                <li>• <span className="font-semibold">{southCentralTexasStats.scholarships} college scholarships</span> awarded to blood cancer survivors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}