import { useEffect, useMemo, useState } from "react";
import {
  HeartHandshake,
  Users,
  Timer,
  MapPin,
  Receipt,
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function MissionInteractive() {
  const [active, setActive] = useState("problem");
  const [expanded, setExpanded] = useState(false);

  const [secondsToNextDiagnosis, setSecondsToNextDiagnosis] = useState(180);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSecondsToNextDiagnosis((s) => (s <= 1 ? 180 : s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const mm = String(Math.floor(secondsToNextDiagnosis / 60)).padStart(2, "0");
  const ss = String(secondsToNextDiagnosis % 60).padStart(2, "0");

  const strugglePct = 65;
  const gaugeStyle = useMemo(() => ({ width: `${strugglePct}%` }), [strugglePct]);

  const tabs = [
    {
      key: "problem",
      icon: Timer,
      title: "The Problem",
      subtitle: "Blood cancer impacts millions."
    },
    {
      key: "community",
      icon: MapPin,
      title: "Our Community",
      subtitle: "Zooming in where we can help."
    },
    {
      key: "action",
      icon: HeartHandshake,
      title: "Our Mission",
      subtitle: "Support families facing costs."
    }
  ];

  return (
    <section id="impact" className="py-20 bg-uplift-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-4xl font-bold text-uplift-red mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-600">
            A story-driven mission, made interactive.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.key;

            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setActive(t.key)}
                className={`text-left rounded-2xl transition-all duration-300 ${
                  isActive ? "ring-2 ring-uplift-red/40" : "hover:shadow-md"
                }`}
              >
                <Card className="bg-white rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl ${
                          isActive
                            ? "bg-uplift-red text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <p className="font-playfair text-2xl font-bold text-gray-900">
                          {t.title}
                        </p>
                        <p className="text-gray-600">{t.subtitle}</p>
                      </div>

                      <div className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Card>
              </button>
            );
          })}
        </div>

        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-4 sm:p-8">
            {active === "problem" && (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-uplift-red mb-3">
                    Someone is diagnosed every 3 minutes
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Millions of people are impacted by blood cancer every year. We cannot stop
                    every diagnosis worldwide, but we can focus on the part we can influence—our
                    community and the families facing the toughest moments.
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-gray-100 text-gray-700">
                      <Timer className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Next "3-minute" mark in</p>
                      <div
                        className="text-4xl font-semibold text-uplift-red tracking-wide"
                        style={{
                          fontFamily:
                            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
                          fontVariantNumeric: "tabular-nums"
                        }}
                      >
                        {mm}:{ss}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        A reminder of how often families receive life-changing news.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="rounded-2xl bg-gray-50 border border-gray-100 p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-3 rounded-xl bg-uplift-red text-white">
                        <Receipt className="w-6 h-6" />
                      </div>
                      <h4 className="font-playfair text-2xl font-bold text-gray-900">
                        The financial reality
                      </h4>
                    </div>

                    <p className="text-gray-700 leading-relaxed mb-4">
                      Reports say around <span className="font-semibold">65%</span> of families
                      impacted by blood cancer struggle to make hospital payments—nearly 7 out of 10.
                    </p>

                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-uplift-red h-4 rounded-full transition-all duration-700"
                        style={gaugeStyle}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <span>0%</span>
                      <span className="font-semibold text-gray-700">65%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {active === "community" && (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-uplift-red mb-3">
                    Zoom in to where we can help
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    In a small private school of only 100 kids, one of them was diagnosed with leukemia.
                    Fortunately, he made a full recovery and is expected to be cancer-free soon.
                    However, this is not the case for everyone.
                  </p>

                  <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-xl bg-uplift-red text-white">
                        <Users className="w-6 h-6" />
                      </div>
                      <p className="font-playfair text-2xl font-bold text-gray-900">
                        1 student out of 100
                      </p>
                    </div>
                    <p className="text-gray-700">
                      This is why we focus locally. When it happens "close to home," the need becomes real.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-playfair text-2xl font-bold text-gray-900 mb-3">
                    Full story (expand)
                  </h4>

                  <button
                    type="button"
                    onClick={() => setExpanded((v) => !v)}
                    className="w-full rounded-2xl border border-gray-100 bg-white shadow-sm p-5 text-left hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-gray-900">
                        Read the complete mission statement
                      </p>
                      <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
                    </div>

                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: expanded ? '300px' : '0px',
                        opacity: expanded ? 1 : 0,
                      }}
                    >
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        Millions of people are impacted by blood cancer every year. Someone is diagnosed
                        with blood cancer every 3 minutes. While we unfortunately cannot stop all of these
                        diagnoses worldwide, we can zoom in on our own community. In a small private school
                        of only 100 kids, one of them (our honored hero, Miguel) got diagnosed with leukemia.
                        Fortunately, he made a full recovery and is expected to be cancer-free soon. However,
                        this is not the case for everyone. While we cannot reverse the diagnosis, we can do
                        our best to help the struggling families in our very own communities. Reports say
                        that around 65% of families of people impacted by blood cancer struggle to make their
                        hospital payments. That's almost 7 out of 10 people. Our fundraiser aims to raise
                        money for this very cause, with every penny going to those who have a loved one
                        struggling and can not pay their bills
                      </p>
                    </div>
                  </button>

                  <p className="mt-3 text-xs text-gray-500"></p>
                </div>
              </div>
            )}

            {active === "action" && (
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-uplift-red mb-3">
                    What we can do
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    While we cannot reverse a diagnosis, we can help families navigate the burden that comes
                    with it. Our fundraiser is focused on supporting families in our community who are facing
                    overwhelming hospital bills.
                  </p>

                  <div className="mt-6 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-3 rounded-xl bg-uplift-red text-white">
                        <HeartHandshake className="w-6 h-6" />
                      </div>
                      <p className="font-playfair text-2xl font-bold text-gray-900">
                        Where your support goes
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Donations help support those affected by blood cancer and in need.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-uplift-red text-white">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold text-gray-900">
                      Make it real (quick actions)
                    </h4>
                  </div>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-uplift-red flex-shrink-0" />
                      We raised <strong>$15,931</strong> to support families affected by blood cancer.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-uplift-red flex-shrink-0" />
                      Corporate matching and workplace giving amplified our donors' impact.
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-uplift-red flex-shrink-0" />
                      Every contribution, big and small, made a difference.
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div id="donate-button-anchor" className="mt-10 flex justify-center">
          <div className="text-center text-sm text-gray-500"></div>
        </div>
      </div>
    </section>
  );
}
