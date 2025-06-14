
import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, Search, Briefcase, Building2, Users } from "lucide-react";

const HeroSection = memo(() => {
  const handleExploreNews = useCallback(() => {
    document.getElementById('featured-news')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleMarketAnalysis = useCallback(() => {
    document.getElementById('market-watch')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden min-h-screen flex items-center">
      {/* Professional Legal Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')] bg-cover bg-center opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-blue-900/80 to-slate-800/90"></div>
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-blue-300/10 rounded-lg rotate-12"></div>
        <div className="absolute bottom-40 right-32 w-24 h-24 border border-indigo-300/10 rounded-lg -rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-blue-400/10 rounded-lg rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Main Content */}
          <div className="space-y-8">
            <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 shadow-lg px-6 py-2">
              <Scale className="w-5 h-5 mr-2" />
              Indian Corporate Law Intelligence
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-slate-200 bg-clip-text text-transparent">
                  Legal Excellence
                </span>
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                  Delivered Daily
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl">
                Navigate India's complex corporate landscape with comprehensive legal insights, 
                regulatory updates, and strategic business intelligence.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-3 gap-6 my-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <p className="text-blue-200 font-medium">Legal Updates</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <p className="text-blue-200 font-medium">Corporate News</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <p className="text-blue-200 font-medium">Market Analysis</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg border-0"
                onClick={handleExploreNews}
              >
                <Search className="w-5 h-5 mr-2" />
                Explore Legal News
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-slate-300 bg-white/10 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm font-semibold px-8 py-4 text-lg"
                onClick={handleMarketAnalysis}
              >
                <Users className="w-5 h-5 mr-2" />
                Market Intelligence
              </Button>
            </div>
          </div>

          {/* Professional Legal Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-amber-500/10 rounded-3xl"></div>
              
              {/* Header */}
              <div className="relative">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Legal Intelligence Hub</h3>
                      <p className="text-blue-200 text-sm">Real-time Updates</p>
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Content Areas */}
                <div className="space-y-6">
                  {/* Compliance Dashboard */}
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-white font-semibold">Compliance Dashboard</h4>
                      <span className="text-green-400 text-sm font-medium">98% Updated</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-blue-500/20 rounded-xl">
                        <div className="text-2xl font-bold text-blue-300">247</div>
                        <div className="text-blue-200 text-xs">Active Cases</div>
                      </div>
                      <div className="text-center p-3 bg-amber-500/20 rounded-xl">
                        <div className="text-2xl font-bold text-amber-300">15</div>
                        <div className="text-amber-200 text-xs">New Regulations</div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Updates */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">SEBI Amendment Update</p>
                        <p className="text-blue-200 text-xs">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">Corporate Tax Guidelines</p>
                        <p className="text-blue-200 text-xs">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-medium">ESG Compliance Framework</p>
                        <p className="text-blue-200 text-xs">6 hours ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
