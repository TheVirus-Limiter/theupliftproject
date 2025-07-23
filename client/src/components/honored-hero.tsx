import { Heart, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';

export default function HonoredHero() {
  const handleDonateClick = () => {
    trackEvent('donate_click', 'engagement', 'honored_hero_section');
    window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank");
  };

  return (
    <section id="honored-hero" className="py-20 bg-uplift-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Our Honored Hero
          </h2>
          <p className="text-lg text-gray-600">
            This campaign is dedicated to someone who inspires us every day
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="lg:flex">
              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center lg:justify-start">
                <div className="w-full max-w-sm lg:max-w-none lg:w-full lg:h-full">
                  <img
                    src="https://thevirus-limiter.github.io/filestorage/honoredhero.png"
                    alt="Miguel Roman"
                    className="w-full h-80 lg:h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-uplift-red mr-3" />
                  <h3 className="font-playfair text-3xl font-bold text-uplift-red">
                    Miguel Roman
                  </h3>
                </div>

                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    Miguel was diagnosed with leukemia a couple years ago and has shown incredible strength throughout his journey. We're thrilled to share that he has made a full recovery and is expected to be completely cancer-free by 2027.
                  </p>

                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-uplift-red mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-700 leading-relaxed">
                        Miguel is a dedicated member of both the LHS soccer team and robotics team, and is a beloved friend to all of us. His courage and determination inspire our entire campaign.
                      </p>
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-uplift-red">
                    <blockquote className="text-gray-800 italic text-lg leading-relaxed">
                      "I'm doing this because I know what these kids have gone through and I want to support them in any way I can"
                    </blockquote>
                    <cite className="block mt-3 text-uplift-red font-semibold">
                      — Miguel Roman
                    </cite>
                  </div>

                  <div className="bg-uplift-red/5 rounded-lg p-4">
                    <p className="text-uplift-red font-semibold text-center">
                      This campaign is in honor of Miguel's journey and all those fighting blood cancer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Donate Button */}
        <div className="text-center mt-12">
                   <Button 
            onClick={handleDonateClick}
            className="relative bg-uplift-red text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <div className="absolute inset-0 bg-white/15 -translate-y-full group-hover:translate-y-full transition-transform duration-600 rotate-12"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 skew-x-12"></div>
            <Heart className="w-5 h-5 mr-2 relative z-10 group-hover:scale-125 group-hover:text-blue-100 transition-all duration-300 animate-pulse group-hover:animate-bounce group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,1)]" />
            <span className="relative z-10 group-hover:tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] transition-all duration-400">Donate in Miguel's Honor</span>
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Every donation helps support families like Miguel's
          </p>
        </div>
      </div>
    </section>
  );
}
