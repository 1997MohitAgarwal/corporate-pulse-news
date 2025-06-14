
import { Scale, Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Legal Coverage",
      links: [
        "Corporate Law",
        "Securities & Finance", 
        "Mergers & Acquisitions",
        "Employment Law",
        "Regulatory Compliance",
        "International Trade"
      ]
    },
    {
      title: "Market Analysis",
      links: [
        "Stock Market News",
        "Economic Indicators",
        "Industry Reports",
        "Expert Commentary",
        "Market Forecasts",
        "Investment Insights"
      ]
    },
    {
      title: "Resources",
      links: [
        "Legal Database",
        "Research Reports",
        "Webinars & Events",
        "Expert Interviews",
        "White Papers",
        "Case Studies"
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl">
                <Scale className="w-8 h-8 text-slate-900" />
              </div>
              <div className="text-3xl font-bold">
                <span className="text-white">Lex</span>
                <span className="text-amber-400">Corp</span>
              </div>
            </div>
            
            <p className="text-slate-300 mb-8 leading-relaxed max-w-md">
              Your trusted source for corporate news, legal insights, and market intelligence. 
              Empowering business decisions with expert analysis and real-time updates.
            </p>
            
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

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-xl font-bold text-amber-400 mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-slate-300 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-center md:text-left">
              © 2024 LexCorp. All rights reserved. | 
              <a href="#" className="hover:text-amber-400 transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-amber-400 transition-colors ml-1">Terms of Service</a>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
