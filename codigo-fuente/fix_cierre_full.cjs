const fs = require('fs');

const code = `import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Cierre() {
  const introContainerRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const introText2Ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introContainerRef.current,
          start: 'top top',
          end: '+=300%',
          pin: true,
          scrub: 1,
        }
      });

      tl.fromTo(introTextRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(introTextRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        .to(bgRef.current, { backgroundColor: '#141414', duration: 1 }, "-=0.5")
        .fromTo(introText2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .to(introText2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");
        
    }, introContainerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="text-blanco relative w-full bg-grafito">
      {/* Pinned Scrollytelling Intro */}
      <div ref={introContainerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">
        <div ref={bgRef} className="absolute inset-0 bg-blanco"></div>
        <div ref={introTextRef} className="absolute w-full max-w-5xl px-6 text-center z-10 flex justify-center opacity-0">
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-grafito leading-none">
            ¿Y después qué?
          </h2>
        </div>
        
        <div ref={introText2Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-blanco uppercase leading-none">
            V<br/>
            <span className="text-salvia">CIERRE</span>
          </h2>
        </div>
      </div>

      <div className="w-full relative overflow-hidden py-32 md:py-48 text-blanco">
        {/* Background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-salvia/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-32 md:space-y-48">
          
          {/* Block 1: Construir merece la pena */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-blanco leading-tight">
                Construir <br className="hidden md:block"/>merece la pena.
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
                No porque todos los proyectos tengan éxito.<br/><br/>
                Sino porque cada proyecto bien construido <span className="text-blanco font-medium">cambia a las personas que hay detrás</span>.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-salvia/10 blur-[60px] rounded-full"></div>
              
              <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed relative z-10">
                <p>No creo que el éxito dependa de trabajar más.</p>
                <div className="space-y-2 pt-2">
                  <p>Creo que depende de entender mejor.</p>
                  <p>De tomar mejores decisiones.</p>
                  <p>De construir con intención.</p>
                  <p>Y de hacerlo el tiempo suficiente.</p>
                </div>
                <p className="pt-6 border-t border-white/5 mt-6 text-gray-300">
                  Esa es la forma en la que entiendo el crecimiento. <br/>Y también la razón por la que hago lo que hago.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Block 2: Más allá de los proyectos */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-medium mb-12 tracking-wide">
              Más allá de los proyectos
            </div>
            
            <h3 className="text-3xl md:text-5xl font-medium text-blanco leading-tight mb-8">
              Mi objetivo nunca ha sido crear una agencia. Ni acumular clientes.
            </h3>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-16">
              Quiero contribuir a que existan más personas capaces de pensar con criterio, construir con intención y compartir lo que aprenden.
            </p>

            <div className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-16 space-y-2">
              <p>Por eso escribo.</p>
              <p>Mentorizo.</p>
              <p>Desarrollo empresas.</p>
              <p>Impulso comunidades.</p>
              <p>Y sigo construyendo proyectos propios.</p>
            </div>

            <p className="text-2xl md:text-3xl text-salvia font-serif italic">
              Porque cada uno de ellos forma parte de una misma idea.
            </p>
          </motion.div>

          {/* Block 3: The Final Phrase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pt-24 md:pt-40 pb-20 flex flex-col items-center justify-center text-center relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-gradient-to-b from-transparent via-salvia/5 to-transparent pointer-events-none blur-3xl"></div>
            
            <h1 className="text-[3rem] md:text-[5rem] lg:text-[7rem] font-manrope font-light leading-[1.1] tracking-tight text-blanco relative z-10">
              Todo empieza por entender.<br/>
              <span className="font-serif italic text-gray-400 mt-4 md:mt-8 block">Todo lo demás es una consecuencia.</span>
            </h1>
          </motion.div>

          {/* Block 4: CTA Final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full relative z-10 pb-12"
          >
            <div className="bg-[#141414] border border-white/5 rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row gap-12 lg:gap-16 relative overflow-hidden shadow-2xl">
              {/* Decorative glow */}
              <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-salvia/5 blur-[120px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              {/* Primary CTA: Newsletter / Seguidores */}
              <div className="flex-1 flex flex-col items-start relative z-10">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blanco mb-6">
                  ¿Empezamos?
                </h3>
                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-8 max-w-lg">
                  Ideas sobre cómo pensar con criterio, construir con intención y crear proyectos que importen. Directamente en tu bandeja de entrada.
                </p>
                
                <form className="w-full max-w-md flex flex-col sm:flex-row gap-3 mt-2" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-blanco placeholder:text-gray-500 focus:outline-none focus:border-salvia/50 transition-colors"
                    required
                  />
                  <button type="submit" className="bg-salvia text-blanco hover:bg-white hover:text-grafito text-base font-medium px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(139,173,151,0.2)] whitespace-nowrap">
                    Suscribirme
                  </button>
                </form>
              </div>

              {/* Secondary CTA: Hablemos */}
              <div className="w-full lg:w-[380px] flex flex-col justify-center relative z-10 bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-[2rem]">
                <h4 className="text-xl md:text-2xl font-medium text-blanco mb-4">¿Necesitas ayuda ahora?</h4>
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-8">
                  Sin presión. Una primera conversación para entender si realmente puedo ayudarte con tu proyecto.
                </p>
                <button className="bg-transparent border border-white/20 text-blanco hover:bg-white hover:text-grafito text-sm md:text-base font-medium px-6 py-3 md:py-4 rounded-full transition-all duration-300 w-full text-center">
                  Hablemos
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;

fs.writeFileSync('src/components/Cierre.tsx', code);
