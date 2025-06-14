
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BreakingNews from "@/components/BreakingNews";
import FeaturedNews from "@/components/FeaturedNews";
import MarketWatch from "@/components/MarketWatch";
import LegalInsights from "@/components/LegalInsights";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <BreakingNews />
      <FeaturedNews />
      <MarketWatch />
      <LegalInsights />
      <NewsletterCTA />
      <Footer />
    </div>
  );
};

export default Index;
