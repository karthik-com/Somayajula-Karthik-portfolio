export default function Skills() {
  
  const skillCategories = [
    {
      title: "Cybersecurity",
      color: "green",
      icon: "🔐",
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Malware Analysis",
        "Digital Forensics",
        "Web Application Security",
        "Metasploit",
        "OWASP",
        "Threat Analysis",
        "Cryptography",
        "Network Security",
        "Cloud Security",
        "Secure Communication"
      ]
    },
    {
      title: "Programming Languages",
      color: "blue",
      icon: "💻",
      skills: [
        "Python",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL"
      ]
    },
    {
      title: "Web Development",
      color: "purple",
      icon: "🌐",
      skills: [
        "React",
        "Django",
        "Flask",
        "Node.js",
        "Express",
        "Tailwind CSS",
        "Bootstrap",
        "RESTful APIs",
        "JWT Authentication",
        "OAuth 2.0"
      ]
    },
    {
      title: "Databases",
      color: "cyan",
      icon: "🗄️",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Database Design"
      ]
    },
    {
      title: "Tools & Platforms",
      color: "yellow",
      icon: "🛠️",
      skills: [
        "Git & GitHub",
        "Linux (Kali, Ubuntu)",
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "AWS",
        "Docker",
        "Postman",
        "VS Code",
        "Power BI"
      ]
    },
    {
      title: "Testing & QA",
      color: "pink",
      icon: "🧪",
      skills: [
        "Manual Testing",
        "Regression Testing",
        "Functional Testing",
        "API Testing",
        "Selenium",
        "Test Case Design",
        "Agile/Scrum"
      ]
    }
  ];

  // Tech Stack Logos for scrolling
  const techStackLogos = [
    { name: "Python", emoji: "🐍" },
    { name: "Django", emoji: "🔧" },
    { name: "React", emoji: "⚛️" },
    { name: "JavaScript", emoji: "✨" },
    { name: "Node.js", emoji: "🟢" },
    { name: "Flask", emoji: "🍶" },
    { name: "MySQL", emoji: "🗄️" },
    { name: "PostgreSQL", emoji: "🐘" },
    { name: "MongoDB", emoji: "🍃" },
    { name: "Git", emoji: "🔀" },
    { name: "Docker", emoji: "🐳" },
    { name: "AWS", emoji: "☁️" },
    { name: "Linux", emoji: "🐧" },
    { name: "Kali Linux", emoji: "⚔️" },
    { name: "Burp Suite", emoji: "🔍" },
    { name: "Metasploit", emoji: "🎯" },
    { name: "HTML/CSS", emoji: "🎨" },
    { name: "Tailwind CSS", emoji: "💨" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.slice(0, 2).map((category, idx) => (
            <div key={idx} className="border border-green-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm bg-green-500/10 border border-green-500/30 text-green-400 hover:bg-green-500/20 hover:border-green-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Web Development & Databases */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.slice(2, 4).map((category, idx) => (
            <div key={idx} className="border border-blue-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Testing */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.slice(4).map((category, idx) => (
            <div key={idx} className="border border-purple-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-4 py-2 rounded-full text-sm bg-purple-500/10 border border-purple-500/30 text-purple-400 hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* ============== TECH STACK SCROLLING SECTION ============== */}
        <div className="border border-green-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-green-400 mb-8 text-center">🚀 Tech Stack</h3>
          
          {/* Scrolling Container with Infinite Loop */}
          <div className="overflow-hidden">
            <style>{`
              @keyframes scroll-infinite {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              
              .scroll-container {
                display: flex;
                gap: 2rem;
                animation: scroll-infinite 30s linear infinite;
                width: max-content;
              }
              
              .scroll-container:hover {
                animation-play-state: paused;
              }
              
              .tech-item {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                padding: 0.75rem 1.5rem;
                background: linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 212, 255, 0.1) 100%);
                border: 1px solid rgba(0, 255, 136, 0.3);
                border-radius: 9999px;
                white-space: nowrap;
                flex-shrink: 0;
              }
              
              .tech-item:hover {
                background: linear-gradient(135deg, rgba(0, 255, 136, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%);
                border-color: rgba(0, 255, 136, 0.6);
                box-shadow: 0 0 15px rgba(0, 255, 136, 0.3);
              }
              
              .tech-emoji {
                font-size: 1.25rem;
              }
              
              .tech-name {
                color: #e0e7ff;
                font-size: 0.95rem;
                font-weight: 500;
              }
            `}</style>

            <div className="scroll-container">
              {/* First set */}
              {techStackLogos.map((tech, i) => (
                <div key={i} className="tech-item">
                  <span className="tech-emoji">{tech.emoji}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {techStackLogos.map((tech, i) => (
                <div key={`duplicate-${i}`} className="tech-item">
                  <span className="tech-emoji">{tech.emoji}</span>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Certifications & Courses */}
        <div className="mt-8 border border-blue-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-blue-400 mb-6">📚 Courses & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-300 mb-2">The Complete Full-Stack Web Development Bootcamp | Udemy</h4>
              <p className="text-sm text-gray-400">• HTML, CSS, Bootstrap, JavaScript, Node.js, React, SQL</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-300 mb-2">100 Days of Code: The Complete Python Pro Bootcamp | Udemy</h4>
              <p className="text-sm text-gray-400">• Python, OOPs, Web Scraping, Selenium, Data Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
