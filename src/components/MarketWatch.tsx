
import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const MarketWatch = memo(() => {
  const marketNews = [
    {
      title: "RBI Maintains Repo Rate at 6.5% Amid Inflation Concerns",
      excerpt: "The Reserve Bank of India's monetary policy committee holds rates steady as inflation pressures continue to impact economic policy decisions.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
      time: "1h ago",
      impact: "High",
      category: "Policy",
      views: "15.2K"
    },
    {
      title: "IT Stocks Rally on AI Investment Surge in India",
      excerpt: "Technology stocks witness significant gains as artificial intelligence investments in Indian markets reach record highs this quarter.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      time: "2h ago",
      impact: "Medium",
      category: "Technology",
      views: "12.8K"
    },
    {
      title: "Banking Sector Shows Strong Q4 Performance",
      excerpt: "Major banking institutions report robust quarterly earnings, driving sector-wide optimism and increased market confidence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      time: "3h ago",
      impact: "High",
      category: "Banking",
      views: "18.5K"
    },
    {
      title: "Auto Sector Faces Supply Chain Challenges",
      excerpt: "Automotive manufacturers navigate ongoing supply chain disruptions while adapting to changing consumer preferences and market dynamics.",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      time: "4h ago",
      impact: "Medium",
      category: "Auto",
      views: "9.3K"
    },
    {
      title: "Pharma Exports Hit Record High This Quarter",
      excerpt: "Pharmaceutical industry achieves unprecedented export figures, strengthening India's position in global healthcare markets.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
      time: "5h ago",
      impact: "Medium",
      category: "Pharma",
      views: "11.7K"
    },
    {
      title: "Metal Prices Decline on Global Demand Concerns",
      excerpt: "Base metal commodities experience price corrections as global economic uncertainties impact industrial demand forecasts.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176",
      time: "6h ago",
      impact: "High",
      category: "Metal",
      views: "14.1K"
    }
  ];

  return (
    <section id="market-watch" className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketNews.map((news, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-slate-100 hover:border-blue-300 rounded-2xl h-full flex flex-col">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:brightness-110 transition-all duration-500"
                  width={400}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className={`font-semibold text-xs px-3 py-1 shadow-md ${
                    news.impact === 'High' 
                      ? 'bg-red-500 text-white hover:bg-red-500' 
                      : 'bg-amber-500 text-white hover:bg-amber-500'
                  }`}>
                    {news.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={`text-xs px-2 py-1 ${
                    news.impact === 'High' 
                      ? 'bg-red-100 text-red-700 hover:bg-red-100' 
                      : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                  }`}>
                    {news.impact}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-slate-500 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {news.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {news.views}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {news.title}
                </h3>
                
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {news.excerpt}
                </p>
                
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn self-start mt-auto">
                  Read Full Story
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

MarketWatch.displayName = "MarketWatch";

export default MarketWatch;
