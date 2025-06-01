import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

const NewsCategories = () => {
  const [activeTab, setActiveTab] = useState("Securities Law");

  const categories = [
    "Securities Law",
    "IFSCA", 
    "IBC",
    "Company Law",
    "Competition Law",
    "Foreign Direct Trade",
    "International Trade Law"
  ];

  const newsData = {
    "Securities Law": [
      {
        title: "SEC Introduces New Digital Asset Framework",
        excerpt: "Comprehensive guidelines for cryptocurrency and blockchain investments...",
        time: "1 hour ago",
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44",
        trending: true
      },
      {
        title: "Market Volatility Triggers New Trading Regulations",
        excerpt: "Enhanced oversight measures aim to protect retail investors...",
        time: "3 hours ago",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
        trending: false
      }
    ],
    "IFSCA": [
      {
        title: "IFSCA Streamlines Fintech Authorization Process",
        excerpt: "New regulatory sandbox framework accelerates innovation...",
        time: "2 hours ago",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
        trending: true
      }
    ],
    "IBC": [
      {
        title: "Insolvency Code Amendments Reshape Restructuring",
        excerpt: "Recent changes provide clearer resolution timelines...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
        trending: false
      }
    ],
    "Company Law": [
      {
        title: "Corporate Governance Standards Updated",
        excerpt: "New compliance requirements for listed entities...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        trending: true
      }
    ],
    "Competition Law": [
      {
        title: "Antitrust Enforcement Intensifies in Digital Markets",
        excerpt: "Regulatory focus shifts to platform monopolization...",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        trending: true
      }
    ],
    "Foreign Direct Trade": [
      {
        title: "FDI Policy Reforms Attract Global Investment",
        excerpt: "Liberalized sectors see increased foreign capital inflow...",
        time: "7 hours ago",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
        trending: false
      }
    ],
    "International Trade Law": [
      {
        title: "WTO Dispute Resolution Mechanisms Evolve",
        excerpt: "New frameworks address modern trade challenges...",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        trending: true
      }
    ]
  };

  return (
    <section id="news-categories" className="py-20 bg-gradient-to-br from-slate-100 to-blue-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            Legal Categories
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore specialized legal domains and stay updated with sector-specific developments
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-200"
                  : "bg-white text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {newsData[activeTab]?.map((article, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {article.trending && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-white/90 text-slate-900 font-semibold">
                    {activeTab}
                  </Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  {article.time}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read Full Article →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
