import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home', icon: '🏠' },
    { name: 'About', id: 'about', icon: '👤' },
    { name: 'Education & Experience', id: 'education-experience', icon: '🎓' },
    { name: 'Skills', id: 'skills', icon: '💻' },
    { name: 'Projects', id: 'projects', icon: '🚀' },
    { name: 'Stats & Streaks', id: 'stats-streaks', icon: '📊' }, 
    { name: 'Contact', id: 'contact', icon: '📧' }
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-green-500/10'
          : 'bg-gradient-to-b from-slate-950 to-slate-950/50'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href=""
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold font-mono"
        >
          <span className="text-green-400">&lt;</span>
          <span className="text-white">Karthik</span>
          <span className="text-green-400"> /&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-400 hover:text-green-400 transition font-semibold flex items-center gap-2 text-sm"
              title={link.name}
            >
              <span>{link.icon}</span>
              <span className="hidden lg:inline">{link.name}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-green-400 text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-green-500/10 py-4 px-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-400 hover:text-green-400 transition font-semibold text-left py-2 flex items-center gap-3"
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}