import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import SupportedBy from "@/components/supported-by";
import FundraisingProgress from "@/components/fundraising-progress";
import About from "@/components/about";
import HonoredHero from "@/components/honored-hero";
import ImpactStats from "@/components/impact-stats";
import InstagramPosts from "@/components/instagram-posts";
import WaysToDonate from "@/components/ways-to-donate";
import DonationImpactCalculator from "@/components/donation-impact-calculator";
import BloodCancerFacts from "@/components/blood-cancer-facts";
import FAQ from "@/components/faq";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import GitHubPagesChatbot from "@/components/github-pages-chatbot";
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
      <WaysToDonate />
      <DonationImpactCalculator />
      <BloodCancerFacts />
      <FAQ />
      <CallToAction />
      <Footer />
      <GitHubPagesChatbot />
    </div>
  );
}
