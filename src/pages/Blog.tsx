import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Software Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy software applications.",
      author: "Alex Rivera",
      date: "December 15, 2024",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&auto=format",
      tags: ["AI", "Development", "Future Tech"]
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing microservices that can handle enterprise-level traffic.",
      author: "Sarah Chen",
      date: "December 10, 2024",
      category: "Architecture",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format",
      tags: ["Microservices", "Architecture", "Scalability"]
    },
    {
      title: "Cybersecurity Best Practices for Modern Applications",
      excerpt: "Essential security measures every development team should implement to protect their applications and data.",
      author: "Michael Johnson",
      date: "December 5, 2024",
      category: "Security",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&h=400&fit=crop&auto=format",
      tags: ["Security", "Best Practices", "Development"]
    },
    {
      title: "The Rise of Low-Code/No-Code Platforms",
      excerpt: "How low-code and no-code solutions are democratizing software development and accelerating digital transformation.",
      author: "Emily Davis",
      date: "November 28, 2024",
      category: "Development Trends",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format",
      tags: ["Low-Code", "No-Code", "Trends"]
    },
    {
      title: "Cloud-Native Development: A Complete Guide",
      excerpt: "Everything you need to know about building applications designed for cloud environments from the ground up.",
      author: "Alex Rivera",
      date: "November 22, 2024",
      category: "Cloud Computing",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop&auto=format",
      tags: ["Cloud", "Development", "DevOps"]
    },
    {
      title: "UX Design Principles for Developer Tools",
      excerpt: "How to create developer-friendly interfaces that enhance productivity and reduce cognitive load.",
      author: "Emily Davis",
      date: "November 15, 2024",
      category: "UX Design",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&h=400&fit=crop&auto=format",
      tags: ["UX", "Design", "Developer Tools"]
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Architecture", "Security", "Development Trends", "Cloud Computing", "UX Design"];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
              Tech <span className="text-primary-glow">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Stay updated with the latest trends, best practices, and insights from the world of software development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Featured Article
            </span>
          </div>
          
          <Card className="group border-0 shadow-floating bg-gradient-card backdrop-blur-sm hover:shadow-intense transition-all duration-500 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {blogPosts[0].author}
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span key={index} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="hero" className="w-fit hover:shadow-glow hover:scale-105">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <Button 
                key={index}
                variant={index === 0 ? "hero" : "outline"}
                size="sm"
                className="hover:scale-105 transition-transform duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-card bg-gradient-card backdrop-blur-sm transition-all duration-500 hover:shadow-floating hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Stay in the Loop
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter and get the latest tech insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-glow"
              />
              <Button variant="hero" size="lg" className="hover:shadow-intense hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;