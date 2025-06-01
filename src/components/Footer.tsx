
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              Corporate<span className="text-amber-400">Law</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Your trusted source for corporate law news, analysis, and insights. 
              Empowering legal professionals with comprehensive coverage.
            </p>
            <div className="flex space-x-4">
              {["Twitter", "LinkedIn", "Facebook"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all duration-200 hover-scale"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Categories</h4>
            <div className="space-y-3">
              {["Business Law", "Corporate Governance", "Compliance", "Mergers & Acquisitions", "Securities", "Employment Law"].map((item) => (
                <a key={item} href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Resources</h4>
            <div className="space-y-3">
              {["Legal Documents", "Industry Reports", "Webinars", "Podcasts", "Newsletter", "API Access"].map((item) => (
                <a key={item} href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Company</h4>
            <div className="space-y-3">
              {["About Us", "Careers", "Contact", "Privacy Policy", "Terms of Service", "Support"].map((item) => (
                <a key={item} href="#" className="block text-slate-300 hover:text-white transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-center md:text-left">
            © 2024 CorporateLaw. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-amber-500 hover:bg-amber-600 text-slate-900 p-3 rounded-full hover-scale transition-all duration-200"
          >
            <ChevronUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
