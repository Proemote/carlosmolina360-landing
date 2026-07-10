export default function Footer() {
  return (
    <footer className="bg-grafito text-blanco pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Hablemos</h3>
            <p className="text-gray-500 font-medium max-w-sm">
              Si quieres que trabajemos juntos o simplemente tienes una pregunta, escríbeme.
            </p>
            <a href="mailto:hola@carlosmolina.com" className="inline-block text-lg font-semibold hover:text-arena transition-colors mt-4">
              hola@carlosmolina.com
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Navegación</h4>
              <ul className="space-y-3 font-medium text-gray-300">
                <li><a href="#entender-anchor" className="hover:text-salvia transition-colors duration-200">Entender</a></li>
                <li><a href="#confiar-anchor" className="hover:text-salvia transition-colors duration-200">Confiar</a></li>
                <li><a href="#construir-anchor" className="hover:text-salvia transition-colors duration-200">Construir</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">Social</h4>
              <ul className="space-y-3 font-medium text-gray-300">
                <li><a href="#" className="hover:text-blanco transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blanco transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-blanco transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      
      <div className="w-full flex justify-center px-4">
        {/* Massive footer logo using the serif font as in the Charlotte reference */}
        <h1 className="text-[15vw] leading-none font-serif italic text-white/5 tracking-tighter select-none pointer-events-none">
          Carlos Molina
        </h1>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 font-medium">
        <p>© {new Date().getFullYear()} Carlos Molina. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Diseñado con propósito.</p>
      </div>
    </footer>
  );
}
