import { ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  language: 'en' | 'ar';
}

export default function Hero({ language }: HeroProps) {
  const content = {
    en: {
      title: 'APEX FUSION',
      subtitle: 'Innovating the Future of Technology',
      description: 'Where creativity meets innovation. We transform ideas into cutting-edge digital solutions.',
      cta1: 'Get Started',
      cta2: 'Our Services',
    },
    ar: {
      title: 'أبيكس فيوجن',
      subtitle: 'نبتكر مستقبل التكنولوجيا',
      description: 'حيث يلتقي الإبداع بالابتكار. نحول الأفكار إلى حلول رقمية متطورة.',
      cta1: 'ابدأ الآن',
      cta2: 'خدماتنا',
    },
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/50 to-blue-900/50 dark:from-gray-950 dark:via-purple-950/80 dark:to-blue-950/80"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in-down">
          <div className="inline-flex items-center space-x-2 bg-cyan-400/10 backdrop-blur-sm border border-cyan-400/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">
              {language === 'en' ? 'Welcome to the Future' : 'مرحباً بك في المستقبل'}
            </span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-wider animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {content[language].title}
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light animate-fade-in-up">
          {content[language].subtitle}
        </p>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {content[language].description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">{content[language].cta1}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button
            onClick={scrollToServices}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-cyan-400/50 transition-all duration-300 hover:bg-cyan-400/20 hover:border-cyan-400 hover:scale-105"
          >
            {content[language].cta2}
          </button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
