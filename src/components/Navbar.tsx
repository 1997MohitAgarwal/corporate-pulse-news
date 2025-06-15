
import { useState } from "react";
import { Menu, X, Scale, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery + " news")}`;
      window.open(searchUrl, '_blank');
      setSearchQuery("");
    }
  };

  const navItems = [
    { label: "Home", href: "#", isActive: true },
    { label: "Corporate News", href: "#news-categories" },
    { label: "Market Insights", href: "#market-watch" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-800 to-navy-900 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="relative">
              <div className="p-2 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Scale className="w-5 h-5 text-slate-900" />
              </div>
            </div>
            <div className="text-xl font-bold">
              <span className="text-white">Lex</span>
              <span className="text-amber-400">Corp</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  item.isActive
                    ? "text-amber-400 bg-white/10"
                    : "text-white/80 hover:text-amber-400 hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Search Form - Desktop and Medium */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal news..."
                  className="w-40 md:w-48 lg:w-56 px-3 py-2 pr-10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/60 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-amber-400 transition-colors duration-200"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* User Profile - Desktop and Medium */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2 p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white">
              <div className="w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 text-white" />
              </div>
              <span className="text-sm font-medium hidden lg:inline">Account</span>
            </Button>
            
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white">
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border-t border-white/10 py-4 space-y-1 rounded-b-2xl shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 mx-2 text-sm ${
                  item.isActive
                    ? "text-amber-400 bg-white/10"
                    : "text-white/80 hover:text-amber-400 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-3 px-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal news..."
                  className="w-full px-4 py-3 pr-10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 text-sm"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-amber-400"
                >
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Mobile User Actions */}
            <div className="flex items-center justify-between px-2 pt-3 space-x-2">
              <Button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 text-sm">
                Sign In
              </Button>
              <Button variant="outline" className="flex-1 border border-white/30 text-white hover:text-slate-900 font-semibold py-2 rounded-lg hover:bg-white text-sm">
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
