
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight } from "lucide-react";

const TopStories = () => {
  const featuredStory = {
    title: "Supreme Court's Landmark Ruling Reshapes Corporate Governance Standards",
    excerpt: "A groundbreaking decision that will fundamentally change how corporations approach compliance, transparency, and stakeholder responsibilities in the modern business landscape.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    category: "Corporate Law",
    time: "2 hours ago",
    views: "15.2K"
  };

  const sideStories = [
    {
      title: "New Securities Regulations Impact Tech Startups",
      excerpt: "Updated SEC guidelines create new pathways for emerging technology companies seeking public investment and regulatory compliance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      category: "Securities Law",
      time: "4 hours ago",
      views: "8.7K"
    },
    {
      title: "International Trade Agreements Under Review",
      excerpt: "Global commerce patterns shift as major economies reassess trade relationships and establish new frameworks for cross-border business.",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
      category: "Trade Law",
      time: "6 hours ago",
      views: "12.3K"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none px-8 py-3 text-base font-semibold shadow-lg">
            Breaking News
          </Badge>
          <h2 className="text-6xl font-bold text-slate-900 mb-8 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Top Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in corporate law and business regulation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 h-auto lg:h-[700px]">
          {/* Featured Story - Full Height */}
          <div className="lg:col-span-2 h-full animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Card className="group overflow-hidden bg-white shadow-2xl hover:shadow-3xl transition-all duration-700 border-0 rounded-3xl h-full flex flex-col transform hover:-translate-y-2">
              <div className="relative overflow-hidden flex-shrink-0">
                <img
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold px-4 py-2 shadow-lg">
                    {featuredStory.category}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white/80 text-sm mb-3">
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <Clock className="w-4 h-4" />
                      {featuredStory.time}
                    </div>
                    <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                      <Eye className="w-4 h-4" />
                      {featuredStory.views} views
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 flex-shrink-0">
                  {featuredStory.title}
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-4 flex-grow">
                  {featuredStory.excerpt}
                </p>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn self-start">
                  Read Full Story
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>

          {/* Side Stories - Equal Height Distribution */}
          <div className="space-y-8 h-full flex flex-col">
            {sideStories.map((story, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border-0 rounded-2xl flex-1 flex flex-col transform hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${400 + index * 200}ms` }}>
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-900 font-semibold text-xs px-3 py-1 shadow-md">
                      {story.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-slate-500 text-sm mb-3 flex-shrink-0">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {story.views}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 flex-shrink-0">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {story.excerpt}
                  </p>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/btn self-start flex-shrink-0">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopStories;
