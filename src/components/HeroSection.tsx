
import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Eye, Search, Zap, Sparkles, Crown, ArrowRight } from "lucide-react";

const HeroSection = memo(() => {
  const handleExploreNews = useCallback(() => {
    document.getElementById('featured-news')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleMarketAnalysis = useCallback(() => {
    document.getElementById('market-watch')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
              <Badge className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-none shadow-2xl px-6 py-3 text-lg">
                <TrendingUp className="w-5 h-5 mr-2" />
                <Sparkles className="w-4 h-4 mr-1" />
                Live Updates from India
                <Crown className="w-4 h-4 ml-2" />
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">
                Corporate News
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                That Matters
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Stay ahead with real-time corporate news, legal insights, and market analysis 
              across all major Indian business sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 px-8 py-4 text-lg border-2 border-white/20"
                onClick={handleExploreNews}
              >
                <Search className="w-6 h-6 mr-3" />
                <Zap className="w-5 h-5 mr-2" />
                Explore News
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-300 bg-white/10 text-white hover:bg-blue-500 hover:text-white backdrop-blur-sm font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 px-8 py-4 text-lg"
                onClick={handleMarketAnalysis}
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Market Analysis
              </Button>
            </div>
          </div>

          {/* Featured Article Card */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-xl border-2 border-blue-300/30 overflow-hidden shadow-3xl hover:shadow-4xl transition-all duration-500 transform hover:scale-105 hover:rotate-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                  alt="Featured News"
                  className="w-full h-48 lg:h-64 object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-2xl animate-pulse border-2 border-white/50">
                  <Zap className="w-4 h-4 mr-1" />
                  Breaking
                </Badge>
              </div>
              <div className="p-6 lg:p-8 bg-gradient-to-b from-blue-900/80 to-indigo-900/80 backdrop-blur-sm">
                <div className="flex items-center gap-4 text-blue-200 text-sm mb-4">
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                    <Clock className="w-4 h-4" />
                    2 hours ago
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 rounded-full px-3 py-1">
                    <Eye className="w-4 h-4" />
                    12.5K views
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 line-clamp-2">
                  RBI Announces New Monetary Policy Framework for Digital Currency
                </h3>
                <p className="text-blue-100 mb-6 text-base lg:text-lg line-clamp-2 leading-relaxed">
                  Major policy shift expected to impact corporate borrowing rates and digital payment systems...
                </p>
                <Button variant="ghost" className="text-blue-300 hover:text-white hover:bg-blue-500/20 p-0 hover:bg-transparent font-bold text-lg">
                  Read Full Story 
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
