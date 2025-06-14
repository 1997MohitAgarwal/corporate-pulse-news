
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, Clock, ArrowUpRight, Crown, Sparkles } from "lucide-react";

const TrendingTopics = () => {
  const trends = [
    {
      title: "ESG Compliance Revolution",
      description: "Environmental, Social, and Governance reporting requirements are transforming corporate accountability standards across industries.",
      trend: "+45%",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      views: "23.5K",
      time: "2 hours ago"
    },
    {
      title: "AI Regulation Framework",
      description: "Artificial Intelligence governance and legal frameworks are emerging as governments worldwide establish comprehensive oversight mechanisms.",
      trend: "+67%",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      views: "31.2K",
      time: "4 hours ago"
    },
    {
      title: "Remote Work Legal Landscape",
      description: "Legal implications of distributed workforce models continue to evolve as companies adapt to permanent hybrid work arrangements.",
      trend: "+32%",
      category: "Employment",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      views: "18.7K",
      time: "6 hours ago"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-5"></div>
      <div className="container mx-auto px-6 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl shadow-orange-500/25 animate-fade-in">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Crown className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">Premium Trending Topics</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-white via-orange-200 to-amber-200 bg-clip-text text-transparent">
              Trending This Week
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            Real-time premium trending topics and exclusive insights that shape the future of corporate law
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 rounded-3xl">
              <div className="relative overflow-hidden">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 font-semibold">
                    {trend.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white/80 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {trend.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {trend.time}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-green-400 font-bold">
                      <TrendingUp className="w-4 h-4" />
                      {trend.trend}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {trend.title}
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed line-clamp-3">
                  {trend.description}
                </p>
                <button className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition-colors group">
                  Explore Topic
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/20 via-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
