import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo('#top');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#top"
          onClick={handleClick}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50 p-3 lg:p-4 rounded-full bg-blanco text-salvia hover:bg-salvia hover:text-blanco shadow-lg transition-colors duration-300 group flex items-center justify-center cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-6 h-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
