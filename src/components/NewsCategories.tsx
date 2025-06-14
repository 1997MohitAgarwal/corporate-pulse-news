
import { useState, memo, useCallback, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, BookOpen, Star, Sparkles } from "lucide-react";
import OptimizedImage from "./OptimizedImage";

const NewsCategories = memo(() => {
  const [activeTab, setActiveTab] = useState("Securities Law");

  const categories = useMemo(() => [
    "Securities Law",
    "IFSCA", 
    "IBC",
    "Company Law",
    "Competition Law",
    "Foreign Direct Trade",
    "International Trade Law"
  ], []);

  const newsData = useMemo(() => ({
    "Securities Law": [
      {
        title: "SEBI Introduces New Digital Asset Framework for Indian Markets",
        excerpt: "Comprehensive guidelines for cryptocurrency and blockchain investments in India's financial ecosystem...",
        time: "1 hour ago",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=75",
        trending: true
      },
      {
        title: "Market Volatility Triggers New Trading Regulations by SEBI",
        excerpt: "Enhanced oversight measures aim to protect retail investors in volatile market conditions...",
        time: "3 hours ago",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=75",
        trending: false
      }
    ],
    "IFSCA": [
      {
        title: "IFSCA Streamlines Fintech Authorization Process in GIFT City",
        excerpt: "New regulatory sandbox framework accelerates financial innovation in India...",
        time: "2 hours ago",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=75",
        trending: true
      }
    ],
    "IBC": [
      {
        title: "Insolvency Code Amendments Reshape Corporate Restructuring",
        excerpt: "Recent changes provide clearer resolution timelines for Indian corporates...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75",
        trending: false
      }
    ],
    "Company Law": [
      {
        title: "Corporate Governance Standards Updated for Listed Companies",
        excerpt: "New compliance requirements for transparency and accountability...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75",
        trending: true
      }
    ],
    "Competition Law": [
      {
        title: "CCI Intensifies Antitrust Enforcement in Digital Markets",
        excerpt: "Regulatory focus shifts to platform monopolization in Indian e-commerce...",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
        trending: true
      }
    ],
    "Foreign Direct Trade": [
      {
        title: "FDI Policy Reforms Attract Global Investment to India",
        excerpt: "Liberalized sectors see increased foreign capital inflow and opportunities...",
        time: "7 hours ago",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=75",
        trending: false
      }
    ],
    "International Trade Law": [
      {
        title: "India's Trade Agreements Evolve with New Global Frameworks",
        excerpt: "New frameworks address modern trade challenges and opportunities...",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=75",
        trending: true
      }
    ]
  }), []);

  const handleTabChange = useCallback((category: string) => {
    setActiveTab(category);
  }, []);

  return (
    <section id="news-categories" className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/10 to-red-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-200/5 to-red-200/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Premium Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="relative inline-block mb-8">
            {/* Glowing background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative flex items-center gap-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-10 py-6 rounded-3xl shadow-2xl shadow-orange-500/30">
              <div className="flex items-center gap-2">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <BookOpen className="w-7 h-7" />
                </div>
                <Star className="w-6 h-6 text-yellow-200 animate-pulse" />
              </div>
              <div className="text-center">
                <span className="font-bold text-xl tracking-wide">LEGAL INTELLIGENCE HUB</span>
                <div className="text-yellow-200 text-sm font-medium mt-1">Expert Legal Categories</div>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-200 animate-pulse delay-300" />
                <Sparkles className="w-6 h-6 animate-pulse delay-500" />
              </div>
            </div>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Premium Legal Categories
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Explore specialized legal domains with expert insights and sector-specific intelligence
          </p>
        </div>

        {/* Enhanced Category Tabs with better spacing */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-8 py-4 rounded-2xl font-bold transition-all duration-500 relative overflow-hidden group min-w-[180px] ${
                activeTab === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl shadow-orange-300/50 scale-105"
                  : "bg-white/80 text-slate-700 hover:bg-white hover:text-orange-600 shadow-xl hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 backdrop-blur-sm"
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {activeTab !== category && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
              <span className="relative z-10 text-base font-semibold tracking-wide">{category}</span>
              {activeTab === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced News Grid with improved card design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData[activeTab]?.map((article, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-2xl border-0 rounded-3xl transition-all duration-300 hover:shadow-3xl">
              <div className="relative overflow-hidden rounded-t-3xl">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-56 object-cover transition-transform duration-500"
                  width={400}
                  height={224}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                {article.trending && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none shadow-lg animate-pulse">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/95 text-slate-900 font-bold shadow-xl border-2 border-orange-200">
                    {activeTab}
                  </Badge>
                </div>
              </div>
              <div className="p-8 bg-gradient-to-b from-white to-orange-50/30">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                  <Clock className="w-4 h-4" />
                  <span className="font-medium">{article.time}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 transition-colors line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3 text-base">
                  {article.excerpt}
                </p>
                <button className="text-orange-600 font-bold transition-colors flex items-center gap-2 text-lg group-hover:text-orange-700">
                  Read Full Article 
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

NewsCategories.displayName = "NewsCategories";

export default NewsCategories;
