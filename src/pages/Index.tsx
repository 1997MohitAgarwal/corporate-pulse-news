
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";
import NewsCategories from "@/components/NewsCategories";
import TrendingTopics from "@/components/TrendingTopics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <TopStories />
      <NewsCategories />
      <TrendingTopics />
      <Footer />
    </div>
  );
};

export default Index;
