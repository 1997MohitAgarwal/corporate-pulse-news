
import { memo, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Sparkles, Landmark, Building2, Coins, Fuel, DollarSign, TrendingUpIcon, Zap, Factory, Briefcase, ShoppingCart, Cpu, Car, Pill, Eye, Star } from "lucide-react";

const MarketWatch = memo(() => {
  const [selectedSector, setSelectedSector] = useState("Technology");

  const marketData = useMemo(() => [
    { 
      symbol: "NIFTY 50", 
      value: "21,567.23", 
      change: "+1.2%", 
      trend: "up", 
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      symbol: "SENSEX", 
      value: "71,123.45", 
      change: "+0.8%", 
      trend: "up", 
      icon: TrendingUpIcon,
      color: "from-emerald-500 to-teal-500"
    },
    { 
      symbol: "BANKNIFTY", 
      value: "46,892.67", 
      change: "-0.3%", 
      trend: "down", 
      icon: Landmark,
      color: "from-red-500 to-pink-500"
    },
    { 
      symbol: "GOLD", 
      value: "₹63,892", 
      change: "+0.5%", 
      trend: "up", 
      icon: Coins,
      color: "from-yellow-500 to-orange-500"
    },
    { 
      symbol: "CRUDE OIL", 
      value: "₹6,892", 
      change: "-1.1%", 
      trend: "down", 
      icon: Fuel,
      color: "from-purple-500 to-violet-500"
    },
    { 
      symbol: "USD/INR", 
      value: "83.25", 
      change: "+0.3%", 
      trend: "up", 
      icon: DollarSign,
      color: "from-indigo-500 to-blue-500"
    }
  ], []);

  const topSectors = useMemo(() => [
    { name: "Technology", change: "+3.2%", trend: "up", icon: Cpu, color: "from-blue-500 to-cyan-500" },
    { name: "Banking", change: "+2.1%", trend: "up", icon: Landmark, color: "from-emerald-500 to-teal-500" },
    { name: "Pharma", change: "+1.8%", trend: "up", icon: Pill, color: "from-purple-500 to-violet-500" },
    { name: "Auto", change: "+1.5%", trend: "up", icon: Car, color: "from-orange-500 to-red-500" },
    { name: "FMCG", change: "-0.5%", trend: "down", icon: ShoppingCart, color: "from-pink-500 to-rose-500" },
    { name: "Metal", change: "-1.2%", trend: "down", icon: Factory, color: "from-slate-500 to-gray-500" }
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
      time: "1h",
      impact: "High",
      category: "Policy"
    },
    {
      title: "IT Stocks Rally on AI Investment Surge in India",
      time: "2h",
      impact: "Medium",
      category: "Technology"
    },
    {
      title: "Banking Sector Shows Strong Q4 Performance",
      time: "3h",
      impact: "High",
      category: "Banking"
    },
    {
      title: "Auto Sector Faces Supply Chain Challenges",
      time: "4h",
      impact: "Medium",
      category: "Auto"
    },
    {
      title: "Pharma Exports Hit Record High This Quarter",
      time: "5h",
      impact: "Medium",
      category: "Pharma"
    },
    {
      title: "Metal Prices Decline on Global Demand Concerns",
      time: "6h",
      impact: "High",
      category: "Metal"
    }
  ], []);

  return (
    <section id="market-watch" className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <Sparkles className="w-6 h-6" />
            <span className="text-xl font-bold tracking-wide">LIVE MARKET INTELLIGENCE</span>
            <BarChart3 className="w-6 h-6" />
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            Market Watch
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time market data with advanced analytics and insights
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Market Indices */}
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Market Indices</h3>
                  <p className="text-gray-300">Live Performance</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {marketData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="group p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <span className="font-semibold text-white text-sm">{item.symbol}</span>
                            <div className="text-lg font-bold text-white">{item.value}</div>
                          </div>
                        </div>
                        
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        }`}>
                          {item.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Top Sectors */}
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Top Sectors</h3>
                  <p className="text-gray-300">Market Leaders</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {topSectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <div 
                      key={index} 
                      className={`group p-4 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                        selectedSector === sector.name
                          ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border-2 border-purple-400'
                          : 'bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-white/30'
                      }`}
                      onClick={() => setSelectedSector(sector.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${sector.color}`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-semibold text-white">{sector.name}</span>
                        </div>
                        
                        <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                          sector.trend === 'up'
                            ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        }`}>
                          {sector.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          <span>{sector.change}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Trending Stocks */}
          <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-2xl">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Trending Stocks</h3>
                  <p className="text-gray-300">{selectedSector} Sector</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {sectorStocks[selectedSector]?.map((stock, index) => (
                  <div key={index} className="group p-4 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer transform hover:scale-105">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl font-bold flex items-center justify-center text-sm ${
                          stock.trend === 'up' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {stock.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-semibold text-white block">{stock.name}</span>
                          <div className="text-sm text-gray-300">{stock.price}</div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                        stock.trend === 'up'
                          ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                          : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      }`}>
                        {stock.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        <span>{stock.change}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Market News Carousel */}
        <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Market Impact News</h3>
                <p className="text-gray-300">Latest Updates</p>
              </div>
            </div>
            
            {/* Fast Moving News Carousel */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800/50 to-gray-800/50 p-6">
              <div className="flex animate-scroll-fast gap-8">
                {/* First set */}
                {marketNews.map((news, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-80 group p-6 border border-white/20 hover:border-white/40 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <Badge 
                        className={`text-xs font-semibold flex-shrink-0 px-3 py-1 border-0 ${
                          news.impact === 'High' 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                            : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <div className="flex items-center gap-2 text-gray-300 text-xs">
                        <Eye className="w-3 h-3" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-lg leading-relaxed group-hover:text-blue-300 transition-colors line-clamp-3">
                      {news.title}
                    </h4>
                    <div className="mt-3">
                      <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                ))}
                
                {/* Second set for seamless loop */}
                {marketNews.map((news, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-80 group p-6 border border-white/20 hover:border-white/40 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4 gap-3">
                      <Badge 
                        className={`text-xs font-semibold flex-shrink-0 px-3 py-1 border-0 ${
                          news.impact === 'High' 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white' 
                            : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <div className="flex items-center gap-2 text-gray-300 text-xs">
                        <Eye className="w-3 h-3" />
                        <span>{news.time}</span>
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-lg leading-relaxed group-hover:text-blue-300 transition-colors line-clamp-3">
                      {news.title}
                    </h4>
                    <div className="mt-3">
                      <Badge className="text-xs bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                        {news.category}
                      </Badge>
                    </div>
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
