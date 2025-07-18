import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Interactive Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-primary/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/60 rotate-45 floating-animation"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-secondary/60 rounded-full floating-animation" style={{animationDelay: '-1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-accent/60 floating-animation" style={{animationDelay: '-3s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-5 h-5 bg-primary/40 rounded-full floating-animation" style={{animationDelay: '-2s'}}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Profile Image */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img
              src="/src/imgs/profilepic.jpeg"
              alt="Profile"
              className="w-36 h-36 rounded-full shadow-lg border-4 border-primary object-cover hover:scale-105 transition-transform duration-300 bg-background cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
          {/* Modal for full image view */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={() => setIsModalOpen(false)}>
              <div className="relative" onClick={e => e.stopPropagation()}>
                <img
                  src="/src/imgs/profilepic.jpeg"
                  alt="Profile Full View"
                  className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl border-4 border-primary bg-background"
                />
                <button
                  className="absolute top-2 right-2 bg-primary text-primary-foreground rounded-full p-2 shadow hover:bg-secondary transition-colors"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>
          )}

          {/* Main Headline */}
          <div className="animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="text-primary glow-effect" size={32} />
              <Zap className="text-secondary glow-effect" size={32} />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight animate-slide-up">
              <span className="text-foreground">Muhammad</span>
              <br />
              <span className="gradient-text glow-effect">Ali</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
              <span className="text-primary">Gen AI/ML</span>
              <span className="text-foreground"> & </span>
              <span className="text-secondary">Software Engineering</span>
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Developing cutting-edge AI applications, including
            <span className="text-primary font-semibold"> Agentic AI solutions</span> and
            <span className="text-secondary font-semibold"> RAG-based chatbots</span>.
            Expertise in designing AI-driven systems by integrating advanced machine learning models into scalable applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-scale-in" style={{animationDelay: '0.6s'}}>
            <a
              href="#projects"
              className="group glass-button px-10 py-4 font-semibold text-lg relative overflow-hidden"
            >
              <span className="relative z-10 text-primary-foreground">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="glass-button px-10 py-4 font-semibold text-lg text-foreground hover:text-primary-foreground border-primary/50 hover:border-primary"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in" style={{animationDelay: '0.8s'}}>
            <p className="text-sm text-muted-foreground mb-4">Scroll to explore</p>
            <div className="inline-flex flex-col items-center space-y-2">
              <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
              <ChevronDown className="text-primary animate-bounce glow-effect" size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
