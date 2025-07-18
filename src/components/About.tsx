import React, { useEffect, useRef } from 'react';
import { Brain, Code, Zap, Sparkles } from 'lucide-react';
const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, {
      threshold: 0.1
    });
    const cards = sectionRef.current?.querySelectorAll('.about-card');
    cards?.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  return <section id="about" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-primary glow-effect" size={24} />
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">About Me</span>
              <Sparkles className="text-secondary glow-effect" size={24} />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="gradient-text">Creative AI</span>
              <span className="text-foreground"> Developer</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about crafting innovative AI solutions that push the boundaries of what's possible
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="about-card glass-card p-8 text-center hover-lift group">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Brain className="text-primary mx-auto relative z-10 glow-effect" size={56} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">AI/ML Expert</h3>
              <p className="text-muted-foreground leading-relaxed">
                Specializing in <span className="text-primary font-semibold">Agentic AI</span> and 
                <span className="text-secondary font-semibold"> RAG-based</span> solutions
              </p>
            </div>
            
            <div className="about-card glass-card p-8 text-center hover-lift group" style={{
            animationDelay: '0.2s'
          }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Code className="text-secondary mx-auto relative z-10 glow-effect" size={56} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Software Engineer</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">Python</span> developer with expertise in 
                <span className="text-secondary font-semibold"> scalable systems</span>
              </p>
            </div>
            
            <div className="about-card glass-card p-8 text-center hover-lift group" style={{
            animationDelay: '0.4s'
          }}>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <Zap className="text-accent mx-auto relative z-10 glow-effect" size={56} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Innovation Focus</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating <span className="text-primary font-semibold">AI-driven solutions</span> for 
                <span className="text-accent font-semibold"> real-world challenges</span>
              </p>
            </div>
          </div>
          
          <div className="about-card glass-card p-12 hover-lift" style={{
          animationDelay: '0.6s'
        }}>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold gradient-text mb-8">My Mission</h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                As a <span className="text-primary font-semibold">Gen AI/ML Engineer</span> and 
                <span className="text-secondary font-semibold"> Software Engineer</span>, I bring expertise in developing cutting-edge AI applications, 
                including Agentic AI solutions and RAG-based chatbots.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My focus is on designing AI-driven systems by integrating advanced machine learning models into 
                <span className="text-accent font-semibold"> scalable and robust applications</span>, ensuring high performance and reliability. 
                I am passionate about tackling complex challenges in the AI/ML and software engineering domain, 
                delivering solutions that make a <span className="gradient-text font-semibold">meaningful impact</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;