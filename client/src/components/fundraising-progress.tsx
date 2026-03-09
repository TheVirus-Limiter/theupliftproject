import { Heart, Calendar, Users, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FundraisingProgress() {
  return (
    <section className="bg-uplift-light py-16" data-testid="section-campaign-results">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4" data-testid="text-campaign-results-heading">
            Campaign Results
          </h2>
          <p className="text-lg text-gray-600">
            Thank you to everyone who supported our mission to fight blood cancer
          </p>
        </div>

        <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">
                Total Raised
              </p>
              <p
                className="text-4xl sm:text-5xl md:text-7xl font-bold text-uplift-red mb-2"
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
                className="bg-uplift-red h-3 rounded-full"
                style={{ width: "100%" }}
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Campaign Start
                </p>
                <p className="text-lg sm:text-2xl font-bold text-uplift-red" data-testid="text-campaign-start">
                  Jan 16, 2026
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Campaign End
                </p>
                <p className="text-lg sm:text-2xl font-bold text-uplift-red" data-testid="text-campaign-end">
                  Mar 7, 2026
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-gray-100 bg-red-50/50 p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-uplift-red" />
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  South Texas Student Visionaries Total
                </p>
              </div>
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-uplift-red mb-2"
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

        <div className="flex justify-center">
          <Button
            onClick={() =>
              window.open(
                "https://www.instagram.com/theupliftproject25/",
                "_blank",
                "noopener,noreferrer"
              )
            }
            className="bg-uplift-red text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-red-800 transition-colors"
            data-testid="button-view-instagram"
          >
            <Heart className="w-5 h-5 mr-2" />
            View Our Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
