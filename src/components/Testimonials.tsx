
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Sharma",
      title: "Senior Legal Counsel, InfoTech Solutions",
      content: "LexCorp has transformed how we stay updated with legal developments. The insights are incredibly valuable for our corporate compliance strategy.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      rating: 5
    },
    {
      name: "Priya Patel",
      title: "Managing Partner, Patel & Associates",
      content: "The depth of analysis and timely reporting makes this platform essential for any legal professional working in corporate law. Highly recommended!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      rating: 5
    },
    {
      name: "Vikram Gupta",
      title: "General Counsel, Global Finance Ltd",
      content: "Outstanding coverage of market trends and legal developments. The quality of reporting consistently exceeds our expectations and helps us make informed decisions.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-blue-100 text-amber-700 rounded-full text-sm font-semibold mb-4">
            <Star className="w-4 h-4 fill-current" />
            Client Testimonials
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-6 bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
            What Our Readers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by legal professionals across India for reliable insights and comprehensive coverage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative p-8 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-3xl transform hover:-translate-y-3 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>
              
              <div className="text-center relative">
                {/* Profile image with gradient border */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-blue-500 to-purple-600 rounded-full p-1">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>

                {/* Star rating */}
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial content */}
                <p className="text-slate-600 italic mb-6 text-lg leading-relaxed relative">
                  <span className="text-blue-600 text-2xl absolute -top-2 -left-2">"</span>
                  {testimonial.content}
                  <span className="text-blue-600 text-2xl absolute -bottom-4 -right-2">"</span>
                </p>

                {/* Author info */}
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-semibold text-sm">{testimonial.title}</p>
                </div>

                {/* Decorative line */}
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-blue-500 rounded-full mx-auto mt-4 group-hover:w-24 transition-all duration-300"></div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">4.9/5</div>
              <div className="text-sm text-slate-600">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">95%</div>
              <div className="text-sm text-slate-600">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">500+</div>
              <div className="text-sm text-slate-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
