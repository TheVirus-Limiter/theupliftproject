import { Heart, Award, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HonoredHero() {
  return (
    <section id="honored-hero" className="py-20 bg-gradient-to-b from-uplift-light to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-red-100/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-50/20 rounded-full translate-x-1/3 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Our Honored Hero
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-uplift-red to-transparent mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600">
            This campaign was dedicated to someone who inspires us every day
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group/card">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-200/50 via-red-100/30 to-red-200/50 rounded-2xl blur-sm opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
              <div className="lg:flex">
                <div className="lg:w-1/2 flex justify-center lg:justify-start">
                  <div className="w-full max-w-sm lg:max-w-none lg:w-full lg:h-full">
                    <img
                      src="https://thevirus-limiter.github.io/filestorage/honoredhero.png"
                      alt="Miguel Roman"
                      className="w-full h-80 lg:h-full object-cover object-center"
                    />
                  </div>
                </div>

                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <Heart className="w-8 h-8 text-uplift-red mr-3" />
                      <div className="absolute inset-0 w-8 h-8 bg-red-200/40 rounded-full blur-md -z-10"></div>
                    </div>
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
                          Miguel is a dedicated member of both the LHS soccer team and robotics team, and is a beloved friend to all of us. His courage and determination inspired our entire campaign.
                        </p>
                      </div>
                    </div>

                    <div className="relative bg-gradient-to-br from-red-50 to-white rounded-lg p-6 border-l-4 border-uplift-red shadow-sm">
                      <div className="absolute top-3 left-8 text-red-200/60 text-5xl font-serif leading-none select-none">"</div>
                      <blockquote className="relative text-gray-800 italic text-lg leading-relaxed pt-4">
                        "I'm doing this because I know what these kids have gone through and I want to support them in any way I can"
                      </blockquote>
                      <cite className="block mt-3 text-uplift-red font-semibold">
                        — Miguel Roman
                      </cite>
                    </div>

                    <div className="bg-gradient-to-r from-uplift-red/5 via-uplift-red/10 to-uplift-red/5 rounded-lg p-4 border border-red-100/50">
                      <p className="text-uplift-red font-semibold text-center">
                        This campaign was in honor of Miguel's journey and all those fighting blood cancer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => window.open("https://instagram.com/theupliftproject25", "_blank")}
            className="relative bg-uplift-red text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg overflow-hidden group transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <Instagram className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 transition-all duration-300" />
            <span className="relative z-10 group-hover:tracking-wide transition-all duration-400">View Our Instagram</span>
          </Button>
          <p className="text-gray-600 mt-4 text-sm">
            Follow our journey and see the impact of your support
          </p>
        </div>
      </div>
    </section>
  );
}
