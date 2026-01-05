import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is my donation tax deductible?",
    answer: "Yes! All donations made through The Uplift Project to Blood Cancer United (formerly LLS) are tax deductible. You will receive a receipt for your records after making your donation."
  },
  {
  question: "How do I make a corporate matching donation?",
  answer: "To make a corporate matching donation, go to your company’s corporate donation or matching gifts page and donate to Blood Cancer United (formerly LLS). Then, send us proof of your donation, and your employer should match or add to your contribution."
  },
  {
    question: "Where does the money go?",
    answer: "100% of your donation goes directly to the Blood Cancer United (formerly LLS) to support patients who can't afford their medical bills and to fund critical blood cancer research. Blood Cancer United has invested over $1.3 billion in research since 1949."
  },
  {
    question: "How do I join the team?",
    answer: "We'd love to have you join our mission! Please email us at rehan.raj@lhssa.org to learn about volunteer opportunities and how you can help us reach our $50,000 goal."
  },
  {
    question: "What is Student Visionaries of the Year?",
    answer: "Student Visionaries of the Year is Blood Cancer United's premier philanthropic leadership program for high school students. Participants compete in a 7-week fundraising campaign to support Blood Cancer United's mission to cure blood cancer."
  },
  {
    question: "How long does the campaign run?",
    answer: "Our campaign runs from January 16, 2026 to March 7, 2026. During this time, we're working to raise $50,000 to support blood cancer patients and research."
  },
  {
    question: "Can I donate if I'm not in the US?",
    answer: "Yes! The Blood Cancer United (formerly LLS) donation platform accepts international donations. Your contribution will help support blood cancer patients and research efforts worldwide."
  },
  {
    question: "How do I track the campaign's progress?",
    answer: "You can follow our progress right here on our website! We update our fundraising thermometer regularly, and you can also follow us on Instagram @theupliftproject25 for campaign updates."
  },
  {
    question: "What if I can't donate but want to help?",
    answer: "There are many ways to support our mission! You can share our campaign on social media, volunteer with our team, or help spread awareness about blood cancer. Contact us at rehan.raj@lhssa.org to learn more."
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
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about The Uplift Project
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
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
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-uplift-red flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-uplift-red flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
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
