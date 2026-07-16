import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const technologies = [
  { 
    name: "Flutter", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", 
    desc: "Cross-platform mobile development for iOS and Android with a single codebase." 
  },
  { 
    name: "React Native", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    desc: "Build native mobile apps using JavaScript and React." 
  },
  { 
    name: "MERN Stack", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", 
    desc: "Full-stack development with MongoDB, Express, React, and Node.js." 
  },
  { 
    name: "Shopify", 
    icon: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-shopping-bag-full-color-66166b2e55d67988b56b4bd28b63c271e2b9713358cb723070a92bde17ad7d63.svg", 
    desc: "Custom e-commerce solutions and theme development for Shopify stores." 
  },
  { 
    name: "React JS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
    desc: "Modern, high-performance web applications and front-end development." 
  },
  { 
    name: "Langchain", 
    icon: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", 
    desc: "Building context-aware, reasoning applications with large language models." 
  },
  { 
    name: "GPT-5", 
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", 
    desc: "Integrating state-of-the-art AI and generative models into your applications." 
  },
  { 
    name: "AWS", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", 
    desc: "Scalable cloud infrastructure, hosting, and serverless deployment solutions." 
  },
];

const extraTech = ["Node.js", "Express", "MongoDB", "PostgreSQL", "AWS", "Docker", "Git", "Figma"];

const TechStack = () => {
  const [activeTech, setActiveTech] = useState(technologies[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => {
        const currentIndex = technologies.findIndex((t) => t.name === prev.name);
        return technologies[(currentIndex + 1) % technologies.length];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="techstack" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Our <span className="text-primary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto opacity-80">
            We leverage cutting-edge technologies to build scalable and innovative solutions
          </p>
        </div>

        {/* Featured Display Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative group perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/5 blur-2xl rounded-[2rem] opacity-50 transition duration-1000 group-hover:opacity-100" />
            <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12 rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.05]">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 animate-in fade-in zoom-in duration-500" key={activeTech.name + "-icon"}>
                <img src={activeTech.icon} alt={activeTech.name} className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,255,157,0.3)]" />
              </div>
              <div className="text-center md:text-left space-y-4 animate-in slide-in-from-right-10 fade-in duration-500" key={activeTech.name + "-text"}>
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{activeTech.name}</h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {activeTech.desc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto mb-20">
          {technologies.map((tech) => (
            <button
              key={tech.name}
              onClick={() => setActiveTech(tech)}
              className={cn(
                "group relative flex flex-col items-center justify-center p-6 gap-4 rounded-2xl border transition-all duration-300",
                activeTech.name === tech.name 
                  ? "bg-primary/10 border-primary/40 shadow-[0_0_20px_rgba(0,255,157,0.2)]" 
                  : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/5"
              )}
            >
              <div className="w-10 h-10 transition-transform group-hover:scale-110">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain brightness-90 group-hover:brightness-100" />
              </div>
              <span className={cn(
                "text-xs font-bold tracking-wide transition-colors",
                activeTech.name === tech.name ? "text-primary" : "text-muted-foreground group-hover:text-white"
              )}>
                {tech.name}
              </span>
            </button>
          ))}
        </div>

        {/* Bottom Tags */}
        <div className="text-center space-y-6">
          <p className="text-muted-foreground text-sm font-medium tracking-wide">And many more technologies including:</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {extraTech.map((t) => (
              <span key={t} className="px-6 py-2 rounded-full bg-[#04211a] border border-primary/30 text-white text-xs font-bold transition-all hover:bg-primary/20 hover:border-primary/50 hover:scale-105 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
