
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Story - Left Side */}
          <div className="h-full">
            <Card className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-[700px] flex flex-col border-0 bg-white rounded-3xl hover:scale-[1.02]">
              {/* Image Header - Takes more space */}
              <div className="relative overflow-hidden h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-pink-600/20 z-10"></div>
                <OptimizedImage
                  src={mainStory.image}
                  alt={mainStory.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={800}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20"></div>
                
                {/* Overlaid Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-30">
                  <div className="flex justify-between items-start">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg border-0 font-semibold text-sm px-4 py-2">
                      {mainStory.category}
                    </Badge>
                    <div className="text-sm text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 font-medium">
                      {mainStory.readTime}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
                        <Clock className="w-4 h-4" />
                        {mainStory.time}
                      </div>
                      <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-4 py-2">
                        <Eye className="w-4 h-4" />
                        {mainStory.views}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-8 lg:p-10 flex-grow flex flex-col space-y-6 bg-gradient-to-br from-white to-slate-50/50">
                <div className="space-y-4 flex-grow">
                  <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                    {mainStory.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-lg">
                    {mainStory.excerpt}
                  </p>
                </div>
                
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
                
                <button className="inline-flex items-center justify-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/btn self-start bg-amber-50 hover:bg-amber-100 rounded-full px-6 py-3">
                  Read Full Story
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>

          {/* Side Stories - Right Side */}
          <div className="space-y-8 h-[700px] flex flex-col">
            {sideStories.map((article, index) => (
              <Card key={index} className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-3xl hover:scale-[1.02] flex-1">
                <div className="grid grid-cols-5 h-full">
                  {/* Image Section - Takes full height */}
                  <div className="col-span-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                    <OptimizedImage
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-20"></div>
                    <Badge className="absolute top-4 left-4 z-30 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg border-0 font-semibold text-xs px-3 py-1.5">
                      {article.category}
                    </Badge>
                    
                    {/* Floating Stats */}
                    <div className="absolute bottom-4 left-4 right-4 z-30">
                      <div className="flex items-center gap-2 text-white/90 text-xs">
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                          <Clock className="w-3 h-3" />
                          {article.time}
                        </div>
                        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                          <Eye className="w-3 h-3" />
                          {article.views}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="col-span-3 p-6 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50/50">
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-lg lg:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-tight">
                        {article.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-xs">LT</span>
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-xs">Legal Tribune</p>
                        <p className="text-slate-500 text-xs">Expert</p>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center justify-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/btn self-start mt-4 bg-amber-50 hover:bg-amber-100 rounded-full px-4 py-2 text-sm">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
