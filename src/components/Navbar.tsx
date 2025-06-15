
import { useState } from "react";
import { Menu, X, Scale, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
    { label: "Legal Intelligence", href: "#news-categories" },
    { label: "Market Watch", href: "#market-watch" },
    { label: "Insights", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 backdrop-blur-lg shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="relative">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-xl sm:rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Scale className="w-5 h-5 sm:w-6 lg:w-7 sm:h-6 lg:h-7 text-slate-900" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
              <span className="text-white">Lex</span>
              <span className="text-amber-400">Corp</span>
              <Badge className="ml-1 sm:ml-2 text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                PRO
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative px-4 xl:px-6 py-2 xl:py-3 rounded-xl font-semibold text-sm xl:text-base transition-all duration-300 group ${
                  item.isActive
                    ? "text-amber-400 bg-white/10 shadow-md backdrop-blur-sm"
                    : "text-white/80 hover:text-amber-400 hover:bg-white/5"
                }`}
              >
                {item.label}
                {item.isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full"></div>
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 to-blue-500/0 group-hover:from-amber-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
            {/* Search Form - Desktop */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal news..."
                  className="w-48 lg:w-64 xl:w-72 px-4 lg:px-5 py-2 lg:py-3 pr-10 lg:pr-12 border border-white/20 rounded-xl lg:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent bg-white/10 backdrop-blur-sm text-white placeholder-white/60 transition-all duration-300 group-hover:border-white/30"
                />
                <button
                  type="submit"
                  className="absolute right-2 lg:right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-amber-400 transition-colors duration-200"
                >
                  <Search className="w-4 h-4 lg:w-5 lg:h-5" />
                </button>
              </div>
            </form>
            
            {/* Notification Bell */}
            <Button variant="ghost" size="sm" className="relative p-2 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white">
              <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
              <div className="absolute -top-1 -right-1 w-2 h-2 lg:w-3 lg:h-3 bg-red-500 rounded-full animate-pulse"></div>
            </Button>

            {/* User Profile - Desktop */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2 p-2 lg:p-3 rounded-xl lg:rounded-2xl hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white">
              <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                <User className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
              </div>
              <span className="text-sm lg:text-base font-medium hidden lg:inline">Account</span>
            </Button>
            
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden p-2 rounded-xl hover:bg-white/10 text-white/80 hover:text-white">
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 rounded-xl hover:bg-white/10 transition-all duration-200 text-white/80 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border-t border-white/10 py-4 sm:py-6 space-y-1 sm:space-y-2 rounded-b-2xl sm:rounded-b-3xl shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 mx-2 text-sm sm:text-base ${
                  item.isActive
                    ? "text-amber-400 bg-white/10 shadow-md backdrop-blur-sm"
                    : "text-white/80 hover:text-amber-400 hover:bg-white/5"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-2 sm:pt-4 px-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal news..."
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 pr-10 sm:pr-12 border border-white/20 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                />
                <button
                  type="submit"
                  className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-amber-400"
                >
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </form>

            {/* Mobile User Actions */}
            <div className="flex items-center justify-between px-2 pt-3 sm:pt-4 space-x-2 sm:space-x-3">
              <Button className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200 text-sm sm:text-base">
                Sign In
              </Button>
              <Button variant="outline" className="flex-1 border border-white/30 text-white hover:text-slate-900 font-semibold py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-white transition-all duration-200 text-sm sm:text-base">
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
