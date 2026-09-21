export default function EducationExperience() {
  return (
    <section id="education-experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Education & Professional Experience
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT COLUMN - EDUCATION */}
          <div>
            <h3 className="text-3xl font-bold text-green-400 mb-8 flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              Education
            </h3>

            <div className="space-y-6">
              {/* M.Tech */}
              <div className="border border-green-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-1">M.Tech in Cyber Security</h4>
                    <p className="text-gray-400 font-semibold">University College of Engineering</p>
                    <p className="text-gray-400 font-semibold">Osmania University</p>
                  </div>
                  <span className="text-1xl text-gray-400 whitespace-nowrap">Oct 2025 - Present</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-green-400">9.0</span>
                  <span className="text-2xl text-gray-400">CGPA</span>
                </div>
                <p className="text-sm text-gray-300">
                  Coursework: Malware Analysis, Penetration Testing, Vulnerability Assessment, Web Security
                </p>
              </div>

              {/* B.Tech */}
              <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-1">B.Tech in Computer Science</h4>
                    <p className="text-gray-300 font-semibold">Anurag College of Engineering</p>
                  </div>
                  <span className="text-1xl text-gray-400 whitespace-nowrap">Aug 2019 - July 2023</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl font-bold text-blue-400">7.0</span>
                  <span className="text-2xl text-gray-400">CGPA</span>
                </div>
                <p className="text-sm text-gray-300">
                  Coursework: Data Structures, DBMS, Operating Systems, Problem Solving, Algorithms
                </p>
              </div>

              {/* Intermediate */}
              <div className="border border-purple-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-purple-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-purple-400 mb-1">Intermediate (12th Grade)</h4>
                    <p className="text-gray-300 font-semibold">Narayana Junior College</p>
                  </div>
                  <span className="text-1xl text-gray-400 whitespace-nowrap">June 2017 - May 2019</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-purple-400">9.5</span>
                  <span className="text-2xl text-gray-400">CGPA</span>
                </div>
              </div>

              {/* High School */}
              <div className="border border-cyan-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-cyan-400 mb-1">Secondary (10th Grade)</h4>
                    <p className="text-gray-300 font-semibold">Brilliant Grammar High School</p>
                  </div>
                  <span className="text-1xl text-gray-400 whitespace-nowrap">June 2016 - May 2017</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-cyan-400">9.0</span>
                  <span className="text-2xl text-gray-400">CGPA</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - PROFESSIONAL EXPERIENCE */}
          <div>
            <h3 className="text-3xl font-bold text-blue-400 mb-8 flex items-center gap-3">
              <span className="text-4xl">💼</span>
              Professional Experience
            </h3>

            <div className="space-y-6">
              {/* Manual QA Engineer */}
              <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-blue-400 mb-1">Manual QA Engineer</h4>
                    <p className="text-gray-300 font-semibold">Mainavi Global Solutions, Hyderabad</p>
                  </div>
                  <span className="text-1xl text-gray-400 whitespace-nowrap">Nov 2024 - Oct 2025</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Tested web and mobile applications across multiple browsers and devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Executed manual test cases, performed regression and smoke testing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Collaborated with developers and product managers in Agile/Scrum teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Logged detailed bug reports with screenshots and reproduction steps</span>
                  </li>
                </ul>
              </div>

              {/* Web Developer Intern */}
              <div className="border border-green-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm hover:border-green-500/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-1">Web Developer Intern</h4>
                    <p className="text-gray-300 font-semibold">Baskethunt Private Limited, Remote</p>
                  </div>
                  <span className="text-1xl text-gray-400 whitespace-nowrap">May 2022 - Aug 2022</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Customized and maintained Moodle and WordPress platforms for educational content delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Implemented plugins, updated themes, and configured LMS modules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Collaborated with content creators and IT teams to streamline workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Enhanced user experience through site improvements and optimization</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="border border-green-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm text-center hover:border-green-500/50 transition-colors">
            <p className="text-4xl font-bold text-green-400 mb-2">1+</p>
            <p className="text-gray-400">Years of Professional Experience</p>
          </div>
          <div className="border border-blue-500/20 rounded-lg p-6 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm text-center hover:border-blue-500/50 transition-colors">
            <p className="text-4xl font-bold text-blue-400 mb-2">10+</p>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
