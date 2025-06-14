
import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight, Newspaper } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const FeaturedNews = memo(() => {
  const mainStory = useMemo(() => ({
    title: "Supreme Court Ruling on Corporate Liability Transforms Business Landscape in India",
    excerpt: "Landmark decision affects how Indian corporations handle class action lawsuits and regulatory compliance. This ruling will have far-reaching implications for corporate governance and risk management strategies across all industries operating in India.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    category: "Legal",
    time: "2 hours ago",
    views: "32.1K",
    readTime: "8 min read"
  }), []);

  const sideStories = useMemo(() => [
    {
      title: "Global Supply Chain Disruption: Impact on Indian Corporate Strategies",
      excerpt: "Comprehensive analysis of how international trade disruptions are reshaping corporate legal strategies across Indian businesses and multinational corporations.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      category: "Global Trade",
      time: "3 hours ago",
      views: "24.8K"
    },
    {
      title: "New ESG Reporting Standards for Indian Listed Companies",
      excerpt: "Companies must now comply with enhanced environmental disclosure requirements affecting business operations across India's major stock exchanges.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      category: "ESG Compliance",
      time: "4 hours ago",
      views: "15.2K"
    }
  ], []);

  return (
    <section id="featured-news" className="py-16 lg:py-20 bg-gradient-to-br from-white via-orange-50/20 to-slate-50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Newspaper className="w-5 h-5" />
            <span className="font-semibold">Editor's Choice</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Featured Stories
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            In-depth coverage of the most important developments in Indian corporate law and business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Side - Single Large Card */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-full flex flex-col border-0 bg-white">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={mainStory.image}
                  alt={mainStory.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={320}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg">
                  {mainStory.category}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <Clock className="w-4 h-4" />
                      {mainStory.time}
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <Eye className="w-4 h-4" />
                      {mainStory.views}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-6 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {mainStory.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {mainStory.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500">{mainStory.readTime}</span>
                  <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group/btn">
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Side - Two Equal Height Cards */}
          <div className="lg:col-span-2 grid gap-6 lg:gap-8">
            {sideStories.map((article, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-full border-0 bg-white">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full min-h-[200px] object-cover group-hover:scale-105 transition-transform duration-500"
                      width={400}
                      height={200}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/40 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                      {article.category}
                    </Badge>
                  </div>
                  <div className="p-4 lg:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-slate-500 text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </div>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    <button className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors group/btn self-start">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

FeaturedNews.displayName = "FeaturedNews";

export default FeaturedNews;
