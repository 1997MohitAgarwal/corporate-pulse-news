
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const TopStories = () => {
  const stories = [
    {
      title: "New Corporate Governance Regulations Impact Fortune 500",
      excerpt: "Federal regulators announce sweeping changes to corporate governance requirements...",
      image: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764",
      category: "Regulation",
      time: "2 hours ago"
    },
    {
      title: "Supreme Court Rules on Corporate Liability Case",
      excerpt: "Landmark decision affects how corporations handle environmental responsibilities...",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      category: "Legal",
      time: "4 hours ago"
    },
    {
      title: "Tech Giants Face New Antitrust Scrutiny",
      excerpt: "Major technology companies under investigation for monopolistic practices...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Technology",
      time: "6 hours ago"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Top Stories</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Stay informed with the latest developments in corporate law and business regulation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
              <div className="relative overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {story.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-sm mb-2">{story.time}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-600 mb-4">{story.excerpt}</p>
                <button className="text-amber-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                  Read More
                  <ChevronRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStories;
