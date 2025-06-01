
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";
import NewsCategories from "@/components/NewsCategories";
import Testimonials from "@/components/Testimonials";
import TrendingTopics from "@/components/TrendingTopics";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <Hero />
      <TopStories />
      <NewsCategories />
      <TrendingTopics />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Index;
