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

  const advantages = [
    { icon: 'GraduationCap', title: 'Обучение', description: 'Первые дни обучения, в которые ты уже будешь получать ставку' },
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

  const workConditions = [
    { icon: 'Percent', title: 'До 70% с дохода', description: 'Прозрачная система выплат — большую часть дохода получаешь ты' },
    { icon: 'CalendarDays', title: 'Свободный график', description: 'Смены днём и ночью — выбираешь удобное время сама' },
    { icon: 'Wallet', title: 'Выплаты каждую неделю', description: 'Получай деньги регулярно, без задержек и скрытых условий' },
    { icon: 'Camera', title: 'Студия и оборудование', description: 'Профессиональная техника, свет и локации — всё за наш счёт' },
    { icon: 'UserRound', title: 'Личный менеджер', description: 'Наставник ведёт тебя от первой съёмки до стабильного дохода' },
    { icon: 'Lock', title: 'Полная анонимность', description: 'Гарантируем конфиденциальность и безопасность данных' }
  ];

  const levels = [
    { id: 'newbie', label: 'Новичок', rate: 1400 },
    { id: 'experienced', label: 'Опытный', rate: 2150 },
    { id: 'pro', label: 'Профи', rate: 2950 }
  ];
  const [calc, setCalc] = useState({ hoursPerDay: 6, daysPerWeek: 5, level: 'newbie' });
  const RATE_PER_HOUR = levels.find((l) => l.id === calc.level)?.rate ?? 1000;
  const weekly = calc.hoursPerDay * calc.daysPerWeek * RATE_PER_HOUR;
  const monthly = weekly * 4;
  const yearly = monthly * 12;
  const formatMoney = (n: number) => new Intl.NumberFormat('ru-RU').format(n) + ' ₽';

  const faq = [
    { q: 'Нужен ли опыт, чтобы стать моделью MBA?', a: 'Нет, мы принимаем и новичков. Для начинающих проводим обучение и помогаем собрать портфолио.' },
    { q: 'Сколько можно зарабатывать?', a: 'Доход зависит от загрузки и количества проектов. Мы помогаем выстроить стабильный поток заказов.' },
    { q: 'Какой график работы?', a: 'Гибкий — ты сама выбираешь съёмки, показы и мероприятия, в которых готова участвовать.' },
    { q: 'В каких городах вы работаете?', a: 'Основные проекты — в Москве, но есть возможности для удалённого и выездного сотрудничества.' }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold gradient-text">MBA</h1>
          <div className="hidden md:flex gap-8">
            <a href="#advantages" className="text-sm text-foreground/80 hover:text-primary transition-colors">Преимущества</a>
            <a href="#work" className="text-sm text-foreground/80 hover:text-primary transition-colors">Работа</a>
            <a href="#earnings" className="text-sm text-foreground/80 hover:text-primary transition-colors">Калькулятор</a>
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

      <section id="work" className="py-12 sm:py-20 px-4 sm:px-6 relative">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light mb-4">Работа <span className="gradient-text">моделью</span></h3>
            <p className="text-muted-foreground text-lg">Условия, на которых ты работаешь с нами</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {workConditions.map((item, index) => (
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
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Калькулятор заработка</p>
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-light">Сколько ты <span className="gradient-text">заработаешь</span></h3>
            <p className="text-muted-foreground text-lg mt-4">Подвигай ползунки и увидь свой потенциальный доход</p>
          </div>

          <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-12 glow">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <label className="text-sm text-muted-foreground block mb-3">Уровень</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    {levels.map((lvl) => (
                      <button
                        key={lvl.id}
                        onClick={() => setCalc({ ...calc, level: lvl.id })}
                        className={`glass rounded-xl py-3 px-2 text-sm transition-all duration-300 ${
                          calc.level === lvl.id
                            ? 'glow bg-primary/10 border-primary/50 gradient-text font-medium'
                            : 'text-muted-foreground hover:bg-white/5'
                        }`}
                      >
                        {lvl.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm text-muted-foreground">Часов в смене</label>
                    <span className="text-2xl font-light gradient-text">{calc.hoursPerDay} ч</span>
                  </div>
                  <input
                    type="range"
                    min={6}
                    max={10}
                    value={calc.hoursPerDay}
                    onChange={(e) => setCalc({ ...calc, hoursPerDay: Number(e.target.value) })}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <label className="text-sm text-muted-foreground">Дней в неделю</label>
                    <span className="text-2xl font-light gradient-text">{calc.daysPerWeek} дн</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={7}
                    value={calc.daysPerWeek}
                    onChange={(e) => setCalc({ ...calc, daysPerWeek: Number(e.target.value) })}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>

                <p className="text-xs text-muted-foreground">Расчеты ориентировочные, основанные на средних показателях заработка реальных сотрудников</p>
              </div>

              <div className="space-y-4">
                <div className="glass rounded-2xl p-6 flex justify-between items-center">
                  <span className="text-muted-foreground">В неделю</span>
                  <span className="text-xl sm:text-2xl font-light">{formatMoney(weekly)}</span>
                </div>
                <div className="glass rounded-2xl p-6 flex justify-between items-center">
                  <span className="text-muted-foreground">В месяц</span>
                  <span className="text-xl sm:text-2xl font-light">{formatMoney(monthly)}</span>
                </div>
                <div className="glass rounded-2xl p-6 flex justify-between items-center bg-primary/10 border-primary/50 glow">
                  <span className="text-foreground">В год</span>
                  <span className="text-2xl sm:text-3xl font-light gradient-text">{formatMoney(yearly)}</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-primary text-white hover:bg-primary/90 glow"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Хочу так зарабатывать
                </Button>
              </div>
            </div>
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