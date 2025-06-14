
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl relative z-50 border-b border-slate-700/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 text-2xl font-bold text-white tracking-tight">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-lg">
              <Scale className="w-6 h-6 text-slate-900" />
            </div>
            <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
              Lex<span className="text-amber-400">Corp</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-12">
            {["Home", "About Us", "Contact"].map((item, index) => (
              <a
                key={item}
                href="#"
                className="text-slate-300 hover:text-amber-400 transition-all duration-300 font-medium text-lg relative group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-lg absolute left-0 right-0 top-20 shadow-2xl animate-fade-in border-t border-slate-700/50">
            <div className="px-6 py-6 space-y-4">
              {["Home", "About Us", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium py-3 border-b border-slate-700/30 last:border-b-0 text-lg"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
