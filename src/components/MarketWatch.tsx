
import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3, Sparkles, Crown } from "lucide-react";

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
      {/* Floating background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl animate-pulse delay-700"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl shadow-indigo-500/25 animate-fade-in">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Crown className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">Premium Market Intelligence</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
              Elite Market Watch
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            Real-time premium market data and exclusive insights that drive intelligent investment decisions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Live Market Indices */}
          <Card className="h-[500px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 backdrop-blur-sm animate-scale-in">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 rounded-xl shadow-lg">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Live Market Indices</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {marketData.map((item, index) => (
                  <div key={index} className="p-4 bg-white/80 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 backdrop-blur-sm hover:scale-105">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900 text-sm">{item.symbol}</span>
                      <div className={`flex items-center gap-1 text-sm font-bold ${
                        item.trend === 'up' ? 'text-emerald-600' : 'text-red-500'
                      }`}>
                        {item.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {item.change}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Market Impact News with Custom Scrollbar */}
          <Card className="h-[500px] overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-white via-emerald-50/50 to-teal-50/30 backdrop-blur-sm animate-scale-in delay-200">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-lg">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Market Impact News</h3>
              </div>
              
              {/* Custom Scrollable Container */}
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {marketNews.map((news, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm hover:scale-[1.02] group">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        className={`text-xs font-semibold ${
                          news.impact === 'High' 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-0 shadow-md' 
                            : 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-md'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <span className="text-slate-500 text-xs font-medium">{news.time}</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm leading-relaxed group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {news.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
});

MarketWatch.displayName = "MarketWatch";

export default MarketWatch;
