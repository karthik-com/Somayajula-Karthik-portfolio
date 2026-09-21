export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Cybersecurity Focus */}
          <div className="border border-green-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <span className="text-3xl">🔐</span>
              Cybersecurity Focus
            </h3>
            <p className="text-gray-300 mb-4">
              Currently pursuing M.Tech in Cyber Security at Osmania University. 
              Specializing in penetration testing, vulnerability assessment, and malware analysis.
            </p>
            <p className="text-gray-400">
              Hands-on experience with security tools like Metasploit, Burp Suite, and Wireshark. 
              Passionate about threat analysis and building applications with security-first architecture.
            </p>
          </div>

          {/* Full-Stack Development */}
          <div className="border border-blue-500/20 rounded-lg p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-2">
              <span className="text-3xl">💻</span>
              Full-Stack Development
            </h3>
            <p className="text-gray-300 mb-4">
              Backend Engineer with 1+ year of professional experience in web development and QA testing. 
              Proficient in Django, React, and Node.js ecosystems.
            </p>
            <p className="text-gray-400">
              Built production-grade applications including secure email systems and ML-based bot detection. 
              Experienced in both manual testing and automation frameworks.
            </p>
          </div>
        </div>
        <div className="mt-12 border border-purple-500/30 rounded-lg p-8 bg-gradient-to-br from-purple-900/20 to-slate-800/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
            <span className="text-3xl">🎯</span>
            My Philosophy: Secure-First Development
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I approach every project from multiple perspectives: as a <span className="text-green-400 font-semibold">developer</span> building efficient solutions, 
            as a <span className="text-blue-400 font-semibold">tester</span> ensuring quality and reliability, 
            as a <span className="text-cyan-400 font-semibold">user</span> experiencing the application, 
            and crucially, from a <span className="text-purple-400 font-semibold">cybersecurity perspective</span> protecting against threats. 
            This holistic approach ensures that every web app, system, and solution I create is not just functional, but secure and reliable at its core.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="border border-green-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm text-center hover:border-green-500/50 transition-colors">
            <p className="text-4xl font-bold text-green-400 mb-2">UGC NET June 2026</p>
            <p className="text-gray-400">Score: 166/300</p>
            <p className="text-gray-400">Qualified for Assistant Professor & Admission to Ph.D</p>
          </div>
          <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-colors">
            <p className="text-4xl font-bold text-blue-400 mb-2">TG PGECET 2025</p>
            <p className="text-gray-400">Rank: 88</p>
            <p className="text-gray-400">Percentile: 99</p>
          </div>
          
        </div>

        </div>
    </section>
  );
}
