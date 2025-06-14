
import { memo, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity, BarChart3 } from "lucide-react";

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
    }
  ], []);

  return (
    <section id="market-watch" className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-orange-50/20 to-blue-50/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Activity className="w-5 h-5" />
            <span className="font-semibold">Live Market Data</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Market Watch
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            Real-time Indian market updates and financial news that impacts your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Live Market Indices */}
          <Card className="h-[500px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white via-orange-50/30 to-slate-50/50">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Live Market Indices</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                {marketData.map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-orange-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900 text-sm">{item.symbol}</span>
                      <div className={`flex items-center gap-1 text-sm font-semibold ${
                        item.trend === 'up' ? 'text-green-600' : 'text-red-600'
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

          {/* Market Impact News - Redesigned without scrollbar */}
          <Card className="h-[500px] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 via-indigo-50/50 to-purple-50/30">
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Market Impact News</h3>
              </div>
              
              {/* Fixed height container without scrollbar */}
              <div className="flex-1 flex flex-col justify-between gap-3">
                {marketNews.map((news, index) => (
                  <div key={index} className="p-3 border border-slate-200 rounded-xl hover:border-orange-300 hover:shadow-md transition-all duration-200 cursor-pointer bg-white/80 backdrop-blur-sm flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        className={`text-xs font-semibold ${
                          news.impact === 'High' 
                            ? 'bg-red-100 text-red-700 border-red-200' 
                            : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <span className="text-slate-500 text-xs">{news.time}</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm leading-relaxed hover:text-orange-600 transition-colors line-clamp-2">
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
