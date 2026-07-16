import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
      {
      quote:
        "AVR Digital Infotech delivered exactly what we envisioned. Their team built a scalable, feature-rich platform with excellent attention to detail. The user experience, performance, and reliability have helped us grow our business with confidence.",
      name: "Abhishek Anand",
      role: "Operations Head",
      company: "Bumperpik",
      image: "abhishek.png",
    },
    {
      quote:
        "The Scan-to-Pack system has transformed our manufacturing workflow. Barcode scanning, real-time tracking, and operator management significantly reduced manual errors while improving productivity across our production lines.",
      name: "Sameer",
      role: "Regional Manager",
      company: "Wakefit Manufacturer",
      image: "sameer-kumar.png",
    },
    {
      quote:
        "Working with AVR Digital Infotech was a fantastic experience. They developed a secure, high-performance gaming platform with seamless wallet integration, automation, and an intuitive dashboard. Their technical expertise exceeded our expectations.",
      name: "Krishna Sah",
      role: "Founder",
      company: "Orionstar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&auto=format&fit=crop",
    },
];

const stats = [
  { value: "100+", label: "Happy Clients" },
  { value: "4.9/5", label: "Average Rating" },
  { value: "98%", label: "Client Retention" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            What Our Clients Say About <span className="text-gradient">AVR</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto opacity-70">
            Real feedback from real clients who have experienced our exceptional service
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto mb-20 px-8 md:px-0">
          {/* Navigation Arrows (Visible on mobile slider) */}
          <button 
            onClick={prev}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0c120e] border border-primary/20 flex items-center justify-center text-primary transition-all hover:bg-primary/10 hover:border-primary/40 z-20 group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={next}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0c120e] border border-primary/20 flex items-center justify-center text-primary transition-all hover:bg-primary/10 hover:border-primary/40 z-20 group"
          >
            <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <div 
                key={t.name} 
                className={`flex-col p-8 rounded-2xl bg-[#080d0a] border border-white/5 relative group hover:border-primary/20 transition-all duration-300 animate-in fade-in zoom-in-95 ${index === currentIndex ? 'flex' : 'hidden md:flex'}`}
              >
                <div className="mb-6">
                  <Quote className="text-primary/40" size={40} strokeWidth={1} />
                </div>
                
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 italic opacity-90 font-light italic">
                  "{t.quote}"
                </p>

                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-primary/30 transition-colors">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-base mb-1">{t.name}</div>
                    <div className="text-xs text-muted-foreground mb-1">
                      {t.role}
                    </div>
                    <div className="text-xs text-primary font-bold uppercase tracking-wider">
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center py-8 px-6 rounded-[1.5rem] bg-[#080d0a] border border-white/5 relative overflow-hidden backdrop-blur-md">
            {stats.map((s, idx) => (
              <div 
                key={s.label} 
                className={`flex flex-col items-center justify-center text-center relative py-3 md:py-0 ${
                  idx !== stats.length - 1 ? 'md:border-r border-white/10' : ''
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1 tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-[0.2em]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
