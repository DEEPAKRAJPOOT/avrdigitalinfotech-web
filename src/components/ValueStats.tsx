import { TrendingUp, Users, DollarSign, Clock, Target, Award } from "lucide-react";

const metrics = [
  { 
    icon: TrendingUp, 
    value: "250%", 
    title: "Average Growth", 
    desc: "Business growth after implementation" 
  },
  { 
    icon: Users, 
    value: "3x", 
    title: "User Engagement", 
    desc: "Increase in customer interaction" 
  },
  { 
    icon: DollarSign, 
    value: "45%", 
    title: "Cost Reduction", 
    desc: "Operational cost savings" 
  },
  { 
    icon: Clock, 
    value: "60%", 
    title: "Time Saved", 
    desc: "Process automation efficiency" 
  },
  { 
    icon: Target, 
    value: "98%", 
    title: "Project Success", 
    desc: "On-time delivery rate" 
  },
  { 
    icon: Award, 
    value: "100%", 
    title: "Satisfaction", 
    desc: "Client satisfaction score" 
  },
];

const ValueStats = () => {
  return (
    <section id="value-stats" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Value We Create After <span className="text-gradient">Project Completion</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto opacity-70">
            Measurable impact and lasting value for your business growth and success
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-6xl mx-auto">
          {metrics.map((m) => (
            <div key={m.title} className="flex flex-col items-center text-center group">
              {/* Icon Container with Status Dot */}
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#0c120e] border border-white/5 flex items-center justify-center text-primary group-hover:border-primary/30 transition-colors duration-300 shadow-xl">
                  <m.icon size={28} strokeWidth={1.5} />
                </div>
                {/* Neon Status Dot */}
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-primary border-2 border-background shadow-[0_0_8px_rgba(0,255,157,0.6)]" />
              </div>

              {/* Text Content */}
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3 tracking-tight">
                {m.value}
              </div>
              <div className="text-lg font-bold text-white mb-2 tracking-tight">
                {m.title}
              </div>
              <div className="text-sm text-muted-foreground max-w-[240px] leading-relaxed opacity-80">
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStats;
