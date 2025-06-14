
import { useState } from "react";
import { Menu, X, Scale, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simple news search functionality
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery + " news")}`;
      window.open(searchUrl, '_blank');
      setSearchQuery("");
    }
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-slate-200">
      <div className="container mx-auto px-4 lg:px-6">
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
            <a href="#news-categories" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              News Categories
            </a>
            <a href="#market-watch" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Market Watch
            </a>
            <a href="#about" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              About Us
            </a>
            <a href="#contact" className="text-slate-700 hover:text-amber-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news..."
                  className="w-64 px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-amber-600"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
            
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden">
              <Search className="w-4 h-4" />
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
            <a href="#news-categories" className="block text-slate-700 hover:text-amber-600 font-medium py-2">News Categories</a>
            <a href="#market-watch" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Market Watch</a>
            <a href="#about" className="block text-slate-700 hover:text-amber-600 font-medium py-2">About Us</a>
            <a href="#contact" className="block text-slate-700 hover:text-amber-600 font-medium py-2">Contact</a>
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search news..."
                  className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-amber-600"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
