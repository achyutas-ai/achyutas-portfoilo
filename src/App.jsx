import React, { useEffect, useState } from 'react';
import { Mail, Phone, ChevronDown, Award, BookOpen, Briefcase, Code, Database, Server, Cpu, Film, Camera, PenTool, Video } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import './index.css';
import aboutImage from './assets/images/about-me.png';


const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [showGithubText, setShowGithubText] = useState(false);
  const [showGithubTextFooter, setShowGithubTextFooter] = useState(false);
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      role: 'Sr Software Engineer',
      company: 'Tech Mahindra Limited',
      location: 'Bengaluru',
      period: 'Feb 2025 - Nov 2025',
      description: 'Specializing in the architecture and deployment of enterprise-scale AI solutions and high-performance backend systems.',
      tech: ['AI Agents', 'LLMOps', 'Python', 'FastAPI'],
      color: 'var(--accent-primary)'
    },
    {
      role: 'Consultant (Sr Product Engineer)',
      company: 'NTT Data Business Solutions',
      location: 'Bengaluru',
      period: 'Nov 2023 - Jan 2025',
      description: 'Led the engineering of a high-scale Agentic AI ecosystem and secure User Profile microservices for a global gaming platform. Developed a RAG-based support agent using LangGraph to automate complex player resolutions.',
      tech: ['LangGraph', 'LangChain', 'FastAPI', 'Kubernetes'],
      color: 'var(--accent-secondary)'
    },
    {
      role: 'Sr Product Engineer (Data & MLOps)',
      company: 'LTI Mindtree Limited',
      location: 'Bengaluru',
      period: 'Feb 2022 - Sep 2023',
      description: 'Engineered a multi-tenant enterprise analytics platform (Refract/Spectra) for large-scale financial institutions. Built high-performance Snowflake-to-Salesforce sync pipelines using Python.',
      tech: ['Snowflake', 'FastAPI', 'Kafka', 'AWS'],
      color: 'var(--accent-tertiary)'
    },
    {
      role: 'Product Engineer (Platform/Infra)',
      company: 'Capgemini India Pvt Ltd',
      location: 'Bengaluru',
      period: 'Apr 2021 - Oct 2021',
      description: 'Engineered a high-performance Edge-to-Cloud infrastructure for the Edison Health Link (EHL) platform. Automated provisioning pipelines to host and scale Computer Vision and DICOM services on NVIDIA-accelerated hardware.',
      tech: ['OpenShift (OCP)', 'Kubernetes', 'QEMU/KVM', 'Python'],
      color: '#10b981'
    }
  ];




  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Reveal animations
      const reveals = document.querySelectorAll('.animate-on-scroll');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="container nav-container">
          <div className="nav-logo">BAR.</div>
          <div className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
          </div>
        </div>
      </nav>

      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="gradient-text">Achyuta Reddy</span>
              </h1>
              <h2 className="hero-subtitle">
                Senior Product Engineer | Agentic AI & LLMOps
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem' }}>
                Bridging the gap between raw hardware and sophisticated AI applications, specializing in autonomous agentic systems and high-scale MLOps infrastructure.
              </p>
              
              <div className="hero-actions">
                <a href="mailto:achyutareddy.in@outlook.com" className="btn btn-primary">
                  <Mail size={20} style={{ marginRight: '8px' }}/> Get In Touch
                </a>
                <a href="#projects" className="btn btn-secondary">
                  View Projects
                </a>
              </div>
              
              <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem' }}>
                <a href="https://www.linkedin.com/in/achyuta-reddy-ai/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={24} /></a>
                <a 
                  href="https://github.com/achyutas-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`social-icon ${showGithubText ? 'expanded' : ''}`}
                  onMouseEnter={() => setShowGithubText(true)}
                  onMouseLeave={() => setShowGithubText(false)}
                >
                  <FaGithub size={24} />
                  {showGithubText && <span style={{ whiteSpace: 'nowrap', fontWeight: '500', marginLeft: '8px' }}>latest projects go</span>}
                </a>

                <a href="https://wa.me/918660089235?text=Hi%20Achyuta,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp size={24} /></a>


                <button 
                  onClick={() => setShowPhone(!showPhone)} 
                  className={`social-icon ${showPhone ? 'expanded' : ''}`}
                  style={{ cursor: 'pointer', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }}
                >
                  <Phone size={24} />
                  {showPhone && <span style={{ whiteSpace: 'nowrap', fontWeight: '500' }}>+91 8660089235</span>}
                </button>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'pulse 2s infinite' }}>
            <ChevronDown size={32} color="var(--text-secondary)" />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section container">
          <div className="glass-panel animate-on-scroll" style={{ padding: '4rem' }}>
            <div className="about-grid">
              <div className="about-image-container">
                <img src={aboutImage} alt="Achyuta Reddy" className="about-image" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2 className="section-title" style={{ margin: '0', textAlign: 'left' }}>About Me</h2>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Senior Product Engineer with 4.3 years of experience specializing in the architecture and deployment of autonomous agentic systems and high-scale MLOps/LLMOps infrastructure. Expert in bridging the gap between raw hardware—optimizing NVIDIA-accelerated Kubernetes (OCP) environments—and sophisticated AI applications. 
                </p>
                <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Proven track record in designing multi-agent LangGraph architectures, production-grade RAG pipelines, and self-healing LLM-driven CI/CD automation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Hobby Section */}
        <div className="container animate-on-scroll" style={{ marginTop: '-4rem', marginBottom: '4rem' }}>
          <div className="glass-panel hobby-card">
            <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
              <div className="social-icon" style={{ background: 'rgba(236, 72, 153, 0.1)', color: 'var(--accent-tertiary)' }}><Film size={24} /></div>
              <div className="social-icon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: 'var(--accent-secondary)' }}><Video size={24} /></div>
            </div>
            <div className="hobby-card-content">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'Space Grotesk' }}>Beyond the Code</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px' }}>
                When I'm not architecting AI systems, I immerse myself in the world of <strong>creative storytelling</strong>. I enjoy film making, cinematic editing, scripting, and crafting compelling narratives that bridge technology and human emotion.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <PenTool size={16} /> Scripting
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Camera size={16} /> Cinematography
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  <Video size={16} /> Post-Production
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section id="experience" className="section container">
          <h2 className="section-title animate-on-scroll">Professional Experience</h2>
          
          <div className="glass-panel experience-container animate-on-scroll">
            <div className="experience-tabs">
              {experiences.map((exp, index) => (
                <button 
                  key={index}
                  className={`exp-tab ${activeExp === index ? 'active' : ''}`}
                  onClick={() => setActiveExp(index)}
                >
                  <div className="exp-tab-dot" style={{ backgroundColor: exp.color }}></div>
                  <span className="exp-tab-company">{exp.company.split(' ')[0]}</span>
                </button>
              ))}
            </div>
            
            <div className="experience-content">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{experiences[activeExp].role}</h3>
                  <div className="exp-company-info">
                    <span className="exp-company">{experiences[activeExp].company}</span>
                    <span className="exp-location">| {experiences[activeExp].location}</span>
                  </div>
                </div>
                <div className="exp-period-badge">
                  {experiences[activeExp].period}
                </div>
              </div>
              
              <div className="exp-body">
                <p className="exp-description">{experiences[activeExp].description}</p>
                
                <div className="exp-tech-section">
                  <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                    Core Technologies
                  </h4>
                  <div className="timeline-tech">
                    {experiences[activeExp].tech.map((t, i) => (
                      <span key={i} className="badge" style={{ borderColor: `${experiences[activeExp].color}33`, background: `${experiences[activeExp].color}08`, color: experiences[activeExp].color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section container">
          <h2 className="section-title animate-on-scroll">Featured Projects</h2>
          
          <div className="projects-grid">
            {/* Project 4 */}
            <div className="glass-panel project-card animate-on-scroll">
              <div style={{ marginBottom: '1rem' }}><Cpu size={40} color="var(--accent-primary)" /></div>
              <h3 className="project-title">Autonomous Ad & Bidding Platform</h3>
              <div className="project-role">Senior Product Engineer (AdTech & Agentic AI)</div>
              <p className="project-desc">
                Architected an end-to-end Agentic AI Ad-Platform designed to automate complex marketing lifecycles. Built LangGraph agents for real-time bid adjustments and integrated Generative AI for banner and ad copy generation.
              </p>
              <div className="timeline-tech">
                <span className="badge">FastAPI</span>
                <span className="badge">LangGraph</span>
                <span className="badge">Pinecone</span>
                <span className="badge">Stable Diffusion</span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="glass-panel project-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div style={{ marginBottom: '1rem' }}><Database size={40} color="var(--accent-secondary)" /></div>
              <h3 className="project-title">Gaming Console AI Assistant</h3>
              <div className="project-role">NTT Data Business Solutions</div>
              <p className="project-desc">
                Developed a RAG-based support agent for millions of daily active users to automate complex player resolutions. Implemented LangSmith tracing and Jenkins CI/CD for live AI interaction reliability.
              </p>
              <div className="timeline-tech">
                <span className="badge">LangChain</span>
                <span className="badge">Redis (Vector Store)</span>
                <span className="badge">Docker/K8s</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-panel project-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div style={{ marginBottom: '1rem' }}><Server size={40} color="var(--accent-tertiary)" /></div>
              <h3 className="project-title">Refract / Spectra Platform</h3>
              <div className="project-role">LTI Mindtree Ltd</div>
              <p className="project-desc">
                Engineered a multi-tenant enterprise analytics platform for financial institutions. Developed data orchestration and MLOps infrastructure enabling secure data ingestion and deployment of ML models.
              </p>
              <div className="timeline-tech">
                <span className="badge">Snowflake</span>
                <span className="badge">Kafka</span>
                <span className="badge">Airflow</span>
              </div>
            </div>
            
            {/* Project 1 */}
            <div className="glass-panel project-card animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div style={{ marginBottom: '1rem' }}><Code size={40} color="var(--accent-primary)" /></div>
              <h3 className="project-title">Edison Health Link (EHL)</h3>
              <div className="project-role">Capgemini</div>
              <p className="project-desc">
                Engineered Edge-to-Cloud infrastructure hosting Computer Vision and DICOM services on NVIDIA-accelerated hardware. Automated ISO creation and VM deployment using Paramiko and QEMU.
              </p>
              <div className="timeline-tech">
                <span className="badge">OpenShift</span>
                <span className="badge">QEMU/KVM</span>
                <span className="badge">OpenCV</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section container">
          <h2 className="section-title animate-on-scroll">Technical Expertise</h2>
          
          <div className="skills-grid">
            <div className="glass-panel skill-category animate-on-scroll">
              <h3 className="skill-category-title"><Cpu size={24} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }}/> Agentic AI & GenAI</h3>
              <div className="skill-list">
                <span className="badge">LangChain</span>
                <span className="badge">LangGraph</span>
                <span className="badge">LangSmith</span>
                <span className="badge">Google AI Studio</span>
                <span className="badge">RAG Architecture</span>
                <span className="badge">Prompt Engineering</span>
                <span className="badge">Stable Diffusion</span>
              </div>
            </div>
            
            <div className="glass-panel skill-category animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <h3 className="skill-category-title" style={{ color: 'var(--accent-secondary)' }}><Code size={24} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }}/> Backend & API</h3>
              <div className="skill-list">
                <span className="badge">Python</span>
                <span className="badge">FastAPI</span>
                <span className="badge">Flask</span>
                <span className="badge">Microservices</span>
                <span className="badge">Kafka</span>
                <span className="badge">Rabbit MQ</span>
                <span className="badge">OpenCV</span>
              </div>
            </div>
            
            <div className="glass-panel skill-category animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <h3 className="skill-category-title" style={{ color: 'var(--accent-tertiary)' }}><Server size={24} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }}/> MLOps & Infra</h3>
              <div className="skill-list">
                <span className="badge">Docker</span>
                <span className="badge">Kubernetes</span>
                <span className="badge">OpenShift (OCP)</span>
                <span className="badge">NVIDIA GPU Orchestration</span>
                <span className="badge">Jenkins CI/CD</span>
                <span className="badge">AWS / GCP</span>
              </div>
            </div>
            
            <div className="glass-panel skill-category animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <h3 className="skill-category-title" style={{ color: '#10b981' }}><Database size={24} style={{ display: 'inline', marginRight: '10px', verticalAlign: 'middle' }}/> Data & Vector DBs</h3>
              <div className="skill-list">
                <span className="badge">Snowflake</span>
                <span className="badge">PostgreSQL</span>
                <span className="badge">PGVector</span>
                <span className="badge">Redis (Vector Store)</span>
                <span className="badge">Pinecone</span>
                <span className="badge">Weaviate</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="section container">
          <div className="glass-panel animate-on-scroll" style={{ padding: '4rem', textAlign: 'center' }}>
            <BookOpen size={48} color="var(--accent-primary)" style={{ margin: '0 auto 2rem' }} />
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>Education</h2>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Master of Computer Applications (M.C.A.)</h3>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              Madanapalle Institute of Technology and Science
            </p>
            <p style={{ color: 'var(--accent-secondary)' }}>Affiliated to JNTU Anantapur | 2017-2019</p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <h2 style={{ fontFamily: 'Space Grotesk', fontSize: '2rem' }}>Achyuta Reddy Bommaka</h2>
          <div className="social-links">
            <a href="mailto:achyutareddy.in@outlook.com" className="social-icon"><Mail size={20} /></a>
            <a href="https://www.linkedin.com/in/achyuta-reddy-ai/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin size={20} /></a>
            <a 
              href="https://github.com/achyutas-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`social-icon ${showGithubTextFooter ? 'expanded' : ''}`}
              onMouseEnter={() => setShowGithubTextFooter(true)}
              onMouseLeave={() => setShowGithubTextFooter(false)}
            >
              <FaGithub size={20} />
              {showGithubTextFooter && <span style={{ whiteSpace: 'nowrap', fontWeight: '500', marginLeft: '8px', fontSize: '0.875rem' }}>latest projects go</span>}
            </a>

            <a href="https://wa.me/918660089235?text=Hi%20Achyuta,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!" target="_blank" rel="noopener noreferrer" className="social-icon"><FaWhatsapp size={20} /></a>


          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            © {new Date().getFullYear()} Achyuta Reddy Bommaka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
