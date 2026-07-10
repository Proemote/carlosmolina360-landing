import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion } from 'motion/react';

export default function Decidir() {
  const sectionRef = useRef<HTMLElement>(null);
  const introContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const introText2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);
  const text5Ref = useRef<HTMLDivElement>(null);
  const text6Ref = useRef<HTMLDivElement>(null);

  // Refs for the story section
  const storyContainerRef = useRef<HTMLDivElement>(null);
  const storyTextsRef = useRef<(HTMLDivElement | null)[]>([]);
  const storyPhotosRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introContainerRef.current,
          start: 'top top',
          end: '+=900%',
          pin: true,
          scrub: 1,
        }
      });

      tl.fromTo(introTextRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 1 }, 1.5)
        
        .to(bgRef.current, { backgroundColor: '#ffffff', duration: 1 }, "-=0.5")
        
        .fromTo(introText2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .to(introText2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        
        .fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1.5")
        
        .fromTo(text4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text4Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1.5")
        
        .fromTo(text5Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text5Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1.5")
        
        .fromTo(text6Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text6Ref.current, { opacity: 1, duration: 2 }, "+=0.5");
        
      // Story section GSAP
      const storyTl = gsap.timeline({
        scrollTrigger: {
          trigger: storyContainerRef.current,
          start: 'top top+=5%',
          end: '+=400%',
          pin: true,
          scrub: 1,
        }
      });
      
      gsap.set(storyTextsRef.current.slice(1), { opacity: 0, y: 30 });
      gsap.set(storyPhotosRef.current.slice(1), { opacity: 0, scale: 1.05 });
      gsap.set(storyTextsRef.current[0], { opacity: 1, y: 0 });
      
      storyTl
        // Step 1 to Step 2
        .to(storyTextsRef.current[0], { opacity: 0, y: -30, duration: 1 })
        .to(storyPhotosRef.current[0], { opacity: 0, duration: 1 }, "<")
        .to(storyTextsRef.current[1], { opacity: 1, y: 0, duration: 1 })
        .to(storyPhotosRef.current[1], { opacity: 1, scale: 1, duration: 1 }, "<")
        .to({}, { duration: 0.5 }) // pause
        // Step 2 to Step 3
        .to(storyTextsRef.current[1], { opacity: 0, y: -30, duration: 1 })
        .to(storyPhotosRef.current[1], { opacity: 0, duration: 1 }, "<")
        .to(storyTextsRef.current[2], { opacity: 1, y: 0, duration: 1 })
        .to(storyPhotosRef.current[2], { opacity: 1, scale: 1, duration: 1 }, "<")
        .to({}, { duration: 0.5 }) // pause
        // Step 3 to Step 4
        .to(storyTextsRef.current[2], { opacity: 0, y: -30, duration: 1 })
        .to(storyPhotosRef.current[2], { opacity: 0, duration: 1 }, "<")
        .to(storyTextsRef.current[3], { opacity: 1, y: 0, duration: 1 })
        .to(storyPhotosRef.current[3], { opacity: 1, scale: 1, duration: 1 }, "<");
        
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-blanco text-grafito relative w-full">
      {/* Pinned Scrollytelling Intro */}
      <div ref={introContainerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-blanco">
        <div ref={bgRef} className="absolute inset-0 bg-blanco z-0"></div>
        
        <div ref={introTextRef} className="absolute w-full max-w-4xl px-6 text-center z-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl text-grafito leading-tight">
            Ahora que entiendes el problema...<br/><br/>
            <span className="text-salvia font-serif italic">déjame enseñarte cómo pienso.</span>
          </h2>
        </div>
        
        <div ref={introText2Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <h2 className="text-[12vw] md:text-[8vw] font-bold tracking-tighter text-grafito uppercase leading-none">
            II<br/>
            <span className="text-salvia">CONFIAR</span>
          </h2>
        </div>

        <div ref={text3Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-light leading-relaxed space-y-6 text-center">
            <p>
              Encontrar un problema es fácil.<br/>
              Lo difícil es decidir con confianza qué hacer con él.
            </p>
          </div>
        </div>

        <div ref={text4Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-light leading-relaxed space-y-6 text-center">
            <p>
              Antes creía en las respuestas rápidas.
            </p>
            <p>
              Hoy sé que la calma viene de otro sitio:<br/>
              de hacer las preguntas incómodas que otros evitan.
            </p>
          </div>
        </div>

        <div ref={text5Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-light leading-relaxed space-y-6 text-center">
            <p>
              Por eso ya no busco tener razón.<br/>
              Busco construir algo fiable.
            </p>
          </div>
        </div>

        <div ref={text6Ref} className="absolute w-full max-w-4xl px-6 text-center opacity-0 z-10">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-500 font-light leading-relaxed space-y-6 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl text-salvia font-serif italic">
              Y esa es, probablemente,<br/>
              la mejor prueba de cómo pienso.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="decidir" className="py-24 md:py-40">
        <div className="max-w-6xl mx-auto px-6">
          {/* Story Scrollytelling */}
          <div ref={storyContainerRef} className="mb-32 md:mb-48 min-h-[90vh] flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-grafito mb-12 md:mb-16 text-center shrink-0">
              Mi historia nunca fue sobre marketing.
            </h2>
            
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20 relative items-center flex-1">
              {/* Sticky Photos */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden relative shrink-0">
                <div ref={el => storyPhotosRef.current[0] = el} className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" alt="Psicología" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-grafito/20"></div>
                </div>
                <div ref={el => storyPhotosRef.current[1] = el} className="absolute inset-0 opacity-0">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Marketing" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-grafito/20"></div>
                </div>
                <div ref={el => storyPhotosRef.current[2] = el} className="absolute inset-0 opacity-0">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Emprendimiento" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-grafito/20"></div>
                </div>
                <div ref={el => storyPhotosRef.current[3] = el} className="absolute inset-0 opacity-0">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop" alt="Hoy" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-grafito/20"></div>
                </div>
              </div>

               {/* Scrolling Texts */}
              <div className="w-full md:w-1/2 relative h-[40vh] md:h-[60vh] flex items-center md:pl-8 lg:pl-12">
                <div ref={el => storyTextsRef.current[0] = el} className="absolute inset-0 flex items-center">
                   <div className="text-base md:text-lg lg:text-xl text-gray-500 font-light leading-relaxed space-y-4">
                     <p>Empecé estudiando Psicología queriendo hacer terapia.</p>
                     <p>Pero lo que de verdad me atrapó fue otra pregunta:<br/>
                     ¿por qué nos comportamos como nos comportamos<br/>
                     cuando estamos con otras personas?</p>
                     <p>Ahí sigue todo lo que hago hoy.</p>
                   </div>
                </div>
                <div ref={el => storyTextsRef.current[1] = el} className="absolute inset-0 flex items-center opacity-0">
                   <div className="text-base md:text-lg lg:text-xl text-gray-500 font-light leading-relaxed space-y-4">
                     <p>En Madrid, una asignatura lo cambió todo.</p>
                     <p>Psicología del Consumo.</p>
                     <p>Entendí todo lo que influye antes de que alguien tome<br/>
                     una decisión de compra, y me enamoré del marketing.</p>
                     <p>No por las campañas.<br/>
                     Por lo que había detrás de ellas.</p>
                   </div>
                </div>
                <div ref={el => storyTextsRef.current[2] = el} className="absolute inset-0 flex items-center opacity-0">
                   <div className="text-base md:text-lg lg:text-xl text-gray-500 font-light leading-relaxed space-y-4">
                     <p>Fundar Proemote fue la primera vez<br/>
                     que todo encajó en el mismo sitio.</p>
                     <p>Psicología, marketing, creatividad,<br/>
                     estrategia y tecnología.</p>
                     <p>Todo junto, con un único objetivo:<br/>
                     conectar mejor.</p>
                   </div>
                </div>
                <div ref={el => storyTextsRef.current[3] = el} className="absolute inset-0 flex flex-col justify-center space-y-8 opacity-0">
                   <p className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-grafito leading-tight">
                     Sigo haciéndome las mismas preguntas.
                   </p>
                   <p className="text-base md:text-lg lg:text-xl text-gray-500 font-light leading-relaxed">
                     Solo que ahora las hago junto a decenas de empresas,<br/>
                     equipos y personas que también quieren construir<br/>
                     algo que funcione de verdad.
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Pause */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="py-16 md:py-32 flex justify-center text-center"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-grafito max-w-4xl leading-[1.1]">
              No trabajo con respuestas.<br/> Trabajo con <span className="text-salvia">preguntas</span> que cambian decisiones.
            </h2>
          </motion.div>

          {/* En qué creo Section */}
          <div className="mt-16 md:mt-32 pb-32">
            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start border-t border-gray-200 pt-16">
              <div className="w-full md:w-1/3 md:sticky md:top-40">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-grafito">
                  En qué creo.
                </h2>
              </div>
              <div className="w-full md:w-2/3 flex flex-col">
                {[
                  {
                    content: (
                      <>
                        <p>No siempre te diré lo que quieres escuchar.</p>
                        <p>Pero siempre intentaré decirte <span className="font-medium text-salvia">lo que creo que tu proyecto necesita</span>.</p>
                      </>
                    )
                  },
                  {
                    content: (
                      <>
                        <p>Prefiero <span className="font-medium text-salvia">cuestionar una idea</span> antes que ayudarte a ejecutar una estrategia en la que no creo.</p>
                      </>
                    )
                  },
                  {
                    content: (
                      <>
                        <p>No trabajo desde la improvisación ni desde recetas universales.</p>
                        <p>Cada proyecto merece ser <span className="font-medium text-salvia">entendido antes de decidir</span> cómo construirlo.</p>
                      </>
                    )
                  },
                  {
                    content: (
                      <>
                        <p>Y si en algún momento creo que otra persona puede ayudarte mejor que yo, también te lo diré.</p>
                        <p>Porque mi trabajo no consiste en vender horas.</p>
                        <p className="font-medium text-salvia mt-2">Consiste en ayudarte a tomar mejores decisiones.</p>
                      </>
                    )
                  }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="border-b border-gray-200 py-12 first:pt-0 last:border-0 relative flex gap-6"
                  >
                    <div className="text-salvia mt-1 text-2xl shrink-0 leading-none">
                      ✽
                    </div>
                    <div className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed space-y-4">
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Transition */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 1 }}
            className="py-32 md:py-48 flex justify-center text-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-grafito leading-tight">
              Esos principios guían<br/>
              <span className="text-salvia">mi forma de trabajar.</span>
            </h2>
          </motion.div>

          {/* Principios Section */}
          <div className="pb-32 max-w-5xl mx-auto px-4 relative">
            <div className="flex flex-col gap-8 md:gap-12 relative">
              {[
                {
                  title: "Las personas antes que las herramientas.",
                  content: (
                    <>
                      <p>Las herramientas cambian constantemente. Las personas no.</p>
                      <p>Por eso prefiero entender primero cómo piensa alguien antes de decidir qué canal, tecnología o estrategia utilizar.</p>
                    </>
                  )
                },
                {
                  title: "La claridad antes que la velocidad.",
                  content: (
                    <>
                      <p>Ir más rápido no sirve de nada si avanzas en la dirección equivocada.</p>
                    </>
                  )
                },
                {
                  title: "La estrategia antes que la ejecución.",
                  content: (
                    <>
                      <p>Una buena ejecución no corrige una mala estrategia.</p>
                      <p>Solo hace que llegues antes al lugar equivocado.</p>
                    </>
                  )
                },
                {
                  title: "Construir antes que improvisar.",
                  content: (
                    <>
                      <p>No creo en las soluciones milagro.</p>
                      <p>Prefiero diseñar sistemas que sigan funcionando cuando desaparezca el entusiasmo inicial.</p>
                    </>
                  )
                },
                {
                  title: "El crecimiento es una consecuencia.",
                  content: (
                    <>
                      <p>No trabajo para conseguir más seguidores. Ni más visitas. Ni más ventas.</p>
                      <p>Trabajo para que las decisiones sean mejores. Los resultados llegan después.</p>
                    </>
                  )
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="sticky top-24 md:top-32"
                >
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 border border-gray-100 shadow-2xl shadow-black/[0.03] overflow-hidden relative"
                  >
                    {/* Background Number */}
                    <div className="absolute -top-10 -right-8 md:-top-16 md:-right-12 text-[10rem] md:text-[16rem] lg:text-[20rem] font-serif leading-none text-salvia/10 select-none pointer-events-none">
                      0{idx + 1}
                    </div>

                    <div className="relative z-10 max-w-3xl">
                      <div className="text-xs md:text-sm font-bold tracking-[0.2em] text-salvia uppercase mb-6 md:mb-8 flex items-center gap-3">
                        <span className="w-6 h-px bg-salvia"></span>
                        PRINCIPIO 0{idx + 1}
                      </div>
                      
                      <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium text-grafito tracking-tight mb-8 md:mb-10 leading-tight">
                        {item.title}
                      </h3>
                      
                      <div className="text-lg md:text-xl text-gray-500 font-light leading-relaxed space-y-4 max-w-2xl">
                        {item.content}
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
