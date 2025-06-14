
import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Clock, Eye, Search, Crown, Sparkles } from "lucide-react";

const HeroSection = memo(() => {
  const handleExploreNews = useCallback(() => {
    document.getElementById('featured-news')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleMarketAnalysis = useCallback(() => {
    document.getElementById('market-watch')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
      
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20 relative">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl shadow-orange-500/25 animate-fade-in">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Crown className="w-6 h-6" />
            </div>
            <span className="font-bold text-lg">Premium Corporate News</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-slate-900 via-orange-700 to-amber-700 bg-clip-text text-transparent">
              Corporate News
            </span>
            <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              That Matters
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            Real-time premium corporate news and exclusive insights that drive intelligent business decisions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Updates from India
            </Badge>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-xl"
                onClick={handleExploreNews}
              >
                <Search className="w-5 h-5 mr-2" />
                Explore News
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 hover:text-blue-400 transition-colors"
                onClick={handleMarketAnalysis}
              >
                Market Analysis
              </Button>
            </div>
          </div>

          {/* Featured Article Card */}
          <div className="relative">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                  alt="Featured News"
                  className="w-full h-48 lg:h-64 object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg">
                  Breaking
                </Badge>
              </div>
              <div className="p-4 lg:p-6">
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
                <h3 className="text-lg lg:text-xl font-bold text-white mb-3 line-clamp-2">
                  RBI Announces New Monetary Policy Framework for Digital Currency
                </h3>
                <p className="text-slate-300 mb-4 text-sm lg:text-base line-clamp-2">
                  Major policy shift expected to impact corporate borrowing rates and digital payment systems...
                </p>
                <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0 hover:bg-transparent">
                  Read Full Story →
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
