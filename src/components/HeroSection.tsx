
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Clock, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30">
              <TrendingUp className="w-4 h-4 mr-2" />
              Market Alert
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Corporate News
              </span>
              <span className="block text-amber-400">That Matters</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              Stay ahead of market movements with real-time corporate news, 
              legal insights, and expert analysis that drives business decisions.
            </p>
            
            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Featured Article Card */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44"
                  alt="Featured News"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                  Breaking
                </Badge>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    2 hours ago
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    12.5K views
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Federal Reserve Announces New Monetary Policy Framework
                </h3>
                <p className="text-slate-300 mb-4">
                  Major policy shift expected to impact corporate borrowing rates and market liquidity...
                </p>
                <Button variant="ghost" className="text-amber-400 hover:text-amber-300 p-0">
                  Read Full Story →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
