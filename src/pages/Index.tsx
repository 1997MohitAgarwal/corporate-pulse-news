
import { memo } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BreakingNews from "@/components/BreakingNews";
import FeaturedNews from "@/components/FeaturedNews";
import NewsCategories from "@/components/NewsCategories";
import MarketWatch from "@/components/MarketWatch";
import Footer from "@/components/Footer";

const Index = memo(() => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      <Navbar />
      <HeroSection />
      <BreakingNews />
      <FeaturedNews />
      <NewsCategories />
      <MarketWatch />
      <Footer />
    </div>
  );
});

Index.displayName = "Index";

export default Index;
