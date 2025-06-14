
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import SkeletonLoader from "./SkeletonLoader";
import { useState } from "react";

const TopStories = () => {
  const [isLoading] = useState(false);

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

  if (isLoading) {
    return (
      <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SkeletonLoader type="card" />
            </div>
            <div className="flex flex-col gap-6">
              <SkeletonLoader type="card" />
              <SkeletonLoader type="card" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden will-change-transform">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 to-purple-50/20"></div>
      <div className="absolute top-20 right-20 w-32 h-32 bg-amber-200/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-blue-200/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <Badge className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none px-8 py-3 text-base font-semibold shadow-lg">
            Breaking News
          </Badge>
          <h2 className="text-5xl font-bold text-slate-900 mb-8 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Top Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in corporate law and business regulation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {/* Featured Story */}
          <div className="lg:col-span-2">
            <Card className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-3xl h-full flex flex-col transform hover:-translate-y-1 will-change-transform">
              <div className="relative overflow-hidden">
                <OptimizedImage
                  src={featuredStory.image}
                  alt={featuredStory.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  width={800}
                  height={320}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <Badge className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 font-semibold px-4 py-2 shadow-lg">
                    {featuredStory.category}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white/80 text-sm">
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
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {featuredStory.title}
                </h3>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed flex-grow">
                  {featuredStory.excerpt}
                </p>
                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn self-start">
                  Read Full Story
                  <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Card>
          </div>

          {/* Side Stories */}
          <div className="flex flex-col gap-6 h-full">
            {sideStories.map((story, index) => (
              <Card key={index} className="group overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 rounded-2xl transform hover:-translate-y-1 flex-1 flex flex-col will-change-transform">
                <div className="relative overflow-hidden">
                  <OptimizedImage
                    src={story.image}
                    alt={story.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    width={400}
                    height={160}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-white/90 text-slate-900 font-semibold text-xs px-2 py-1 shadow-md">
                      {story.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 text-slate-500 text-xs mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {story.views}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {story.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3 flex-grow">
                    {story.excerpt}
                  </p>
                  <button className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/btn self-start mt-auto">
                    Read More
                    <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
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
