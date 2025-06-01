
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 shadow-xl relative z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-white tracking-tight">
              Corporate<span className="text-amber-400">Law</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {["Home", "Business", "Legal", "Markets", "Technology", "Opinion"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800">
              Subscribe
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
              Sign In
            </Button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 absolute left-0 right-0 top-16 shadow-xl animate-fade-in">
            <div className="px-6 py-4 space-y-3">
              {["Home", "Business", "Legal", "Markets", "Technology", "Opinion"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-slate-300 hover:text-white transition-colors duration-200 font-medium py-2"
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full text-slate-300 hover:text-white hover:bg-slate-700">
                  Subscribe
                </Button>
                <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
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
