
import { Card } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      title: "Chief Legal Officer, TechCorp",
      content: "CorporateLaw has become our go-to source for staying current with regulatory changes. Their insights have been invaluable for our compliance strategy.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "Michael Chen",
      title: "Managing Partner, Chen & Associates",
      content: "The depth of analysis and timely reporting makes this platform essential for any legal professional working in corporate law.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      name: "Jennifer Rodriguez",
      title: "General Counsel, Global Finance Inc",
      content: "Outstanding coverage of market trends and legal developments. The quality of reporting consistently exceeds expectations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Readers Say</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by legal professionals and business leaders worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 hover-scale">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <p className="text-slate-600 italic mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>
                <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                <p className="text-amber-600 font-semibold">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
