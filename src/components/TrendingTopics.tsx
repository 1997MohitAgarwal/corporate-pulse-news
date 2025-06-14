
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Eye, Clock, ArrowUpRight } from "lucide-react";

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
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative flex items-center gap-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white px-10 py-6 rounded-3xl shadow-2xl shadow-orange-500/30">
              <div className="flex items-center gap-2">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <span className="w-6 h-6 text-yellow-200 animate-pulse">★</span>
              </div>
              <div className="text-center">
                <span className="font-bold text-xl tracking-wide">TRENDING INTELLIGENCE HUB</span>
                <div className="text-yellow-200 text-sm font-medium mt-1">Hot Topics & Analysis</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 text-yellow-200 animate-pulse delay-300">★</span>
                <span className="w-6 h-6 animate-pulse delay-500">✨</span>
              </div>
            </div>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Trending This Week
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Discover the most discussed topics shaping the future of corporate law and business regulation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white/10 backdrop-blur-lg border-2 border-white/20 hover:border-amber-400/60 transition-all duration-500 rounded-3xl">
              <div className="relative overflow-hidden">
                <img
                  src={trend.image}
                  alt={trend.title}
                  className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-700"
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

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-400/10 via-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
