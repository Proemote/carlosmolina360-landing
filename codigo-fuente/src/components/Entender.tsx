import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Entender() {
  const containerRef = useRef<HTMLElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);
  const text6Ref = useRef<HTMLDivElement>(null);
  const text7Ref = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1100%',
        pin: true,
        scrub: 1,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=1100%',
          scrub: 1,
        }
      });

      // Background gets darker
      tl.to(bgRef.current, { backgroundColor: '#0a0a0a', duration: 1 }, 0);

      // Text 1 appears then fades
      tl.fromTo(text1Ref.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 1 }, 2);

      // Text 2 appears then fades
      tl.fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 2.2)
        .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, 3.8);

      // Text 3 appears and disappears
      tl.fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 4.0)
        .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, 5.8);

      // Text 4 appears and disappears
      tl.fromTo(text4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 6.0)
        .to(text4Ref.current, { opacity: 0, y: -50, duration: 1 }, 7.8);

      // Text 5 appears and disappears
      tl.fromTo(text5Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 8.0)
        .to(text5Ref.current, { opacity: 0, y: -50, duration: 1 }, 10.5);

      // Text 6 appears and disappears
      tl.fromTo(text6Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 10.7)
        .to(text6Ref.current, { opacity: 0, y: -50, duration: 1 }, 12.5);

      // Text 7 appears and stays
      tl.fromTo(text7Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 12.7)
        .to(text7Ref.current, { opacity: 1, duration: 2 }, 13.7);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="entender" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 bg-grafito z-0"></div>
      
      <div className="relative z-10 w-full h-full max-w-5xl mx-auto px-6 text-center">
        {/* TEXT 1 */}
        <div ref={text1Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4">
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-blanco uppercase leading-none">
            I<br/>
            <span className="text-salvia">ENTENDER</span>
          </h2>
        </div>

        {/* TEXT 2 */}
        <div ref={text2Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 opacity-0">
          <p className="text-3xl md:text-5xl lg:text-6xl text-gray-300 font-light leading-tight">
            Hasta ahora...<br/><br/>
            <span className="text-salvia font-serif italic">has estado mirando el problema desde el sitio equivocado.</span>
          </p>
        </div>

        {/* TEXT 3 */}
        <div ref={text3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 opacity-0">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed space-y-4 text-center">
            <p>Antes de cambiar de estrategia.</p>
            <p>Antes de rediseñar una marca.</p>
            <p>Antes de lanzar una campaña.</p>
            <p>Antes de abrir otra cuenta en redes sociales.</p>
            <p>Antes de contratar una agencia.</p>
          </div>
        </div>

        {/* TEXT 4 */}
        <div ref={text4Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 opacity-0">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed space-y-8 text-center">
            <p>Hay una pregunta que casi nadie se hace.</p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-salvia font-serif italic">
              ¿Qué está frenando realmente este proyecto?
            </p>
            <p>
              Mientras esa pregunta siga sin respuesta,<br/>
              cualquier solución es solo una apuesta.
            </p>
          </div>
        </div>

        {/* TEXT 5 */}
        <div ref={text5Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl px-4 opacity-0 flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full">
            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light text-center leading-relaxed max-w-4xl mx-auto mb-6 md:mb-10">
              Por eso mi trabajo nunca empieza diseñando una web.<br className="hidden md:block" />
              Ni creando contenido. Ni hablando de marketing.
            </p>
            
            <h2 className="text-[10vw] md:text-[7vw] font-bold tracking-tighter text-blanco leading-[0.9] text-center mb-10 md:mb-12">
              Empieza<br/>
              <span className="text-salvia font-serif italic font-normal tracking-normal">entendiendo.</span>
            </h2>

            <div className="w-full flex flex-row flex-wrap justify-center gap-6 md:gap-12 text-lg md:text-xl text-gray-500 font-light mb-10 md:mb-12">
              <p>A las personas.</p>
              <p>Al negocio.</p>
              <p>Al contexto.</p>
              <p>Al problema.</p>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-serif italic text-center max-w-3xl mx-auto leading-relaxed">
              Porque solo cuando entiendes el origen, puedes construir algo que perdure.
            </p>
          </div>
        </div>

        {/* TEXT 6 */}
        <div ref={text6Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl px-4 opacity-0">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed space-y-6 text-center">
            <p>La mayoría intenta crecer haciendo más.</p>
            <p>Yo prefiero empezar entendiendo mejor.</p>
            <p>Porque el crecimiento no suele ser el punto de partida.</p>
            <p className="text-2xl md:text-3xl lg:text-4xl text-salvia font-serif italic mt-8">
              Es la consecuencia de haber tomado mejores decisiones.
            </p>
          </div>
        </div>

        {/* TEXT 7 */}
        <div ref={text7Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4 opacity-0">
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center py-20">
            <span className="absolute top-0 left-0 text-[10rem] md:text-[16rem] leading-none text-white/5 font-sans font-medium select-none pointer-events-none -mt-8 -ml-4">"</span>
            <span className="absolute bottom-0 right-0 text-[10rem] md:text-[16rem] leading-none text-white/5 font-sans font-medium select-none pointer-events-none rotate-180 -mb-8 -mr-4">"</span>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] leading-[1.2] md:leading-[1.3] font-manrope text-center relative z-10 tracking-tight">
              <span className="text-blanco font-light">El crecimiento no empieza cuando haces más.</span>
              <br/>
              <span className="text-gray-400 italic mt-6 block font-serif">Empieza cuando <span className="text-salvia font-medium">entiendes</span> mejor.</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
