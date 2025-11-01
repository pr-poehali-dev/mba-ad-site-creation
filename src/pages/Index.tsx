import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const [activeService, setActiveService] = useState(0);

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
      features: ['Работа в кадре', 'Актёрское мастерство', 'Фотогеничность', 'Эмоциональность']
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">MBA</h1>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-sm text-foreground/80 hover:text-primary transition-colors">Услуги</a>
            <a href="#about" className="text-sm text-foreground/80 hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="text-sm text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="outline" size="sm" className="border-primary/50 hover:bg-primary hover:text-white transition-all glow">
            Стать моделью
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.9]">
              Модельное<br />
              <span className="gradient-text">агентство</span><br />
              MBA
            </h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">Мы создаём будущее индустрии веб - моделинга, открывая таланты и строя карьеры высокого уровня.</p>

          </div>
          <div className="relative h-[600px] animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-3xl animate-glow-pulse" />
            <img 
              src="https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/bea289eb-6ab8-48cb-828f-2d4ee3352a27.jpg"
              alt="MBA Agency"
              className="relative w-full h-full object-cover rounded-3xl border border-white/10"
            />
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 relative">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Наши <span className="gradient-text">услуги</span></h3>
            <p className="text-muted-foreground text-lg">Профессиональный сервис мирового уровня</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-12">
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

          <div className="glass rounded-3xl p-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 glass rounded-full px-6 py-2">
                  <Icon name={services[activeService].icon as any} size={24} className="text-primary" />
                  <span className="text-sm text-muted-foreground">{services[activeService].title}</span>
                </div>
                <h4 className="text-4xl font-light leading-tight">
                  {services[activeService].description}
                </h4>
                <div className="grid grid-cols-2 gap-4 pt-4">
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
              <div className="relative h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl blur-3xl animate-glow-pulse" />
                <div className="relative h-full glass rounded-2xl flex items-center justify-center">
                  <Icon name={services[activeService].icon as any} size={120} className="text-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h3 className="text-5xl md:text-6xl font-light">О <span className="gradient-text">нас</span></h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            MBA — это модельное агентство с 15-летней историей успеха. Мы работаем с ведущими брендами 
            и дизайнерами, представляя лучших моделей на подиумах Милана, Парижа и Нью-Йорка.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="glass rounded-2xl p-8 space-y-4 hover:glow transition-all duration-300">
              <Icon name="Award" size={48} className="mx-auto text-primary" />
              <h4 className="text-4xl font-light gradient-text">50+</h4>
              <p className="text-muted-foreground">Международных наград</p>
            </div>
            <div className="glass rounded-2xl p-8 space-y-4 hover:glow transition-all duration-300">
              <Icon name="Users" size={48} className="mx-auto text-primary" />
              <h4 className="text-4xl font-light gradient-text">200+</h4>
              <p className="text-muted-foreground">Моделей в портфолио</p>
            </div>
            <div className="glass rounded-2xl p-8 space-y-4 hover:glow transition-all duration-300">
              <Icon name="Globe" size={48} className="mx-auto text-primary" />
              <h4 className="text-4xl font-light gradient-text">30+</h4>
              <p className="text-muted-foreground">Стран присутствия</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Свяжитесь с <span className="gradient-text">нами</span></h3>
            <p className="text-muted-foreground text-lg">Готовы начать карьеру в модельном бизнесе?</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 glass rounded-3xl p-8">
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
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white/5 border-white/10 text-foreground placeholder:text-muted-foreground focus:border-primary"
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
            <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 glow">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      <footer className="glass py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold gradient-text mb-4">MBA</h4>
              <p className="text-muted-foreground">Модельное агентство мирового уровня</p>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-foreground">Контакты</h5>
              <div className="space-y-2 text-muted-foreground">
                <p>info@mba-models.com</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-3 text-foreground">Социальные сети</h5>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-muted-foreground text-sm">
            © 2024 MBA Models. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}