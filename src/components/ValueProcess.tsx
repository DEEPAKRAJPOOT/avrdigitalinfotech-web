import React from "react";

const processSteps = [
  {
    title: "Discovery",
    description: "Understanding your business needs and goals",
    position: "right",
  },
  {
    title: "Strategy",
    description: "Creating a tailored solution roadmap",
    position: "left",
  },
  {
    title: "Development",
    description: "Building with cutting-edge technologies",
    position: "right",
  },
  {
    title: "Optimization",
    description: "Continuous improvement and scaling",
    position: "left",
  },
  {
    title: "Growth",
    description: "Achieving measurable business impact",
    position: "right",
  },
];

const ValueProcess = () => {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 text-white font-bold text-2xl md:text-3xl tracking-tight">
          Our Value Creation Process
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[1px] bg-primary/30 md:-translate-x-1/2" />

          {/* Steps */}
          <div className="flex flex-col gap-10">
            {processSteps.map((step) => (
              <div 
                key={step.title} 
                className="relative flex items-center w-full min-h-[80px]"
              >
                {/* Visual Dot on Timeline */}
                <div className="absolute left-[24px] md:left-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,157,1)] z-20 -translate-x-1/2" />

                {/* Mobile View - All on right */}
                <div className="w-full flex md:hidden pl-14 pr-2">
                   <div className="w-full py-4 px-6 rounded-[10px] bg-[#0c120e] border border-primary/20 hover:border-primary/40 transition-colors text-left">
                      <h3 className="text-[15px] font-semibold text-primary mb-1">
                        {step.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground opacity-80 font-light">
                        {step.description}
                      </p>
                    </div>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex w-full">
                  {/* Left half */}
                  <div className="w-1/2 pr-8 flex justify-end">
                    {step.position === "left" && (
                      <div className="w-full py-4 px-6 rounded-[10px] bg-[#0c120e] border border-primary/30 hover:border-primary/50 transition-colors text-right shadow-lg">
                        <h3 className="text-[15px] font-semibold text-primary mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-muted-foreground opacity-80 font-light">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right half */}
                  <div className="w-1/2 pl-8 flex justify-start">
                    {step.position === "right" && (
                      <div className="w-full py-4 px-6 rounded-[10px] bg-[#0c120e] border border-primary/30 hover:border-primary/50 transition-colors text-left shadow-lg">
                        <h3 className="text-[15px] font-semibold text-primary mb-1">
                          {step.title}
                        </h3>
                        <p className="text-[13px] text-muted-foreground opacity-80 font-light">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProcess;
