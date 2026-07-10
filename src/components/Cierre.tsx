import { motion } from 'motion/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Cierre() {
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Color transition from white to black
      gsap.fromTo(containerRef.current, 
        { backgroundColor: '#ffffff', color: '#141414' },
        { 
          backgroundColor: '#141414', 
          color: '#ffffff',
          duration: 1, 
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
          }
        }
      );

      // Scrollytelling for the content blocks
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=500%',
          pin: true,
          scrub: 1,
        }
      });

      // text1: Construir merece la pena
      tl.fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");

      // text2: Más allá de los proyectos
      tl.fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");

      // text3: Por eso escribo...
      tl.fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1.5");

      // cta: ¿Empezamos?
      tl.fromTo(ctaRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen relative overflow-hidden text-blanco bg-grafito">
      
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-salvia/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="absolute inset-0 flex items-center justify-center">

        {/* Block 1: Construir merece la pena */}
        <div ref={text1Ref} className="absolute w-full max-w-5xl px-6 opacity-0 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-blanco leading-tight">
              Construir <br className="hidden md:block"/>merece la pena.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
              No porque todos los proyectos tengan éxito.<br/><br/>
              Sino porque cada proyecto bien construido <span className="text-blanco font-medium">cambia a las personas que hay detrás</span>.
            </p>
          </div>

          <div className="md:w-1/2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
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
          </div>
        </div>

        {/* Block 2: Más allá de los proyectos */}
        <div ref={text2Ref} className="absolute w-full max-w-4xl px-6 opacity-0 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 font-medium mb-12 tracking-wide">
            Más allá de los proyectos
          </div>
          
          <h3 className="text-3xl md:text-5xl font-medium text-blanco leading-tight mb-8">
            Mi objetivo nunca ha sido crear una agencia. Ni acumular clientes.
          </h3>
          
          <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed">
            Quiero contribuir a que existan más personas capaces de pensar con criterio, construir con intención y compartir lo que aprenden.
          </p>
        </div>

        {/* Block 3: Por eso escribo... */}
        <div ref={text3Ref} className="absolute w-full max-w-4xl px-6 opacity-0 flex flex-col items-center text-center">
          <div className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-16 space-y-4">
            <p>Por eso escribo.</p>
            <p>Mentorizo.</p>
            <p>Desarrollo empresas.</p>
            <p>Impulso comunidades.</p>
            <p>Y sigo construyendo proyectos propios.</p>
          </div>

          <p className="text-3xl md:text-5xl text-salvia font-serif italic">
            Porque cada uno de ellos forma parte de una misma idea.
          </p>
        </div>

        {/* Block 5: CTA Final */}
        <div ref={ctaRef} className="absolute w-full max-w-5xl px-6 opacity-0">
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
        </div>

      </div>
    </section>
  );
}
