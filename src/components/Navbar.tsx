
import { useState } from "react";
import { Menu, X, Scale, Search, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-2 text-sm border-b border-slate-100">
          <div className="text-slate-600">
            Breaking: New Securities Regulation Framework Announced
          </div>
          <div className="flex items-center space-x-4 text-slate-600">
            <span>Live Market</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 font-medium">LIVE</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg">
              <Scale className="w-6 h-6 text-slate-900" />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-slate-900">Lex</span>
              <span className="text-amber-600">Corp</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
                Markets
              </a>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Stock Market</a>
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Commodities</a>
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-50">Forex</a>
                </div>
              </div>
            </div>
            <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Legal News
            </a>
            <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Analysis
            </a>
            <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Bell className="w-4 h-4" />
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white">
              Subscribe
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 py-4 space-y-4">
            <a href="#" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Home</a>
            <a href="#" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Markets</a>
            <a href="#" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Legal News</a>
            <a href="#" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Analysis</a>
            <a href="#" className="block text-slate-700 hover:text-amber-600 font-medium py-2">About Us</a>
            <a href="#" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
