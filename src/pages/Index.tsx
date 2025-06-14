
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BreakingNews from "@/components/BreakingNews";
import FeaturedNews from "@/components/FeaturedNews";
import NewsCategories from "@/components/NewsCategories";
import TopStories from "@/components/TopStories";
import MarketWatch from "@/components/MarketWatch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <BreakingNews />
      <FeaturedNews />
      <TopStories />
      <NewsCategories />
      <MarketWatch />
      <Footer />
    </div>
  );
};

export default Index;
