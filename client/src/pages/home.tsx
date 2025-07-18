import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import SupportedBy from "@/components/supported-by";
import FundraisingProgress from "@/components/fundraising-progress";
import About from "@/components/about";
import HonoredHero from "@/components/honored-hero";
import ImpactStats from "@/components/impact-stats";
import InstagramPosts from "@/components/instagram-posts";
import CampaignUpdates from "@/components/campaign-updates";
import BloodCancerFacts from "@/components/blood-cancer-facts";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import { useEffect } from "react";
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
      <SupportedBy />
      <About />
      <HonoredHero />
      <ImpactStats />
      <InstagramPosts />
      <CampaignUpdates />
      <BloodCancerFacts />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}
