import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Award, Briefcase, GraduationCap, Code, Brain, Menu, X, Download } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "Muhammad Ahmad";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Adult Income Prediction Model",
      tech: "Python, Machine Learning",
      description: "Created an ML model using preprocessing and feature engineering to predict income levels with high accuracy."
    },
    {
      title: "Electronics Inventory Dashboard",
      tech: "Power BI",
      description: "Designed an interactive dashboard displaying stock levels, shortages, and inventory trends for data-driven decision making."
    },
    {
      title: "Eco Friendly Habit Tracker",
      tech: "C#",
      description: "Developed a habit tracking app with user authentication, progress charts, reminders, and streak-based motivation features."
    },
    {
      title: "Hotel Management System",
      tech: "C++, OOP",
      description: "Built an OOP-based system for managing room bookings, reservations, and availability with efficient operations."
    }
  ];

  const skills = {
    "Programming": ["C", "C++", "Python", "C#", "SQL"],
    "ML / AI": ["Regression", "Classification", "Clustering", "NLP", "Feature Engineering"],
    "Data Analysis": ["EDA", "Data Cleaning", "Statistical Analysis", "Image Processing"],
    "Databases": ["PostgreSQL", "SQL Server", "Data Warehousing", "ETL"],
    "Visualization": ["Matplotlib", "Seaborn", "Power BI", "Tableau"],
    "Deep Learning": ["PyTorch", "ANN", "RNN"]
  };

  const handleDownloadCV = () => {
    const publicCvUrl = '/cv.pdf';
    fetch(publicCvUrl, { method: 'HEAD' }).then(res => {
      if (res.ok) {
        const link = document.createElement('a');
        link.href = publicCvUrl;
        link.download = 'Muhammad_Ahmad_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        const cvContent = `MUHAMMAD AHMAD
Lahore, Pakistan | +92 3264498774 | mahmadimran383@gmail.com

OBJECTIVE
Aspiring Data Scientist with hands-on experience in machine learning, data preprocessing, and analytics.

EXPERIENCE
Technical Intern | Nepta Solutions, UK (Remote) | Jun 2025 – Aug 2025
• Backend automation and integration tasks using C# and SAGE 50
• RESTful API workflows and system configurations

EDUCATION
Bachelor of Science in Data Science | FAST-NUCES, Lahore | 2023 – Present

SKILLS
Programming: C, C++, Python, C#, SQL
ML/AI: Regression, Classification, Clustering, NLP, Feature Engineering
Tools: PyTorch, Power BI, Tableau, PostgreSQL

CERTIFICATIONS
• Feature Engineering for Machine Learning - DataCamp
• Deep Learning with PyTorch - DataCamp
• IBM Machine Learning - Coursera`;

        const blob = new Blob([cvContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Muhammad_Ahmad_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      }
    }).catch(() => {
      const cvContent = `MUHAMMAD AHMAD
Lahore, Pakistan | +92 3264498774 | mahmadimran383@gmail.com

OBJECTIVE
Aspiring Data Scientist with hands-on experience in machine learning, data preprocessing, and analytics.

EXPERIENCE
Technical Intern | Nepta Solutions, UK (Remote) | Jun 2025 – Aug 2025
• Backend automation and integration tasks using C# and SAGE 50
• RESTful API workflows and system configurations

EDUCATION
Bachelor of Science in Data Science | FAST-NUCES, Lahore | 2023 – Present

SKILLS
Programming: C, C++, Python, C#, SQL
ML/AI: Regression, Classification, Clustering, NLP, Feature Engineering
Tools: PyTorch, Power BI, Tableau, PostgreSQL

CERTIFICATIONS
• Feature Engineering for Machine Learning - DataCamp
• Deep Learning with PyTorch - DataCamp
• IBM Machine Learning - Coursera`;

      const blob = new Blob([cvContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Muhammad_Ahmad_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
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
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MA</h1>
            <div className="hidden md:flex gap-8">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-blue-400 transition-colors">
                  {item}
                </button>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'].map(item => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="text-left hover:text-blue-400">
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
            <div className="relative flex-shrink-0">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl shadow-blue-500/50">
                <img src="/profile.jpg" alt="Muhammad Ahmad" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Data Scientist
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-slate-300 mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 min-h-[4rem] md:min-h-[5rem]">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {displayText}
                  {!isTypingComplete && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <p className={`text-xl md:text-2xl text-blue-300 mb-6 transition-all duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                Aspiring Data Scientist
              </p>
              <p className={`text-base text-slate-300 max-w-2xl mb-6 transition-all duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-blue-400 font-semibold">Data Scientist</span> specializing in <span className="text-cyan-400 font-semibold">data analysis</span> and <span className="text-purple-400 font-semibold">machine learning</span>, converting raw data into actionable insights with <span className="text-green-400 font-semibold">Python</span> and <span className="text-yellow-400 font-semibold">SQL</span>.
              </p>
              
              <div className={`flex flex-wrap justify-center md:justify-start gap-6 mb-6 transition-all duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={18} className="text-blue-400" />
                  <span>Lahore, Pakistan</span>
                </div>
                <a href="tel:+923264498774" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                  <Phone size={18} className="text-blue-400" />
                  <span>+92 326 4498774</span>
                </a>
              </div>

              <div className={`flex flex-wrap justify-center md:justify-start gap-4 mb-6 transition-all duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <a
                  href="https://github.com/Muhammad-Ahmad2511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hafiz-muhammad-ahmad-b76304273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="mailto:mahmadimran383@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-all hover:scale-105"
                >
                  <Mail size={20} />
                  Email
                </a>
              </div>

              <div className={`transition-all duration-1000 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <button onClick={handleDownloadCV} className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
                  <Download size={20} />
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Briefcase className="text-blue-400" />
            Experience
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Technical Intern</h3>
                <p className="text-xl text-slate-300">Nepta Solutions, United Kingdom</p>
              </div>
              <span className="text-slate-400 mt-2 md:mt-0">Jun 2025 – Aug 2025</span>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li>• Participated in backend automation and integration tasks using C# and SAGE 50</li>
              <li>• Assisted in exploring RESTful API workflows and system configurations</li>
              <li>• Collaborated remotely via Microsoft Teams for task coordination</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Code className="text-blue-400" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                <h3 className="text-xl font-bold text-blue-400 mb-2">{project.title}</h3>
                <p className="text-sm text-cyan-400 mb-3">{project.tech}</p>
                <p className="text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <Brain className="text-blue-400" />
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20">
                <h3 className="text-lg font-bold text-blue-400 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-500/20 rounded-full text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
            <GraduationCap className="text-blue-400" />
            Education & Certifications
          </h2>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl font-bold text-blue-400">Bachelor of Science in Data Science</h3>
                <p className="text-xl text-slate-300">FAST-NUCES, Lahore</p>
              </div>
              <span className="text-slate-400 mt-2 md:mt-0">2023 – Present</span>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-blue-500/20">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { name: "Feature Engineering for Machine Learning — DataCamp", link: "https://www.datacamp.com/statement-of-accomplishment/course/2c0a7a8b961475cb1c77d0a0289c5a3d870e6c0b?raw=1" },
                { name: "Deep Learning with PyTorch — DataCamp", link: "https://www.datacamp.com/statement-of-accomplishment/course/9eabbc32e0ca84d8f4a892be28c99fa1c06c19d6?raw=1" },
                { name: "IBM Machine Learning — Coursera", link: "https://www.coursera.org/account/accomplishments/specialization/certificate/SJFWK6SVPRFA" },
                { name: "Prompt Engineering with the OpenAI API — DataCamp", link: "https://www.datacamp.com/statement-of-accomplishment/course/e18d6c6bb8e10cd4cd046e0be8e8f8a8cded9148?raw=1" },
                { name: "Working with the OpenAI API — DataCamp", link: "https://www.datacamp.com/statement-of-accomplishment/course/b135f4db28f88d7627f1227a46517ee79d529882?raw=1" },
                { name: "Deep Learning and Reinforcement Learning — Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/M7W3YP1FABUB" },
                { name: "Exploratory Data Analysis for Machine Learning — Coursera", link: "https://www.coursera.org/account/accomplishments/certificate/C8RXZNE7K3SC" }
              ].map((cert, index) => (
                <a 
                  key={index} 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:bg-slate-700/30 p-2 rounded-lg transition-all group"
                >
                  <Award size={20} className="text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-slate-300 group-hover:text-blue-400 transition-colors">{cert.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:mahmadimran383@gmail.com" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-all hover:scale-105">
              Send Email
            </a>
            <a href="tel:+923264498774" className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-full font-semibold transition-all hover:scale-105">
              Call Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>© 2026 Muhammad Ahmad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}