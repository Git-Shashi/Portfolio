import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Award, Briefcase, GraduationCap, Menu, X } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    'Programming Languages': ['Java', 'C/C++', 'JavaScript', 'Python', 'HTML5/CSS3'],
    'Frontend': ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap'],
    'Backend': ['Node.js', 'Express.js', 'RESTful APIs', 'WebSockets', 'JWT Auth'],
    'Databases': ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma ORM', 'Kafka'],
    'Tools & Cloud': ['Docker', 'Git/GitHub', 'AWS', 'Vercel', 'Firebase', 'Postman']
  };

  const projects = [
    {
      title: 'DevForge – Cloud IDE',
      tech: 'MERN Stack, Docker, JWT Auth, Redis Caching',
      date: 'Feb 2025',
      points: [
        'Collaborative IDE supporting 5 languages via Docker with 95% uptime',
        'Reduced response time by 40% with optimized REST APIs',
        '99.8% security compliance with JWT & RBAC for 100+ users',
        'Real-time collaboration with 1.2s latency using WebSockets'
      ],
      github: 'https://github.com/Git-Shashi',
      live: '#'
    },
    {
      title: 'IntelliChat - AI Assistant',
      tech: 'React, Node.js, OpenAI API, MongoDB',
      date: 'Jan 2025',
      points: [
        '500+ daily conversations with 4.8/5 satisfaction rating',
        '85% user retention rate and 3.2 sessions per user',
        '60% faster data retrieval with indexed MongoDB queries',
        '1.2s average response time with optimized API integration'
      ],
      github: 'https://github.com/Git-Shashi',
      live: '#'
    },
    {
      title: 'Hired - Job Portal',
      tech: 'React.js, Tailwind, Supabase, Clerk, PostgreSQL',
      date: 'Dec 2024',
      points: [
        '200+ active users with dual interfaces for seekers & recruiters',
        '40% increase in hiring efficiency with real-time tracking',
        '99% uptime with Clerk authentication & Supabase backend',
        '45% faster page loads with optimized UI components'
      ],
      github: 'https://github.com/Git-Shashi',
      live: 'https://hired-rose.vercel.app'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg shadow-sm z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-semibold text-gray-900 tracking-tight">
              Shashi Kumar
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.toLowerCase()
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fade-in-up">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="space-y-2 opacity-0 animate-fade-in-left">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shashi</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-700">Full-Stack MERN Developer</p>
                <p className="text-lg text-gray-600">Building scalable web applications & cloud solutions</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed max-w-2xl opacity-0 animate-fade-in-left delay-200">
                Computer Science student at IIIT Manipur with expertise in the MERN stack. 
                Passionate about creating innovative platforms that solve real-world problems. 
                Top 25% of class with hands-on experience in full-stack development and competitive programming.
              </p>

              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-left delay-300">
                <a
                  href="https://github.com/Git-Shashi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shashi-bhushan-kumar-796b53259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                >
                  <Mail size={20} />
                  Contact Me
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {[
                  { value: '1600+', label: 'LeetCode Rating', color: 'blue' },
                  { value: '400+', label: 'Problems Solved', color: 'purple' },
                  { value: '7.47', label: 'CPI / 10', color: 'green' },
                  { value: 'Top 25%', label: 'Class Rank', color: 'orange' }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className={`text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in-up delay-${(index + 4) * 100}`}
                  >
                    <div className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 opacity-0 animate-fade-in-right delay-200">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://avatars.githubusercontent.com/u/Git-Shashi"
                    alt="Shashi Kumar"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%232563eb' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' font-size='80' text-anchor='middle' dy='.3em' fill='white' font-family='Arial'%3ESK%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                  <div className="text-sm font-bold">Available for Hire</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <GraduationCap className="inline-block mr-3 text-blue-600" size={40} />
            Education
          </h2>
          <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 ${isVisible.about ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Indian Institute of Information Technology, Manipur</h3>
                <p className="text-lg text-blue-600 font-semibold mt-2">BTech Computer Science</p>
                <p className="text-gray-600 mt-1">Current CPI: 7.47/10 (Top 25% of class)</p>
              </div>
              <div className="text-gray-600 font-medium">
                Expected: June 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isVisible.skills ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Code className="inline-block mr-3 text-blue-600" size={40} />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={category} 
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${isVisible.skills ? `animate-fade-in-up delay-${index * 100}` : 'opacity-0'}`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-blue-600">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isVisible.experience ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Briefcase className="inline-block mr-3 text-blue-600" size={40} />
            Professional Experience
          </h2>
          <div className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-all duration-300 ${isVisible.experience ? 'animate-scale-in delay-200' : 'opacity-0'}`}>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Full-Stack MERN Developer Intern</h3>
                <p className="text-lg text-blue-600 font-semibold mt-1">Orbol Group, Software Development Division</p>
                <p className="text-gray-600">Ahmedabad, Remote/Part-time</p>
              </div>
              <div className="text-gray-600 font-medium">
                June 2025 – Aug 2025
              </div>
            </div>
            <ul className="space-y-3 mt-6">
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                <span className="text-blue-600 mt-1">▸</span>
                <span className="text-gray-700">Designed a MERN-based gaming platform with user and admin panels, integrating Clerk authentication, PhonePe payment gateway, and real-time leaderboards for enhanced user engagement</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                <span className="text-blue-600 mt-1">▸</span>
                <span className="text-gray-700">Connected Riot Games and FACEIT APIs for live player statistics and tournament data, enabling real-time game insights and competitive tracking features</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-200">
                <span className="text-blue-600 mt-1">▸</span>
                <span className="text-gray-700">Utilized Neon and Supabase for scalable backend architecture and database management; optimized frontend for SEO and performance, improving load times and search visibility</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isVisible.projects ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 ${isVisible.projects ? `animate-fade-in-up delay-${index * 100}` : 'opacity-0'}`}
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.tech}</p>
                  <p className="text-xs mt-2 opacity-75">{project.date}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700 hover:translate-x-1 transition-transform duration-200">
                        <span className="text-green-600 mt-1">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 hover:scale-105 transition-all duration-300 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 text-sm"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 ${isVisible.achievements ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Award className="inline-block mr-3 text-blue-600" size={40} />
            Achievements & Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${isVisible.achievements ? 'animate-fade-in-left delay-200' : 'opacity-0'}`}>
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">LeetCode Excellence</h3>
              <p className="text-gray-700 mb-4">
                Achieved 1600+ rating with 400+ problems solved, ranking in top 30% of active users
              </p>
              <a
                href="https://leetcode.com/u/_shashi_bhushan_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
              >
                View Profile <ExternalLink size={16} />
              </a>
            </div>
            <div className={`bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ${isVisible.achievements ? 'animate-fade-in-right delay-300' : 'opacity-0'}`}>
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">NPTEL Top 5%</h3>
              <p className="text-gray-700 mb-4">
                Top 5% in NPTEL Programming in Java course among thousands of learners nationwide
              </p>
              <a
                href="https://drive.google.com/file/d/1QLhbgkLqLLonIfILPc3qiieErBphO_xb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
              >
                View Certificate <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>Let's Connect!</h2>
          <p className={`text-xl mb-12 opacity-90 ${isVisible.contact ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: 'mailto:shashi847305@iiitmanipur.ac.in', icon: Mail, label: 'Email', value: 'shashi847305@iiitmanipur.ac.in', valueClass: 'text-sm' },
              { href: 'tel:+917782899732', icon: Phone, label: 'Phone', value: '+91 7782899732', valueClass: '' },
              { href: 'https://github.com/Git-Shashi', icon: Github, label: 'GitHub', value: '@Git-Shashi', valueClass: '' },
              { href: 'https://www.linkedin.com/in/shashi-bhushan-kumar-796b53259', icon: Linkedin, label: 'LinkedIn', value: 'Connect', valueClass: '' }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all duration-300 ${isVisible.contact ? `animate-scale-in delay-${(index + 3) * 100}` : 'opacity-0'}`}
              >
                <contact.icon className="mx-auto mb-3" size={32} />
                <div className="text-sm opacity-90">{contact.label}</div>
                <div className={`font-semibold mt-1 ${contact.valueClass}`}>{contact.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Shashi Bhushan Kumar. Built with React & Tailwind CSS
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with passion • Coded with precision
          </p>
        </div>
      </footer>
    </div>
  );
}