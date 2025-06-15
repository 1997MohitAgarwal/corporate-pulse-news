
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, Users, AlertCircle } from "lucide-react";

const LegalInsights = () => {
  const insights = [
    {
      icon: Scale,
      title: "Corporate Governance Updates",
      description: "New SEC rules require enhanced disclosure of executive compensation and board diversity metrics.",
      category: "Governance",
      urgency: "High",
      date: "Today"
    },
    {
      icon: FileText,
      title: "Data Privacy Regulations",
      description: "State-level privacy laws create compliance challenges for multi-jurisdictional companies.",
      category: "Privacy",
      urgency: "Medium",
      date: "Yesterday"
    },
    {
      icon: Users,
      title: "Employment Law Changes",
      description: "Remote work legislation affects employee classification and benefits administration.",
      category: "Employment",
      urgency: "Medium",
      date: "2 days ago"
    },
    {
      icon: AlertCircle,
      title: "Securities Compliance Alert",
      description: "New insider trading rules require updated policies and employee training programs.",
      category: "Securities",
      urgency: "High",
      date: "3 days ago"
    }
  ];

  const legalCategories = [
    { name: "Corporate Law", count: 156 },
    { name: "Securities", count: 89 },
    { name: "Employment", count: 67 },
    { name: "Tax Law", count: 45 },
    { name: "Compliance", count: 123 },
    { name: "M&A", count: 34 }
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-500 text-white">
            <Scale className="w-4 h-4 mr-2" />
            Legal Intelligence
          </Badge>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Legal Insights</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Expert analysis on regulatory changes and their impact on corporate operations
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Insights */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {insights.map((insight, index) => (
                <Card key={index} className="p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-amber-100 rounded-lg">
                      <insight.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="text-right">
                      <Badge 
                        className={`mb-1 ${
                          insight.urgency === 'High' 
                            ? 'bg-red-100 text-red-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {insight.urgency}
                      </Badge>
                      <div className="text-slate-500 text-sm">{insight.date}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {insight.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-slate-600">
                      {insight.category}
                    </Badge>
                    <button className="text-amber-600 font-medium hover:text-amber-700 transition-colors">
                      Read More →
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Legal Categories Sidebar */}
          <div>
            <Card className="p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Legal Categories</h3>
              <div className="space-y-4">
                {legalCategories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
                    <span className="font-medium text-slate-700">{category.name}</span>
                    <Badge variant="outline" className="text-slate-500">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 mb-2">Legal Alert Service</h4>
                <p className="text-amber-700 text-sm mb-3">
                  Get instant notifications on regulatory changes affecting your industry.
                </p>
                <button className="w-full bg-amber-500 text-white py-2 rounded-lg hover:bg-amber-600 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalInsights;
