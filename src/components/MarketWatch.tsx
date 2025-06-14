
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

const MarketWatch = () => {
  const marketData = [
    { symbol: "S&P 500", value: "4,567.23", change: "+1.2%", trend: "up" },
    { symbol: "NASDAQ", value: "14,123.45", change: "+0.8%", trend: "up" },
    { symbol: "DOW", value: "34,892.67", change: "-0.3%", trend: "down" },
    { symbol: "GOLD", value: "$1,892.45", change: "+0.5%", trend: "up" },
    { symbol: "OIL", value: "$78.92", change: "-1.1%", trend: "down" },
    { symbol: "BITCOIN", value: "$43,567", change: "+2.3%", trend: "up" }
  ];

  const marketNews = [
    {
      title: "Fed Maintains Interest Rates Amid Inflation Concerns",
      time: "1 hour ago",
      impact: "High"
    },
    {
      title: "Tech Stocks Rally on AI Investment News",
      time: "2 hours ago",
      impact: "Medium"
    },
    {
      title: "Energy Sector Faces Regulatory Challenges",
      time: "3 hours ago",
      impact: "High"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500 text-white">
            <Activity className="w-4 h-4 mr-2" />
            Live Market Data
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Market Watch</h2>
          <p className="text-xl text-slate-600">
            Real-time market updates and financial news that impacts your business
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Market Indices */}
          <div className="lg:col-span-2">
            <Card className="p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Live Indices</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {marketData.map((item, index) => (
                  <div key={index} className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900">{item.symbol}</span>
                      <div className={`flex items-center gap-1 ${item.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                        {item.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {item.change}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-slate-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Market News */}
          <div>
            <Card className="p-6 shadow-lg h-full">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Market Impact News</h3>
              <div className="space-y-4">
                {marketNews.map((news, index) => (
                  <div key={index} className="p-4 border border-slate-200 rounded-lg hover:border-amber-300 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        className={`text-xs ${
                          news.impact === 'High' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {news.impact} Impact
                      </Badge>
                      <span className="text-slate-500 text-sm">{news.time}</span>
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm leading-relaxed">
                      {news.title}
                    </h4>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketWatch;
