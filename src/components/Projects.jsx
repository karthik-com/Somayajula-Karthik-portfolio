export default function Projects() {
  const projects = [
    {
      title: "Quantum Secure Email Client Application",
      icon: "🔐",
      description: "Developed a secure email communication application using Quantum Key Distribution (QKD) simulation with the BB84 protocol for secure key generation.",
      features: [
        "Quantum Key Distribution (QKD) simulation using Qiskit",
        "AES encryption in GCM mode for confidentiality",
        "OTP-based receiver verification via AWS SNS",
        "JWT-based user authentication",
        "Responsive email interface with React + Vite"
      ],
      tech: ["Python", "Django", "React", "Vite", "Tailwind CSS", "MongoDB", "JWT", "Qiskit", "AWS SNS"],
      github: "https://github.com/karthik-com/QuMail-Quantum-Secure-Email-Application",
      highlights: "🏆 Advanced cryptography implementation"
    },
    {
      title: "Web Application Security Assessment & VAPT",
      icon: "🛡️",
      description: "Conducted Attack Surface Management (ASM) of the college web infrastructure to identify and map publicly exposed assets, services, and potential attack surfaces.",
      features: [
        "Vulnerability assessment and penetration testing on authorized web assets",
        "Identification of misconfigurations, outdated software, and potential attack vectors",
        "Detailed reporting of findings with remediation recommendations",
        "Use of tools like Nmap, Burp Suite, and OWASP ZAP"
      ],
      tech: ["Linux(Kali)", "Nmap", "Subfinder", "Amass", "Nuclei", "Nikto"],
      
      highlights: "🔍 Comprehensive web security assessment"
    },
    {
      title: "Image Steganography using LSB",
      icon: "🖼️",
      description: "Developed a secure web application to hide and retrieve secret messages within image files using LSB (Least Significant Bit) technique.",
      features: [
        "User authentication system",
        "Secure file handling and processing",
        "LSB encoding/decoding algorithm",
        "Bootstrap-based responsive UI"
      ],
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
      github: "https://github.com/karthik-com/Image_Steganography_using_LSB_python_django",
      highlights: "🔒 Secure Data Hiding"
    },
    {
      title: "Tweet-Based Bot Detection using Big Data Analytics",
      icon: "🤖",
      description: "Built an ML-based system to classify tweets as bot-generated or human-generated using advanced machine learning algorithms.",
      features: [
        "95% accuracy using Naive Bayes and SVM",
        "Big Data processing with Pandas & Scikit-learn",
        "Django backend with RESTful APIs",
        "Data visualization dashboard"
      ],
      tech: ["Python", "Django", "Machine Learning", "Pandas", "Scikit-learn", "HTML", "CSS"],
      github: "https://github.com/karthik-com/Tweet-Based-Bot-Detection-using-Big-Data-Analytics",
      highlights: "🏆 95% Accuracy | Big Data Analytics"
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="border border-green-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:-translate-y-3 transition-all duration-300 hover:border-green-500/50 hover:shadow-[0_10px_30px_rgba(0,255,136,0.1)]"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{project.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-400 mb-1">{project.title}</h3>
                  <p className="text-xs text-green-300/60">{project.highlights}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400 mt-1">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs bg-green-500/10 border border-green-500/30 text-green-300 px-3 py-1 rounded-full hover:bg-green-500/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-sm font-semibold"
              >
                <span>View on GitHub</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
