
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

const TrendingTopics = () => {
  const trends = [
    {
      title: "ESG Compliance",
      description: "Environmental, Social, and Governance reporting requirements",
      trend: "+45%",
      category: "Compliance"
    },
    {
      title: "AI Regulation",
      description: "Artificial Intelligence governance and legal frameworks",
      trend: "+67%",
      category: "Technology"
    },
    {
      title: "Remote Work Law",
      description: "Legal implications of distributed workforce models",
      trend: "+32%",
      category: "Employment"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-bold">Trending Topics</h2>
          </div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Most discussed topics in corporate law this month
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trends.map((trend, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 p-8 hover:bg-slate-750 transition-all duration-300 hover-scale group">
              <div className="text-center">
                <Badge variant="secondary" className="mb-4 bg-amber-500/20 text-amber-400">
                  {trend.category}
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {trend.title}
                </h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {trend.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-green-400 font-bold text-xl">
                  <TrendingUp className="w-6 h-6" />
                  {trend.trend}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
