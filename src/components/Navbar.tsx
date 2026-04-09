import { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: 'en' | 'ar';
  setLanguage: (value: 'en' | 'ar') => void;
}

export default function Navbar({ darkMode, setDarkMode, language, setLanguage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    en: ['Home', 'About', 'Services', 'Projects', 'Why Us', 'Contact'],
    ar: ['الرئيسية', 'من نحن', 'الخدمات', 'المشاريع', 'لماذا نحن', 'اتصل بنا'],
  };

  const scrollToSection = (index: number) => {
    const sections = ['hero', 'about', 'services', 'projects', 'why-us', 'contact'];
    const element = document.getElementById(sections[index]);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/10 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection(0)}>
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <span className="text-2xl font-bold text-white tracking-wider">
              APEX <span className="text-cyan-400">FUSION</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks[language].map((link, index) => (
              <button
                key={link}
                onClick={() => scrollToSection(index)}
                className="text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>

            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center space-x-1 group"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-white text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-lg">
          <div className="px-4 py-6 space-y-4">
            {navLinks[language].map((link, index) => (
              <button
                key={link}
                onClick={() => scrollToSection(index)}
                className="block w-full text-left text-gray-200 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
