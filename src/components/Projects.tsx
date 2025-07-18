
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ChevronRight, Target, Lightbulb, Zap, Sparkles } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.project-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Neblo-AI: Logistics Orchestration Engine",
      category: "Agentic AI",
      overview: "Led and developed an AI-powered chatbot using the Agentic AI approach for Cloudpacer's logistics orchestration engine, built to automate and accelerate broker-carrier coordination across the U.S. freight network.",
      problem: "Addressed the challenge in U.S. logistics where thousands of loads are posted every hour across platforms like WhatsApp and Telegram, but brokers can't keep up due to real-time load notification floods, time-sensitive responses, and missed opportunities.",
      contributions: [
        "Automated broker's most time-sensitive tasks using AI and real-time orchestration",
        "Implemented Load Detection & Publishing for real-time monitoring",
        "Developed AI-powered negotiation engine with business rules",
        "Incorporated Human-in-the-Loop Final Decision Loop",
        "Managed real-time ingestion of 1000+ load notifications",
        "Provided 24/7 responsiveness on behalf of brokers"
      ],
      impact: [
        "Eliminates overnight workload loss for brokers",
        "Increases coverage window (24/7 handling)",
        "Enables scalable load handling without adding headcount",
        "Provides end-to-end data visibility & control"
      ],
      technologies: ["Agentic AI", "Python (Langchain)", "WebSockets", "WhatsApp/Telegram API", "MySQL", "Redis", "Git", "Jira"]
    },
    {
      title: "CloudGenie: AI Query Engine",
      category: "RAG System",
      overview: "Led and developed an AI-driven backend application using the Retrieval-Augmented Generation (RAG) approach. CloudGenie is designed as an AI-powered query engine for live business intelligence.",
      problem: "Addressed the challenge of essential business data scattered across multiple databases, requiring users to contact data teams and wait for query results, which slows decision-making.",
      contributions: [
        "Developed centralized, AI-powered interface for data access",
        "Enabled instant multi-source data queries across live business data",
        "Provided real-time answers without requiring SQL knowledge",
        "Ensured secure connections to multiple databases (PostgreSQL, MongoDB, MySQL)",
        "Designed natural language query processing system",
        "Implemented end-to-end encryption and role-based access"
      ],
      impact: [
        "On-demand access to live data without technical team dependency",
        "Faster insights and decisions across departments",
        "Reduced reporting overhead for engineering teams",
        "Enabled self-serve data culture organization-wide"
      ],
      technologies: ["RAG", "Python (Langchain, FastAPI)", "PostgreSQL", "MySQL", "Redis", "Docker", "AWS"]
    },
    {
      title: "AI Campaign Engine",
      category: "Generative AI",
      overview: "Contributing to an AI-native campaign engine at Cloudpacer that solves what traditional outbound tools cannot: scale without losing relevance, speed without sacrificing thought, and automation without noise.",
      problem: "Traditional email marketing tools fail due to templated personalization, reactive timing, and missing strategy, resulting in high-volume but low-impact campaigns.",
      contributions: [
        "Utilizes Generative AI to transform contact data into precision-tuned outreach",
        "Generates contextual messages with job title & industry awareness",
        "Employs multi-layered GenAI stack for intelligent language generation",
        "Integrates Groq (LLaMA 4) + LangChain Agent for AI writing",
        "Synthesizes sentences for thoughtful, relevant outreach"
      ],
      impact: [
        "Open Rate: 86% (Industry Avg: 20-30%)",
        "Click Rate: 10-20% (Industry Avg: 2-4%)",
        "Reply Rate: 6.1% (Industry Avg: ~1%)",
        "Conversion timeline: 2-4 days (from 10-14 days)",
        "Time per message: <15 seconds (from 6-8 minutes)"
      ],
      technologies: ["Generative AI", "Groq (LLaMA 4)", "AI Agent", "Relevance AI", "n8n", "CRM Integration"]
    },
    {
      title: "Additional Projects Portfolio",
      category: "Full-Stack Development",
      overview: "Collection of diverse projects showcasing full-stack development, AI/ML applications, and specialized domain solutions.",
      contributions: [
        "EasyPOS: Built fast and scalable POS system using FastAPI",
        "Order Management System: Designed SaaS-based system using Django",
        "Flood Inundation Mapping: Utilized SAR imagery and Google Earth Engine",
        "Pest Detection in Cotton Crops: Developed AI model using UAV multispectral imagery",
        "Fashion Recommendation WebApp: ML-powered personalized recommendations",
        "Healthy Food Recommendation: Django-based system with ML algorithms"
      ],
      technologies: ["Django", "FastAPI", "Google Earth Engine", "Pix4D", "Deep Learning", "SAR Imagery", "UAV Processing", "Remote Sensing"]
    }
  ];

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-primary glow-effect" size={24} />
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Featured Work</span>
              <Sparkles className="text-secondary glow-effect" size={24} />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-foreground">Project</span>
              <span className="gradient-text"> Showcase</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my latest AI/ML projects that push the boundaries of innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Project Selection */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedProject(index)}
                    className={`project-card w-full text-left p-6 rounded-2xl border transition-all duration-500 hover-lift group ${
                      selectedProject === index
                        ? 'glass-card border-primary bg-primary/10'
                        : 'glass-card border-glass-border/20 hover:border-primary/50'
                    }`}
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        selectedProject === index ? 'bg-primary glow-effect' : 'bg-muted-foreground'
                      }`}></div>
                      <div className={`font-bold text-lg transition-all duration-300 ${
                        selectedProject === index ? 'gradient-text' : 'text-foreground group-hover:text-primary'
                      }`}>
                        {project.title.split(':')[0]}
                      </div>
                    </div>
                    <div className={`text-sm font-medium ${
                      selectedProject === index ? 'text-primary' : 'text-muted-foreground group-hover:text-secondary'
                    }`}>
                      {project.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="glass-card p-10 hover-lift animate-fade-in">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-foreground mb-3">
                    {projects[selectedProject].title}
                  </h3>
                  <span className="glass-button px-4 py-2 text-primary font-semibold border-primary/30">
                    {projects[selectedProject].category}
                  </span>
                </div>

                {/* Project Overview */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="relative mr-3">
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
                      <Lightbulb className="text-primary relative z-10 glow-effect" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold gradient-text">Project Overview</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {projects[selectedProject].overview}
                  </p>
                </div>

                {/* Problem Solved */}
                {projects[selectedProject].problem && (
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="relative mr-3">
                        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg"></div>
                        <Target className="text-secondary relative z-10 glow-effect" size={24} />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground">Problem Solved</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {projects[selectedProject].problem}
                    </p>
                  </div>
                )}

                {/* Key Contributions */}
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="relative mr-3">
                      <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg"></div>
                      <Zap className="text-accent relative z-10 glow-effect" size={24} />
                    </div>
                    <h4 className="text-2xl font-bold text-foreground">Key Contributions & Features</h4>
                  </div>
                  <div className="space-y-3">
                    {projects[selectedProject].contributions.map((contribution, idx) => (
                      <div key={idx} className="flex items-start group/item">
                        <div className="relative mr-4 mt-1">
                          <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm group-hover/item:blur-md transition-all duration-300"></div>
                          <ChevronRight className="text-primary relative z-10 flex-shrink-0" size={18} />
                        </div>
                        <p className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{contribution}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                {projects[selectedProject].impact && (
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold gradient-text mb-4">Impact & Strategic Value</h4>
                    <div className="space-y-3">
                      {projects[selectedProject].impact.map((impact, idx) => (
                        <div key={idx} className="flex items-start group/item">
                          <div className="relative mr-4 mt-1">
                            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-sm group-hover/item:blur-md transition-all duration-300"></div>
                            <ChevronRight className="text-secondary relative z-10 flex-shrink-0" size={18} />
                          </div>
                          <p className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{impact}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">Technologies Utilized</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects[selectedProject].technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="glass-button px-4 py-2 text-primary border-primary/30 hover:border-primary/50 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
