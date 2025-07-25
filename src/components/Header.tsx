import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-floating">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 bg-gradient-primary rounded-xl shadow-glow group-hover:shadow-intense transition-all duration-500 group-hover:scale-110 animate-pulse-glow">
            <div className="absolute inset-1 bg-gradient-glow rounded-lg animate-rotate-slow opacity-50"></div>
          </div>
          <span className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Nexio Technologies
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#services" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>
        
        <Button variant="hero" size="sm" className="hover:shadow-intense transition-all duration-500 hover:scale-110">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;