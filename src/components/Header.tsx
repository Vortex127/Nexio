import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Menu, X, ChevronDown, Code, Brain, Cloud, Shield, Database, Smartphone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Blog", path: "/blog" },
];

const services = [
  {
    title: "Web Development",
    path: "/WebDevelopment",
    description: "Custom web applications with modern tech.",
    icon: Code,
  },
  {
    title: "AI & Machine Learning",
    path: "/AIMachineLearning",
    description: "Intelligent solutions to automate and optimize.",
    icon: Brain,
  },
  {
    title: "Cloud Solutions",
    path: "/CloudSolutions",
    description: "Scalable cloud infrastructure and strategies.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    path: "/Cybersecurity",
    description: "Protect your digital assets and user data.",
    icon: Shield,
  },
  {
    title: "Data Engineering",
    path: "/DataEngineering",
    description: "Robust data pipelines and analytics solutions.",
    icon: Database,
  },
  {
    title: "Mobile Development",
    path: "/MobileDevelopment",
    description: "Native and cross-platform mobile apps.",
    icon: Smartphone,
  },
];

const getInitialTheme = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    const stored = window.localStorage.getItem("theme");
    if (stored) return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  }
  return "light";
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState(getInitialTheme());
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleNav = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-3 group" onClick={(e) => { e.preventDefault(); handleNav('/'); }}>
          <div className="relative w-10 h-10 bg-gradient-primary rounded-xl shadow-glow group-hover:shadow-intense transition-all duration-500 group-hover:scale-110">
            <div className="absolute inset-1 bg-gradient-glow rounded-lg opacity-30"></div>
          </div>
          <span className="text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            Nexio
          </span>
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink
                  href={item.path}
                  onClick={(e) => { e.preventDefault(); handleNav(item.path); }}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "font-medium",
                    active === item.path ? "text-primary bg-primary/10" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium text-muted-foreground">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.path}
                      onClick={() => handleNav(service.path)}
                    >
                      <service.icon className="w-5 h-5 mr-3 text-primary" />
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
          <Button
            variant="hero"
            size="sm"
            className="hidden sm:flex hover:shadow-intense transition-all duration-500 hover:scale-110"
          >
            Get Started
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 bg-background/95 backdrop-blur-xl">
              <div className="flex flex-col h-full p-6">
                <div className="flex items-center justify-between mb-12">
                  <a href="/" className="flex items-center space-x-3" onClick={(e) => { e.preventDefault(); handleNav('/'); }}>
                    <div className="relative w-8 h-8 bg-gradient-primary rounded-lg"></div>
                    <span className="text-xl font-display font-bold">Nexio</span>
                  </a>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex flex-col space-y-6 text-xl font-medium text-center">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.path}
                      onClick={(e) => { e.preventDefault(); handleNav(item.path); }}
                      className={cn("text-muted-foreground hover:text-primary", active === item.path && "text-primary")}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="relative group">
                    <button className="flex items-center justify-center w-full text-muted-foreground hover:text-primary">
                      Services <ChevronDown className="w-5 h-5 ml-1" />
                    </button>
                    <div className="mt-4 space-y-4">
                      {services.map((service) => (
                        <a
                          key={service.title}
                          href={service.path}
                          onClick={(e) => { e.preventDefault(); handleNav(service.path); }}
                          className="flex items-center justify-center text-base text-muted-foreground hover:text-primary"
                        >
                          <service.icon className="w-5 h-5 mr-3 text-primary/80" />
                          {service.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>

                <div className="mt-auto flex justify-center">
                  <Button variant="hero" size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;
