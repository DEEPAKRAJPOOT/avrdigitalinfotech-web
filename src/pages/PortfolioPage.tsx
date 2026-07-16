import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20 pb-10">
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
