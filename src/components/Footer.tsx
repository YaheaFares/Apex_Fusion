import { Zap, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

export default function Footer({ language }: FooterProps) {
  const content = {
    en: {
      description: 'Pioneering the future of technology with innovative solutions and creative excellence.',
      quickLinks: 'Quick Links',
      services: 'Services',
      social: 'Connect With Us',
      copyright: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by APEX FUSION',
      links: {
        about: 'About Us',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
      },
      servicesList: {
        programming: 'Programming',
        web: 'Web Development',
        games: 'Game Development',
        arduino: 'Arduino & IoT',
        design: '3D Design',
      },
    },
    ar: {
      description: 'نحن رواد مستقبل التكنولوجيا بحلول مبتكرة وتميز إبداعي.',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      social: 'تواصل معنا',
      copyright: 'جميع الحقوق محفوظة.',
      madeWith: 'صنع بـ',
      by: 'بواسطة APEX FUSION',
      links: {
        about: 'من نحن',
        services: 'الخدمات',
        projects: 'المشاريع',
        contact: 'اتصل بنا',
      },
      servicesList: {
        programming: 'البرمجة',
        web: 'تطوير الويب',
        games: 'تطوير الألعاب',
        arduino: 'أردوينو وإنترنت الأشياء',
        design: 'التصميم ثلاثي الأبعاد',
      },
    },
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'Github' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50"></div>
              </div>
              <span className="text-2xl font-bold tracking-wider">
                APEX <span className="text-cyan-400">FUSION</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              {content[language].description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {content[language].quickLinks}
            </h3>
            <ul className="space-y-3">
              {[
                { label: content[language].links.about, id: 'about' },
                { label: content[language].links.services, id: 'services' },
                { label: content[language].links.projects, id: 'projects' },
                { label: content[language].links.contact, id: 'contact' },
              ].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {content[language].services}
            </h3>
            <ul className="space-y-3">
              {Object.values(content[language].servicesList).map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} APEX FUSION. {content[language].copyright}
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>{content[language].madeWith}</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>{content[language].by}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  );
}
