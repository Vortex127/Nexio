import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We believe in building long-term partnerships with our clients, understanding their vision and growing together."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions that exceed expectations and drive real business results."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our team is passionate about technology and dedicated to creating solutions that make a meaningful impact."
    }
  ];

  const team = [
    {
      name: "Alex Rivera",
      position: "CEO & Founder",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face&auto=format"
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face&auto=format"
    },
    {
      name: "Michael Johnson",
      position: "Lead Developer",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face&auto=format"
    },
    {
      name: "Emily Davis",
      position: "Design Director",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face&auto=format"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-black mb-8 leading-tight">
              About <span className="text-primary-glow">Nexio Technologies</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              We are a team of passionate technologists dedicated to transforming businesses through innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Our <span className="text-primary">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Founded in 2015, Nexio Technologies emerged from a simple yet powerful vision: to bridge the gap between innovative technology and real-world business solutions. Our founders, coming from diverse backgrounds in software engineering, design, and business strategy, recognized the need for a development partner that truly understands both technology and business.
                </p>
                <p>
                  Over the years, we've grown from a small startup to a trusted technology partner for companies ranging from startups to Fortune 500 enterprises. Our journey has been marked by continuous learning, adaptation, and an unwavering commitment to excellence.
                </p>
                <p>
                  Today, we're proud to have delivered over 100 successful projects, built lasting partnerships with our clients, and maintained our position at the forefront of technological innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format" 
                alt="Our team at work"
                className="rounded-2xl shadow-floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our <span className="text-accent">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group border-0 shadow-card bg-gradient-card backdrop-blur-sm hover:shadow-floating hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Meet Our <span className="text-secondary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our talented team brings together diverse expertise and a shared passion for creating exceptional software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 shadow-card bg-gradient-card backdrop-blur-sm hover:shadow-floating hover:scale-105 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-1">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <Button variant="hero" size="lg" className="hover:shadow-intense hover:scale-105">
              Start Your Project
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;