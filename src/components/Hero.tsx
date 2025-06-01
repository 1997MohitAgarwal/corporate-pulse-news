import { Button } from "@/components/ui/button";
import { ChevronRight, Scale, Shield, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToNewsCategories = () => {
    const newsCategoriesSection = document.getElementById('news-categories');
    if (newsCategoriesSection) {
      newsCategoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
      
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500/20 to-amber-600/20 text-amber-400 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-500/30 animate-fade-in">
              <Scale className="w-4 h-4" />
              Leading Legal Intelligence
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight animate-fade-in" style={{ animationDelay: "200ms" }}>
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                Legal Excellence
              </span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: "400ms" }}>
              LexCorp delivers comprehensive coverage of corporate law, securities regulations, 
              and market insights that empower legal professionals and business leaders to stay ahead.
            </p>
            
            <div className="flex justify-start animate-fade-in" style={{ animationDelay: "600ms" }}>
              <Button 
                onClick={scrollToNewsCategories}
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-bold px-8 py-4 text-lg group shadow-2xl hover:shadow-amber-500/25 transition-all duration-500"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 animate-fade-in" style={{ animationDelay: "800ms" }}>
              {[
                { icon: Shield, label: "Trusted by", value: "10K+ Firms" },
                { icon: TrendingUp, label: "Legal Updates", value: "Daily" },
                { icon: Scale, label: "Success Rate", value: "99.9%" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-2 bg-amber-500/20 rounded-lg group-hover:bg-amber-500/30 transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                    <div className="font-bold text-white">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-scale-in" style={{ animationDelay: "400ms" }}>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/30 to-blue-500/30 rounded-3xl blur-3xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-slate-700/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                alt="LexCorp Legal Excellence"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-8 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20">
                  <p className="text-white font-semibold">Latest Update</p>
                  <p className="text-slate-300 text-sm">New securities regulations now in effect</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
