import { Rocket, Target, Lightbulb, Users } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'ar';
}

export default function About({ language }: AboutProps) {
  const content = {
    en: {
      badge: 'About Us',
      title: 'Pioneering the Digital Revolution',
      description:
        'APEX FUSION is a cutting-edge technology company dedicated to pushing the boundaries of innovation. We specialize in creating exceptional digital experiences through advanced programming, intuitive web design, immersive game development, innovative electronics solutions, and stunning 3D designs.',
      mission:
        'Our mission is to transform visionary ideas into reality, empowering businesses and individuals with technology that makes a difference.',
      values: [
        { icon: Rocket, title: 'Innovation First', text: 'Constantly pushing technological boundaries' },
        { icon: Target, title: 'Precision', text: 'Delivering excellence in every project' },
        { icon: Lightbulb, title: 'Creativity', text: 'Thinking beyond conventional solutions' },
        { icon: Users, title: 'Collaboration', text: 'Working together to achieve greatness' },
      ],
    },
    ar: {
      badge: 'من نحن',
      title: 'رواد الثورة الرقمية',
      description:
        'أبيكس فيوجن هي شركة تكنولوجيا متطورة مكرسة لدفع حدود الابتكار. نحن متخصصون في إنشاء تجارب رقمية استثنائية من خلال البرمجة المتقدمة، وتصميم الويب البديهي، وتطوير الألعاب الغامرة، وحلول الإلكترونيات المبتكرة، والتصاميم ثلاثية الأبعاد المذهلة.',
      mission:
        'مهمتنا هي تحويل الأفكار الرؤيوية إلى واقع، وتمكين الشركات والأفراد بالتكنولوجيا التي تحدث فرقاً.',
      values: [
        { icon: Rocket, title: 'الابتكار أولاً', text: 'دفع الحدود التكنولوجية باستمرار' },
        { icon: Target, title: 'الدقة', text: 'تقديم التميز في كل مشروع' },
        { icon: Lightbulb, title: 'الإبداع', text: 'التفكير خارج الحلول التقليدية' },
        { icon: Users, title: 'التعاون', text: 'العمل معاً لتحقيق العظمة' },
      ],
    },
  };

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 rounded-full text-sm font-semibold mb-4">
            {content[language].badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {content[language].description}
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8 mb-12 border border-cyan-200 dark:border-cyan-900/30">
          <p className="text-xl text-gray-700 dark:text-gray-200 text-center italic leading-relaxed">
            {content[language].mission}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content[language].values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
              >
                <div className="mb-4 relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
