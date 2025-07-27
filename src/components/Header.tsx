import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-floating">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 bg-gradient-primary rounded-xl shadow-glow group-hover:shadow-intense transition-all duration-500 group-hover:scale-110">
            <div className="absolute inset-1 bg-gradient-glow rounded-lg opacity-30"></div>
          </div>
          <span className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Nexio Technologies
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-12">
          <a href="#services" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5" onClick={(e) => {e.preventDefault(); document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}}>
            Services
            <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-primary group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
          </a>
          <a href="#portfolio" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5" onClick={(e) => {e.preventDefault(); document.getElementById('portfolio')?.scrollIntoView({behavior: 'smooth'})}}>
            Portfolio
            <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-primary group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
          </a>
          <a href="#about" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5" onClick={(e) => {e.preventDefault(); document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}}>
            About
            <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-primary group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
          </a>
          <a href="#testimonials" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5" onClick={(e) => {e.preventDefault(); document.getElementById('testimonials')?.scrollIntoView({behavior: 'smooth'})}}>
            Testimonials
            <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-primary group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
          </a>
          <a href="#contact" className="relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5" onClick={(e) => {e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}}>
            Contact
            <span className="absolute -bottom-1 left-3 w-0 h-0.5 bg-gradient-primary group-hover:w-[calc(100%-24px)] transition-all duration-300"></span>
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