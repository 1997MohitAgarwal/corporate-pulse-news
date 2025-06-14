
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle, TrendingUp } from "lucide-react";

const NewsletterCTA = () => {
  const benefits = [
    "Daily market briefings",
    "Legal compliance updates",
    "Expert analysis & insights",
    "Exclusive interview content"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-amber-500/20 text-amber-400 border-amber-500/30">
            <Mail className="w-4 h-4 mr-2" />
            Premium Content
          </Badge>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Stay Ahead of the Market
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Join 50,000+ legal and business professionals who trust LexCorp for their daily dose of corporate intelligence.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-amber-400">What You'll Get:</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-semibold">Join 50,000+ Subscribers</span>
                </div>
                <p className="text-slate-300 text-sm">
                  Trusted by executives at Fortune 500 companies
                </p>
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Started Today</h3>
              
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Company name (optional)"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold py-3">
                  Subscribe Free
                </Button>
              </form>
              
              <p className="text-slate-400 text-sm text-center mt-4">
                No spam. Unsubscribe anytime. Privacy guaranteed.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
