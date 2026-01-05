import { useEffect, useMemo, useState } from "react";
import { Heart, Timer, CalendarRange } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function FundraisingProgress() {
  // Campaign window (local time). If you prefer exact Central Time handling, see note below.
  const campaignStart = useMemo(() => new Date(2026, 0, 16, 0, 0, 0), []); // Jan = 0
  const campaignEnd = useMemo(() => new Date(2026, 2, 7, 23, 59, 59), []); // Mar = 2

  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const handleDonateClick = () => {
    window.open("https://pages.lls.org/svoy/stx/svoysa26/rrajlf", "_blank", "noopener,noreferrer");
  };

  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

  const {
    phase,
    headline,
    subline,
    timeLeftLabel,
    days,
    hours,
    minutes,
    seconds,
    percentLeft,
    percentElapsed,
    barWidth
  } = useMemo(() => {
    const startMs = campaignStart.getTime();
    const endMs = campaignEnd.getTime();
    const nowMs = now.getTime();

    const totalMs = Math.max(1, endMs - startMs);

    if (nowMs < startMs) {
      const msToStart = startMs - nowMs;
      const d = Math.floor(msToStart / (1000 * 60 * 60 * 24));
      const h = Math.floor((msToStart / (1000 * 60 * 60)) % 24);
      const m = Math.floor((msToStart / (1000 * 60)) % 60);
      const s = Math.floor((msToStart / 1000) % 60);

      return {
        phase: "pre",
        headline: "Countdown to Launch",
        subline: "Fundraising begins soon. Be ready to support on day one.",
        timeLeftLabel: "Time until campaign start",
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
        percentLeft: 100,
        percentElapsed: 0,
        barWidth: 0
      };
    }

    if (nowMs >= endMs) {
      return {
        phase: "post",
        headline: "Campaign Complete",
        subline: "Thank you for supporting families facing blood cancer.",
        timeLeftLabel: "Time remaining",
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        percentLeft: 0,
        percentElapsed: 100,
        barWidth: 100
      };
    }

    // During campaign
    const elapsedMs = nowMs - startMs;
    const remainingMs = endMs - nowMs;

    const d = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
    const h = Math.floor((remainingMs / (1000 * 60 * 60)) % 24);
    const m = Math.floor((remainingMs / (1000 * 60)) % 60);
    const s = Math.floor((remainingMs / 1000) % 60);

    const elapsedPct = clamp((elapsedMs / totalMs) * 100, 0, 100);
    const leftPct = clamp(100 - elapsedPct, 0, 100);

    return {
      phase: "live",
      headline: "Time Is Running",
      subline: "Every day counts. Help us move the mission forward.",
      timeLeftLabel: "Time remaining in campaign",
      days: d,
      hours: h,
      minutes: m,
      seconds: s,
      percentLeft: leftPct,
      percentElapsed: elapsedPct,
      barWidth: elapsedPct
    };
  }, [campaignStart, campaignEnd, now]);

  const pad2 = (n) => String(n).padStart(2, "0");

  return (
    <section className="bg-uplift-light py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Our Fundraising Goal
          </h2>
          <p className="text-lg text-gray-600">
            Every penny goes to those struggling with blood cancer and in need
          </p>
        </div>

        {/* Countdown Card */}
        <Card className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center gap-2 text-uplift-red mb-2">
                  <Timer className="w-5 h-5" />
                  <h3 className="font-playfair text-3xl font-bold">{headline}</h3>
                </div>
                <p className="text-gray-600">{subline}</p>

                <div className="mt-5 flex items-center gap-2 text-gray-600">
                  <CalendarRange className="w-4 h-4" />
                  <span className="text-sm">
                    Jan 16, 2026 <span className="mx-2">→</span> Mar 7, 2026
                  </span>
                </div>
              </div>

              <div className="md:text-right">
                <p className="text-sm text-gray-500 mb-1">{timeLeftLabel}</p>
                <div className="font-playfair text-2xl font-bold text-uplift-red tracking-tight">
                  {days}d {pad2(hours)}:{pad2(minutes)}:{pad2(seconds)}
                </div>

                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700">
                    {phase === "pre" ? "100%" : `${Math.round(percentLeft)}%`}{" "}
                    <span className="font-normal text-gray-600">of time left</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {phase === "pre"
                      ? "Campaign has not started yet."
                      : phase === "post"
                      ? "Campaign ended."
                      : `${Math.round(percentElapsed)}% elapsed`}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8 overflow-hidden">
              <div
                className="bg-uplift-red h-4 rounded-full transition-all duration-700"
                style={{ width: `${barWidth}%` }}
              />
            </div>

            {/* Compact Stat Tiles */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Campaign Start
                </p>
                <p className="text-2xl font-bold text-uplift-red">Jan 16, 2026</p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 text-center">
                <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                  Campaign End
                </p>
                <p className="text-2xl font-bold text-uplift-red">Mar 7, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Keep your button */}
        <div className="flex justify-center">
          <Button
            onClick={handleDonateClick}
            className="relative bg-uplift-red text-white px-12 py-4 rounded-full text-xl font-semibold shadow-lg flex items-center justify-center overflow-hidden group transition-all duration-400 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-600 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            <div className="absolute inset-0 bg-white/15 -rotate-45 -translate-x-full group-hover:translate-x-full transition-transform duration-700 w-12"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-red-300 to-red-500 rounded-full opacity-0 group-hover:opacity-40 blur transition-opacity duration-400"></div>
            <Heart className="w-5 h-5 mr-2 relative z-10 group-hover:scale-110 group-hover:text-red-100 transition-all duration-300 group-hover:drop-shadow-lg" />
            <span className="relative z-10 group-hover:drop-shadow-lg transition-all duration-300">
              Support Our Mission
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
