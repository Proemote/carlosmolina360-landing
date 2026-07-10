import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-grafito text-blanco">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-8">
        <div className="text-2xl font-serif italic tracking-tight">Carlos Molina</div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#entender" className="hover:text-blanco transition-colors">Entender</a>
          <a href="#confiar" className="hover:text-blanco transition-colors">Confiar</a>
          <a href="#construir" className="hover:text-blanco transition-colors">Construir</a>
        </div>
        <button className="flex items-center gap-2 bg-blanco text-grafito px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-colors">
          Hablemos <ArrowUpRight className="w-4 h-4 bg-arena text-blanco rounded-full p-0.5" />
        </button>
      </nav>

      {/* Background Gradient Mesh with Noise */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-grafito">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: ['-5%', '0%', '-5%'],
            y: ['-5%', '5%', '-5%']
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full mix-blend-screen filter blur-[120px] pointer-events-none"
          style={{ backgroundColor: 'var(--color-arena)' }}
        />
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: ['5%', '-5%', '5%'],
            y: ['5%', '-5%', '5%']
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[90%] rounded-full mix-blend-screen filter blur-[150px] pointer-events-none"
          style={{ backgroundColor: 'var(--color-salvia)' }}
        />
        {/* SVG Noise Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />
      </div>

      {/* Main Content Layout */}
      <main className="flex-grow flex flex-col justify-between relative z-20 px-6 md:px-12 pt-32 pb-12 md:pb-16">
        {/* Top Grid Area */}
        <div className="max-w-[1400px] mx-auto w-full flex-grow flex flex-col justify-end pb-10 md:pb-16">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            
            {/* Main Huge Text */}
            <div className="lg:col-span-7 flex flex-col text-left pointer-events-none">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-4 md:mb-6"
              >
                <p className="text-gray-300 text-lg md:text-xl font-medium font-serif italic">Todo gran proyecto</p>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-[14vw] md:text-[8vw] lg:text-[110px] font-bold tracking-tighter leading-[0.9] text-blanco uppercase m-0"
              >
                EMPIEZA POR<br/>
                ENTENDER
              </motion.h1>
            </div>

            {/* Right side description & CTA */}
            <div className="lg:col-span-5 flex lg:justify-start w-full lg:-ml-4 xl:-ml-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-full max-w-[560px] flex flex-col text-left space-y-5 lg:space-y-6"
              >
                <p className="text-gray-300 text-[13px] md:text-[15px] leading-relaxed">
                  Ayudo a personas y empresas a descubrir qué frena su crecimiento para construir proyectos con claridad.
                </p>
                
                <div className="w-full bg-blanco rounded-full p-2 flex items-center justify-between shadow-sm cursor-pointer hover:scale-[1.02] transition-transform pointer-events-auto group">
                  <span className="pl-6 text-grafito text-sm font-semibold">Empecemos por entender</span>
                  <button className="bg-arena text-blanco p-3 rounded-full flex-shrink-0 group-hover:bg-salvia transition-colors">
                    <ArrowUpRight className="w-5 h-5 md:w-5 md:h-5" />
                  </button>
                </div>
                <p className="text-[11px] text-gray-200 font-medium pl-2 m-0">Sin compromiso. Respondo personalmente.</p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom features / steps */}
        <div className="max-w-[1400px] mx-auto w-full mt-12 md:mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="hidden md:flex justify-between w-full"
          >
            {[
              { num: "01", label: "Psicología" },
              { num: "02", label: "Estrategia" },
              { num: "03", label: "Comunicación" },
              { num: "04", label: "Liderazgo" },
              { num: "05", label: "Ejecución" }
            ].map((step) => (
              <div key={step.num} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-[8px] h-[12px] bg-arena skew-x-[-25deg] transform -translate-y-[1px]"></div>
                  <span className="text-blanco font-mono text-sm tracking-wider font-semibold">{step.num}</span>
                </div>
                <p className="text-[13px] font-medium text-gray-300">{step.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
