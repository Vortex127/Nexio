import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, DollarSign, Users, Code, Palette, BarChart, Shield } from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$120k - $160k",
      icon: Code,
      description: "We're looking for a senior full stack developer to join our core engineering team and work on cutting-edge projects.",
      requirements: ["5+ years experience", "React/Node.js", "Cloud platforms", "Team leadership"]
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$90k - $120k",
      icon: Palette,
      description: "Join our design team to create beautiful, user-centered experiences that drive business results.",
      requirements: ["3+ years experience", "Figma/Sketch", "Design systems", "User research"]
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      salary: "$110k - $140k",
      icon: Shield,
      description: "Help us scale our infrastructure and implement best practices for deployment, monitoring, and security.",
      requirements: ["4+ years experience", "AWS/GCP", "Docker/Kubernetes", "CI/CD pipelines"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "San Francisco",
      type: "Full-time",
      salary: "$130k - $170k",
      icon: BarChart,
      description: "Drive product strategy and work closely with engineering and design teams to deliver exceptional products.",
      requirements: ["5+ years experience", "Product strategy", "Agile methodologies", "Data analysis"]
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with equity options",
      icon: DollarSign
    },
    {
      title: "Flexible Working",
      description: "Remote-first culture with flexible hours and work-life balance",
      icon: Clock
    },
    {
      title: "Great Team",
      description: "Work with passionate, talented people who support each other",
      icon: Users
    },
    {
      title: "Growth Opportunities",
      description: "Continuous learning, training budget, and career advancement",
      icon: BarChart
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
              Join <span className="text-primary-glow">Our Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Build the future of technology with us. We're looking for passionate individuals who want to make a real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Nexio?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive, grow, and do their best work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="group border-0 shadow-card bg-gradient-card backdrop-blur-sm hover:shadow-floating hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Open <span className="text-secondary">Positions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find your next career opportunity and join our mission to transform businesses through technology.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <Card key={index} className="group border-0 shadow-card bg-gradient-card backdrop-blur-sm hover:shadow-floating transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-start space-x-4 mb-6 lg:mb-0">
                      <div className="relative inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <position.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                          {position.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{position.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {position.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {position.type}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="w-4 h-4 mr-1" />
                            {position.salary}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {position.requirements.map((req, reqIndex) => (
                            <span 
                              key={reqIndex}
                              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-shrink-0">
                      <Button variant="hero" className="hover:shadow-glow hover:scale-105">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8">
                Our <span className="text-accent">Culture</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Nexio Technologies, we've built a culture that values innovation, collaboration, and continuous growth. We believe that our team's success is directly tied to the company's success, and we invest heavily in creating an environment where everyone can thrive.
                </p>
                <p>
                  We practice what we preach when it comes to technology adoption, giving our team access to the latest tools and technologies. Our flat organizational structure encourages open communication and ensures that every voice is heard.
                </p>
                <p>
                  We're committed to work-life balance, offering flexible schedules, remote work options, and a comprehensive benefits package that includes health insurance, retirement planning, and professional development opportunities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&auto=format" 
                alt="Team collaboration"
                className="rounded-2xl shadow-floating"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              We're always looking for talented individuals. Send us your resume and let's start a conversation.
            </p>
            <Button variant="hero" size="lg" className="hover:shadow-intense hover:scale-105">
              Send Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;