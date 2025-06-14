
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
          {/* Left Side - Two Cards */}
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            {leftSideStories.map((article, index) => (
              <Card key={index} className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl hover:scale-[1.02]">
                <div className="grid md:grid-cols-5 min-h-[300px]">
                  {/* Image Section */}
                  <div className="md:col-span-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      width={600}
                      height={400}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
                    <Badge className="absolute top-6 left-6 z-30 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg border-0 font-semibold text-sm px-4 py-2">
                      {article.category}
                    </Badge>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-6 left-6 right-6 z-30">
                      <div className="flex items-center gap-3 text-white/90 text-sm">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Clock className="w-4 h-4" />
                          {article.time}
                        </div>
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Eye className="w-4 h-4" />
                          {article.views}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="md:col-span-3 p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50/50">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight line-height-[1.2]">
                          {article.title}
                        </h3>
                        
                        <p className="text-slate-600 leading-relaxed text-lg line-clamp-4">
                          {article.excerpt}
                        </p>
                      </div>
                      
                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">LT</span>
                        </div>
                        <div>
                          <p className="text-slate-900 font-semibold text-sm">Legal Tribune</p>
                          <p className="text-slate-500 text-xs">Corporate Law Expert</p>
                        </div>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center justify-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/btn self-start mt-8 bg-amber-50 hover:bg-amber-100 rounded-full px-6 py-3">
                      Read Full Article
                      <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Side - Single Large Card */}
          <div className="h-full">
            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col border-0 bg-white rounded-3xl hover:scale-[1.02]">
              {/* Image Header */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 z-10"></div>
                <OptimizedImage
                  src={rightSideStory.image}
                  alt={rightSideStory.title}
                  className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
                
                {/* Overlaid Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-30">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg border-0 font-semibold text-sm px-4 py-2">
                      {rightSideStory.category}
                    </Badge>
                    <div className="text-sm text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 font-medium">
                      {rightSideStory.readTime}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                      {rightSideStory.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
                        <Clock className="w-4 h-4" />
                        {rightSideStory.time}
                      </div>
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
                        <Eye className="w-4 h-4" />
                        {rightSideStory.views}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-10 flex-grow flex flex-col space-y-6 bg-gradient-to-br from-white to-slate-50/50">
                <p className="text-slate-600 leading-relaxed text-lg flex-grow">
                  {rightSideStory.excerpt}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SC</span>
                  </div>
                  <div>
                    <p className="text-slate-900 font-semibold text-sm">Supreme Court Reporter</p>
                    <p className="text-slate-500 text-xs">Legal Correspondent</p>
                  </div>
                </div>
                
                <button className="inline-flex items-center justify-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/btn self-start mt-auto bg-amber-50 hover:bg-amber-100 rounded-full px-6 py-3">
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
