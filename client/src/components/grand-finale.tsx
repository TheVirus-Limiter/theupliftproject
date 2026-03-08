import { useEffect } from "react";
import { Trophy } from "lucide-react";

export default function GrandFinale() {
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
    <section id="grand-finale" className="py-20" style={{ background: 'linear-gradient(135deg, #fdf8ef 0%, #f9f0dd 30%, #fdf8ef 60%, #faf3e3 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full" style={{ background: 'linear-gradient(135deg, #c9a84c 0%, #f0d68a 50%, #c9a84c 100%)' }}>
              <Trophy className="w-10 h-10" style={{ color: '#5a3e1b' }} />
            </div>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4" style={{ background: 'linear-gradient(135deg, #8b6914 0%, #c9a84c 40%, #8b6914 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Grand Finale
          </h2>
          <div className="mx-auto mt-2 mb-6 w-32 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }} />
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6b5520' }}>
            On March 7, 2026, The Uplift Project reached its grand finale at the Student Visionaries of the Year Gala. After seven weeks of tireless fundraising, community events, and unwavering dedication, our team celebrated the incredible journey alongside fellow students, families, and supporters who made it all possible.
          </p>
          <div className="mt-6 flex justify-center">
            <img 
              src="https://thevirus-limiter.github.io/filestorage/llslogo.png" 
              alt="Blood Cancer United" 
              className="h-14 w-auto animate-logo-pulse"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="flex justify-center">
            <div className="max-w-md w-full rounded-xl overflow-hidden" style={{ border: '2px solid #c9a84c44' }}>
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink="https://www.instagram.com/p/DVo9rmQj0gf/?utm_source=ig_embed&utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: 'none',
                  margin: '0',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '100%'
                }}
              >
                <div style={{ padding: '16px' }}>
                  <a
                    href="https://www.instagram.com/p/DVo9rmQj0gf/?utm_source=ig_embed&utm_campaign=loading"
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

          <div>
            <p className="text-sm uppercase tracking-widest mb-3 text-center lg:text-left" style={{ color: '#8b6914' }}>Our Campaign Video</p>
            <div className="flex justify-center lg:justify-start">
              <div className="max-w-md w-full rounded-xl overflow-hidden" style={{ border: '2px solid #c9a84c44' }}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/reel/DTjniyyDNEP/?utm_source=ig_embed&utm_campaign=loading"
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: 'none',
                    margin: '0',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '100%'
                  }}
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
                      <div style={{ padding: '19% 0' }}></div>
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
        </div>
      </div>
    </section>
  );
}
