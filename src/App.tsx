import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatedBackground darkMode={darkMode} />
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <Hero language={language} />
      <About language={language} />
      <Services language={language} />
      <Projects language={language} />
      <WhyChooseUs language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
