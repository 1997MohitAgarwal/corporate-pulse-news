
import { useState, memo, useCallback, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, BookOpen } from "lucide-react";
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
    <section id="news-categories" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-orange-50/20 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Legal Intelligence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Legal Categories
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Explore specialized legal domains and stay updated with sector-specific developments
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleTabChange(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === category
                  ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-xl shadow-orange-200"
                  : "bg-white text-slate-700 hover:bg-orange-50 hover:text-orange-600 shadow-lg hover:shadow-xl border border-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {newsData[activeTab]?.map((article, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  width={400}
                  height={192}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {article.trending && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none shadow-lg">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 font-semibold shadow-lg">
                    {activeTab}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  {article.time}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors group/btn">
                  Read Full Article 
                  <span className="inline-block ml-1 group-hover/btn:translate-x-1 transition-transform">→</span>
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
