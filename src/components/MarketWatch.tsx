import { memo, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Zap, Star, Eye, Landmark, Cpu, Pill, Car, ShoppingCart, Factory } from "lucide-react";

const MarketWatch = memo(() => {
  const [selectedSector, setSelectedSector] = useState("Technology");

  const marketData = useMemo(() => [
    { 
      symbol: "NIFTY 50", 
      value: "21,567.23", 
      change: "+1.2%", 
      trend: "up", 
      icon: BarChart3,
    },
    { 
      symbol: "SENSEX", 
      value: "71,123.45", 
      change: "+0.8%", 
      trend: "up", 
      icon: TrendingUp,
    },
    { 
      symbol: "BANKNIFTY", 
      value: "46,892.67", 
      change: "-0.3%", 
      trend: "down", 
      icon: Landmark,
    },
    { 
      symbol: "GOLD", 
      value: "₹63,892", 
      change: "+0.5%", 
      trend: "up", 
      icon: Star,
    },
    { 
      symbol: "CRUDE OIL", 
      value: "₹6,892", 
      change: "-1.1%", 
      trend: "down", 
      icon: Activity,
    },
    { 
      symbol: "USD/INR", 
      value: "83.25", 
      change: "+0.3%", 
      trend: "up", 
      icon: TrendingUp,
    }
  ], []);

  const topSectors = useMemo(() => [
    { name: "Technology", change: "+3.2%", trend: "up", icon: Cpu },
    { name: "Banking", change: "+2.1%", trend: "up", icon: Landmark },
    { name: "Pharma", change: "+1.8%", trend: "up", icon: Pill },
    { name: "Auto", change: "+1.5%", trend: "up", icon: Car },
    { name: "FMCG", change: "-0.5%", trend: "down", icon: ShoppingCart },
    { name: "Metal", change: "-1.2%", trend: "down", icon: Factory }
  ], []);

  const sectorStocks = useMemo(() => ({
    "Technology": [
      { name: "TCS", price: "₹3,892", change: "+2.8%", trend: "up" },
      { name: "Infosys", price: "₹1,567", change: "+3.1%", trend: "up" },
      { name: "Wipro", price: "₹456", change: "+1.9%", trend: "up" },
      { name: "HCL Tech", price: "₹1,234", change: "+2.5%", trend: "up" },
      { name: "Tech Mahindra", price: "₹1,089", change: "+2.1%", trend: "up" }
    ],
    "Banking": [
      { name: "HDFC Bank", price: "₹1,678", change: "+1.8%", trend: "up" },
      { name: "ICICI Bank", price: "₹987", change: "+2.2%", trend: "up" },
      { name: "SBI", price: "₹612", change: "+1.5%", trend: "up" },
      { name: "Axis Bank", price: "₹1,123", change: "+1.9%", trend: "up" },
      { name: "Kotak Bank", price: "₹1,845", change: "+2.3%", trend: "up" }
    ],
    "Pharma": [
      { name: "Sun Pharma", price: "₹1,245", change: "+2.1%", trend: "up" },
      { name: "Dr. Reddy's", price: "₹4,567", change: "+1.7%", trend: "up" },
      { name: "Cipla", price: "₹1,089", change: "+2.3%", trend: "up" },
      { name: "Aurobindo", price: "₹765", change: "+1.4%", trend: "up" },
      { name: "Lupin", price: "₹891", change: "+1.9%", trend: "up" }
    ],
    "Auto": [
      { name: "Maruti", price: "₹10,234", change: "+1.2%", trend: "up" },
      { name: "Tata Motors", price: "₹567", change: "+2.1%", trend: "up" },
      { name: "Bajaj Auto", price: "₹4,567", change: "+0.8%", trend: "up" },
      { name: "Hero Moto", price: "₹2,890", change: "+1.6%", trend: "up" },
      { name: "M&M", price: "₹1,456", change: "+1.3%", trend: "up" }
    ],
    "FMCG": [
      { name: "HUL", price: "₹2,456", change: "-0.3%", trend: "down" },
      { name: "ITC", price: "₹456", change: "-0.7%", trend: "down" },
      { name: "Nestle", price: "₹22,345", change: "-0.2%", trend: "down" },
      { name: "Britannia", price: "₹4,789", change: "-0.5%", trend: "down" },
      { name: "Dabur", price: "₹567", change: "-0.4%", trend: "down" }
    ],
    "Metal": [
      { name: "Tata Steel", price: "₹123", change: "-1.8%", trend: "down" },
      { name: "JSW Steel", price: "₹789", change: "-2.1%", trend: "down" },
      { name: "Hindalco", price: "₹456", change: "-0.9%", trend: "down" },
      { name: "SAIL", price: "₹98", change: "-1.5%", trend: "down" },
      { name: "Vedanta", price: "₹234", change: "-1.2%", trend: "down" }
    ]
  }), []);

  const marketNews = useMemo(() => [
    {
      title: "RBI Maintains Repo Rate at 6.5% Amid Inflation Concerns",
      time: "1h ago",
      impact: "High",
      category: "Policy"
    },
    {
      title: "IT Stocks Rally on AI Investment Surge in India",
      time: "2h ago",
      impact: "Medium",
      category: "Technology"
    },
    {
      title: "Banking Sector Shows Strong Q4 Performance",
      time: "3h ago",
      impact: "High",
      category: "Banking"
    },
    {
      title: "Auto Sector Faces Supply Chain Challenges",
      time: "4h ago",
      impact: "Medium",
      category: "Auto"
    },
    {
      title: "Pharma Exports Hit Record High This Quarter",
      time: "5h ago",
      impact: "Medium",
      category: "Pharma"
    },
    {
      title: "Metal Prices Decline on Global Demand Concerns",
      time: "6h ago",
      impact: "High",
      category: "Metal"
    }
  ], []);

  return (
    <section id="market-watch" className="py-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Market Watch
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time market insights and analytics at your fingertips
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Market Indices */}
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100/80 backdrop-blur-sm border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-fit">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Market Indices</h3>
                  <p className="text-sm text-blue-700">Live Performance</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {marketData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-gray-50 shadow-sm border border-gray-100">
                          <IconComponent className="w-4 h-4 text-gray-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 text-sm">{item.symbol}</span>
                          <div className="text-base font-semibold text-gray-900">{item.value}</div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                        item.trend === 'up' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span>{item.change}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Top Sectors */}
          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100/80 backdrop-blur-sm border border-indigo-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-fit">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500 rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-indigo-900">Top Sectors</h3>
                  <p className="text-sm text-indigo-700">Market Leaders</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {topSectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-200 shadow-md hover:shadow-lg border ${
                        selectedSector === sector.name
                          ? 'bg-blue-50 border-blue-300 shadow-lg'
                          : 'bg-white hover:bg-gray-50 border-gray-100'
                      }`}
                      onClick={() => setSelectedSector(sector.name)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-gray-50 shadow-sm border border-gray-100">
                          <IconComponent className="w-4 h-4 text-gray-600" />
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{sector.name}</span>
                      </div>
                      
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                        sector.trend === 'up'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {sector.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        <span>{sector.change}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Trending Stocks */}
          <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100/80 backdrop-blur-sm border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-fit">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900">Trending Stocks</h3>
                  <p className="text-sm text-emerald-700">{selectedSector} Sector</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {sectorStocks[selectedSector]?.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg font-semibold flex items-center justify-center text-sm text-white shadow-sm ${
                        stock.trend === 'up' ? 'bg-emerald-500' : 'bg-red-500'
                      }`}>
                        {stock.name.charAt(0)}
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 text-sm block">{stock.name}</span>
                        <div className="text-xs text-gray-500">{stock.price}</div>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium ${
                      stock.trend === 'up'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {stock.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      <span>{stock.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Market News */}
        <Card className="bg-gradient-to-br from-slate-50 to-slate-100/80 backdrop-blur-sm border border-slate-200/50 shadow-xl">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-500 rounded-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Market News</h3>
                <p className="text-sm text-slate-700">Latest Updates</p>
              </div>
            </div>
            
            {/* Moving News Carousel */}
            <div className="relative overflow-hidden rounded-lg bg-white/60 p-4 shadow-inner border border-slate-200/50">
              <div className="flex animate-scroll-fast gap-6">
                {/* First set */}
                {marketNews.map((news, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-72 group p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <Badge 
                        className={`text-xs font-medium px-2 py-1 ${
                          news.impact === 'High' 
                            ? 'bg-red-100 text-red-700 hover:bg-red-100' 
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                        }`}
                      >
                        {news.impact}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Eye className="w-3 h-3" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
                      {news.title}
                    </h4>
                    <Badge className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {news.category}
                    </Badge>
                  </div>
                ))}
                
                {/* Second set for seamless loop */}
                {marketNews.map((news, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-72 group p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <Badge 
                        className={`text-xs font-medium px-2 py-1 ${
                          news.impact === 'High' 
                            ? 'bg-red-100 text-red-700 hover:bg-red-100' 
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                        }`}
                      >
                        {news.impact}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Eye className="w-3 h-3" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 text-sm leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
                      {news.title}
                    </h4>
                    <Badge className="text-xs bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {news.category}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
});

MarketWatch.displayName = "MarketWatch";

export default MarketWatch;
