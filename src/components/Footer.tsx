import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContactForm from "@/components/ContactForm";

type FooterProps = {
  showContactForm?: boolean;
};

const Footer = ({ showContactForm = false }: FooterProps) => {
  return (
    <footer id="contact" className="scroll-mt-24 pt-16 pb-12 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        {showContactForm && (
          <div className="mb-16">
            <ContactForm />
          </div>
        )}

        {/* Newsletter — below contact on homepage; first block on other pages */}
        <div
          className={`text-center mb-16 max-w-xl mx-auto ${
            showContactForm ? "pt-12 border-t border-white/5" : ""
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Updated</h2>
          <p className="text-muted-foreground text-xs md:text-sm mb-6 opacity-80">
            Subscribe to our newsletter for the latest tech insights and updates
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-[#0c120e] border-white/5 focus:border-primary/40 h-10 rounded-xl text-white transition-all text-sm"
            />
            <Button className="bg-primary text-background hover:bg-primary/90 h-10 px-6 rounded-xl font-bold transition-all text-sm">
              Subscribe
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-t border-white/5 pt-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10">
                <img src="/logo.png" alt="AVR Digital Infotech Logo" className="w-full h-full object-contain" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-white text-xl tracking-tight block">AVR</span>
                <span className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">Digital Infotech</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed opacity-70">
              Transforming businesses through innovative technology solutions and exceptional service.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:border-primary transition-all hover:text-primary group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[15px] text-muted-foreground">
              {["About Us", "Services", "Projects", "Testimonials", "Contact", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services Column */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-[15px] text-muted-foreground">
              {[
                "Web Development", 
                "Mobile App Development", 
                "AI Solutions", 
                "Social Media Marketing", 
                "E-Commerce Solutions", 
                "Backend Development"
              ].map((service) => (
                <li key={service} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <a href="#" className="hover:text-primary transition-colors">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <div className="space-y-5 text-[15px] text-muted-foreground">
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-primary mt-1 shrink-0" />
                <span className="leading-tight">info@avrdigitalinfotech.com</span>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-primary mt-1 shrink-0" />
                <span className="leading-tight">+91 9205209548</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-primary mt-1 shrink-0" />
                <span className="leading-tight">
                  Sector 62, <br />
                  Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
          <p>© 2026 AVR Digital Infotech. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
