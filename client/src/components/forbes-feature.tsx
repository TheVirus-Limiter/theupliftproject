import { ExternalLink, Play } from "lucide-react";
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
    <section id="forbes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4" data-testid="text-forbes-heading">
            Featured in Forbes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-testid="text-forbes-description">
            Our mission to fight blood cancer was recognized by Forbes, highlighting how teen fundraisers change lives — including their own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mb-20">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Forbes_logo.svg/200px-Forbes_logo.svg.png"
                alt="Forbes Logo"
                className="h-8 w-auto"
                data-testid="img-forbes-logo"
              />
            </div>
            <h3 className="font-playfair text-xl font-bold text-gray-900 mb-3" data-testid="text-forbes-article-title">
              When Teens Fundraise To End Blood Cancer, They Change Lives — Including Their Own
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Forbes recognized the incredible impact of student-led fundraising campaigns like ours in the fight against blood cancer, showcasing how young leaders are making a real difference in their communities.
            </p>
            <a
              href="https://www.forbes.com/sites/bloodcancerunited/2025/11/19/when-teens-fundraise-to-end-blood-cancer-they-change-lives-including-their-own/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-forbes-article"
            >
              <Button variant="default" className="bg-uplift-red hover:bg-red-800 border-uplift-red">
                Read the Article
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>

          <div className="flex justify-center">
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
                data-testid="embed-forbes-instagram"
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
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                      <div style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '50%',
                        height: '40px',
                        marginRight: '14px',
                        width: '40px'
                      }}></div>
                      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          height: '14px',
                          marginBottom: '6px',
                          width: '100px'
                        }}></div>
                        <div style={{
                          backgroundColor: '#F4F4F4',
                          borderRadius: '4px',
                          height: '14px',
                          width: '60px'
                        }}></div>
                      </div>
                    </div>
                    <div style={{ padding: '19% 0' }}></div>
                    <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                      <svg width="50px" height="50px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                            <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886" />
                          </g>
                        </g>
                      </svg>
                    </div>
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

        <div className="text-center mb-8">
          <h3 className="font-playfair text-3xl font-bold text-uplift-red mb-4" data-testid="text-campaign-video-heading">
            Our Campaign Video
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Watch our campaign reel to see the heart behind The Uplift Project.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="max-w-md w-full">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/reel/DTjniyyDNEP/?utm_source=ig_embed&utm_campaign=loading"
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
              data-testid="embed-campaign-video"
            >
              <div style={{ padding: '16px' }}>
                <a
                  href="https://www.instagram.com/reel/DTjniyyDNEP/?utm_source=ig_embed&utm_campaign=loading"
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
                  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div style={{
                      backgroundColor: '#F4F4F4',
                      borderRadius: '50%',
                      height: '40px',
                      marginRight: '14px',
                      width: '40px'
                    }}></div>
                    <div style={{ display: 'flex', flexDirection: 'column', flexGrow: '1', justifyContent: 'center' }}>
                      <div style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        height: '14px',
                        marginBottom: '6px',
                        width: '100px'
                      }}></div>
                      <div style={{
                        backgroundColor: '#F4F4F4',
                        borderRadius: '4px',
                        height: '14px',
                        width: '60px'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ padding: '19% 0' }}></div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play className="w-12 h-12 text-gray-400" />
                  </div>
                  <div style={{ paddingTop: '8px' }}>
                    <div style={{
                      color: '#3897f0',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontWeight: '550',
                      lineHeight: '18px'
                    }}>
                      View this reel on Instagram
                    </div>
                  </div>
                </a>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}