import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import ValueStats from "@/components/ValueStats";
import ValueProcess from "@/components/ValueProcess";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <ValueStats />
      <ValueProcess />
      <Footer showContactForm />
    </div>
  );
};

export default Index;
