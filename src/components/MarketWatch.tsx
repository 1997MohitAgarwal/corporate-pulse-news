import { memo, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Sparkles, Landmark, Building2, Coins, Fuel, DollarSign, TrendingUpIcon, Zap, Factory, Briefcase, ShoppingCart, Cpu, Car, Pill, Wheat } from "lucide-react";

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
      { name: "TCS", price: "₹3,892", change: "+2.8%", trend: "up", logo: "https://logo.clearbit.com/tcs.com" },
      { name: "Infosys", price: "₹1,567", change: "+3.1%", trend: "up", logo: "https://logo.clearbit.com/infosys.com" },
      { name: "Wipro", price: "₹456", change: "+1.9%", trend: "up", logo: "https://logo.clearbit.com/wipro.com" },
      { name: "HCL Tech", price: "₹1,234", change: "+2.5%", trend: "up", logo: "https://logo.clearbit.com/hcltech.com" },
      { name: "Tech Mahindra", price: "₹1,089", change: "+2.1%", trend: "up", logo: "https://logo.clearbit.com/techmahindra.com" },
      { name: "LTI Mindtree", price: "₹4,567", change: "+1.7%", trend: "up", logo: "https://logo.clearbit.com/ltimindtree.com" }
    ],
    "Banking": [
      { name: "HDFC Bank", price: "₹1,678", change: "+1.8%", trend: "up", logo: "https://logo.clearbit.com/hdfcbank.com" },
      { name: "ICICI Bank", price: "₹987", change: "+2.2%", trend: "up", logo: "https://logo.clearbit.com/icicibank.com" },
      { name: "SBI", price: "₹612", change: "+1.5%", trend: "up", logo: "https://logo.clearbit.com/sbi.co.in" },
      { name: "Axis Bank", price: "₹1,123", change: "+1.9%", trend: "up", logo: "https://logo.clearbit.com/axisbank.com" },
      { name: "Kotak Bank", price: "₹1,845", change: "+2.3%", trend: "up", logo: "https://logo.clearbit.com/kotak.com" },
      { name: "IndusInd Bank", price: "₹1,256", change: "+1.4%", trend: "up", logo: "https://logo.clearbit.com/indusind.com" }
    ],
    "Pharma": [
      { name: "Sun Pharma", price: "₹1,245", change: "+2.1%", trend: "up", logo: "https://logo.clearbit.com/sunpharma.com" },
      { name: "Dr. Reddy's", price: "₹4,567", change: "+1.7%", trend: "up", logo: "https://logo.clearbit.com/drreddys.com" },
      { name: "Cipla", price: "₹1,089", change: "+2.3%", trend: "up", logo: "https://logo.clearbit.com/cipla.com" },
      { name: "Aurobindo", price: "₹765", change: "+1.4%", trend: "up", logo: "https://logo.clearbit.com/aurobindo.com" },
      { name: "Lupin", price: "₹891", change: "+1.9%", trend: "up", logo: "https://logo.clearbit.com/lupin.com" },
      { name: "Biocon", price: "₹267", change: "+2.5%", trend: "up", logo: "https://logo.clearbit.com/biocon.com" }
    ],
    "Auto": [
      { name: "Maruti", price: "₹10,234", change: "+1.2%", trend: "up", logo: "https://logo.clearbit.com/marutisuzuki.com" },
      { name: "Tata Motors", price: "₹567", change: "+2.1%", trend: "up", logo: "https://logo.clearbit.com/tatamotors.com" },
      { name: "Bajaj Auto", price: "₹4,567", change: "+0.8%", trend: "up", logo: "https://logo.clearbit.com/bajajauto.com" },
      { name: "Hero Moto", price: "₹2,890", change: "+1.6%", trend: "up", logo: "https://logo.clearbit.com/heromotocorp.com" },
      { name: "M&M", price: "₹1,456", change: "+1.3%", trend: "up", logo: "https://logo.clearbit.com/mahindra.com" },
      { name: "TVS Motor", price: "₹1,234", change: "+2.0%", trend: "up", logo: "https://logo.clearbit.com/tvsmotor.com" }
    ],
    "FMCG": [
      { name: "HUL", price: "₹2,456", change: "-0.3%", trend: "down", logo: "https://logo.clearbit.com/unilever.in" },
      { name: "ITC", price: "₹456", change: "-0.7%", trend: "down", logo: "https://logo.clearbit.com/itcportal.com" },
      { name: "Nestle", price: "₹22,345", change: "-0.2%", trend: "down", logo: "https://logo.clearbit.com/nestle.in" },
      { name: "Britannia", price: "₹4,789", change: "-0.5%", trend: "down", logo: "https://logo.clearbit.com/britannia.co.in" },
      { name: "Dabur", price: "₹567", change: "-0.4%", trend: "down", logo: "https://logo.clearbit.com/dabur.com" },
      { name: "Godrej", price: "₹1,234", change: "-0.6%", trend: "down", logo: "https://logo.clearbit.com/godrej.com" }
    ],
    "Metal": [
      { name: "Tata Steel", price: "₹123", change: "-1.8%", trend: "down", logo: "https://logo.clearbit.com/tatasteel.com" },
      { name: "JSW Steel", price: "₹789", change: "-2.1%", trend: "down", logo: "https://logo.clearbit.com/jsw.in" },
      { name: "Hindalco", price: "₹456", change: "-0.9%", trend: "down", logo: "https://logo.clearbit.com/hindalco.com" },
      { name: "SAIL", price: "₹98", change: "-1.5%", trend: "down", logo: "https://logo.clearbit.com/sail.co.in" },
      { name: "Vedanta", price: "₹234", change: "-1.2%", trend: "down", logo: "https://logo.clearbit.com/vedantalimited.com" },
      { name: "NMDC", price: "₹145", change: "-1.7%", trend: "down", logo: "https://logo.clearbit.com/nmdc.co.in" }
    ]
  }), []);

  const marketNews = useMemo(() => [
    {
      title: "RBI Maintains Repo Rate at 6.5% Amid Inflation Concerns",
      time: "1 hour ago",
      impact: "High"
    },
    {
      title: "IT Stocks Rally on AI Investment Surge in India",
      time: "2 hours ago",
      impact: "Medium"
    },
    {
      title: "Banking Sector Shows Strong Q4 Performance",
      time: "3 hours ago",
      impact: "High"
    },
    {
      title: "Auto Sector Faces Supply Chain Challenges",
      time: "4 hours ago",
      impact: "Medium"
    }
  ], []);

  return (
    <section id="market-watch" className="py-8 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-8">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
            <div className="relative flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/30">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <BarChart3 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-wide">ELITE MARKET INTELLIGENCE</span>
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-purple-700 bg-clip-text text-transparent">
              Market Watch
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time premium market data and exclusive insights that drive intelligent investment decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Live Market Indices */}
          <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-indigo-100 hover:border-indigo-400 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 backdrop-blur-sm animate-scale-in">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-xl shadow-lg">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Live Market Indices</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {marketData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className={`group p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm relative overflow-hidden ${
                      item.trend === 'up' 
                        ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200 hover:border-emerald-400' 
                        : 'bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 border-red-200 hover:border-red-400'
                    }`}>
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-1.5 rounded-lg ${
                            item.trend === 'up' 
                              ? 'bg-emerald-100 text-emerald-600' 
                              : 'bg-red-100 text-red-600'
                          }`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-bold text-slate-900 text-sm">{item.symbol}</span>
                        </div>
                        
                        <div className="text-base font-bold text-slate-900 mb-3">{item.value}</div>
                        
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' 
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        }`}>
                          {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                          <span>{item.change}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Top Performing Sectors */}
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-purple-100 hover:border-purple-400 bg-gradient-to-br from-white via-purple-50/50 to-pink-50/30 backdrop-blur-sm animate-scale-in delay-100">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-xl shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Top Sectors</h3>
              </div>
              
              <div className="space-y-3">
                {topSectors.map((sector, index) => {
                  const IconComponent = sector.icon;
                  return (
                    <Card 
                      key={index} 
                      className={`p-3 cursor-pointer transition-all duration-300 border-2 hover:shadow-lg ${
                        selectedSector === sector.name
                          ? 'border-purple-400 bg-gradient-to-r from-purple-100 to-pink-100 shadow-md'
                          : sector.trend === 'up'
                            ? 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 hover:border-emerald-400'
                            : 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50 hover:border-red-400'
                      }`}
                      onClick={() => setSelectedSector(sector.name)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`p-1.5 rounded-lg ${
                            selectedSector === sector.name
                              ? 'bg-purple-200 text-purple-600'
                              : sector.trend === 'up'
                                ? 'bg-emerald-100 text-emerald-600'
                                : 'bg-red-100 text-red-600'
                          }`}>
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-semibold text-slate-900 text-sm">{sector.name}</span>
                        </div>
                        
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                          sector.trend === 'up'
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                        }`}>
                          {sector.trend === 'up' ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                          <span>{sector.change}</span>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* Trending Stocks in Selected Sector */}
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-emerald-100 hover:border-emerald-400 bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/30 backdrop-blur-sm animate-scale-in delay-200">
            <div className="p-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-lg">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Trending Stocks</h3>
                  <p className="text-xs text-slate-600">{selectedSector} Sector</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {sectorStocks[selectedSector]?.map((stock, index) => (
                  <Card key={index} className={`p-3 transition-all duration-300 border-2 hover:shadow-lg cursor-pointer ${
                    stock.trend === 'up'
                      ? 'border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50 hover:border-emerald-400'
                      : 'border-red-200 bg-gradient-to-r from-red-50 to-pink-50 hover:border-red-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg overflow-hidden bg-white shadow-sm border ${
                          stock.trend === 'up' ? 'border-emerald-200' : 'border-red-200'
                        }`}>
                          <img 
                            src={stock.logo} 
                            alt={`${stock.name} logo`}
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              const target = e.currentTarget;
                              const fallback = target.nextElementSibling as HTMLElement;
                              target.style.display = 'none';
                              if (fallback) {
                                fallback.style.display = 'flex';
                              }
                            }}
                          />
                          <div className={`w-4 h-4 rounded text-xs font-bold flex items-center justify-center hidden ${
                            stock.trend === 'up' ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'
                          }`}>
                            {stock.name.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <span className="font-semibold text-slate-900 text-sm">{stock.name}</span>
                          <div className="text-xs font-bold text-slate-900">{stock.price}</div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                        stock.trend === 'up'
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
                          : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                      }`}>
                        {stock.trend === 'up' ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                        <span>{stock.change}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Market Impact News - Full Width Below */}
        <Card className="mt-6 shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-400 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 backdrop-blur-sm animate-scale-in delay-300">
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-xl shadow-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Market Impact News</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {marketNews.map((news, index) => (
                <div key={index} className="p-3 border-2 border-slate-100 hover:border-blue-300 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm group">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <Badge 
                      className={`text-xs font-semibold flex-shrink-0 ${
                        news.impact === 'High' 
                          ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-md' 
                          : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-md'
                      }`}
                    >
                      {news.impact} Impact
                    </Badge>
                    <span className="text-slate-500 text-xs font-medium flex-shrink-0">{news.time}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm leading-relaxed group-hover:text-blue-600 transition-colors">
                    {news.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #10b981, #059669);
            border-radius: 10px;
            border: 2px solid #f1f5f9;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #059669, #047857);
          }
        `}
      </style>
    </section>
  );
});

MarketWatch.displayName = "MarketWatch";

export default MarketWatch;
