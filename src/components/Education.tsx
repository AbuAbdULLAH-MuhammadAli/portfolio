
import React, { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, Medal } from 'lucide-react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const education = [
    {
      degree: "MS Data Sciences",
      institution: "National University of Science & Technology",
      period: "2020-2022",
      location: "Pakistan"
    },
    {
      degree: "BS Software Engineering",
      institution: "Riphah International University",
      period: "2016-2020",
      cgpa: "3.91",
      goldMedal: true,
      location: "Pakistan"
    }
  ];

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

    const cards = sectionRef.current?.querySelectorAll('.education-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-primary glow-effect" size={24} />
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Education</span>
              <Sparkles className="text-secondary glow-effect" size={24} />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="text-foreground">Academic</span>
              <span className="gradient-text"> Journey</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="education-card glass-card p-10 hover-lift group" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex items-center mb-4 lg:mb-0">
                    <div className="relative mr-4">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                      <GraduationCap className="text-primary relative z-10 glow-effect" size={32} />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">{edu.degree}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    {edu.cgpa && (
                      <div className="glass-button px-4 py-2 text-primary font-semibold border-primary/30">
                        CGPA: {edu.cgpa}
                      </div>
                    )}
                    {edu.goldMedal && (
                      <div className="glass-button px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border-yellow-500/30 text-yellow-300 font-semibold">
                        🏅 Gold Medal
                      </div>
                    )}
                  </div>
                </div>
                
                <h4 className="text-xl text-secondary font-semibold mb-6">{edu.institution}</h4>
                
                <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-8">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-3 text-primary" size={20} />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-3 text-secondary" size={20} />
                    <span className="font-medium">{edu.location}</span>
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

export default Education;
