
import { memo, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Zap, Star, Eye, Landmark, Cpu, Pill, Car, ShoppingCart, Factory, BookOpen, Sparkles } from "lucide-react";

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
      { name: "Tech Mahindra", price: "₹1,089", change: "+2.1%", trend: "up" },
      { name: "LTI Mindtree", price: "₹5,432", change: "+1.7%", trend: "up" }
    ],
    "Banking": [
      { name: "HDFC Bank", price: "₹1,678", change: "+1.8%", trend: "up" },
      { name: "ICICI Bank", price: "₹987", change: "+2.2%", trend: "up" },
      { name: "SBI", price: "₹612", change: "+1.5%", trend: "up" },
      { name: "Axis Bank", price: "₹1,123", change: "+1.9%", trend: "up" },
      { name: "Kotak Bank", price: "₹1,845", change: "+2.3%", trend: "up" },
      { name: "IDFC First", price: "₹89", change: "+1.1%", trend: "up" }
    ],
    "Pharma": [
      { name: "Sun Pharma", price: "₹1,245", change: "+2.1%", trend: "up" },
      { name: "Dr. Reddy's", price: "₹4,567", change: "+1.7%", trend: "up" },
      { name: "Cipla", price: "₹1,089", change: "+2.3%", trend: "up" },
      { name: "Aurobindo", price: "₹765", change: "+1.4%", trend: "up" },
      { name: "Lupin", price: "₹891", change: "+1.9%", trend: "up" },
      { name: "Biocon", price: "₹234", change: "+1.3%", trend: "up" }
    ],
    "Auto": [
      { name: "Maruti", price: "₹10,234", change: "+1.2%", trend: "up" },
      { name: "Tata Motors", price: "₹567", change: "+2.1%", trend: "up" },
      { name: "Bajaj Auto", price: "₹4,567", change: "+0.8%", trend: "up" },
      { name: "Hero Moto", price: "₹2,890", change: "+1.6%", trend: "up" },
      { name: "M&M", price: "₹1,456", change: "+1.3%", trend: "up" },
      { name: "Eicher Motors", price: "₹3,567", change: "+0.9%", trend: "up" }
    ],
    "FMCG": [
      { name: "HUL", price: "₹2,456", change: "-0.3%", trend: "down" },
      { name: "ITC", price: "₹456", change: "-0.7%", trend: "down" },
      { name: "Nestle", price: "₹22,345", change: "-0.2%", trend: "down" },
      { name: "Britannia", price: "₹4,789", change: "-0.5%", trend: "down" },
      { name: "Dabur", price: "₹567", change: "-0.4%", trend: "down" },
      { name: "Godrej Cons", price: "₹1,234", change: "-0.6%", trend: "down" }
    ],
    "Metal": [
      { name: "Tata Steel", price: "₹123", change: "-1.8%", trend: "down" },
      { name: "JSW Steel", price: "₹789", change: "-2.1%", trend: "down" },
      { name: "Hindalco", price: "₹456", change: "-0.9%", trend: "down" },
      { name: "SAIL", price: "₹98", change: "-1.5%", trend: "down" },
      { name: "Vedanta", price: "₹234", change: "-1.2%", trend: "down" },
      { name: "NMDC", price: "₹167", change: "-1.0%", trend: "down" }
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
    <section id="market-watch" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header - matching Legal Intelligence Hub style exactly */}
        <div className="text-center mb-16">
          {/* Animated gradient background */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <Badge className="relative bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg backdrop-blur-sm">
              <BookOpen className="w-5 h-5 mr-2" />
              Market Intelligence
              <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
            </Badge>
          </div>
          
          <h2 className="text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent leading-tight">
            Market Watch
          </h2>
          
          <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Real-time market insights and analytics at your fingertips
          </p>
        </div>

        {/* Main Content Grid - Fixed Height Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Market Indices */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100/80 backdrop-blur-sm border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-[600px] flex flex-col rounded-xl">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Market Indices</h3>
                  <p className="text-base text-slate-700">Live Performance</p>
                </div>
              </div>
              
              <div className="space-y-3 flex-1">
                {marketData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-100 h-[80px]">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-md bg-gray-50 shadow-sm border border-gray-100">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 text-base">{item.symbol}</span>
                          <div className="text-base font-semibold text-gray-900">{item.value}</div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1 px-3 py-2 rounded-full text-base font-medium ${
                        item.trend === 'up' 
                          ? 'bg-emerald-100 text-emerald-700' 
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {item.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span>{item.change}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Top Sectors */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100/80 backdrop-blur-sm border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-[600px] flex flex-col rounded-xl">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-500 rounded-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Top Sectors</h3>
                  <p className="text-base text-slate-700">Market Leaders</p>
                </div>
              </div>
              
              <div className="space-y-3 flex-1">
                {topSectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between p-4 rounded-lg cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg border h-[80px] relative overflow-hidden ${
                        selectedSector === sector.name
                          ? 'bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300 shadow-xl transform scale-[1.02] ring-2 ring-blue-200'
                          : 'bg-white hover:bg-gray-50 border-gray-100 hover:border-blue-200'
                      }`}
                      onClick={() => setSelectedSector(sector.name)}
                    >
                      {/* Selected sector subtle glow effect */}
                      {selectedSector === sector.name && (
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 animate-pulse"></div>
                      )}
                      
                      <div className="flex items-center gap-3 relative z-10">
                        <div className={`p-2 rounded-md shadow-sm border transition-all duration-200 ${
                          selectedSector === sector.name
                            ? 'bg-blue-200/50 border-blue-300/50 backdrop-blur-sm'
                            : 'bg-gray-50 border-gray-100'
                        }`}>
                          <IconComponent className={`w-5 h-5 ${
                            selectedSector === sector.name ? 'text-blue-700' : 'text-gray-600'
                          }`} />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`font-medium text-base ${
                            selectedSector === sector.name ? 'text-blue-900' : 'text-gray-900'
                          }`}>
                            {sector.name}
                          </span>
                          {selectedSector === sector.name && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                          )}
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1 px-3 py-2 rounded-full text-base font-medium relative z-10 ${
                        selectedSector === sector.name
                          ? sector.trend === 'up'
                            ? 'bg-green-200/70 text-green-800 border border-green-300/50'
                            : 'bg-red-200/70 text-red-800 border border-red-300/50'
                          : sector.trend === 'up'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-red-100 text-red-700'
                      }`}>
                        {sector.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span>{sector.change}</span>
                      </div>

                      {/* Click indicator arrow */}
                      {selectedSector === sector.name && (
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                          <div className="w-0 h-0 border-l-[6px] border-l-blue-600 border-t-[4px] border-b-[4px] border-t-transparent border-b-transparent"></div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Trending Stocks */}
          <Card className="bg-gradient-to-br from-slate-50 to-slate-100/80 backdrop-blur-sm border border-slate-200/50 shadow-xl hover:shadow-2xl transition-all duration-300 h-[600px] flex flex-col rounded-xl">
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Trending Stocks</h3>
                  <p className="text-base text-slate-700">{selectedSector} Sector</p>
                </div>
              </div>
              
              <div className="space-y-3 flex-1">
                {sectorStocks[selectedSector]?.map((stock, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg border border-gray-100 h-[80px] group">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        {/* Main icon container with gradient */}
                        <div className={`w-12 h-12 rounded-xl font-bold flex items-center justify-center text-base text-white shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 ${
                          stock.trend === 'up' 
                            ? 'bg-gradient-to-br from-emerald-400 to-emerald-600' 
                            : 'bg-gradient-to-br from-red-400 to-red-600'
                        }`}>
                          {stock.name.charAt(0)}
                          
                          {/* Subtle shine effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/20 to-transparent opacity-60"></div>
                        </div>
                        
                        {/* Trend indicator dot */}
                        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full border-2 border-white shadow-sm flex items-center justify-center ${
                          stock.trend === 'up' 
                            ? 'bg-green-500' 
                            : 'bg-red-500'
                        }`}>
                          {stock.trend === 'up' ? (
                            <TrendingUp className="w-3 h-3 text-white" />
                          ) : (
                            <TrendingDown className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium text-gray-900 text-base block group-hover:text-emerald-700 transition-colors">{stock.name}</span>
                        <div className="text-sm text-gray-500 font-medium">{stock.price}</div>
                      </div>
                    </div>
                    
                    <div className={`flex items-center gap-1 px-3 py-2 rounded-full text-base font-medium transition-all duration-200 ${
                      stock.trend === 'up'
                        ? 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200'
                        : 'bg-red-100 text-red-700 group-hover:bg-red-200'
                    }`}>
                      {stock.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      <span>{stock.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Market News */}
        <Card className="bg-gradient-to-br from-slate-50 to-slate-100/80 backdrop-blur-sm border border-slate-200/50 shadow-xl rounded-xl">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-slate-500 rounded-lg">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Market News</h3>
                <p className="text-base text-slate-700">Latest Updates</p>
              </div>
            </div>
            
            {/* Moving News Carousel */}
            <div className="relative overflow-hidden rounded-lg bg-white/60 p-4 shadow-inner border border-slate-200/50">
              <div className="flex animate-scroll-fast gap-6">
                {/* First set */}
                {marketNews.map((news, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-80 group p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <Badge 
                        className={`text-sm font-medium px-3 py-1 ${
                          news.impact === 'High' 
                            ? 'bg-red-100 text-red-700 hover:bg-red-100' 
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                        }`}
                      >
                        {news.impact}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 text-base leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
                      {news.title}
                    </h4>
                    <Badge className="text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
                      {news.category}
                    </Badge>
                  </div>
                ))}
                
                {/* Second set for seamless loop */}
                {marketNews.map((news, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-80 group p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100">
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <Badge 
                        className={`text-sm font-medium px-3 py-1 ${
                          news.impact === 'High' 
                            ? 'bg-red-100 text-red-700 hover:bg-red-100' 
                            : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
                        }`}
                      >
                        {news.impact}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray-400 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-900 text-base leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-3 mb-2">
                      {news.title}
                    </h4>
                    <Badge className="text-sm bg-blue-100 text-blue-700 hover:bg-blue-100">
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
