import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
}

export default function Contact({ language }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const content = {
    en: {
      badge: 'Contact Us',
      title: "Let's Build Something Amazing",
      subtitle: 'Have a project in mind? Get in touch and let us bring your vision to life.',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'Your Email',
      messagePlaceholder: 'Tell us about your project...',
      sendButton: 'Send Message',
      sendingButton: 'Sending...',
      successMessage: 'Thank you! We will get back to you soon.',
      contactInfo: [
        { icon: Mail, label: 'Email', value: 'hello@apexfusion.tech' },
        { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
        { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
      ],
    },
    ar: {
      badge: 'اتصل بنا',
      title: 'لنبني شيئاً مذهلاً',
      subtitle: 'لديك مشروع في ذهنك؟ تواصل معنا ودعنا نحقق رؤيتك.',
      namePlaceholder: 'اسمك',
      emailPlaceholder: 'بريدك الإلكتروني',
      messagePlaceholder: 'أخبرنا عن مشروعك...',
      sendButton: 'إرسال الرسالة',
      sendingButton: 'جاري الإرسال...',
      successMessage: 'شكراً لك! سنعود إليك قريباً.',
      contactInfo: [
        { icon: Mail, label: 'البريد الإلكتروني', value: 'hello@apexfusion.tech' },
        { icon: Phone, label: 'الهاتف', value: '+1 (555) 123-4567' },
        { icon: MapPin, label: 'الموقع', value: 'سان فرانسيسكو، كاليفورنيا' },
      ],
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {language === 'en' ? 'Get in Touch' : 'ابقى على تواصل'}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {language === 'en'
                  ? "We're excited to hear about your project! Whether you need a complete solution or just want to discuss an idea, our team is ready to help you succeed."
                  : 'نحن متحمسون للاستماع عن مشروعك! سواء كنت بحاجة إلى حل كامل أو تريد فقط مناقشة فكرة، فريقنا جاهز لمساعدتك على النجاح.'}
              </p>
              <div className="space-y-4">
                {content[language].contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-4 rtl:space-x-reverse p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors duration-300"
                    >
                      <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">{info.label}</div>
                        <div className="text-gray-900 dark:text-white font-medium">{info.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'en' ? 'Name' : 'الاسم'}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={content[language].namePlaceholder}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'en' ? 'Email' : 'البريد الإلكتروني'}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={content[language].emailPlaceholder}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {language === 'en' ? 'Message' : 'الرسالة'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={content[language].messagePlaceholder}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>{isSubmitting ? content[language].sendingButton : content[language].sendButton}</span>
                  {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center animate-fade-in">
                  {content[language].successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
