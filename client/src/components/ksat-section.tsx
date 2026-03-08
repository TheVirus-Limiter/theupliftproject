import { ExternalLink, Tv, Newspaper } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function KsatSection() {
  return (
    <section id="media" className="py-20 bg-background" data-testid="section-ksat-media">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="https://thevirus-limiter.github.io/filestorage/ksat_logo.png"
              alt="KSAT 12 Logo"
              className="h-16 object-contain"
              data-testid="img-ksat-logo"
            />
          </div>
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4" data-testid="text-ksat-heading">
            Media Coverage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            KSAT 12 San Antonio helped share our mission with the community through interviews and a live phone bank
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="w-5 h-5 text-uplift-red" />
              <h3 className="font-playfair text-xl font-semibold" data-testid="text-ksat-article-title">
                KSAT Community Phone Bank
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              KSAT Community announced a live phone bank to support local teens fighting blood cancer through The Leukemia & Lymphoma Society's Student Visionaries of the Year campaign.
            </p>
            <a
              href="https://www.ksat.com/news/local/2026/02/17/ksat-community-to-host-live-phone-bank-supporting-local-teens-fighting-blood-cancer/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-ksat-article"
            >
              <Button variant="outline">
                Read Article <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Tv className="w-5 h-5 text-uplift-red" />
              <h3 className="font-playfair text-xl font-semibold" data-testid="text-ksat-interview-title">
                Good Morning SA Interview
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              The Uplift Project team was featured on Good Morning SA on February 19th, sharing their story and mission to fight blood cancer.
            </p>
            <a
              href="https://www.ksat.com/video/news/2026/02/20/rr01-uplift-project/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-ksat-video-article"
            >
              <Button variant="outline">
                Watch on KSAT <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-center" data-testid="text-gmsa-embed-title">
              Good Morning SA Interview — Feb 19
            </h3>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src="https://www.youtube.com/embed/80Wf-G0ntEg"
                title="Good Morning SA Interview - The Uplift Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="embed-gmsa-interview"
              />
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-center" data-testid="text-phonebank-embed-title">
              KSAT Phone Bank — Feb 23
            </h3>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-md"
                src="https://www.youtube.com/embed/Ts-cpEkpwTA?start=874"
                title="KSAT Phone Bank - The Uplift Project"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                data-testid="embed-phonebank"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}