import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState, useEffect } from "react";

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('portfolio');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with real-time inventory management and AI-powered recommendations.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management, appointment scheduling, and telemedicine integration.",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      category: "Healthcare Tech",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Financial Analytics Dashboard",
      description: "Real-time financial analytics platform with advanced charting, risk assessment, and portfolio management.",
      technologies: ["Angular", "C#", "SQL Server", "Azure"],
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT-based smart city management system for traffic optimization, energy efficiency, and public safety.",
      technologies: ["React Native", "Java", "AWS IoT", "Elasticsearch"],
      category: "IoT Solutions",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "AI-Powered CRM",
      description: "Customer relationship management system with AI-driven insights, predictive analytics, and automation.",
      technologies: ["Next.js", "Python", "TensorFlow", "GCP"],
      category: "AI & Machine Learning",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format"
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain management using blockchain technology for traceability and authenticity verification.",
      technologies: ["Solidity", "Web3.js", "Ethereum", "IPFS"],
      category: "Blockchain",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=entropy&auto=format"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Portfolio <span className="text-primary">Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest projects and see how we transform ideas into powerful digital solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-0 shadow-card bg-gradient-card backdrop-blur-sm transition-all duration-700 hover:shadow-floating hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg" className="hover:shadow-intense hover:scale-105">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;