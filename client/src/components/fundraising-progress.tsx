import { Heart, Calendar, Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FundraisingProgress() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #fef2f2 50%, #f8f9fa 100%)" }} data-testid="section-campaign-results">
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(131,25,25,0.03) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(131,25,25,0.02) 0%, transparent 50%)" }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4" data-testid="text-campaign-results-heading">
            Campaign Results
          </h2>
          <p className="text-lg text-gray-600">
            Thank you to everyone who supported our mission to fight blood cancer
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8 animate-fade-in-up-delay-1" style={{ boxShadow: "0 4px 30px rgba(131,25,25,0.08)" }}>
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Total Raised
              </p>
              <p
                className="text-6xl md:text-7xl font-bold text-uplift-red mb-2 text-glow"
                style={{ fontVariantNumeric: "tabular-nums" }}
                data-testid="text-total-raised"
              >
                $15,931
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-600 mt-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm" data-testid="text-campaign-dates">
                  January 16 &ndash; March 7, 2026
                </span>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-8 overflow-hidden">
              <div
                className="animate-shimmer h-3 rounded-full"
                style={{ width: "100%" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-gray-100 p-4 text-center card-hover" style={{ background: "linear-gradient(135deg, #fafafa 0%, #fef2f2 100%)" }}>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Campaign Start
                </p>
                <p className="text-2xl font-bold text-uplift-red" data-testid="text-campaign-start">
                  Jan 16, 2026
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 p-4 text-center card-hover" style={{ background: "linear-gradient(135deg, #fafafa 0%, #fef2f2 100%)" }}>
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Campaign End
                </p>
                <p className="text-2xl font-bold text-uplift-red" data-testid="text-campaign-end">
                  Mar 7, 2026
                </p>
              </div>
            </div>

            <div className="rounded-xl p-6 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, #fef2f2 0%, #fff7ed 50%, #fef2f2 100%)", border: "1px solid rgba(131,25,25,0.1)", boxShadow: "0 0 20px rgba(131,25,25,0.06), inset 0 1px 0 rgba(255,255,255,0.8)" }}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-uplift-red" />
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  South Texas Student Visionaries Total
                </p>
              </div>
              <p
                className="text-4xl md:text-5xl font-bold text-uplift-red mb-2 text-glow"
                style={{ fontVariantNumeric: "tabular-nums" }}
                data-testid="text-south-texas-total"
              >
                $1,121,651
              </p>
              <p className="text-sm text-gray-600 mb-3">
                Raised across all South Texas teams
              </p>
              <Button
                variant="outline"
                className="text-uplift-red border-uplift-red/30"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/p/DVowj9ej59G/?img_index=1",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                data-testid="link-south-texas-instagram"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on Instagram
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center animate-fade-in-up-delay-2">
          <Button
            onClick={() =>
              window.open(
                "https://www.instagram.com/theupliftproject25/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="relative bg-uplift-red text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg flex items-center justify-center overflow-hidden group transition-all duration-400"
            data-testid="button-view-instagram"
          >
            <Heart className="w-5 h-5 mr-2 relative z-10" />
            <span className="relative z-10">
              View Our Instagram
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
