
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')] bg-cover bg-center opacity-10"></div>
      <div className="relative container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full text-sm font-semibold">
              Breaking News
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Corporate Law
              <span className="block text-amber-400">Redefined</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Stay ahead with comprehensive coverage of corporate law, business regulations, 
              and market insights that matter to legal professionals and business leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-3 text-lg group">
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
              alt="Corporate building"
              className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
