
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
    <nav className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-slate-200/50">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Navbar */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="p-3 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-200">
                <Scale className="w-7 h-7 text-slate-900" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
            </div>
            <div className="text-3xl font-bold">
              <span className="text-slate-900">Lex</span>
              <span className="text-amber-600">Corp</span>
              <Badge className="ml-2 text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0">
                PRO
              </Badge>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 group ${
                  item.isActive
                    ? "text-amber-600 bg-amber-50 shadow-md"
                    : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
                {item.isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full"></div>
                )}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400/0 to-blue-500/0 group-hover:from-amber-400/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Form */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative group">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal news..."
                  className="w-72 px-5 py-3 pr-12 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-300 group-hover:border-slate-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-amber-600 transition-colors duration-200"
                >
                  <Search className="w-5 h-5" />
                </button>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400/0 to-blue-500/0 group-hover:from-amber-400/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </form>
            
            {/* Notification Bell */}
            <Button variant="ghost" size="sm" className="relative p-3 rounded-2xl hover:bg-slate-100 transition-all duration-200">
              <Bell className="w-5 h-5 text-slate-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </Button>

            {/* User Profile */}
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2 p-3 rounded-2xl hover:bg-slate-100 transition-all duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-700 font-medium">Account</span>
            </Button>
            
            {/* Mobile Search */}
            <Button variant="ghost" size="sm" className="md:hidden p-3 rounded-2xl hover:bg-slate-100">
              <Search className="w-5 h-5" />
            </Button>
            
            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-3 rounded-2xl hover:bg-slate-100 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/50 py-6 space-y-2 rounded-b-3xl shadow-xl">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block px-6 py-4 rounded-2xl font-semibold transition-all duration-200 mx-2 ${
                  item.isActive
                    ? "text-amber-600 bg-amber-50 shadow-md"
                    : "text-slate-700 hover:text-amber-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-4 px-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search legal news..."
                  className="w-full px-5 py-4 pr-12 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-amber-600"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Mobile User Actions */}
            <div className="flex items-center justify-between px-2 pt-4">
              <Button className="flex-1 mr-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold py-3 rounded-2xl hover:from-amber-600 hover:to-amber-700 transition-all duration-200">
                Sign In
              </Button>
              <Button variant="outline" className="flex-1 ml-2 border-2 border-slate-300 text-slate-700 font-semibold py-3 rounded-2xl hover:bg-slate-100 transition-all duration-200">
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
