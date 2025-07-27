import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">Nexio Technologies</span>
            </div>
            <p className="text-background/70 mb-4 max-w-md">
              Transforming ideas into digital reality with cutting-edge software solutions that drive business growth and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors duration-300">Web Development</a></li>
              <li><a href="#" className="hover:text-background transition-colors duration-300">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-background transition-colors duration-300">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-background transition-colors duration-300">AI & ML</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-background/70">
              <li><a href="#about" className="hover:text-background transition-colors duration-300">About Us</a></li>
              <li><a href="/careers" className="hover:text-background transition-colors duration-300">Careers</a></li>
              <li><a href="/#contact" className="hover:text-background transition-colors duration-300">Contact</a></li>
              <li><a href="/blog" className="hover:text-background transition-colors duration-300">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/70">
            © 2024 Nexio Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;