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

  const gallery = [
    {
      id: 1,
      title: 'Elegance',
      image: 'https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/ff443170-6c5e-4a05-be56-99590efec85d.jpg',
      category: 'Abstract Art'
    },
    {
      id: 2,
      title: 'Geometry',
      image: 'https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/90b09892-9cee-4d37-8709-af48fdeaffc1.jpg',
      category: 'Modern Design'
    },
    {
      id: 3,
      title: 'Flow',
      image: 'https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/c4d31772-4ae9-4728-b85f-1b07480f7a09.jpg',
      category: 'Fluid Art'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full glass z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">MBA</h1>
          <div className="hidden md:flex gap-8">
            <a href="#portfolio" className="text-sm text-foreground/80 hover:text-primary transition-colors">Портфолио</a>
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
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Мы создаём будущее модной индустрии, открывая таланты и строя карьеры мирового уровня
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 glow">
                Наше портфолио
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary hover:text-white">
                Связаться
              </Button>
            </div>
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

      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Наша <span className="gradient-text">галерея</span></h3>
            <p className="text-muted-foreground text-lg">Искусство и элегантность в каждой детали</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div 
                key={item.id} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-4 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-2xl border border-white/5 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-medium">{item.title}</h4>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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