import { Code2, Globe, Gamepad2, Cpu, Box } from 'lucide-react';

interface ServicesProps {
  language: 'en' | 'ar';
}

export default function Services({ language }: ServicesProps) {
  const content = {
    en: {
      badge: 'Our Services',
      title: 'What We Do Best',
      subtitle: 'Comprehensive technology solutions tailored to your needs',
      services: [
        {
          icon: Code2,
          title: 'Programming & Software Development',
          description: 'Custom software solutions built with cutting-edge technologies and best practices.',
          features: ['Full-stack Development', 'API Integration', 'Code Optimization', 'System Architecture'],
          color: 'from-cyan-400 to-blue-600',
        },
        {
          icon: Globe,
          title: 'Web Development',
          description: 'Responsive, fast, and beautiful websites that drive results and engage users.',
          features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'Modern Frameworks'],
          color: 'from-blue-500 to-purple-600',
        },
        {
          icon: Gamepad2,
          title: 'Game Development (Godot)',
          description: 'Immersive gaming experiences crafted with the powerful Godot engine.',
          features: ['2D/3D Games', 'Physics Systems', 'Multiplayer', 'Cross-platform'],
          color: 'from-purple-500 to-pink-600',
        },
        {
          icon: Cpu,
          title: 'Arduino & Prototyping',
          description: 'Innovative electronics solutions and hardware prototypes for IoT and automation.',
          features: ['IoT Solutions', 'Sensor Integration', 'Automation', 'Custom PCB Design'],
          color: 'from-green-400 to-cyan-600',
        },
        {
          icon: Box,
          title: '3D Design & Modeling',
          description: 'Stunning 3D models and visualizations for any industry or application.',
          features: ['Product Modeling', 'Animations', 'Rendering', 'AR/VR Assets'],
          color: 'from-orange-400 to-red-600',
        },
      ],
    },
    ar: {
      badge: 'خدماتنا',
      title: 'ما نقوم به بشكل أفضل',
      subtitle: 'حلول تكنولوجية شاملة مصممة خصيصاً لاحتياجاتك',
      services: [
        {
          icon: Code2,
          title: 'البرمجة وتطوير البرمجيات',
          description: 'حلول برمجية مخصصة مبنية بأحدث التقنيات وأفضل الممارسات.',
          features: ['التطوير الكامل', 'تكامل واجهات البرمجة', 'تحسين الكود', 'بنية النظام'],
          color: 'from-cyan-400 to-blue-600',
        },
        {
          icon: Globe,
          title: 'تطوير الويب',
          description: 'مواقع متجاوبة وسريعة وجميلة تحقق النتائج وتجذب المستخدمين.',
          features: ['تصميم متجاوب', 'تحسين محركات البحث', 'ضبط الأداء', 'أطر عمل حديثة'],
          color: 'from-blue-500 to-purple-600',
        },
        {
          icon: Gamepad2,
          title: 'تطوير الألعاب (Godot)',
          description: 'تجارب ألعاب غامرة صُنعت بمحرك Godot القوي.',
          features: ['ألعاب 2D/3D', 'أنظمة فيزيائية', 'متعدد اللاعبين', 'متعدد المنصات'],
          color: 'from-purple-500 to-pink-600',
        },
        {
          icon: Cpu,
          title: 'أردوينو والنماذج الأولية',
          description: 'حلول إلكترونية مبتكرة ونماذج أولية للأجهزة لإنترنت الأشياء والأتمتة.',
          features: ['حلول إنترنت الأشياء', 'تكامل الحساسات', 'الأتمتة', 'تصميم PCB مخصص'],
          color: 'from-green-400 to-cyan-600',
        },
        {
          icon: Box,
          title: 'التصميم والنمذجة ثلاثية الأبعاد',
          description: 'نماذج ثلاثية الأبعاد مذهلة وتصورات لأي صناعة أو تطبيق.',
          features: ['نمذجة المنتجات', 'الرسوم المتحركة', 'العرض', 'أصول AR/VR'],
          color: 'from-orange-400 to-red-600',
        },
      ],
    },
  };

  return (
    <section id="services" className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold mb-4">
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
          {content[language].services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                     style={{ backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[0].replace('from-', '')}, ${service.color.split(' ')[1].replace('to-', '')})` }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
