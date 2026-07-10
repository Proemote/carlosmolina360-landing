import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';
import { BookOpen, MessagesSquare, Blocks, ArrowRight } from 'lucide-react';

export default function Construir() {
  const containerRef = useRef<HTMLElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const introText2Ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        }
      });

      tl.to(bgRef.current, { backgroundColor: '#141414', duration: 1 }, 0) // Fade to grafito
        .fromTo(introTextRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 1 }, 1.5)
        .fromTo(introText2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(introText2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");
        
      // Fade out effect at the end of the section (scrollytelling pin)
      const fadeOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'bottom bottom',
          end: '+=150%',
          pin: true,
          scrub: true,
        }
      });
      fadeOutTl.to(contentRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="text-blanco relative w-full bg-grafito">
      {/* Pinned Scrollytelling Intro */}
      <div ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 bg-blanco"></div>
        <div ref={introTextRef} className="absolute w-full max-w-5xl px-6 text-center z-10 flex justify-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-blanco leading-tight">
            Así es como esa forma de pensar...<br/>
            <span className="text-salvia">se convierte en proyectos reales.</span>
          </h2>
        </div>
        
        <div id="construir" ref={introText2Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-blanco uppercase leading-none">
            III<br/>
            <span className="text-salvia">CONSTRUIR</span>
          </h2>
        </div>
      </div>

      <div ref={contentRef} className="min-h-screen w-full flex flex-col justify-center py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Distintas Formas */}
          <div className="mb-32 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6 max-w-4xl"
            >
              <p className="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light leading-tight">No todos los proyectos necesitan lo mismo.</p>
              <p className="text-3xl md:text-4xl lg:text-5xl text-gray-400 font-light leading-tight">Pero todos necesitan empezar por el mismo sitio.</p>
              <p className="text-3xl md:text-4xl lg:text-5xl text-blanco font-medium leading-tight mb-4">Entender qué necesitan realmente.</p>
              <p className="text-xl md:text-2xl text-gray-500 font-light">A partir de ahí, existen distintas formas de construir juntos.</p>
            </motion.div>
          </div>

          {/* Cards / Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Aprender */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="bg-white/[0.03] border border-white/10 hover:border-white/20 p-8 lg:p-10 rounded-[2rem] flex flex-col transition-all duration-300"
            >
              <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-8">
                <BookOpen className="w-5 h-5 text-gray-400" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-blanco">Aprender.</h4>
              <div className="text-gray-400 font-light leading-relaxed flex-grow space-y-4 mb-12">
                <p>Antes de tomar mejores decisiones, necesitas mejores ideas.</p>
                <p>Artículos, vídeos y recursos para desarrollar criterio y construir proyectos con más claridad.</p>
              </div>
              <button className="flex justify-center items-center gap-2 bg-salvia text-blanco hover:bg-blanco hover:text-salvia px-6 py-3 rounded-full font-medium transition-colors w-full mt-auto">
                Explorar ideas
              </button>
            </motion.div>

            {/* Pensar juntos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/10 hover:border-white/20 p-8 lg:p-10 rounded-[2rem] flex flex-col transition-all duration-300"
            >
              <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-8">
                <MessagesSquare className="w-5 h-5 text-gray-400" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-blanco">Pensar juntos.</h4>
              <div className="text-gray-400 font-light leading-relaxed flex-grow space-y-4 mb-12">
                <p>No necesitas otra opinión.</p>
                <p>Necesitas una conversación que te ayude a ver lo que todavía no estás viendo.</p>
                <p>Mentorías estratégicas para desbloquear decisiones importantes.</p>
              </div>
              <button className="flex justify-center items-center gap-2 bg-salvia text-blanco hover:bg-blanco hover:text-salvia px-6 py-3 rounded-full font-medium transition-colors w-full mt-auto">
                Empezar una conversación
              </button>
            </motion.div>

            {/* Construir */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-white/[0.03] border border-white/10 hover:border-white/20 p-8 lg:p-10 rounded-[2rem] flex flex-col transition-all duration-300"
            >
              <div className="bg-white/5 w-12 h-12 rounded-full flex items-center justify-center mb-8">
                <Blocks className="w-5 h-5 text-gray-400" />
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight text-blanco">Construir.</h4>
              <div className="text-gray-400 font-light leading-relaxed flex-grow space-y-4 mb-12">
                <p>Cuando llega el momento de pasar de las ideas a la acción, Proemote se convierte en el equipo que las hace realidad.</p>
                <p className="text-blanco font-medium pt-2">Marca. Web. Contenido. Marketing. Tecnología.</p>
                <p>Todo conectado por una estrategia común.</p>
              </div>
              <button className="flex justify-center items-center gap-2 bg-salvia text-blanco hover:bg-blanco hover:text-salvia px-6 py-3 rounded-full font-medium transition-colors w-full mt-auto">
                Descubrir Proemote
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
