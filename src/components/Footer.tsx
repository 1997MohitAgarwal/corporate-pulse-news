
import { ChevronUp, Scale, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 text-3xl font-bold">
              <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl shadow-lg">
                <Scale className="w-8 h-8 text-slate-900" />
              </div>
              <span className="bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Lex<span className="text-amber-400">Corp</span>
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg max-w-md">
              Your premier source for corporate law news, analysis, and insights. 
              Empowering legal professionals with comprehensive coverage of the evolving legal landscape.
            </p>
            <div className="space-y-4">
              <h4 className="text-amber-400 font-semibold text-lg">Connect With Us</h4>
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 transform hover:scale-110 shadow-lg"
                  >
                    <span className="text-sm font-bold">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-amber-400 border-b border-amber-400/30 pb-2">Practice Areas</h4>
            <div className="space-y-4">
              {[
                "Corporate Governance", 
                "Securities Law", 
                "Mergers & Acquisitions", 
                "Compliance", 
                "Employment Law",
                "Intellectual Property"
              ].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 font-medium hover:translate-x-2 transform transition-transform"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold text-amber-400 border-b border-amber-400/30 pb-2">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-amber-400" />
                <span>info@lexcorp.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-amber-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>New York, NY 10001</span>
              </div>
            </div>
            
            <div className="pt-4">
              <h5 className="text-lg font-semibold text-white mb-3">Business Hours</h5>
              <div className="space-y-1 text-slate-300">
                <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                <div>Saturday: 10:00 AM - 4:00 PM</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-center md:text-left">
            © 2024 LexCorp. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 p-3 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
