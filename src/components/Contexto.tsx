import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Compass } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contexto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        }
      });

      tl.fromTo(text1Ref.current, { opacity: 1 }, { opacity: 0, duration: 1 })
        .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full relative z-10">
      {/* Pinned Scrollytelling Intro */}
      <div ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-grafito">
        <div ref={text1Ref} className="absolute w-full max-w-4xl px-6 text-center z-10 flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-blanco leading-tight font-light mb-8">
            Vivimos en una época <span className="text-salvia">obsesionada con hacer <span className="italic">más</span></span>.
          </h2>
          <div className="text-xl md:text-3xl text-gray-400 font-light space-y-2">
            <p>Más contenido.</p>
            <p>Más herramientas.</p>
            <p>Más estrategias.</p>
            <p>Más velocidad.</p>
          </div>
        </div>
        
        <div ref={text2Ref} className="absolute w-full max-w-4xl px-6 text-center z-10 flex flex-col items-center justify-center opacity-0">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-blanco leading-tight font-light">
            Pero los proyectos que realmente avanzan no suelen hacerlo porque hacen más.<br/><br/>
            <span className="font-medium text-salvia font-serif italic">Lo hacen porque entienden mejor.</span>
          </h2>
        </div>
      </div>

      {/* Continuation & CTA Section */}
      <div className="bg-grafito py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#141414] border border-white/5 rounded-[3rem] p-12 md:p-20 lg:p-24 flex flex-col items-center justify-center gap-10 shadow-2xl relative overflow-hidden"
          >
            {/* Decorative background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-salvia/5 blur-[100px] pointer-events-none rounded-full"></div>

            <div className="flex flex-col items-center text-center relative z-10 max-w-3xl">
              <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center mb-8 bg-white/[0.02]">
                <Compass className="w-8 h-8 text-salvia" />
              </div>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blanco mb-6">
                Encuentra claridad.
              </h3>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
                Ayudo a personas, empresas y organizaciones a descubrir qué está frenando realmente su crecimiento para construir proyectos con claridad, criterio y una estrategia que tenga sentido.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-salvia text-blanco hover:bg-white hover:text-grafito text-lg font-medium px-10 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(139,173,151,0.2)]">
                  Empecemos.
                </button>
                <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/10 text-lg font-medium px-10 py-4 rounded-full transition-all duration-300">
                  Descubre mi filosofía
                </button>
              </div>
              
              <p className="text-sm text-gray-500 font-light mt-8">
                Toda gran colaboración empieza con una conversación.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
