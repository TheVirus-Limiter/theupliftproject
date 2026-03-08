import { ExternalLink, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KsatSection() {
  return (
    <section id="media" className="py-20 bg-gradient-to-b from-white via-red-50/30 to-white" data-testid="section-ksat-media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="https://thevirus-limiter.github.io/filestorage/ksat_logo.png"
              alt="KSAT 12 Logo"
              className="h-16 object-contain"
            />
          </div>
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            As Seen on KSAT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            KSAT 12 San Antonio helped share our mission with the community
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-10">
          <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-2 text-center">
            Interview with Rehan Raj on Good Morning SA
          </h3>
          <p className="text-gray-500 text-center mb-4">February 19, 2026</p>
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-red-900/10" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/80Wf-G0ntEg"
              title="Interview with Rehan Raj on Good Morning SA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-3">
            <a
              href="https://www.ksat.com/video/news/2026/02/20/rr01-uplift-project/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-uplift-red hover:text-red-800 inline-flex items-center gap-1"
            >
              Also available on KSAT.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col">
            <h3 className="font-playfair text-xl font-semibold mb-4 text-center">
              KSAT Phone Bank — Feb 23
            </h3>
            <div className="relative w-full rounded-xl overflow-hidden shadow-lg ring-1 ring-red-900/10 flex-1" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Ts-cpEkpwTA?start=874"
                title="KSAT Phone Bank - The Uplift Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <Card className="p-6 flex flex-col justify-between h-full border-t-4 border-t-red-900/80">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Newspaper className="w-5 h-5 text-uplift-red" />
                <h3 className="font-playfair text-xl font-semibold">
                  KSAT Article
                </h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                KSAT Community hosted a live phone bank supporting local teens fighting blood cancer through the Student Visionaries of the Year campaign.
              </p>
            </div>
            <div>
              <a
                href="https://www.ksat.com/news/local/2026/02/17/ksat-community-to-host-live-phone-bank-supporting-local-teens-fighting-blood-cancer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" data-testid="button-read-ksat-article">
                  Read Article <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
