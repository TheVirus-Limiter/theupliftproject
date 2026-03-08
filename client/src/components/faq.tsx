import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Were donations tax deductible?",
    answer: "Yes! All donations made through The Uplift Project to Blood Cancer United (formerly LLS) were tax deductible. Donors received a receipt for their records after making their donation."
  },
  {
    question: "How did corporate matching donations work?",
    answer: "To make a corporate matching donation, supporters went to their company's corporate donation or matching gifts page and donated to Blood Cancer United (formerly LLS). They then sent us proof of their donation, and their employer matched or added to their contribution."
  },
  {
    question: "Where did the money go?",
    answer: "100% of donations went directly to Blood Cancer United (formerly LLS) to support patients who can't afford their medical bills and to fund critical blood cancer research. Blood Cancer United has invested over $1.3 billion in research since 1949."
  },
  {
    question: "What was Student Visionaries of the Year?",
    answer: "Student Visionaries of the Year is Blood Cancer United's premier philanthropic leadership program for high school students. Participants competed in a 7-week fundraising campaign to support Blood Cancer United's mission to cure blood cancer."
  },
  {
    question: "How long did the campaign run?",
    answer: "Our campaign ran from January 16, 2026 to March 7, 2026. During that time, we worked to raise funds to support blood cancer patients and research."
  },
  {
    question: "Could international supporters donate?",
    answer: "Yes! The Blood Cancer United (formerly LLS) donation platform accepted international donations. Contributions helped support blood cancer patients and research efforts worldwide."
  },
  {
    question: "How could people help beyond donating?",
    answer: "There were many ways to support our mission! Supporters shared our campaign on social media, volunteered with our team, and helped spread awareness about blood cancer."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-uplift-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about The Uplift Project campaign
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-uplift-red flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-6 pb-4">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Have another question?
          </p>
          <a 
            href="mailto:rehan.raj@lhssa.org"
            className="inline-flex items-center px-6 py-3 bg-uplift-red text-white rounded-full font-semibold hover:bg-red-800 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
