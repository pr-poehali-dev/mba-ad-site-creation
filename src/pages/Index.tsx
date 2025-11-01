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

  const models = [
    {
      id: 1,
      name: 'Анна Соколова',
      image: 'https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/c958128c-2840-4028-ae6c-efead9c6ac64.jpg',
      category: 'High Fashion'
    },
    {
      id: 2,
      name: 'Дмитрий Волков',
      image: 'https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/06e7fc38-6128-4037-90ad-7cef641d93f7.jpg',
      category: 'Commercial'
    },
    {
      id: 3,
      name: 'Елена Петрова',
      image: 'https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/1d022624-8657-49a4-af54-62b408c14721.jpg',
      category: 'Editorial'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">MBA</h1>
          <div className="hidden md:flex gap-8">
            <a href="#portfolio" className="text-sm hover:text-muted-foreground transition-colors">Портфолио</a>
            <a href="#about" className="text-sm hover:text-muted-foreground transition-colors">О нас</a>
            <a href="#contact" className="text-sm hover:text-muted-foreground transition-colors">Контакты</a>
          </div>
          <Button variant="outline" size="sm" className="border-black hover:bg-black hover:text-white transition-all">
            Стать моделью
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-light tracking-tight leading-[0.9]">
              Модельное<br />агентство<br />MBA
            </h2>
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Мы создаём будущее модной индустрии, открывая таланты и строя карьеры мирового уровня
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-black/90">
                Наше портфолио
              </Button>
              <Button size="lg" variant="outline" className="border-black hover:bg-black hover:text-white">
                Связаться
              </Button>
            </div>
          </div>
          <div className="relative h-[600px] animate-scale-in">
            <img 
              src="https://cdn.poehali.dev/projects/812356d1-f93d-419f-abe3-3596f2636c27/files/c958128c-2840-4028-ae6c-efead9c6ac64.jpg"
              alt="MBA Model"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Наши модели</h3>
            <p className="text-muted-foreground text-lg">Таланты, покоряющие подиумы мира</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div 
                key={model.id} 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <img 
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                </div>
                <h4 className="text-xl font-medium mb-1">{model.name}</h4>
                <p className="text-sm text-muted-foreground">{model.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h3 className="text-5xl md:text-6xl font-light">О нас</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            MBA — это модельное агентство с 15-летней историей успеха. Мы работаем с ведущими брендами 
            и дизайнерами, представляя лучших моделей на подиумах Милана, Парижа и Нью-Йорка.
          </p>
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-3">
              <Icon name="Award" size={40} className="mx-auto text-black" />
              <h4 className="text-3xl font-light">50+</h4>
              <p className="text-muted-foreground">Международных наград</p>
            </div>
            <div className="space-y-3">
              <Icon name="Users" size={40} className="mx-auto text-black" />
              <h4 className="text-3xl font-light">200+</h4>
              <p className="text-muted-foreground">Моделей в портфолио</p>
            </div>
            <div className="space-y-3">
              <Icon name="Globe" size={40} className="mx-auto text-black" />
              <h4 className="text-3xl font-light">30+</h4>
              <p className="text-muted-foreground">Стран присутствия</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-5xl md:text-6xl font-light mb-4">Свяжитесь с нами</h3>
            <p className="text-white/70 text-lg">Готовы начать карьеру в модельном бизнесе?</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input 
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            <div>
              <Input 
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            <div>
              <Input 
                type="tel"
                placeholder="Телефон"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white"
              />
            </div>
            <div>
              <Textarea 
                placeholder="Расскажите о себе"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white min-h-[120px]"
              />
            </div>
            <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-white/90">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">MBA</h4>
              <p className="text-white/60">Модельное агентство мирового уровня</p>
            </div>
            <div>
              <h5 className="font-medium mb-3">Контакты</h5>
              <div className="space-y-2 text-white/60">
                <p>info@mba-models.com</p>
                <p>+7 (495) 123-45-67</p>
              </div>
            </div>
            <div>
              <h5 className="font-medium mb-3">Социальные сети</h5>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white/60 transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-white/60 transition-colors">
                  <Icon name="Twitter" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
            © 2024 MBA Models. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
