import { useEffect, useState } from "react";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const updateActiveNav = () => {
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    return () => window.removeEventListener('scroll', updateActiveNav);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-sm font-medium tracking-wider">
            <span className="text-accent">↑</span>
          </div>
          <div className="flex space-x-8 text-sm font-medium tracking-wider uppercase">
            <button 
              onClick={() => scrollToSection('projects')}
              className={`hover:text-accent transition-colors ${activeSection === 'projects' ? 'text-accent' : ''}`}
              data-testid="nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-accent transition-colors ${activeSection === 'about' ? 'text-accent' : ''}`}
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('resume')}
              className={`hover:text-accent transition-colors ${activeSection === 'resume' ? 'text-accent' : ''}`}
              data-testid="nav-resume"
            >
              Resume
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-accent transition-colors ${activeSection === 'contact' ? 'text-accent' : ''}`}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
