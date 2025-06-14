
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight } from "lucide-react";

const FeaturedNews = () => {
  const featuredArticle = {
    title: "Global Supply Chain Disruption: Legal and Economic Implications",
    excerpt: "A comprehensive analysis of how international trade disruptions are reshaping corporate legal strategies and regulatory compliance requirements across multiple jurisdictions.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
    category: "Global Trade",
    time: "3 hours ago",
    views: "24.8K",
    readTime: "8 min read"
  };

  const sideArticles = [
    {
      title: "New ESG Reporting Standards Take Effect",
      excerpt: "Companies must now comply with enhanced environmental disclosure requirements...",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      category: "ESG",
      time: "4 hours ago",
      views: "15.2K"
    },
    {
      title: "Supreme Court Ruling on Corporate Liability",
      excerpt: "Landmark decision affects how corporations handle class action lawsuits...",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      category: "Legal",
      time: "6 hours ago", 
      views: "18.7K"
    },
    {
      title: "Cryptocurrency Regulation Update",
      excerpt: "Federal agencies coordinate new framework for digital asset oversight...",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "FinTech",
      time: "8 hours ago",
      views: "22.1K"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Stories</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            In-depth coverage of the most important developments in corporate law and business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <Badge className="absolute top-6 left-6 bg-amber-500 text-white">
                  {featuredArticle.category}
                </Badge>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {featuredArticle.views}
                    </div>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {featuredArticle.title}
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <button className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group">
                  Read Full Article
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {sideArticles.map((article, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <Badge className="absolute top-3 left-3 bg-white/90 text-slate-900 text-xs">
                    {article.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {article.views}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {article.excerpt}
                  </p>
                  <button className="text-amber-600 font-medium text-sm hover:text-amber-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedNews;
