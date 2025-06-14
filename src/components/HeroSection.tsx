
import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, ArrowRight, Clock, TrendingUp, BookOpen, Users, Globe } from "lucide-react";

const HeroSection = memo(() => {
  const handleExploreNews = useCallback(() => {
    document.getElementById('featured-news')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleMarketAnalysis = useCallback(() => {
    document.getElementById('market-watch')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-screen flex items-center">
      {/* Corporate Law Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
      
      {/* News ticker style background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-blue-500 to-amber-500 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-500 to-blue-500 animate-pulse"></div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            {/* Breaking News Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/90 to-red-500/90 text-white px-6 py-3 rounded-full shadow-lg backdrop-blur-sm border border-red-400/30">
              <div className="w-3 h-3 bg-red-300 rounded-full animate-pulse"></div>
              <span className="font-bold text-sm tracking-wide">LIVE UPDATES</span>
              <Scale className="w-4 h-4" />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                  Corporate Law
                </span>
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  News Hub
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Your trusted source for breaking corporate law news, regulatory updates, 
                and strategic business intelligence across India's legal landscape.
              </p>
            </div>
            
            {/* News Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-12">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <BookOpen className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-blue-200 font-medium text-sm">Daily Reports</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <p className="text-blue-200 font-medium text-sm">Market Trends</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <Scale className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-200 font-medium text-sm">Legal Updates</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-blue-200 font-medium text-sm">Expert Analysis</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg border-0 group"
                onClick={handleExploreNews}
              >
                Read Latest News
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 bg-white/10 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm font-semibold px-8 py-4 text-lg group"
                onClick={handleMarketAnalysis}
              >
                <Globe className="w-5 h-5 mr-2" />
                Market Watch
              </Button>
            </div>
          </div>

          {/* News Preview Card */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-3xl"></div>
              
              {/* News Header */}
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Corporate Legal News</h3>
                      <p className="text-blue-200 text-sm">Breaking & Trending</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-xs font-medium">LIVE</span>
                  </div>
                </div>

                {/* Latest Headlines */}
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full mt-2 animate-pulse"></div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">SEBI Updates Investment Framework</h4>
                        <p className="text-blue-200 text-xs">New regulations for mutual fund disclosures...</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>2 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">Supreme Court Rules on Corporate Merger</h4>
                        <p className="text-blue-200 text-xs">Landmark decision affects M&A procedures...</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>15 minutes ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-sm mb-1">RBI Announces Banking Guidelines</h4>
                        <p className="text-blue-200 text-xs">Enhanced compliance requirements for...</p>
                        <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                          <Clock className="w-3 h-3" />
                          <span>1 hour ago</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breaking News Ticker */}
                <div className="mt-6 p-3 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-xl border border-red-400/30">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">BREAKING</span>
                    <span className="text-red-200 font-medium animate-pulse">New ESG reporting mandates announced by MCA</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating News Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Globe className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
