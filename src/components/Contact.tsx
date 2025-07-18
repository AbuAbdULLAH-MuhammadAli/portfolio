
import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Sparkles, Send } from 'lucide-react';

const Contact = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.contact-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Mail className="text-orange-500" size={24} />,
      label: "Email",
      value: "mdotali533@gmail.com",
      href: "mailto:mdotali533@gmail.com"
    },
    {
      icon: <Phone className="text-orange-500" size={24} />,
      label: "Phone",
      value: "+92-334-9625200",
      href: "tel:+923349625200"
    },
    {
      icon: <MapPin className="text-orange-500" size={24} />,
      label: "Location",
      value: "Lahore, Pakistan",
      href: null
    },
    {
      icon: <Linkedin className="text-orange-500" size={24} />,
      label: "LinkedIn",
      value: "/muhammad-ali-jt/",
      href: "https://linkedin.com/in/muhammad-ali-jt/"
    }
  ];

  return (
    <section id="contact" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-primary glow-effect" size={24} />
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Let's Connect</span>
              <Sparkles className="text-secondary glow-effect" size={24} />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-foreground">Get In</span>
              <span className="gradient-text"> Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on cutting-edge AI/ML projects or discuss innovative software solutions? 
              Let's connect and explore how we can work together to create <span className="gradient-text font-semibold">impactful technology</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card glass-card p-8 hover-lift group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center">
                  <div className="relative mr-6">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative z-10 text-primary glow-effect">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all duration-300">{info.label}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium text-lg group-hover:scale-105 inline-block"
                        target={info.label === "LinkedIn" ? "_blank" : undefined}
                        rel={info.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-muted-foreground font-medium text-lg">{info.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center contact-card" style={{animationDelay: '0.4s'}}>
            <a
              href="mailto:mdotali533@gmail.com"
              className="group glass-button px-12 py-6 font-bold text-xl text-primary-foreground hover:text-primary-foreground relative overflow-hidden inline-flex items-center"
            >
              <span className="relative z-10 flex items-center">
                <Send className="mr-3 glow-effect" size={24} />
                Start a Conversation
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="border-t border-glass-border/20 mt-20 pt-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary"></div>
            <Sparkles className="text-primary glow-effect" size={16} />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-muted-foreground font-medium">
            © 2024 <span className="gradient-text">Muhammad Ali</span>. Crafted with passion for innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
