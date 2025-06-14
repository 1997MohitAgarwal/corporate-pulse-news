
import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight, Newspaper } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const FeaturedNews = memo(() => {
  const leftSideStories = useMemo(() => [
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

  const rightSideStory = useMemo(() => ({
    title: "Supreme Court Ruling on Corporate Liability Transforms Business Landscape in India",
    excerpt: "Landmark decision affects how Indian corporations handle class action lawsuits and regulatory compliance. This ruling will have far-reaching implications for corporate governance and risk management strategies across all industries operating in India.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    category: "Legal",
    time: "2 hours ago",
    views: "32.1K",
    readTime: "8 min read"
  }), []);

  return (
    <section id="featured-news" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Newspaper className="w-5 h-5" />
            <span className="font-semibold">Featured Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-amber-700 to-orange-700 bg-clip-text text-transparent">
              Editor's Choice
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            In-depth coverage of the most important developments in Indian corporate law and business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Side - Two Equal Height Cards */}
          <div className="lg:col-span-2 grid gap-6 lg:gap-8">
            {leftSideStories.map((article, index) => (
              <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white rounded-2xl">
                <div className="grid md:grid-cols-5 h-full">
                  {/* Image Section - Fixed Width */}
                  <div className="md:col-span-2 relative overflow-hidden bg-slate-200">
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md border-0 font-medium">
                      {article.category}
                    </Badge>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-3 p-6 lg:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-slate-500 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </div>
                      </div>
                      
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <button className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn self-start mt-6">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Side - Single Large Card */}
          <div className="h-full">
            <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border-0 bg-white rounded-2xl">
              {/* Image Header */}
              <div className="relative overflow-hidden bg-slate-200">
                <OptimizedImage
                  src={rightSideStory.image}
                  alt={rightSideStory.title}
                  className="w-full h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={256}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Overlaid Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md border-0 font-medium">
                      {rightSideStory.category}
                    </Badge>
                    <div className="text-xs text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      {rightSideStory.readTime}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <Clock className="w-4 h-4" />
                        {rightSideStory.time}
                      </div>
                      <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                        <Eye className="w-4 h-4" />
                        {rightSideStory.views}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 lg:p-8 flex-grow flex flex-col space-y-4">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                  {rightSideStory.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {rightSideStory.excerpt}
                </p>
                
                <button className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn self-start mt-auto">
                  Read Full Story
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

FeaturedNews.displayName = "FeaturedNews";

export default FeaturedNews;
