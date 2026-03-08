import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import FundraisingProgress from "@/components/fundraising-progress";
import About from "@/components/about";
import HonoredHero from "@/components/honored-hero";
import BestDayEver from "@/components/best-day-ever";
import KsatSection from "@/components/ksat-section";
import ForbesFeature from "@/components/forbes-feature";
import ImpactStats from "@/components/impact-stats";
import InstagramPosts from "@/components/instagram-posts";
import BloodCancerFacts from "@/components/blood-cancer-facts";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import { updateSEO, seoData } from "@/utils/seo";

export default function Home() {
  useEffect(() => {
    updateSEO(seoData.home);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FundraisingProgress />
      <About />
      <HonoredHero />
      <BestDayEver />
      <KsatSection />
      <ForbesFeature />
      <ImpactStats />
      <InstagramPosts />
      <BloodCancerFacts />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
