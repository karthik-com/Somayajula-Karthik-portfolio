
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education & Experience', href: '#education-experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Stats & Streaks', href: '#stats-streaks' },
    { name: 'Contact', href: '#contact' },
  ];

  const getInTouch = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/somayajula-karthik-b346821b5/',
      icon: '💼',
      color: 'text-blue-400'
    },
    {
      name: 'WhatsApp',
      href: `https://wa.me/917396252914?text=${encodeURIComponent("Hi Karthik! I'm impressed by your cybersecurity and full-stack development expertise. I'd like to discuss how we can collaborate to build more secure and reliable systems. When are you available for a quick chat?")}`,
      icon: '💬',
      color: 'text-cyan-400'
    },
    {
      name: 'Location',
      href: '#',
      icon: '📍',
      color: 'text-purple-400',
      isLocation: true
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900/50 to-slate-950 border-t border-green-500/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono">
              &lt;Karthik /&gt;
            </h3>
            <p className="text-gray-300 font-semibold mb-2">
              Cybersecurity Researcher & Full-Stack Developer
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building secure, scalable solutions through innovation and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              {getInTouch.map((item) => (
                <li key={item.name}>
                  {item.isLocation ? (
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-lg">{item.icon}</span>
                      <span className={`${item.color}`}>Hyderabad, Telangana</span>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition duration-300 text-sm group"
                    >
                      <span className={`text-lg ${item.color} group-hover:scale-110 transition`}>
                        {item.icon}
                      </span>
                      <span className="group-hover:underline">{item.name}</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-green-500/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Somayajula Karthik. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/somayajula-karthik-b346821b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xs"
            >
              LinkedIn
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="https://github.com/karthik-com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xs"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <a
              href={`https://wa.me/917396252914?text=${encodeURIComponent("Hi Karthik! I'm impressed by your cybersecurity and full-stack development expertise. I'd like to discuss how we can collaborate to build more secure and reliable systems. When are you available for a quick chat?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition text-xs"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}