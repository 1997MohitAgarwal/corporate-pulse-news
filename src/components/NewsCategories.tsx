
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const NewsCategories = () => {
  const [activeTab, setActiveTab] = useState("Business");

  const categories = ["Business", "Legal", "Markets", "Technology", "Compliance"];

  const newsData = {
    Business: [
      {
        title: "Corporate Mergers Reach Record High in Q4",
        excerpt: "Merger and acquisition activity shows unprecedented growth...",
        time: "1 hour ago",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      },
      {
        title: "CEO Compensation Trends for 2024",
        excerpt: "Executive compensation packages evolve with new market demands...",
        time: "3 hours ago",
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      }
    ],
    Legal: [
      {
        title: "Data Privacy Laws Strengthen Across States",
        excerpt: "New legislation impacts how corporations handle customer data...",
        time: "2 hours ago",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
      },
      {
        title: "Employment Law Updates for Remote Work",
        excerpt: "Courts clarify remote work regulations for corporations...",
        time: "5 hours ago",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      }
    ],
    Markets: [
      {
        title: "Stock Market Volatility Affects Corporate Planning",
        excerpt: "Financial uncertainty impacts long-term corporate strategies...",
        time: "30 minutes ago",
        image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
      }
    ],
    Technology: [
      {
        title: "AI Regulation Framework Takes Shape",
        excerpt: "Government agencies outline new AI compliance requirements...",
        time: "4 hours ago",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      }
    ],
    Compliance: [
      {
        title: "ESG Reporting Standards Updated",
        excerpt: "Environmental and social governance requirements expand...",
        time: "6 hours ago",
        image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
      }
    ]
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Latest News</h2>
          <p className="text-xl text-slate-600">Browse news by category</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeTab === category
                  ? "bg-amber-500 text-slate-900 shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {newsData[activeTab]?.map((article, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden hover-scale">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <Badge variant="secondary" className="mb-3">
                    {activeTab}
                  </Badge>
                  <p className="text-slate-500 text-sm mb-2">{article.time}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{article.excerpt}</p>
                  <button className="text-amber-600 font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                    Read Full Article
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;
