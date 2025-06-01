
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TopStories from "@/components/TopStories";
import NewsCategories from "@/components/NewsCategories";
import Testimonials from "@/components/Testimonials";
import TrendingTopics from "@/components/TrendingTopics";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <TopStories />
      <NewsCategories />
      <Testimonials />
      <TrendingTopics />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
