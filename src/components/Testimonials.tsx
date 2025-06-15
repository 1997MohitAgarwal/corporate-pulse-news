
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      title: "Chief Legal Officer, TechCorp India",
      content: "LexCorp has become our go-to source for staying current with regulatory changes. Their insights have been invaluable for our compliance strategy.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&q=75"
    },
    {
      name: "Priya Patel",
      title: "Managing Partner, Patel & Associates",
      content: "The depth of analysis and timely reporting makes this platform essential for any legal professional working in corporate law.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&q=75"
    },
    {
      name: "Vikram Gupta",
      title: "General Counsel, Global Finance Inc",
      content: "Outstanding coverage of market trends and legal developments. The quality of reporting consistently exceeds expectations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&q=75"
    }
  ];

  return (
    <section className="py-4 md:py-6 lg:py-8 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            What Our Readers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by legal professionals and business leaders across India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 rounded-3xl group">
              <div className="text-center">
                <div className="relative mb-6 mx-auto">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">✓</span>
                  </div>
                </div>
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-2 text-6xl text-amber-400/30 font-serif">"</div>
                  <p className="text-slate-600 italic text-lg leading-relaxed relative z-10">
                    {testimonial.content}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-6xl text-amber-400/30 font-serif rotate-180">"</div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-xl">{testimonial.name}</h4>
                  <p className="text-amber-600 font-semibold">{testimonial.title}</p>
                  <div className="flex justify-center gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amber-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
