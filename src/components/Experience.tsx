
import React, { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.experience-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  
  const experiences = [
    {
      title: "Gen AI/ML Engineer",
      company: "Cloudpacer",
      location: "Lahore-on site",
      period: "Nov 2024 - Present",
      responsibilities: [
        "Proficient in developing cutting-edge AI applications, including Agentic AI solutions and RAG-based chatbots",
        "Expertise in designing AI-driven systems by integrating advanced machine learning models into scalable and robust applications",
        "Ensuring high performance and reliability in AI system implementations",
        "Contributing to Neblo-AI and IceBreaker projects for advanced logistics and communication solutions"
      ]
    },
    {
      title: "Software Engineer",
      company: "Ginkgo Retails",
      location: "Lahore-on site",
      period: "Jun 2023 - Oct 2024",
      responsibilities: [
        "Delivered robust e-commerce solutions by leveraging expertise in Python, Django, REST API, and MySQL",
        "Automated backend operations and optimized retail order management systems",
        "Implemented Shopify integrations, ensuring efficient and scalable solutions",
        "Developed comprehensive Order Management System for streamlined retail operations"
      ]
    },
    {
      title: "DAAD Research Fellow",
      company: "RPTU Kaiserslautern-Landau",
      location: "Kaiserslautern, Germany · Hybrid",
      period: "Feb 2022 - Oct 2022",
      responsibilities: [
        "Awarded a fully funded research internship through the prestigious DAAD Fellowship under German-Pakistani Research Cooperation",
        "Collected and analyzed multi-spectral drone imagery of cotton fields to investigate pest infestations",
        "Contributed to research advancements in precision agriculture",
        "Developed AI-powered pest detection models using UAV multispectral imagery"
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-primary glow-effect" size={24} />
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Experience</span>
              <Sparkles className="text-secondary glow-effect" size={24} />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Professional</span>
              <span className="gradient-text"> Journey</span>
            </h2>
          </div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-card glass-card p-10 hover-lift group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="mb-6 lg:mb-0 flex-1">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-4">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                        <Briefcase className="text-primary relative z-10 glow-effect" size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-foreground">{exp.title}</h3>
                    </div>
                    <h4 className="text-2xl text-secondary font-semibold mb-4">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-8">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-3 text-primary" size={20} />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-3 text-secondary" size={20} />
                        <span className="font-medium">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="text-xl font-bold gradient-text mb-6">Key Responsibilities & Achievements</h5>
                  {exp.responsibilities.map((responsibility, idx) => (
                    <div key={idx} className="flex items-start group/item">
                      <div className="relative mr-4 mt-2">
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm group-hover/item:blur-md transition-all duration-300"></div>
                        <ChevronRight className="text-accent relative z-10 flex-shrink-0" size={16} />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-lg group-hover/item:text-foreground transition-colors duration-300">{responsibility}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
