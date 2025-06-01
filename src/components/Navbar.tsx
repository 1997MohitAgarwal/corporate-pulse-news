
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Scale } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3 text-2xl font-bold text-white tracking-tight">
              <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg">
                <Scale className="w-6 h-6 text-slate-900" />
              </div>
              <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Lex<span className="text-amber-400">Corp</span>
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "Securities", "Corporate", "Compliance", "Markets", "Insights"].map((item, index) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-300 hover:text-amber-400 transition-all duration-300 font-medium relative group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: "600ms" }}>
              Subscribe
            </Button>
            <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: "700ms" }}>
              Sign In
            </Button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg absolute left-0 right-0 top-20 shadow-2xl animate-fade-in border-t border-slate-700/50">
            <div className="px-6 py-6 space-y-4">
              {["Home", "Securities", "Corporate", "Compliance", "Markets", "Insights"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-3 border-b border-slate-700/30 last:border-b-0"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button variant="ghost" className="w-full text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300">
                  Subscribe
                </Button>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
