
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp } from "lucide-react";

const BreakingNews = () => {
  const breakingNews = [
    {
      time: "2 min ago",
      title: "Tesla Stock Surges 15% After Q4 Earnings Beat Expectations",
      category: "Markets"
    },
    {
      time: "15 min ago", 
      title: "SEC Approves New Cryptocurrency Trading Rules Framework",
      category: "Regulation"
    },
    {
      time: "1 hour ago",
      title: "Microsoft Announces $10B AI Investment Plan for 2024",
      category: "Tech"
    },
    {
      time: "2 hours ago",
      title: "Federal Reserve Signals Potential Rate Changes Next Quarter",
      category: "Finance"
    }
  ];

  return (
    <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-3 lg:py-4 border-b border-slate-600">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center">
          <Badge className="bg-gradient-to-r from-red-500 to-pink-600 text-white font-bold mr-4 lg:mr-6 flex-shrink-0 shadow-lg">
            <TrendingUp className="w-4 h-4 mr-1" />
            BREAKING
          </Badge>
          
          <div className="overflow-hidden flex-1">
            <div className="animate-scroll flex space-x-6 lg:space-x-8">
              {breakingNews.map((news, index) => (
                <div key={index} className="flex items-center space-x-3 lg:space-x-4 whitespace-nowrap">
                  <div className="flex items-center text-slate-300 text-xs lg:text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    {news.time}
                  </div>
                  <span className="font-medium text-sm lg:text-base text-slate-100">{news.title}</span>
                  <Badge variant="outline" className="text-xs border-slate-400 text-slate-300 hover:border-slate-300">
                    {news.category}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
