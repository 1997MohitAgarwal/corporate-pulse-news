
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const JoinUs = () => {
  const insights = [
    { number: "50K+", label: "Legal Professionals" },
    { number: "200+", label: "Daily Articles" },
    { number: "99%", label: "Accuracy Rate" },
    { number: "24/7", label: "Breaking News" }
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-slate-900 leading-tight">
              Join the Leading
              <span className="block text-amber-600">Legal Community</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              Get exclusive access to in-depth analysis, expert commentary, and breaking news 
              that shapes the corporate legal landscape. Join thousands of professionals who 
              trust us for critical business intelligence.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {insights.map((insight, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">{insight.number}</div>
                  <div className="text-slate-600 font-semibold">{insight.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-4 text-lg group">
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
            <Card className="relative p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Premium Access</h3>
                  <p className="text-slate-600">Everything you need to stay ahead</p>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Unlimited article access",
                    "Expert analysis & commentary", 
                    "Breaking news alerts",
                    "Industry reports & insights",
                    "Legal document templates",
                    "Priority customer support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <div className="text-3xl font-bold text-slate-900">$29<span className="text-lg text-slate-600">/month</span></div>
                  <p className="text-slate-500">Cancel anytime</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
