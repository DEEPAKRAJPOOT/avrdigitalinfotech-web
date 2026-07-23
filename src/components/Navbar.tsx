import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Tech Stack", href: "/#techstack" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact-form" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/#home" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10">
            <img src="/logo.png" alt="AVR Digital Infotech Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="font-bold text-white text-lg tracking-tight leading-none">AVR</span>
            <span className="text-primary text-[9px] font-bold tracking-[0.2em] leading-none mt-1 uppercase">Digital Infotech</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <Button
          asChild
          className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6 rounded-xl h-11"
        >
          <a href="/#contact-form">Get Started</a>
        </Button>

        <button className="lg:hidden text-foreground p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-white/5 px-6 py-8 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-xl">
            <a href="/#contact-form" onClick={() => setIsOpen(false)}>
              Get Started
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
