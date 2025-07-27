import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const scrollToSection = (id) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, 100);
};

const navItems = [
  { label: "Services", id: "services", hash: "#services" },
  { label: "Portfolio", id: "portfolio", hash: "#portfolio" },
  { label: "Vision", id: "vision", hash: "#about" },
  { label: "About", path: "/about" },
  { label: "Testimonials", id: "testimonials", hash: "#testimonials" },
  { label: "Contact", id: "contact", hash: "#contact" },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");

  // Listen for hash in location and scroll
  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.replace("#", ""));
      setActive(location.hash.replace("#", ""));
    } else if (location.pathname === "/about") {
      setActive("about");
    } else if (location.pathname === "/") {
      setActive("");
    }
  }, [location]);

  // Listen for scroll to update active section
  useEffect(() => {
    if (location.pathname !== "/") return;
    const handleScroll = () => {
      const sections = ["services", "portfolio", "vision", "testimonials", "contact"];
      let found = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = id;
            break;
          }
        }
      }
      setActive(found);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNav = (e, id, path) => {
    e.preventDefault();
    if (path) {
      navigate(path);
      setActive("about");
    } else if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setActive(id);
    } else {
      scrollToSection(id);
      setActive(id);
    }
  };

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
          {navItems.map((item) => (
            item.path ? (
              <a
                key={item.label}
                href={item.path}
                className={`relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5 ${active === "about" ? "text-primary bg-primary/10" : ""}`}
                onClick={e => handleNav(e, undefined, item.path)}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-3 h-0.5 bg-gradient-primary transition-all duration-300 ${active === "about" ? "w-[calc(100%-24px)]" : "w-0"}`}></span>
              </a>
            ) : (
              <a
                key={item.label}
                href={item.hash}
                className={`relative text-muted-foreground hover:text-primary transition-all duration-300 font-medium group px-3 py-2 rounded-lg hover:bg-primary/5 ${active === item.id ? "text-primary bg-primary/10" : ""}`}
                onClick={e => handleNav(e, item.id, undefined)}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-3 h-0.5 bg-gradient-primary transition-all duration-300 ${active === item.id ? "w-[calc(100%-24px)]" : "w-0"}`}></span>
              </a>
            )
          ))}
        </nav>
        <Button
          variant="hero"
          size="sm"
          className="hover:shadow-intense transition-all duration-500 hover:scale-110"
        >
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;