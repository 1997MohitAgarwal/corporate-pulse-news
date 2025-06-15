
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/20 to-purple-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <div className="py-8 lg:py-12 space-y-8 lg:space-y-12">
          <BreakingNews />
          <FeaturedNews />
          <NewsCategories />
          <MarketWatch />
        </div>
        <Footer />
      </div>
    </div>
  );
});

Index.displayName = "Index";

export default Index;
