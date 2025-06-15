
import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Sparkles } from "lucide-react";

const MarketWatch = memo(() => {
  const marketData = useMemo(() => [
    { symbol: "NIFTY 50", value: "21,567.23", change: "+1.2%", trend: "up" },
    { symbol: "SENSEX", value: "71,123.45", change: "+0.8%", trend: "up" },
    { symbol: "BANKNIFTY", value: "46,892.67", change: "-0.3%", trend: "down" },
    { symbol: "GOLD", value: "₹63,892", change: "+0.5%", trend: "up" },
    { symbol: "CRUDE OIL", value: "₹6,892", change: "-1.1%", trend: "down" },
    { symbol: "USD/INR", value: "83.25", change: "+0.3%", trend: "up" }
  ], []);

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
    },
    {
      title: "Pharma Exports Reach Record High This Quarter",
      time: "5 hours ago",
      impact: "High"
    },
    {
      title: "Renewable Energy Investments Hit New Milestone",
      time: "6 hours ago",
      impact: "High"
    },
    {
      title: "Textile Industry Prepares for Export Boom",
      time: "7 hours ago",
      impact: "Medium"
    }
  ], []);

  return (
    <section id="market-watch" className="py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50/30 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-16 lg:mb-20">
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <Card className="h-[500px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-indigo-100 hover:border-indigo-400 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 backdrop-blur-sm animate-scale-in">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-xl shadow-lg">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Live Market Indices</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {marketData.map((item, index) => (
                  <div key={index} className={`group p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 backdrop-blur-sm relative overflow-hidden ${
                    item.trend === 'up' 
                      ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 border-emerald-200 hover:border-emerald-400' 
                      : 'bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 border-red-200 hover:border-red-400'
                  }`}>
                    {/* Animated background element */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                      item.trend === 'up' 
                        ? 'bg-gradient-to-br from-emerald-400 to-teal-400' 
                        : 'bg-gradient-to-br from-red-400 to-pink-400'
                    }`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-bold text-slate-900 text-sm tracking-wide">{item.symbol}</span>
                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold shadow-md transition-all duration-300 ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600' 
                            : 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600'
                        }`}>
                          {item.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {item.change}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-2">{item.value}</div>
                      
                      {/* Progress bar indicator */}
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-700 ${
                          item.trend === 'up' 
                            ? 'bg-gradient-to-r from-emerald-400 to-teal-400 w-4/5' 
                            : 'bg-gradient-to-r from-red-400 to-pink-400 w-3/5'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="h-[500px] shadow-2xl hover:shadow-3xl transition-all duration-500 border-2 border-emerald-100 hover:border-emerald-400 bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/30 backdrop-blur-sm animate-scale-in delay-200">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-lg">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Market Impact News</h3>
              </div>
              
              <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                  {marketNews.map((news, index) => (
                    <div key={index} className="p-4 border-2 border-slate-100 hover:border-emerald-300 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm group overflow-hidden">
                      <div className="flex items-start justify-between mb-2">
                        <Badge 
                          className={`text-xs font-semibold flex-shrink-0 ${
                            news.impact === 'High' 
                              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-md' 
                              : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-md'
                          }`}
                        >
                          {news.impact} Impact
                        </Badge>
                        <span className="text-slate-500 text-xs font-medium flex-shrink-0 ml-2">{news.time}</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 text-sm leading-relaxed group-hover:text-emerald-600 transition-colors break-words">
                        {news.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
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
