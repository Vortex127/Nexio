import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
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

    const element = document.getElementById('testimonials');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      company: "TechCorp Solutions",
      content: "Nexio Technologies transformed our business with their innovative e-commerce platform. The team's expertise and dedication resulted in a 300% increase in our online sales within just 6 months.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "Michael Chen",
      position: "CTO, HealthTech Pro",
      company: "HealthTech Pro",
      content: "The healthcare management system developed by Nexio has revolutionized our patient care. Their attention to detail and understanding of healthcare compliance is exceptional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder, FinanceFlow",
      company: "FinanceFlow",
      content: "Working with Nexio on our financial analytics platform was a game-changer. Their technical expertise and ability to understand complex financial workflows is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "David Thompson",
      position: "Director of Innovation",
      company: "Smart City Solutions",
      content: "The IoT platform delivered by Nexio exceeded all our expectations. Their innovative approach to smart city challenges helped us create a truly connected urban environment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "Lisa Park",
      position: "VP of Sales",
      company: "CustomerFirst Inc",
      content: "The AI-powered CRM system from Nexio has transformed how we interact with our customers. The predictive analytics and automation features have increased our conversion rates by 250%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format"
    },
    {
      name: "Robert Kim",
      position: "Supply Chain Manager",
      company: "GlobalTrade Corp",
      content: "The blockchain supply chain solution provided complete transparency and traceability for our operations. Nexio's expertise in emerging technologies is truly impressive.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Client Success Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              What Our <span className="text-accent">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with Nexio Technologies
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-card bg-gradient-card backdrop-blur-sm transition-all duration-700 hover:shadow-floating hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="ml-4">
                    <h4 className="font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Join 500+ Happy Clients
            </h3>
            <p className="text-muted-foreground mb-8">
              Ready to transform your business? Let's start your success story today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;