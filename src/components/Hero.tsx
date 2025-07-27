import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: isVisible ? 'scale(1)' : 'scale(1.1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-glow animate-pulse-glow"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-20 w-4 h-4 bg-primary-glow rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-secondary rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/3 w-5 h-5 bg-primary-glow rounded-full animate-float opacity-50" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-bounce-in">
                <Sparkles className="w-4 h-4 text-accent mr-2" />
                <span className="text-white/90 text-sm font-medium">Transforming the Digital Landscape</span>
              </div>
            </div>
            
            <h1 className={`text-6xl md:text-8xl font-display font-black text-white mb-8 leading-tight transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              Transforming Ideas Into
              <span className="relative block">
                <span 
                  className="bg-gradient-to-r from-primary-glow via-accent to-primary-glow bg-[length:200%_100%] bg-clip-text text-transparent animate-text-shimmer font-black"
                >
                  Digital Reality
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-glow via-accent to-primary-glow bg-[length:200%_100%] bg-clip-text text-transparent animate-text-shimmer opacity-50 blur-sm"></div>
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              We are Nexio Technologies, a cutting-edge software development agency specializing in 
              creating innovative solutions that drive business growth and digital transformation.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button variant="hero" size="lg" className="text-lg px-10 py-6 hover:shadow-intense hover:scale-110 transition-all duration-500 font-semibold group">
              Start Your Project 
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 text-white border-white/30 hover:bg-white/10 hover:border-white/60 hover:shadow-glow transition-all duration-500 hover:scale-105">
              View Our Work
            </Button>
          </div>
          
          {/* Enhanced Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm rounded-2xl mb-6 shadow-floating group-hover:shadow-intense transition-all duration-500 group-hover:scale-110">
                <Code className="w-10 h-10 text-primary-glow" />
                <div className="absolute inset-0 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-3 group-hover:text-primary-glow transition-colors duration-300">100+</h3>
              <p className="text-gray-300 font-medium">Projects Delivered</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 backdrop-blur-sm rounded-2xl mb-6 shadow-floating group-hover:shadow-intense transition-all duration-500 group-hover:scale-110">
                <Zap className="w-10 h-10 text-accent" />
                <div className="absolute inset-0 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">50+</h3>
              <p className="text-gray-300 font-medium">Happy Clients</p>
            </div>
            <div className="text-center group">
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary/30 to-secondary/10 backdrop-blur-sm rounded-2xl mb-6 shadow-floating group-hover:shadow-intense transition-all duration-500 group-hover:scale-110">
                <Users className="w-10 h-10 text-secondary" />
                <div className="absolute inset-0 bg-gradient-glow rounded-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">24/7</h3>
              <p className="text-gray-300 font-medium">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;