const fs = require('fs');

const code = `import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { motion } from 'motion/react';

export default function Proyectos() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(sectionRef.current, 
        { backgroundColor: '#141414', color: '#ffffff' },
        { 
          backgroundColor: '#ffffff', 
          color: '#141414',
          duration: 1, 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          }
        }
      );

      gsap.to(contentRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 80%',
          end: 'bottom 20%',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 overflow-hidden text-grafito">
      <div ref={contentRef} className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-3 py-1 bg-gray-100 rounded-md text-sm text-gray-600 font-medium mb-8">
            <span className="mr-2 text-xs">◆</span> Proyectos
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter mb-6"
          >
            Las ideas importan.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl md:text-3xl text-gray-500 font-medium tracking-tight mb-8"
          >
            Los proyectos las ponen a prueba.
          </motion.p>
          <button className="flex items-center gap-2 border border-gray-300 hover:border-gray-400 rounded-full px-6 py-2.5 text-sm font-medium transition-colors">
            Ver más proyectos <span>→</span>
          </button>
        </div>

        {/* Projects Carousel */}
        <div className="relative w-full left-1/2 -translate-x-1/2 w-screen py-4">
          <div className="flex justify-center items-center gap-4 md:gap-8 px-4 md:px-0">
            {/* Left Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden md:flex flex-col w-[300px] lg:w-[400px] shrink-0 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-salvia/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Fundación Proem</h3>
              <p className="text-gray-500 font-light mb-4">Branding & Web Design</p>
              <div className="flex gap-2 text-xs">
                <span className="px-3 py-1 bg-gray-100 rounded-full">Estrategia</span>
              </div>
            </motion.div>

            {/* Center Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col w-[90vw] md:w-[500px] lg:w-[600px] shrink-0 z-10 cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-grafito rounded-3xl mb-8 overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <h3 className="text-3xl font-bold tracking-tight mb-3">Escuela Europea de Coaching</h3>
              <p className="text-lg text-gray-500 font-light mb-6">Uniendo estrategia de negocio, arquitectura de marca y desarrollo.</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-4 py-1.5 bg-gray-100 rounded-full">Desarrollo Web</span>
                <span className="px-4 py-1.5 bg-gray-100 rounded-full">UI/UX</span>
                <span className="px-4 py-1.5 bg-gray-100 rounded-full">Branding</span>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="hidden md:flex flex-col w-[300px] lg:w-[400px] shrink-0 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group"
            >
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl mb-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-salvia/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <h3 className="text-xl font-bold tracking-tight mb-2">Clínica Cobián</h3>
              <p className="text-gray-500 font-light mb-4">Transformación digital</p>
              <div className="flex gap-2 text-xs">
                <span className="px-3 py-1 bg-gray-100 rounded-full">Web</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/Proyectos.tsx', code);
