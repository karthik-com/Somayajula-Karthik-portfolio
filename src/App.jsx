import { useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EducationExperience from './components/EducationExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import StatsStreaks from './components/StatsStreaks';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const skillsRef = useRef(null);

  const handleNavigation = (section) => {
    const sections = {
      home: document.getElementById('home'),
      about: document.getElementById('about'),
      educationexperience: document.getElementById('education-experience'),
      skills: document.getElementById('skills'),
      statsstreaks: document.getElementById('stats-streaks'),
      projects: document.getElementById('projects'),
      contact: document.getElementById('contact'),

    };

    if (sections[section]) {
      sections[section].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      <Navbar onNavigate={handleNavigation} />
      <Hero onNavigate={handleNavigation} />
      <About />
      <EducationExperience />
      <Skills ref={skillsRef} />
      <Projects onNavigate={handleNavigation} />
      <StatsStreaks />
      <Contact />
      <Footer />
    </div>
  );
}
