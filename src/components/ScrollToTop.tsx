import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Наверх"
      className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-white glow flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-primary/90 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon name="ArrowUp" size={22} />
    </button>
  );
}
