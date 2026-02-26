import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Layers, 
  Cpu, 
  Globe, 
  Database, 
  Terminal,
  Menu,
  X,
  ChevronRight,
  Send,
  User,
  Briefcase,
  Monitor
} from 'lucide-react';
import './style.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Nexus",
      description: "A high-performance online marketplace built with Next.js, Stripe, and PostgreSQL. Features real-time inventory and AI recommendations.",
      tags: ["React", "Node.js", "PostgreSQL", "Next.js"],
      category: "web",
      image: "https://res.cloudinary.com/dvvl4i8q9/image/upload/v1772129188/piggybank-HE75OJUXOFE-unsplash_q3meen.jpg"
    },
    {
      title: "DevOps Dashboard",
      description: "Real-time monitoring tool for Kubernetes clusters. Aggregates logs, metrics, and health status into a unified visual interface.",
      tags: ["Go", "React", "Docker", "Kubernetes"],
      category: "fullstack",
      image: "https://res.cloudinary.com/dvvl4i8q9/image/upload/v1772129180/carlos-muza-hpjSkU2UYSU-unsplash_rldnrz.jpg"
    },
    {
      title: "Social Sphere",
      description: "A decentralized social network focusing on privacy. Built on a distributed ledger with encrypted messaging systems.",
      tags: ["TypeScript", "GraphQL", "Prisma", "AWS"],
      category: "web",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI Prompt Engine",
      description: "Microservice-based application that optimizes LLM prompts using vector databases and RAG architecture.",
      tags: ["Python", "FastAPI", "Pinecone", "OpenAI"],
      category: "fullstack",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const skills = [
    { name: "Frontend", icons: [Code2, Monitor, Globe], items: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", icons: [Terminal, Database, Cpu], items: ["Node.js", "Go", "Python", "PostgreSQL"] },
    { name: "DevOps", icons: [Layers, Briefcase], items: ["Docker", "AWS", "CI/CD", "Kubernetes"] }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">JD</span>
            </div>
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">John Doe</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-all">Hire Me</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Open for opportunities
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
              Building the next generation of <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">web experiences.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              I'm a full-stack engineer specialized in building high-performance applications, 
              scalable cloud infrastructures, and intuitive user interfaces that drive business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-all flex items-center gap-2 group">
                View My Work <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </a>
              <div className="flex items-center gap-3">
                <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-600 transition-all text-slate-400 hover:text-white">
                  <Github size={20} />
                </a>
                <a href="#" className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-600 transition-all text-slate-400 hover:text-white">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="relative z-10 p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-2xl -z-10 group-hover:bg-indigo-600/30 transition-all" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                  <div className="text-xs text-slate-500 font-mono">user@portfolio ~ main</div>
                </div>
                <div className="font-mono text-sm space-y-3">
                  <p className="text-indigo-400">$ <span className="text-slate-200">whoami</span></p>
                  <p className="text-slate-400">Name: John Doe</p>
                  <p className="text-slate-400">Role: Senior Full Stack Engineer</p>
                  <p className="text-slate-400">Location: San Francisco, CA</p>
                  <p className="text-indigo-400">$ <span className="text-slate-200">ls skills/</span></p>
                  <div className="grid grid-cols-2 gap-2 text-indigo-300">
                    <span>- react_nextjs</span>
                    <span>- node_express</span>
                    <span>- kubernetes_docker</span>
                    <span>- aws_architecture</span>
                  </div>
                  <p className="text-indigo-400">$ <span className="animate-pulse">_</span></p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl font-bold">Technical <span className="text-indigo-500">Arsenal</span></h2>
            <p className="text-slate-400">Tools and technologies I use to bring ideas to life</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:border-indigo-500/30 transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-indigo-600/10 rounded-xl text-indigo-400 group-hover:scale-110 transition-transform">
                    {React.createElement(skill.icons[0], { size: 24 })}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <ul className="space-y-4">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Featured <span className="text-indigo-500">Projects</span></h2>
              <p className="text-slate-400 max-w-lg">Selection of recent works spanning across different domains and complexity levels.</p>
            </div>
            <div className="flex gap-2 p-1 bg-slate-900 rounded-lg self-start">
              {['all', 'web', 'fullstack'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md capitalize transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="group flex flex-col rounded-3xl overflow-hidden bg-slate-900/20 border border-slate-800 hover:border-slate-700 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white text-slate-950 rounded-full hover:bg-indigo-500 hover:text-white transition-all">
                      <Github size={20} />
                    </button>
                    <button className="p-3 bg-white text-slate-950 rounded-full hover:bg-indigo-500 hover:text-white transition-all">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-md border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>
                  <div className="mt-auto flex items-center gap-2 text-indigo-400 font-semibold group/link cursor-pointer">
                    View Project Details <ChevronRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[100px] -z-10 rounded-full" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Let's build something <span className="text-indigo-500">amazing</span> together.</h2>
              <p className="text-slate-400 text-lg">
                I'm currently available for freelance work or full-time roles. If you have a project in mind, let's talk about how I can help.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="p-3 bg-indigo-600/10 text-indigo-400 rounded-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Email Me</p>
                    <p className="font-medium">hello@johndoe.dev</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <div className="p-3 bg-indigo-600/10 text-indigo-400 rounded-lg">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase">Location</p>
                    <p className="font-medium">San Francisco, California</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Name</label>
                  <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email</label>
                  <input type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jane@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Subject</label>
                <input type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Message</label>
                <textarea rows="4" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
              </div>
              <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center text-[10px] font-bold">JD</div>
            <span className="text-slate-400 text-sm">© 2024 John Doe. Built with Next.js & Tailwind.</span>
          </div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">RSS</a>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col p-8 space-y-8 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter">JD</div>
            <button onClick={() => setIsMenuOpen(false)}><X size={32} /></button>
          </div>
          <div className="flex flex-col space-y-6 text-3xl font-bold">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;