import { ExternalLink } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ForbesFeature() {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="forbes" className="py-20 bg-uplift-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Featured in Forbes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission to fight blood cancer was recognized by Forbes, highlighting how teen fundraisers change lives — including their own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Card className="p-8 flex flex-col justify-between h-full border-t-4 border-t-uplift-red">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/200px-Forbes_logo.svg.png"
                  alt="Forbes Logo"
                  className="h-8 w-auto"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3">
                When Teens Fundraise To End Blood Cancer, They Change Lives — Including Their Own
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                Forbes recognized the incredible impact of student-led fundraising campaigns like ours in the fight against blood cancer, showcasing how young leaders are making a real difference in their communities.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The article highlighted the Student Visionaries of the Year program and how high school students across the country are stepping up to raise critical funds for blood cancer research and patient support.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Being featured in Forbes validated the hard work and dedication of student fundraisers everywhere — proving that young people have the power to create meaningful, lasting change.
              </p>
            </div>
            <div>
              <a
                href="https://www.forbes.com/sites/bloodcancerunited/2025/11/19/when-teens-fundraise-to-end-blood-cancer-they-change-lives-including-their-own/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-uplift-red text-white px-8 py-3 text-lg font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto">
                  Read the Article
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </Card>

          <div className="flex items-center justify-center">
            <div className="max-w-md w-full">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/p/DRdIoASj_TD/?img_index=2&utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: 'calc(100% - 2px)'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a
                    href="https://www.instagram.com/p/DRdIoASj_TD/?img_index=2&utm_source=ig_embed&utm_campaign=loading"
                    style={{
                      background: '#FFFFFF',
                      lineHeight: '0',
                      padding: '0 0',
                      textAlign: 'center',
                      textDecoration: 'none',
                      width: '100%'
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ paddingTop: '8px' }}>
                      <div style={{
                        color: '#3897f0',
                        fontFamily: 'Arial,sans-serif',
                        fontSize: '14px',
                        fontWeight: '550',
                        lineHeight: '18px'
                      }}>
                        View this post on Instagram
                      </div>
                    </div>
                  </a>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
