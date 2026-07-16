import { CodeXml, Smartphone, Brain, Megaphone, ShoppingCart, Database } from "lucide-react";

const services = [
  {
    icon: CodeXml,
    title: "Web Development Services",
    desc: "Professional website development company creating responsive, SEO-optimized websites using React, MERN Stack, and modern web technologies.",
    tags: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure SSL"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Expert mobile application development services for Android and iOS using Flutter and React Native. Build your dream app with top app developers.",
    tags: ["iOS & Android Apps", "Flutter Development", "React Native Apps", "UI/UX Design"],
  },
  {
    icon: Brain,
    title: "AI Software Development",
    desc: "Cutting-edge artificial intelligence and machine learning solutions. Custom AI software development using GPT, LangChain, and advanced ML algorithms.",
    tags: ["Machine Learning", "GPT Integration", "Data Analytics", "Predictive Models"],
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    desc: "Result-driven social media marketing and SEO services. Boost your online presence with strategic digital marketing campaigns.",
    tags: ["Social Media Marketing", "SEO Services", "PPC Campaigns", "Brand Building"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    desc: "Complete e-commerce website development with Shopify and WooCommerce. Build your online store with secure payment gateways and inventory management.",
    tags: ["Shopify Development", "Payment Gateway", "Inventory System", "Custom Themes"],
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Scalable backend development services using MERN Stack, Node.js, and cloud technologies. AWS deployment and API development expertise.",
    tags: ["MERN Stack", "RESTful APIs", "Database Design", "AWS Deployment"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary tracking-tight">
            Professional IT Services We Offer
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto opacity-80">
            Top-rated web development, mobile app development & AI software solutions 
            for businesses worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.04] transition-all group duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-medium line-clamp-3">
                {service.desc}
              </p>
              <ul className="space-y-3">
                {service.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-3 text-xs md:text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,157,0.5)]" />
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
