
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, BookOpen, Clock, ArrowRight } from "lucide-react";

const Newsletter = () => {
  const stats = [
    { icon: Users, number: "500+", label: "Legal Professionals" },
    { icon: BookOpen, number: "20+", label: "Daily Articles" },
    { icon: Mail, number: "1.2K+", label: "Newsletter Subscribers" },
    { icon: Clock, number: "24/7", label: "Breaking News Coverage" }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Optimized Background Image with reduced quality for performance */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=1200&q=60')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                Stay Ahead of the
                <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  Legal Landscape
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join hundreds of legal professionals who trust our platform for critical business intelligence, 
                in-depth analysis, and breaking news that shapes the corporate legal world.
              </p>
            </div>

            {/* Stats Grid - Optimized animations */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 group">
                  <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Why Choose Our Platform?</h3>
              <div className="space-y-3">
                {[
                  "Real-time legal updates and breaking news",
                  "Expert analysis from top legal professionals", 
                  "Comprehensive coverage across all practice areas",
                  "Mobile-friendly platform for on-the-go access"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Newsletter Signup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>
            <Card className="relative p-8 bg-white/95 backdrop-blur-sm shadow-2xl rounded-3xl border-0">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-900">Join Our Newsletter</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Get exclusive insights, legal updates, and expert analysis delivered directly to your inbox every week.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-lg"
                    />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all text-lg"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 text-lg rounded-2xl transition-all duration-200 transform hover:scale-105 group">
                    Subscribe Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-slate-500 text-sm">
                    Join 1,200+ legal professionals • No spam, unsubscribe anytime
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-6 text-slate-400">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-700">Weekly Digest</div>
                      <div className="text-xs">Every Monday</div>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-700">Breaking News</div>
                      <div className="text-xs">Real-time alerts</div>
                    </div>
                    <div className="w-px h-8 bg-slate-200"></div>
                    <div className="text-center">
                      <div className="text-sm font-semibold text-slate-700">Expert Analysis</div>
                      <div className="text-xs">Monthly reports</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
