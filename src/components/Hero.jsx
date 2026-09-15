export default function Hero({ onNavigate }) {
  
  const headshotStyle = 'rounded';

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* HEADSHOT - LEFT SIDE */}
          <div className="flex justify-center">
            
            {headshotStyle === 'rounded' && (
              <div className="relative w-72 h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/headshot.png"
                    alt="Somayajula Karthik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* TEXT - RIGHT SIDE */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Somayajula Karthik
              </span>
            </h1>

            <p className="text-2xl md:text-3xl mb-4 text-gray-300 font-semibold">
              Cybersecurity Researcher <span className="text-green-400">&</span> Full-Stack Developer
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Building secure, scalable solutions through the intersection of web development and cybersecurity. 
              Passionate about threat analysis, secure authentication, and clean code. Currently pursuing M.Tech in Cyber Security.
            </p>

            <div className="flex gap-4 flex-wrap mb-8">
              <button
                onClick={() => onNavigate('projects')}
                className="px-8 py-3 bg-green-500/20 border border-green-500 text-green-400 rounded-lg hover:bg-green-500/30 transition font-semibold"
              >
                View Projects
              </button>
              <a
                href="https://github.com/karthik-com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-500/20 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/30 transition font-semibold"
              >
                GitHub
              </a>
              <a
                href="https://karthik-com.github.io/Somayajula-Karthik-Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-purple-500/20 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/30 transition font-semibold"
              >
                View My Resume
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

