
import React, { useEffect, useRef } from 'react';
import { Code, Database, Brain, Cog, BarChart, Globe, Users, Lightbulb, Sparkles } from 'lucide-react';

const Skills = () => {
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

    const cards = sectionRef.current?.querySelectorAll('.skill-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-orange-500" size={24} />,
      skills: ["Python (Langchain, Django, FastAPI)"]
    },
    {
      title: "Databases",
      icon: <Database className="text-orange-500" size={24} />,
      skills: ["PostgreSQL", "MySQL", "Redis"]
    },
    {
      title: "Software Engineering",
      icon: <Cog className="text-orange-500" size={24} />,
      skills: [
        "Backend Web Development",
        "RESTful API",
        "WebSockets",
        "Webhooks",
        "RabbitMQ",
        "ORM (Object-Relational Mapping)",
        "Git (Version Control)",
        "Software Testing",
        "Debugging",
        "Code Reviews & Pull Requests",
        "Business Logic & Workflow Design"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="text-orange-500" size={24} />,
      skills: [
        "Machine/Deep Learning (Supervised and Unsupervised)",
        "Agentic AI & Gen AI",
        "Vector Database",
        "RAG",
        "Langchain",
        "PydanticAI",
        "CrewAI",
        "Relevance AI"
      ]
    },
    {
      title: "Frameworks",
      icon: <Lightbulb className="text-orange-500" size={24} />,
      skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"]
    },
    {
      title: "Data Engineering",
      icon: <BarChart className="text-orange-500" size={24} />,
      skills: ["Kafka", "Pandas", "NumPy"]
    },
    {
      title: "Data Science & Analytics",
      icon: <BarChart className="text-orange-500" size={24} />,
      skills: [
        "Data Analysis & Visualization (Tableau, Power BI, Matplotlib, Plotly)",
        "Data Mining & Web Scraping (Selenium, Playwright, Beautiful Soup)",
        "Geospatial Analysis (Google Earth Engine)"
      ]
    },
    {
      title: "Development Tools",
      icon: <Cog className="text-orange-500" size={24} />,
      skills: [
        "IDEs (PyCharm, Jupyter Notebook, Google Colab, Visual Studio)",
        "Collaboration Tools (GitHub, Bitbucket, Jira)",
        "AI & Automation Tools (n8n, Github Copilot)",
        "Deployment Platforms (Docker, AWS)"
      ]
    }
  ];

  const nonTechnicalSkills = [
    "Leadership",
    "Team Collaboration",
    "Problem-Solving",
    "Rapid Learning",
    "Adaptability"
  ];

  const languages = ["English", "Urdu"];

  return (
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="text-primary glow-effect" size={24} />
              <span className="text-sm font-medium tracking-wider text-muted-foreground uppercase">Skills & Expertise</span>
              <Sparkles className="text-secondary glow-effect" size={24} />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="text-foreground">Technical</span>
              <span className="gradient-text"> Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-card glass-card p-8 hover-lift group" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                    <div className="relative z-10 text-primary glow-effect">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300 flex items-center">
                      <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 group-hover:bg-primary transition-colors duration-300"></div>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Non-Technical Skills */}
            <div className="skill-card glass-card p-10 hover-lift group" style={{animationDelay: '0.8s'}}>
              <div className="flex items-center mb-8">
                <div className="relative mr-4">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <Users className="text-secondary relative z-10 glow-effect" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {nonTechnicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="glass-button px-6 py-3 text-secondary border-secondary/30 hover:border-secondary/50 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="skill-card glass-card p-10 hover-lift group" style={{animationDelay: '1s'}}>
              <div className="flex items-center mb-8">
                <div className="relative mr-4">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                  <Globe className="text-accent relative z-10 glow-effect" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-foreground group-hover:gradient-text transition-all duration-300">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-4">
                {languages.map((language, index) => (
                  <span
                    key={index}
                    className="glass-button px-6 py-3 text-accent border-accent/30 hover:border-accent/50 font-medium"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
