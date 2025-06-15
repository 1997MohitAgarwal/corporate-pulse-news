
import { useState, memo, useCallback, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, BookOpen, Star, Sparkles, ArrowRight } from "lucide-react";
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
      },
      {
        title: "New IPO Guidelines for Emerging Market Companies",
        excerpt: "Updated regulatory framework streamlines public offering process for startups...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=75",
        trending: true
      },
      {
        title: "Securities Trading Platform Compliance Updates",
        excerpt: "Latest compliance requirements for digital trading platforms and brokers...",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=75",
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
      },
      {
        title: "International Banking Hub Expansion in Gujarat",
        excerpt: "GIFT City emerges as premier destination for global financial services...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=75",
        trending: false
      },
      {
        title: "Cross-Border Payment Solutions Framework Released",
        excerpt: "New guidelines facilitate seamless international transactions...",
        time: "7 hours ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
        trending: true
      },
      {
        title: "Digital Asset Custody Services Regulation",
        excerpt: "Enhanced security protocols for cryptocurrency custody providers...",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=75",
        trending: false
      }
    ],
    "IBC": [
      {
        title: "Insolvency Code Amendments Reshape Corporate Restructuring",
        excerpt: "Recent changes provide clearer resolution timelines for Indian corporates...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=75",
        trending: false
      },
      {
        title: "NCLT Fast-Track Resolution Process Introduced",
        excerpt: "Expedited procedures for small and medium enterprise insolvencies...",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75",
        trending: true
      },
      {
        title: "Cross-Border Insolvency Framework Unveiled",
        excerpt: "New protocols for handling multinational corporate restructuring cases...",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=75",
        trending: false
      },
      {
        title: "Resolution Professional Certification Updates",
        excerpt: "Enhanced qualifications and training requirements for insolvency practitioners...",
        time: "9 hours ago",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=75",
        trending: true
      }
    ],
    "Company Law": [
      {
        title: "Corporate Governance Standards Updated for Listed Companies",
        excerpt: "New compliance requirements for transparency and accountability...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=75",
        trending: true
      },
      {
        title: "Director Liability Framework Strengthened",
        excerpt: "Enhanced accountability measures for corporate board members...",
        time: "7 hours ago",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&q=75",
        trending: false
      },
      {
        title: "Digital Board Meeting Guidelines Released",
        excerpt: "New protocols for virtual corporate governance in post-pandemic era...",
        time: "10 hours ago",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=75",
        trending: true
      },
      {
        title: "Shareholder Rights Protection Measures",
        excerpt: "Expanded protections for minority shareholders in corporate decisions...",
        time: "12 hours ago",
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&q=75",
        trending: false
      }
    ],
    "Competition Law": [
      {
        title: "CCI Intensifies Antitrust Enforcement in Digital Markets",
        excerpt: "Regulatory focus shifts to platform monopolization in Indian e-commerce...",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
        trending: true
      },
      {
        title: "Merger Control Thresholds Revised for Tech Sector",
        excerpt: "Updated criteria for evaluating technology company consolidations...",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=75",
        trending: false
      },
      {
        title: "Anti-Competitive Practices in Pharmaceutical Industry",
        excerpt: "New guidelines target pricing manipulation and market abuse...",
        time: "11 hours ago",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=75",
        trending: true
      },
      {
        title: "Digital Platform Market Dominance Study Released",
        excerpt: "Comprehensive analysis of competition dynamics in online marketplaces...",
        time: "13 hours ago",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=75",
        trending: false
      }
    ],
    "Foreign Direct Trade": [
      {
        title: "FDI Policy Reforms Attract Global Investment to India",
        excerpt: "Liberalized sectors see increased foreign capital inflow and opportunities...",
        time: "7 hours ago",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=75",
        trending: false
      },
      {
        title: "Manufacturing Sector FDI Reaches Record Highs",
        excerpt: "Government incentives drive unprecedented foreign investment in production...",
        time: "9 hours ago",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=75",
        trending: true
      },
      {
        title: "Technology Transfer Regulations Updated",
        excerpt: "New framework balances innovation sharing with national security...",
        time: "12 hours ago",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=75",
        trending: false
      },
      {
        title: "Green Energy FDI Incentive Package Launched",
        excerpt: "Special provisions attract renewable energy investments to India...",
        time: "14 hours ago",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=75",
        trending: true
      }
    ],
    "International Trade Law": [
      {
        title: "India's Trade Agreements Evolve with New Global Frameworks",
        excerpt: "New frameworks address modern trade challenges and opportunities...",
        time: "8 hours ago",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=75",
        trending: true
      },
      {
        title: "WTO Dispute Resolution Case Updates",
        excerpt: "Recent developments in international trade dispute mechanisms...",
        time: "10 hours ago",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&q=75",
        trending: false
      },
      {
        title: "Digital Trade Protocols Established",
        excerpt: "New international standards for cross-border digital commerce...",
        time: "13 hours ago",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=75",
        trending: true
      },
      {
        title: "Supply Chain Resilience Frameworks",
        excerpt: "International cooperation strategies for robust trade networks...",
        time: "15 hours ago",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=75",
        trending: false
      }
    ]
  }), []);

  const handleTabChange = useCallback((category: string) => {
    setActiveTab(category);
  }, []);

  return (
    <section id="news-categories" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-50/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-300/10 to-red-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-12 lg:mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-8 py-4 rounded-2xl shadow-xl shadow-orange-500/30">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-wide">LEGAL INTELLIGENCE HUB</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Premium Legal Categories
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore specialized legal domains with expert insights and sector-specific intelligence
          </p>
        </div>

        {/* Enhanced Category Navigation */}
        <div className="mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-4 shadow-2xl border border-orange-100">
            <div className="flex flex-wrap justify-center gap-2 lg:gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => handleTabChange(category)}
                  className={`px-4 lg:px-6 py-3 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group text-sm lg:text-base ${
                    activeTab === category
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-300/50 scale-105"
                      : "bg-gray-50 text-slate-700 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md border border-gray-200 hover:border-orange-300"
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  {activeTab !== category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  )}
                  <span className="relative z-10 font-medium">{category}</span>
                  {activeTab === category && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Compact News Grid - 4 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {newsData[activeTab]?.map((article, index) => (
            <Card key={index} className="group overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 rounded-2xl hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:brightness-110 transition-all duration-500"
                  width={300}
                  height={160}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {article.trending && (
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white border-none shadow-md text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-3 left-3">
                  <Badge className="bg-white/95 text-slate-900 font-medium shadow-md text-xs">
                    {activeTab}
                  </Badge>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-3">
                  <Clock className="w-3 h-3" />
                  <span>{article.time}</span>
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight">
                  {article.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-2 text-xs">
                  {article.excerpt}
                </p>
                
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors group/btn flex items-center gap-1 text-xs">
                  Read More 
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
