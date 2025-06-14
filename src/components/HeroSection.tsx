

import { memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search } from "lucide-react";

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Content */}
          <div className="space-y-6 lg:space-y-8">
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 shadow-lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              Live Updates from India
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Corporate News
              </span>
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                That Matters
              </span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-300 leading-relaxed">
              Stay ahead with real-time corporate news, legal insights, and market analysis 
              across all major Indian business sectors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                onClick={handleExploreNews}
              >
                <Search className="w-5 h-5 mr-2" />
                Explore News
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-slate-300 bg-white/10 text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleMarketAnalysis}
              >
                Market Analysis
              </Button>
            </div>
          </div>

          {/* Corporate Law Themed Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f"
                alt="Corporate Law and Legal Documents"
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
              
              {/* Legal themed overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 2L3 7v11h14V7l-7-5zM8 15v-3h4v3H8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Legal Intelligence</p>
                      <p className="text-blue-200 text-xs">Real-time corporate updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;

