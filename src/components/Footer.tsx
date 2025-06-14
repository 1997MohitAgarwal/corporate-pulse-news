
import { Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl">
                <Scale className="w-8 h-8 text-slate-900" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold">
                <span className="text-white">Lex</span>
                <span className="text-amber-400">Corp</span>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed">
              Your trusted source for corporate news, legal insights, and market intelligence. 
              Empowering business decisions with expert analysis.
            </p>
          </div>

          {/* Contact Info */}
          <div id="about">
            <h4 className="text-xl font-bold text-amber-400 mb-6">About & Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>contact@lexcorp.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#news-categories" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                  News Categories
                </a>
              </li>
              <li>
                <a href="#market-watch" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                  Market Analysis
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                  Legal Database
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-amber-400 transition-colors duration-200">
                  Research Reports
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <div className="text-slate-400">
            © 2024 LexCorp. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
