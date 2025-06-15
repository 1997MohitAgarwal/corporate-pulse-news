
import { memo, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Sparkles, Landmark, Building2, Coins, Fuel, DollarSign, TrendingUpIcon, Zap, Factory, Briefcase, ShoppingCart, Cpu, Car, Pill } from "lucide-react";

const MarketWatch = memo(() => {
  const [selectedSector, setSelectedSector] = useState("Technology");

  const marketData = useMemo(() => [
    { 
      symbol: "NIFTY 50", 
      value: "21,567.23", 
      change: "+1.2%", 
      trend: "up", 
      icon: BarChart3
    },
    { 
      symbol: "SENSEX", 
      value: "71,123.45", 
      change: "+0.8%", 
      trend: "up", 
      icon: TrendingUpIcon
    },
    { 
      symbol: "BANKNIFTY", 
      value: "46,892.67", 
      change: "-0.3%", 
      trend: "down", 
      icon: Landmark
    },
    { 
      symbol: "GOLD", 
      value: "₹63,892", 
      change: "+0.5%", 
      trend: "up", 
      icon: Coins
    },
    { 
      symbol: "CRUDE OIL", 
      value: "₹6,892", 
      change: "-1.1%", 
      trend: "down", 
      icon: Fuel
    },
    { 
      symbol: "USD/INR", 
      value: "83.25", 
      change: "+0.3%", 
      trend: "up", 
      icon: DollarSign
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
      impact: "High"
    },
    {
      title: "IT Stocks Rally on AI Investment Surge in India",
      time: "2h ago",
      impact: "Medium"
    },
    {
      title: "Banking Sector Shows Strong Q4 Performance",
      time: "3h ago",
      impact: "High"
    },
    {
      title: "Auto Sector Faces Supply Chain Challenges",
      time: "4h ago",
      impact: "Medium"
    },
    {
      title: "Pharma Exports Hit Record High This Quarter",
      time: "5h ago",
      impact: "Medium"
    },
    {
      title: "Metal Prices Decline on Global Demand Concerns",
      time: "6h ago",
      impact: "High"
    }
  ], []);

  return (
    <section id="market-watch" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 lg:w-80 lg:h-80 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-64 lg:h-64 bg-gradient-to-br from-violet-400/5 to-pink-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-xl lg:rounded-2xl blur-xl opacity-40 animate-pulse"></div>
            <div className="relative flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl lg:rounded-2xl shadow-2xl shadow-blue-500/30 transform hover:scale-105 transition-all duration-300">
              <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg lg:rounded-xl backdrop-blur-sm">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              </div>
              <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wide">MARKET INTELLIGENCE HUB</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 animate-pulse" />
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Live Market Watch
            </span>
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Real-time premium market intelligence with advanced analytics that empowers your investment decisions
          </p>
        </div>

        {/* Enhanced Main Grid with Fixed Heights */}
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Live Market Indices - Enhanced */}
          <Card className="group overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 bg-gradient-to-br from-white via-blue-50/60 to-indigo-50/40 backdrop-blur-sm hover:scale-[1.02] animate-fade-in h-[520px] sm:h-[580px] lg:h-[620px]">
            <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-xl lg:rounded-2xl shadow-lg">
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Market Indices</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">Live Performance</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 flex-1">
                {marketData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className={`group/item p-3 sm:p-4 lg:p-5 rounded-xl lg:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border-2 backdrop-blur-sm relative overflow-hidden transform hover:scale-105 ${
                      item.trend === 'up' 
                        ? 'bg-gradient-to-br from-emerald-50 via-green-50/80 to-teal-50/60 border-emerald-200 hover:border-emerald-400' 
                        : 'bg-gradient-to-br from-red-50 via-pink-50/80 to-rose-50/60 border-red-200 hover:border-red-400'
                    }`}>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className={`p-1.5 sm:p-2 rounded-lg lg:rounded-xl transition-colors ${
                            item.trend === 'up' 
                              ? 'bg-emerald-100 text-emerald-600 group-hover/item:bg-emerald-200' 
                              : 'bg-red-100 text-red-600 group-hover/item:bg-red-200'
                          }`}>
                            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                          </div>
                          <span className="font-bold text-slate-900 text-xs sm:text-sm">{item.symbol}</span>
                        </div>
                        
                        <div className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-3 sm:mb-4">{item.value}</div>
                        
                        <div className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        }`}>
                          {item.trend === 'up' ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                          <span>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Top Performing Sectors - Enhanced */}
          <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 bg-gradient-to-br from-white via-purple-50/60 to-pink-50/40 backdrop-blur-sm hover:scale-[1.02] animate-fade-in delay-200 h-[520px] sm:h-[580px] lg:h-[620px]">
            <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-600 rounded-xl lg:rounded-2xl shadow-lg">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Top Sectors</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">Market Leaders</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 flex-1 overflow-y-auto">
                {topSectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-3 sm:p-4 cursor-pointer transition-all duration-500 border-2 hover:shadow-lg transform hover:scale-[1.02] ${
                        selectedSector === sector.name
                          ? 'border-purple-400 bg-gradient-to-r from-purple-100 to-pink-100 shadow-lg scale-[1.02]'
                          : sector.trend === 'up'
                            ? 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 hover:border-emerald-400'
                            : 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50 hover:border-red-400'
                      }`}
                      onClick={() => setSelectedSector(sector.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`p-1.5 sm:p-2 rounded-lg lg:rounded-xl transition-colors ${
                            selectedSector === sector.name
                              ? 'bg-purple-200 text-purple-600'
                              : sector.trend === 'up'
                                ? 'bg-emerald-100 text-emerald-600'
                                : 'bg-red-100 text-red-600'
                          }`}>
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                          </div>
                          <span className="font-semibold text-slate-900 text-sm sm:text-base lg:text-lg">{sector.name}</span>
                        </div>
                        
                        <div className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md ${
                          sector.trend === 'up'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        }`}>
                          {sector.trend === 'up' ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                          <span>{sector.change}</span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Trending Stocks - Enhanced */}
          <Card className="group shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 bg-gradient-to-br from-white via-emerald-50/60 to-teal-50/40 backdrop-blur-sm hover:scale-[1.02] animate-fade-in delay-400 h-[520px] sm:h-[580px] lg:h-[620px]">
            <div className="relative p-4 sm:p-6 lg:p-8 h-full flex flex-col">
              <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 rounded-xl lg:rounded-2xl shadow-lg">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Trending Stocks</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">{selectedSector} Sector</p>
                </div>
              </div>
              
              <div className="space-y-3 sm:space-y-4 flex-1 overflow-y-auto">
                {sectorStocks[selectedSector]?.map((stock, index) => (
                  <Card key={index} className={`p-3 sm:p-4 transition-all duration-500 border-2 hover:shadow-lg cursor-pointer transform hover:scale-[1.02] ${
                    stock.trend === 'up'
                      ? 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 hover:border-emerald-400'
                      : 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50 hover:border-red-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl font-bold flex items-center justify-center text-sm sm:text-base lg:text-lg ${
                          stock.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                        }`}>
                          {stock.name.charAt(0)}
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 text-sm sm:text-base lg:text-lg block">{stock.name}</span>
                          <div className="text-xs sm:text-sm font-bold text-slate-700">{stock.price}</div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-md ${
                        stock.trend === 'up'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                          : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      }`}>
                        {stock.trend === 'up' ? <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" /> : <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4" />}
                        <span>{stock.change}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Market Impact News - Enhanced Moving Carousel */}
        <Card className="shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 bg-gradient-to-br from-white via-slate-50/60 to-blue-50/40 backdrop-blur-sm hover:scale-[1.01] animate-fade-in delay-600">
          <div className="relative p-4 sm:p-6 lg:p-8">
            <div className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-2xl"></div>
            
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 rounded-xl lg:rounded-2xl shadow-lg">
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">Market Impact News</h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">Latest Market Movers</p>
              </div>
            </div>
            
            {/* Moving News Carousel */}
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6">
              <div className="flex animate-scroll gap-6 sm:gap-8">
                {/* First set of news */}
                {marketNews.map((news, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 w-72 sm:w-80 lg:w-96 group p-4 sm:p-6 border-2 border-slate-100 hover:border-blue-300 rounded-xl lg:rounded-2xl hover:shadow-xl transition-all duration-500 cursor-pointer bg-white/90 backdrop-blur-sm transform hover:scale-105">
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                      <Badge 
                        className={`text-xs font-semibold flex-shrink-0 px-2 sm:px-3 py-1 ${
                          news.impact === 'High' 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg' 
                            : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <span className="text-slate-500 text-xs font-medium flex-shrink-0">{news.time}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-3">
                      {news.title}
                    </h4>
                  </div>
                ))}
                
                {/* Second set of news (duplicate for seamless loop) */}
                {marketNews.map((news, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 w-72 sm:w-80 lg:w-96 group p-4 sm:p-6 border-2 border-slate-100 hover:border-blue-300 rounded-xl lg:rounded-2xl hover:shadow-xl transition-all duration-500 cursor-pointer bg-white/90 backdrop-blur-sm transform hover:scale-105">
                    <div className="flex items-start justify-between mb-3 sm:mb-4 gap-3">
                      <Badge 
                        className={`text-xs font-semibold flex-shrink-0 px-2 sm:px-3 py-1 ${
                          news.impact === 'High' 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-lg' 
                            : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <span className="text-slate-500 text-xs font-medium flex-shrink-0">{news.time}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base lg:text-lg leading-relaxed group-hover:text-blue-600 transition-colors line-clamp-3">
                      {news.title}
                    </h4>
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
