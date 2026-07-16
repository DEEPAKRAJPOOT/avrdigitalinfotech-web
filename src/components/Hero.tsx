import { ArrowRight, Code2, Smartphone, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  { 
    icon: Code2, 
    title: "Web Development", 
    desc: "React, MERN Stack, WordPress" 
  },
  { 
    icon: Smartphone, 
    title: "Mobile App Development", 
    desc: "Flutter & React Native Apps" 
  },
  { 
    icon: Brain, 
    title: "AI Software Solutions", 
    desc: "GPT, LangChain, ML Models" 
  },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-grid">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full" />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10 transition-all hover:bg-primary/10">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] md:text-xs text-primary font-bold tracking-[0.05em] uppercase">Leading IT Service Provider</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-5xl mx-auto tracking-tight flex flex-col items-center justify-center">
          <span className="block text-white">Professional IT Services &</span>
          <span className="block text-primary">Web Development Solutions</span>
          <span className="block text-white">for Global Businesses</span>
        </h1>

        <p className="text-muted-foreground text-sm md:text-base lg:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium opacity-80">
          Top-rated web development, mobile app development, and AI software solutions provider. 
          Specializing in React, Flutter, MERN Stack, WordPress & custom software development 
          for businesses worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 h-12 text-sm font-bold gap-3 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
            Start Your Project <ArrowRight size={18} />
          </Button>
          <Button variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm text-foreground hover:bg-white/10 rounded-xl px-8 h-12 text-sm font-bold transition-all hover:scale-105 active:scale-95">
            View Our Work
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto px-4">
          {highlights.map((item) => (
            <div key={item.title} className="group flex flex-col items-center gap-4 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 transition-all group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20">
                <item.icon className="text-primary" size={28} />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-white tracking-tight">{item.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
