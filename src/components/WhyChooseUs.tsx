import { Zap, Award, Clock, HeartHandshake } from 'lucide-react';

interface WhyChooseUsProps {
  language: 'en' | 'ar';
}

export default function WhyChooseUs({ language }: WhyChooseUsProps) {
  const content = {
    en: {
      badge: 'Why Choose Us',
      title: 'Your Success is Our Priority',
      subtitle: 'Experience the APEX FUSION difference',
      reasons: [
        {
          icon: Zap,
          title: 'Lightning Fast',
          description: 'Rapid development and deployment without compromising quality. We deliver projects on time, every time.',
          stat: '3x',
          statLabel: 'Faster Delivery',
        },
        {
          icon: Award,
          title: 'Award-Winning Quality',
          description: 'Industry-leading standards and best practices ensure exceptional results that exceed expectations.',
          stat: '100%',
          statLabel: 'Client Satisfaction',
        },
        {
          icon: Clock,
          title: '24/7 Support',
          description: "We're always here when you need us. Round-the-clock support ensures your success never sleeps.",
          stat: '24/7',
          statLabel: 'Availability',
        },
        {
          icon: HeartHandshake,
          title: 'Partnership Approach',
          description: 'We work alongside you as true partners, invested in your long-term success and growth.',
          stat: '500+',
          statLabel: 'Happy Clients',
        },
      ],
    },
    ar: {
      badge: 'لماذا تختارنا',
      title: 'نجاحك هو أولويتنا',
      subtitle: 'اختبر فرق APEX FUSION',
      reasons: [
        {
          icon: Zap,
          title: 'سريع كالبرق',
          description: 'تطوير ونشر سريع دون المساس بالجودة. نسلم المشاريع في الوقت المحدد، في كل مرة.',
          stat: '3x',
          statLabel: 'تسليم أسرع',
        },
        {
          icon: Award,
          title: 'جودة حائزة على جوائز',
          description: 'معايير وممارسات رائدة في الصناعة تضمن نتائج استثنائية تفوق التوقعات.',
          stat: '100%',
          statLabel: 'رضا العملاء',
        },
        {
          icon: Clock,
          title: 'دعم على مدار الساعة',
          description: 'نحن هنا دائماً عندما تحتاجنا. الدعم على مدار الساعة يضمن عدم توقف نجاحك.',
          stat: '24/7',
          statLabel: 'التوفر',
        },
        {
          icon: HeartHandshake,
          title: 'نهج الشراكة',
          description: 'نعمل جنباً إلى جنب معك كشركاء حقيقيين، مستثمرين في نجاحك ونموك على المدى الطويل.',
          stat: '500+',
          statLabel: 'عملاء سعداء',
        },
      ],
    },
  };

  return (
    <section id="why-us" className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30 dark:from-gray-950 dark:via-blue-950/50 dark:to-purple-950/50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
            {content[language].badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content[language].reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="p-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {reason.title}
                        </h3>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-cyan-400 mb-1">
                        {reason.stat}
                      </div>
                      <div className="text-sm text-gray-400">
                        {reason.statLabel}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-12 bg-white/5 backdrop-blur-sm rounded-full px-12 py-6 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-1">150+</div>
              <div className="text-sm text-gray-400">{language === 'en' ? 'Projects Completed' : 'مشروع مكتمل'}</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-1">98%</div>
              <div className="text-sm text-gray-400">{language === 'en' ? 'Success Rate' : 'معدل النجاح'}</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-1">5★</div>
              <div className="text-sm text-gray-400">{language === 'en' ? 'Client Rating' : 'تقييم العملاء'}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  );
}
