import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const projects = caseStudies;

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Successfully Completed <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto opacity-80">
            Showcasing our expertise through innovative solutions that drive real business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="group flex flex-col rounded-xl bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.04] shadow-xl"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className={`w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                    project.imageClass ? project.imageClass : "object-cover"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Area */}
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-tight flex-1">
                    {project.title}
                  </h3>
                    <Link
                      to={`/case-study/${project.slug}`}
                      className="flex items-center gap-1 text-[10px] font-bold text-primary hover:text-white transition-colors group/link whitespace-nowrap ml-4 mt-0.5"
                    >
                      View Case Study
                      <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
                
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 font-medium line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-primary/5 border border-primary/20 text-primary tracking-wide uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10 mt-auto">
                  {project.statistics.slice(0, 3).map((stat) => (
                    <div key={stat.label} className="text-center flex flex-col items-center">
                      <div className="text-[10px] md:text-[11px] font-bold text-primary mb-1 uppercase leading-tight min-h-[1.5rem] flex items-center justify-center">
                        {stat.value}
                      </div>
                      <div className="text-[7px] md:text-[8px] font-black text-muted-foreground tracking-[0.05em] text-center leading-tight uppercase">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
