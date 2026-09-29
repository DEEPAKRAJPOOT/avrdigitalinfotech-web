import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Clock, Users, CheckCircle2, TrendingUp, DollarSign, Timer, Award, Shield, Cpu, BarChart2, ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { caseStudies } from "@/data/caseStudies";
import NotFound from "./NotFound";

const CaseStudy = () => {

  const { slug } = useParams<{ slug: string }>();
  const project = caseStudies.find((item) => item.slug === slug);
  const [activeTab, setActiveTab] = useState("Challenge");
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  // Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Handle next image in gallery
  const handleNextImage = () => {
    if (project?.galleryImages) {
      setCurrentGalleryIndex((prev) => (prev + 1) % project.galleryImages.length);
    }
  };

  // Handle previous image in gallery
  const handlePrevImage = () => {
    if (project?.galleryImages) {
      setCurrentGalleryIndex((prev) => (prev === 0 ? project.galleryImages.length - 1 : prev - 1));
    }
  };

  const isCloudinaryEmbed = (src: string) => src.includes("player.cloudinary.com/embed");
  const isVideoFile = (src: string) => src.endsWith('.mp4');
  const renderGalleryMedia = (src: string, alt: string, className: string, isThumbnail = false) => {
    if (isCloudinaryEmbed(src)) {
      if (isThumbnail) {
        return (
          <div className={`${className} bg-black/70 text-white flex flex-col items-center justify-center gap-2 p-2`}>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Play className="w-5 h-5" />
            </div>
            <span className="text-[10px] text-center leading-tight">{alt}</span>
          </div>
        );
      }

      return (
        <iframe
          src={src}
          title={alt}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          className={className}
          loading={isThumbnail ? 'lazy' : 'eager'}
        />
      );
    }

    if (isVideoFile(src)) {
      return (
        <video
          src={src}
          controls={!isThumbnail}
          autoPlay={!isThumbnail}
          muted={isThumbnail}
          loop={isThumbnail}
          className={className}
        />
      );
    }

    return <img src={src} alt={alt} className={className} />;
  };

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="container mx-auto px-4 pt-32 pb-24 relative z-10">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-white hover:text-primary transition-colors mb-16 group"
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
          Back to Portfolio
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 text-white">
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>

            {/* Hero preview image (can be changed later) */}
            {project.heroImage ? (
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-56 md:h-72 lg:h-80 object-cover rounded-[1.5rem] border border-white/5 mb-6"
              />
            ) : null}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {project.title}
            </h1>
            
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl opacity-80 mb-8">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-muted-foreground mb-10 border-t border-b border-white/5 py-4">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Launched: <strong className="text-white">{project.launchDate}</strong></span>
              </div>
              <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                <Clock className="w-4 h-4 text-primary" />
                <span>Duration: <strong className="text-white">{project.duration}</strong></span>
              </div>
              <div className="flex items-center gap-2 border-l border-white/10 pl-6">
                <Users className="w-4 h-4 text-primary" />
                <span>Team: <strong className="text-white">{project.teamSize}</strong></span>
              </div>
            </div>

            {project.liveProjectUrl ? (
              <a href={project.liveProjectUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-background font-bold px-8 py-6 rounded-xl text-[15px] transition-all group shadow-[0_0_20px_rgba(0,255,157,0.2)] hover:shadow-[0_0_30px_rgba(0,255,157,0.4)]">
                  Visit Live Project
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </a>
            ) : null}

            {/* Small thumbnails (2) for quick visual context — content editable */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="flex gap-4 mt-6">
                {project.galleryImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setCurrentGalleryIndex(i);
                      setIsGalleryOpen(true);
                    }}
                    className="w-36 h-24 rounded-lg border border-white/5 overflow-hidden cursor-pointer hover:border-primary/50 transition-all hover:scale-105"
                    type="button"
                  >
                    {renderGalleryMedia(
                      img.src,
                      img.alt,
                      'w-full h-full object-cover',
                      true
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 xl:col-span-4">
            <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 shadow-2xl relative overflow-hidden group hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-8 group-hover:text-primary transition-colors">Project Impact</h3>
              
              <div className="space-y-6">
                {project.statistics.map((stat, index) => (
                  <div key={stat.label} className={`flex justify-between items-center ${index !== project.statistics.length - 1 ? "border-b border-white/5 pb-4" : ""}`}>
                    <span className="text-muted-foreground text-sm font-medium">{stat.label}</span>
                    <span className="text-primary font-bold text-[15px]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* In-Page Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full border border-white/5 bg-[#0c120e] p-1.5 shadow-xl w-full max-w-4xl overflow-x-auto scx">
            {["Overview", "Challenge", "Solution", "Results", "Gallery"].map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)}
                className={`flex-1 min-w-[120px] px-6 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                  activeTab === tab ? "bg-white/5 text-white" : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="mb-24">
          
          {/* OVERVIEW TAB */}
          {activeTab === "Overview" && (
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Goals */}
              <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 md:p-10 hover:border-primary/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  </div>
                  Project Overview
                </h3>
                <div className="space-y-8">
                  {project.features.slice(0, 5).map((goal, i) => (
                    <div key={i} className="flex gap-4 group">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1 transition-transform group-hover:scale-110" />
                      <div>
                        <h4 className="text-white font-bold mb-2 group-hover:text-primary transition-colors">{goal.title}</h4>
                        <p className="text-sm text-muted-foreground opacity-80 leading-relaxed font-light">
                          {goal.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 md:p-10 hover:border-primary/20 transition-colors h-fit sticky top-24">
                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    &lt;/&gt;
                  </div>
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <div 
                      key={tech} 
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-default group"
                    >
                      <span className="text-lg grayscale group-hover:grayscale-0 transition-all">⚛️</span>
                      <span className="text-[14px] font-semibold text-white">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* CHALLENGE TAB */}
          {activeTab === "Challenge" && (
            <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 md:p-10 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Shield className="text-primary w-6 h-6" />
                The Challenge
              </h3>
              <p className="text-muted-foreground text-[15px] opacity-80 leading-relaxed font-light mb-8 max-w-[900px]">
                {project.challenges.summary}
              </p>
              
              <div className="bg-[#080d0a] border-l-[3px] border-primary px-8 py-7 rounded-r-[1rem] border-y border-r border-white/5">
                <h4 className="text-primary font-semibold text-[15px] mb-4 tracking-wide">Key Challenges:</h4>
                <ul className="space-y-4">
                  {project.challenges.keyChallenges.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white text-[15px]">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* SOLUTION TAB */}
          {activeTab === "Solution" && (
            <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 md:p-10 hover:border-primary/20 transition-colors">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Cpu className="text-primary w-6 h-6" />
                Our Solution
              </h3>
              <p className="text-muted-foreground text-[15px] opacity-80 leading-relaxed font-light mb-10 max-w-[900px]">
                {project.solution.summary}
              </p>
              
              <div className="border-t border-white/5 pt-10">
                <h4 className="text-lg font-bold text-white mb-8">Key Features Implemented</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {project.solution.keyFeatures.map((goal, i) => (
                    <div key={i} className="flex gap-4 group">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 transition-transform group-hover:scale-110" />
                      <div>
                        <h4 className="text-white font-bold mb-2 text-[15px] group-hover:text-primary transition-colors">{goal.title}</h4>
                        <p className="text-sm text-muted-foreground opacity-80 leading-relaxed font-light">
                          {goal.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* RESULTS TAB */}
          {activeTab === "Results" && (
             <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 md:p-10 hover:border-primary/20 transition-colors">
               <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                 <BarChart2 className="text-primary w-6 h-6" />
                 Measurable Results
               </h3>
               
               <div className="space-y-6">
                 {project.results.map((result, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-[10px] sm:text-xs font-black text-primary shrink-0 shadow-[0_0_10px_rgba(0,255,157,0.2)] border border-primary/30">
                       {i + 1}
                     </div>
                     <span className="text-muted-foreground text-[14px] sm:text-[15px] opacity-90">{result}</span>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {/* GALLERY TAB */}
          {activeTab === "Gallery" && (
            <div>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {project.galleryImages.map((image, idx) => (
                  <div
                    key={idx}
                    className="rounded-3xl overflow-hidden border border-white/5 bg-[#111827] flex justify-center items-center p-4"
                  >
                    {renderGalleryMedia(
                      image.src,
                      image.alt,
                      isCloudinaryEmbed(image.src)
                        ? 'w-full h-[350px] rounded-3xl'
                        : 'max-h-[350px] w-auto object-contain',
                      false
                    )}
                  </div>
                ))}
              </div>
              
              <div className="bg-[#0c120e] border border-white/5 rounded-[1.5rem] p-8 md:p-10 hover:border-primary/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-8">Project Timeline</h3>
                
                <div className="space-y-4">
                  {project.timeline.map((timeline, i) => (
                    <div key={i} className="flex justify-between items-center px-6 py-4 rounded-xl bg-[#080d0a] border border-white/5 hover:border-primary/20 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,255,157,0.8)]" />
                        <span className="text-white font-bold text-[14px]">{timeline.phase}</span>
                      </div>
                      <span className="text-muted-foreground text-[13px] opacity-70 font-medium">{timeline.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Key Performance Metrics */}
        <div className="mb-24">
          <h3 className="text-2xl font-bold text-white mb-8">Key Performance Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {project.performanceMetrics.map((metric, i) => {
              const Icon = [TrendingUp, DollarSign, Timer, Award][i] ?? TrendingUp;

              return (
                <div key={metric.label} className="flex flex-col items-center justify-center py-10 px-6 bg-[#0c120e] border border-white/5 rounded-[1.5rem] hover:border-primary/30 transition-all duration-300 group">
                  <Icon className="text-primary mb-4 w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                  <div className="text-4xl font-bold text-primary mb-2 tracking-tight group-hover:drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]">
                    {metric.value}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground opacity-80 uppercase tracking-widest">
                    {metric.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 border-t border-white/5 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">Want to See More?</h2>
          <p className="text-muted-foreground text-sm md:text-base opacity-80 mb-8 max-w-xl mx-auto relative z-10">
            Explore other successful projects we've delivered for clients worldwide.
          </p>
          <Link to="/" className="inline-block relative z-10">
            <Button className="bg-primary hover:bg-primary/90 text-background font-bold px-8 py-6 rounded-xl text-[15px] transition-all group shadow-[0_0_20px_rgba(0,255,157,0.2)] hover:shadow-[0_0_30px_rgba(0,255,157,0.4)]">
              View All Projects
            </Button>
          </Link>
        </div>

      </main>

      {/* Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl w-full bg-[#0c120e] border border-white/10 p-0 overflow-hidden">
          <DialogTitle className="sr-only">Gallery Viewer</DialogTitle>
          
          <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-black/60 sm:min-h-[75vh] md:min-h-[80vh]">
            {/* Close Button */}
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 z-50 rounded-lg p-2 transition-colors hover:bg-white/10"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Main Gallery View */}
            {project?.galleryImages && project.galleryImages.length > 0 && (
              <>
                <div className="flex h-[75vh] w-full max-w-[1200px] items-center justify-center overflow-hidden px-4 py-4 sm:h-[80vh] sm:px-6 sm:py-6 md:px-8 md:py-8">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-black/40 p-2 sm:p-4">
                    {renderGalleryMedia(
                      project.galleryImages[currentGalleryIndex].src,
                      project.galleryImages[currentGalleryIndex].alt,
                      'h-auto max-h-full w-auto max-w-full rounded-lg object-contain object-center',
                      false
                    )}
                  </div>
                </div>

                {/* Navigation Controls */}
                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4">
                  <button
                    onClick={handlePrevImage}
                    className="pointer-events-auto rounded-lg p-2 transition-colors group hover:bg-white/10"
                  >
                    <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="pointer-events-auto rounded-lg p-2 transition-colors group hover:bg-white/10"
                  >
                    <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
                  </button>
                </div>

                {/* Thumbnail Strip */}
                <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center gap-3 px-4 sm:bottom-6">
                  <span className="rounded-full bg-black/70 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                    {currentGalleryIndex + 1} / {project.galleryImages.length}
                  </span>

                  <div className="flex w-full max-w-[min(100%,840px)] justify-center gap-2 overflow-x-auto scroll-smooth pb-1">
                    {project.galleryImages.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentGalleryIndex(idx)}
                        className={`h-16 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 sm:h-20 sm:w-20 ${
                          idx === currentGalleryIndex
                            ? 'scale-105 border-orange-400 shadow-[0_0_0_1px_rgba(249,115,22,0.35)]'
                            : 'border-white/20 hover:border-white/40'
                        }`}
                      >
                        {isCloudinaryEmbed(img.src) ? (
                          <div className="flex h-full w-full items-center justify-center bg-black px-1 text-center text-[10px] text-white">
                            Cloudinary video
                          </div>
                        ) : renderGalleryMedia(
                            img.src,
                            img.alt,
                            'h-full w-full object-cover',
                            true
                          )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default CaseStudy;
