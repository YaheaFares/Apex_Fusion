import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  language: 'en' | 'ar';
}

export default function Projects({ language }: ProjectsProps) {
  const content = {
    en: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      subtitle: 'Showcasing our latest innovations and successful implementations',
      projects: [
        {
          title: 'E-Commerce Platform',
          category: 'Web Development',
          description: 'Full-stack e-commerce solution with real-time inventory and payment integration.',
          image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          title: 'Smart Home System',
          category: 'Arduino & IoT',
          description: 'IoT-based home automation with mobile app control and voice commands.',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Arduino', 'IoT', 'React Native'],
        },
        {
          title: 'Adventure RPG Game',
          category: 'Game Development',
          description: 'Immersive 2D RPG with dynamic combat system built in Godot engine.',
          image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Godot', 'GDScript', '2D'],
        },
        {
          title: 'Product Visualizer',
          category: '3D Design',
          description: 'Interactive 3D product configurator with real-time rendering.',
          image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Blender', 'Three.js', 'WebGL'],
        },
        {
          title: 'Corporate Website',
          category: 'Web Design',
          description: 'Modern corporate website with stunning animations and SEO optimization.',
          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['React', 'Tailwind', 'Next.js'],
        },
        {
          title: 'AI Assistant App',
          category: 'Software Development',
          description: 'Intelligent personal assistant with natural language processing capabilities.',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Python', 'AI/ML', 'React'],
        },
      ],
    },
    ar: {
      badge: 'المشاريع',
      title: 'المشاريع المميزة',
      subtitle: 'عرض أحدث ابتكاراتنا والتنفيذات الناجحة',
      projects: [
        {
          title: 'منصة التجارة الإلكترونية',
          category: 'تطوير الويب',
          description: 'حل تجارة إلكترونية متكامل مع مخزون فوري وتكامل الدفع.',
          image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['React', 'Node.js', 'PostgreSQL'],
        },
        {
          title: 'نظام المنزل الذكي',
          category: 'أردوينو وإنترنت الأشياء',
          description: 'أتمتة منزلية قائمة على إنترنت الأشياء مع تحكم بالتطبيق والأوامر الصوتية.',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Arduino', 'IoT', 'React Native'],
        },
        {
          title: 'لعبة مغامرات RPG',
          category: 'تطوير الألعاب',
          description: 'لعبة RPG ثنائية الأبعاد غامرة مع نظام قتال ديناميكي في محرك Godot.',
          image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Godot', 'GDScript', '2D'],
        },
        {
          title: 'معاين المنتجات',
          category: 'التصميم ثلاثي الأبعاد',
          description: 'أداة تكوين منتجات تفاعلية ثلاثية الأبعاد مع عرض فوري.',
          image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Blender', 'Three.js', 'WebGL'],
        },
        {
          title: 'موقع الشركة',
          category: 'تصميم الويب',
          description: 'موقع شركة حديث مع رسوم متحركة مذهلة وتحسين لمحركات البحث.',
          image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['React', 'Tailwind', 'Next.js'],
        },
        {
          title: 'تطبيق مساعد الذكاء الاصطناعي',
          category: 'تطوير البرمجيات',
          description: 'مساعد شخصي ذكي بإمكانيات معالجة اللغة الطبيعية.',
          image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          tags: ['Python', 'AI/ML', 'React'],
        },
      ],
    },
  };

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-400/10 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold mb-4">
            {content[language].badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-colors duration-300">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-purple-400 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
