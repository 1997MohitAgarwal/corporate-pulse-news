
import { Scale, Mail, Phone, MapPin, Heart, Users, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f97316\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-lg">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold">
                <span className="text-white">Lex</span>
                <span className="text-orange-400">Corp</span>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              India's premier destination for corporate news, legal insights, and market intelligence. 
              Empowering business decisions with trusted analysis.
            </p>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-orange-400">
                <Users className="w-5 h-5" />
                <span className="text-sm font-semibold">50K+ Readers</span>
              </div>
              <div className="flex items-center gap-2 text-orange-400">
                <Award className="w-5 h-5" />
                <span className="text-sm font-semibold">Trusted Source</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-orange-400 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>contact@lexcorp.in</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-orange-400 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#news-categories" className="text-slate-300 hover:text-orange-400 transition-colors duration-200">
                  Legal Categories
                </a>
              </li>
              <li>
                <a href="#market-watch" className="text-slate-300 hover:text-orange-400 transition-colors duration-200">
                  Market Watch
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-orange-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-orange-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-center md:text-left">
              © 2024 LexCorp. All rights reserved. Made with <Heart className="w-4 h-4 inline text-orange-400" /> in India
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-orange-400 transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
