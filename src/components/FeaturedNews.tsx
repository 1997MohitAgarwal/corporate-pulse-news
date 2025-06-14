
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight } from "lucide-react";

const FeaturedNews = () => {
  const leftSideStories = [
    {
      title: "Global Supply Chain Disruption: Legal and Economic Implications",
      excerpt: "Comprehensive analysis of how international trade disruptions are reshaping corporate legal strategies across multiple jurisdictions.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      category: "Global Trade",
      time: "3 hours ago",
      views: "24.8K"
    },
    {
      title: "New ESG Reporting Standards Take Effect Worldwide",
      excerpt: "Companies must now comply with enhanced environmental disclosure requirements affecting global business operations.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      category: "ESG",
      time: "4 hours ago",
      views: "15.2K"
    }
  ];

  const rightSideStory = {
    title: "Supreme Court Ruling on Corporate Liability Transforms Business Landscape",
    excerpt: "Landmark decision affects how corporations handle class action lawsuits and regulatory compliance. This ruling will have far-reaching implications for corporate governance and risk management strategies across all industries.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    category: "Legal",
    time: "2 hours ago",
    views: "32.1K",
    readTime: "8 min read"
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Featured Stories</h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            In-depth coverage of the most important developments in corporate law and business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Side - Two Equal Height Cards */}
          <div className="lg:col-span-2 grid gap-6 lg:gap-8">
            {leftSideStories.map((article, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-t from-black/40 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-amber-500 text-white">
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
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    <button className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn self-start">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Right Side - Single Large Card */}
          <div className="h-full">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
              <div className="relative overflow-hidden">
                <img
                  src={rightSideStory.image}
                  alt={rightSideStory.title}
                  className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                  {rightSideStory.category}
                </Badge>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {rightSideStory.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {rightSideStory.views}
                    </div>
                    <span>{rightSideStory.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:p-6 flex-grow flex flex-col">
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {rightSideStory.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                  {rightSideStory.excerpt}
                </p>
                <button className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group/btn self-start mt-auto">
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
