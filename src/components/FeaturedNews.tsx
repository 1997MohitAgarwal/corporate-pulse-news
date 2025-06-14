
import { memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, ArrowRight, User, Calendar, Share2, BookmarkPlus } from "lucide-react";

const FeaturedNews = memo(() => {
  const featuredStories = [
    {
      id: 1,
      title: "Supreme Court Ruling on Corporate Liability Transforms Business Landscape",
      excerpt: "Landmark decision affects how Indian corporations handle class action lawsuits and regulatory compliance across all major industries.",
      fullContent: "This groundbreaking Supreme Court judgment establishes new precedents for corporate accountability, requiring enhanced transparency measures and stricter compliance protocols for all listed companies.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=75",
      category: "Legal",
      subCategory: "Supreme Court",
      time: "2 hours ago",
      views: "32.1K",
      author: "Adv. Priya Sharma",
      authorTitle: "Senior Legal Correspondent",
      readTime: "8 min read",
      date: "December 14, 2024",
      location: "New Delhi",
      tags: ["Corporate Law", "Compliance", "Business", "Regulation"],
      isMain: true,
      shares: "1.2K",
      comments: 145
    },
    {
      id: 2,
      title: "Global Supply Chain Disruption Impact on Indian Corporate Strategies",
      excerpt: "Comprehensive analysis of how international trade disruptions are reshaping corporate legal strategies.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=75",
      category: "Global Trade",
      time: "3 hours ago",
      views: "24.8K",
      author: "Rajesh Kumar",
      readTime: "6 min read",
      isMain: false
    },
    {
      id: 3,
      title: "New ESG Reporting Standards for Indian Listed Companies",
      excerpt: "Enhanced environmental disclosure requirements affecting business operations across major stock exchanges.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=75",
      category: "ESG Compliance",
      time: "4 hours ago",
      views: "15.2K",
      author: "Dr. Meera Patel",
      readTime: "5 min read",
      isMain: false
    }
  ];

  const mainStory = featuredStories.find(story => story.isMain);
  const sideStories = featuredStories.filter(story => !story.isMain);

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <ArrowRight className="w-5 h-5" />
            <span className="font-semibold">Editor's Choice</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-slate-900 via-amber-700 to-orange-700 bg-clip-text text-transparent">
              Featured Stories
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
            In-depth coverage of the most important developments in Indian corporate law and business
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Story - Takes 2/3 width */}
          {mainStory && (
            <div className="lg:col-span-2">
              <Card className="group overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 h-full border-0 bg-white rounded-3xl hover:scale-[1.01]">
                <div className="grid lg:grid-cols-5 h-full">
                  {/* Image Section - Takes 3/5 */}
                  <div className="lg:col-span-3 relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                    <img
                      src={mainStory.image}
                      alt={mainStory.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                        <div className="flex gap-2">
                          <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg border-0 font-semibold">
                            {mainStory.category}
                          </Badge>
                          <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            {mainStory.subCategory}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                            <Share2 className="w-4 h-4 text-white" />
                          </button>
                          <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                            <BookmarkPlus className="w-4 h-4 text-white" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-white/90 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{mainStory.date}</span>
                          <span>•</span>
                          <span>{mainStory.location}</span>
                        </div>
                        <div className="flex items-center gap-4 text-white/90 text-sm">
                          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                            <Clock className="w-4 h-4" />
                            {mainStory.time}
                          </div>
                          <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm rounded-full px-3 py-1">
                            <Eye className="w-4 h-4" />
                            {mainStory.views}
                          </div>
                          <div className="text-sm bg-black/40 backdrop-blur-sm rounded-full px-3 py-1 font-medium">
                            {mainStory.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section - Takes 2/5 */}
                  <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors">
                        {mainStory.title}
                      </h3>
                      
                      <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                        {mainStory.excerpt}
                      </p>
                      
                      <p className="text-slate-700 leading-relaxed text-sm font-medium">
                        {mainStory.fullContent}
                      </p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {mainStory.tags.map((tag, index) => (
                          <span key={index} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full hover:bg-amber-100 hover:text-amber-700 transition-colors cursor-pointer">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Author & Stats */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-900 font-semibold">{mainStory.author}</p>
                          <p className="text-slate-500 text-sm">{mainStory.authorTitle}</p>
                        </div>
                      </div>
                      
                      {/* Engagement Stats */}
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <div className="flex items-center gap-4">
                          <span>{mainStory.shares} Shares</span>
                          <span>{mainStory.comments} Comments</span>
                        </div>
                        <button className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/btn bg-amber-50 hover:bg-amber-100 rounded-full px-4 py-2">
                          Read Full Story
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Side Stories - Takes 1/3 width */}
          <div className="space-y-6">
            {sideStories.map((story) => (
              <Card key={story.id} className="group overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white rounded-2xl hover:scale-[1.02]">
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-4 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg border-0 font-semibold text-xs">
                        {story.category}
                      </Badge>
                      <div className="text-xs text-white/90 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 font-medium">
                        {story.readTime}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-white/90 text-xs">
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                        <Clock className="w-3 h-3" />
                        {story.time}
                      </div>
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
                        <Eye className="w-3 h-3" />
                        {story.views}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-amber-600 transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-xs">{story.author}</p>
                        <p className="text-slate-500 text-xs">Expert</p>
                      </div>
                    </div>
                    
                    <button className="inline-flex items-center text-amber-600 font-bold hover:text-amber-700 transition-colors group/btn text-sm bg-amber-50 hover:bg-amber-100 rounded-full px-3 py-1">
                      Read
                      <ArrowRight className="ml-1 w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

FeaturedNews.displayName = "FeaturedNews";

export default FeaturedNews;
