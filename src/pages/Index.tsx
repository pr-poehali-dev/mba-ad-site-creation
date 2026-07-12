import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://functions.poehali.dev/3ec54b6c-3e0e-4583-865c-299314ef0c81', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', telegram: '', phone: '', message: '' });
      } else {
        console.error('Ошибка отправки:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const [activeService, setActiveService] = useState(0);

  const advantages = [
    { icon: 'GraduationCap', title: 'Обучение', description: 'Бесплатные курсы по подиуму, съёмке и работе с брендами' },
    { icon: 'Users', title: 'Комьюнити', description: 'Дружная команда моделей и менторов, которые всегда поддержат' },
    { icon: 'TrendingUp', title: 'Карьерный рост', description: 'Строим долгосрочную карьеру, а не разовые проекты' },
    { icon: 'Clock', title: 'Гибкий график', description: 'Сама планируешь съёмки и показы под свой ритм жизни' },
    { icon: 'ShieldCheck', title: 'Надёжность', description: 'Официальное сотрудничество и прозрачные условия' },
    { icon: 'Heart', title: 'Забота', description: 'Индивидуальный подход к каждой модели агентства' }
  ];

  const steps = [
    { step: '01', title: 'Оставь заявку', description: 'Заполни форму на сайте — это займёт пару минут' },
    { step: '02', title: 'Собеседование', description: 'Познакомимся, расскажем про условия и ответим на вопросы' },
    { step: '03', title: 'Обучение', description: 'Пройдёшь базовую подготовку с нашими наставниками' },
    { step: '04', title: 'Старт карьеры', description: 'Первые кастинги, съёмки и показы с поддержкой агентства' }
  ];

  const faq = [
    { q: 'Нужен ли опыт, чтобы стать моделью MBA?', a: 'Нет, мы принимаем и новичков. Для начинающих проводим обучение и помогаем собрать портфолио.' },
    { q: 'Сколько можно зарабатывать?', a: 'Доход зависит от загрузки и количества проектов. Мы помогаем выстроить стабильный поток заказов.' },
    { q: 'Какой график работы?', a: 'Гибкий — ты сама выбираешь съёмки, показы и мероприятия, в которых готова участвовать.' },
    { q: 'В каких городах вы работаете?', a: 'Основные проекты — в Москве, но есть возможности для удалённого и выездного сотрудничества.' }
  ];

  const services = [
    {
      id: 0,
      icon: 'Star',
      title: 'Model Management',
      description: 'Профессиональное продвижение моделей',
      features: ['Портфолио', 'Фотосессии', 'Большой опыт', 'Развитие карьеры']
    },
    {
      id: 1,
      icon: 'Sparkles',
      title: 'Brand Partnerships',
      description: 'Сотрудничество с опытными людьми и крупными компаниями',
      features: []
    },
    {
      id: 2,
      icon: 'Briefcase',
      title: 'Talent Development',
      description: 'Комплексное обучение и развитие профессиональных навыков',
      features: ['Работа в кадре', 'Индивидуальный подход', 'Фотогеничность', 'Эмоциональность']
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold gradient-text">MBA</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="text-sm text-foreground/80 hover:text-primary transition-colors">Преимущества</a>
            <a href="#earnings" className="text-sm text-foreground/80 hover:text-primary transition-colors">Заработок</a>
            <a href="#steps" className="text-sm text-foreground/80 hover:text-primary transition-colors">Как начать</a>
            <a href="#about" className="text-sm text-foreground/80 hover:text-primary transition-colors">О нас</a>
            <a href="#faq" className="text-sm text-foreground/80 hover:text-primary transition-colors">FAQ</a>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="border-primary/50 hover:bg-primary hover:text-white transition-all glow text-xs sm:text-sm px-3 sm:px-4"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="hidden sm:inline">Стать моделью</span>
            <span className="sm:hidden">Заявка</span>
          </Button>
        </div>
      </nav>

      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-[0.9]">
              Модельное<br />
              <span className="gradient-text">агентство</span><br />
              MBA
            </h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">Мы создаём будущее индустрии веб - моделинга, открывая таланты и строя карьеры высокого уровня.</p>

          </div>
          <div className="relative h-[300px] sm:h-[400px] md:h-[600px] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl animate-glow-pulse" />
            <img 
              src="https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/18a7457a-f032-4619-9568-623c8c738840.jpg"
              alt="MBA Agency"
              className="relative w-full h-full object-cover rounded-3xl border border-white/10"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4">Наши <span className="gradient-text">услуги</span></h3>
            <p className="text-muted-foreground text-lg">Профессиональный сервис мирового уровня</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`glass rounded-2xl p-6 text-left transition-all duration-300 ${
                  activeService === service.id 
                    ? 'glow bg-primary/10 border-primary/50' 
                    : 'hover:bg-white/5'
                }`}
              >
                <Icon 
                  name={service.icon as any} 
                  size={32} 
                  className={`mb-4 transition-colors ${
                    activeService === service.id ? 'text-primary' : 'text-muted-foreground'
                  }`} 
                />
                <h4 className={`font-medium mb-2 transition-colors ${
                  activeService === service.id ? 'gradient-text' : 'text-foreground'
                }`}>
                  {service.title}
                </h4>
              </button>
            ))}
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-12 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-2">
                  <Icon name={services[activeService].icon as any} size={24} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{services[activeService].title}</span>
                </div>
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-light leading-tight">
                  {services[activeService].description}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-4">
                  {services[activeService].features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary glow" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[200px] sm:h-[300px] md:h-[400px] hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-3xl animate-glow-pulse" />
                <div className="relative h-full glass rounded-2xl flex items-center justify-center">
                  <Icon name={services[activeService].icon as any} size={120} className="text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4">Почему <span className="gradient-text">MBA</span></h3>
            <p className="text-muted-foreground text-lg">Всё, что нужно для успешной карьеры модели</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {advantages.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 sm:p-8 hover:bg-white/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h4 className="font-medium text-lg mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="earnings" className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="glass rounded-2xl sm:rounded-3xl p-8 sm:p-16 text-center space-y-6 glow">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Условия сотрудничества</p>
            <h3 className="text-4xl sm:text-6xl md:text-7xl font-light">
              Зарабатывай <span className="gradient-text">от 1 800 000</span><br className="hidden sm:block" /> руб. в год
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Доход растёт вместе с твоим опытом: съёмки, показы, реклама и сотрудничество с брендами. Мы даём стабильный поток проектов и прозрачные условия оплаты.
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>

      <section id="steps" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4">Как <span className="gradient-text">начать</span></h3>
            <p className="text-muted-foreground text-lg">Всего 4 шага до старта карьеры модели</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 sm:p-8 relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl sm:text-5xl font-light gradient-text">{item.step}</span>
                <h4 className="font-medium text-lg mt-4 mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-light">О <span className="gradient-text">нас</span></h3>
          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">MBA — это модельное агентство с многолетней историей успеха. К каждому сотруднику у нас индивидуальный подход, поэтому мы доводим до результата даже самого начинающего.
Измени свою жизнь и раскорми свой кошелек прямо сейчас!</p>
        </div>
      </section>

      <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] -translate-y-1/2" />

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4">Частые <span className="gradient-text">вопросы</span></h3>
            <p className="text-muted-foreground text-lg">Ответы на то, что чаще всего спрашивают</p>
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4">Свяжитесь с <span className="gradient-text">нами</span></h3>
            <p className="text-muted-foreground text-lg">Готовы начать карьеру в модельном бизнесе?</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 glass rounded-2xl sm:rounded-3xl p-6 sm:p-8">
            <div>
              <Input 
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <Input 
                type="text"
                placeholder="Telegram (@username)"
                value={formData.telegram}
                onChange={(e) => setFormData({...formData, telegram: e.target.value})}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
                required
              />
            </div>
            <div>
              <Input 
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Расскажите о себе"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary min-h-[120px]"
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary text-white hover:bg-primary/90 glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
            </Button>
            {submitStatus === 'success' && (
              <p className="text-center text-green-500">Заявка успешно отправлена!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-500">Ошибка отправки. Попробуйте позже.</p>
            )}
          </form>
        </div>
      </section>

      <footer className="glass py-8 sm:py-12 px-4 sm:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold gradient-text mb-4">MBA</h4>
              <p className="text-muted-foreground">Премиальное модельное агенство</p>
            </div>


          </div>
          <div className="border-t border-white/5 pt-8 text-center text-muted-foreground text-sm">© 2023 MBA Corp. Все права защищены.</div>
        </div>
      </footer>
    </div>
  );
}