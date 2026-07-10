/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Contexto from './components/Contexto';
import Entender from './components/Entender';
import Decidir from './components/Decidir';
import Construir from './components/Construir';
import Proyectos from './components/Proyectos';
import Cierre from './components/Cierre';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <SmoothScroll>
      <div id="top" className="bg-grafito min-h-screen font-sans">
        <Hero />
        <Contexto />
        {/* Sentinel anchor: scrolls to the start of Entender before GSAP pin */}
        <div id="entender-anchor" style={{ position: 'relative', top: 0 }} />
        <Entender />
        {/* Sentinel anchor: scrolls to just before Decidir pin starts */}
        <div id="confiar-anchor" style={{ position: 'relative', top: 0 }} />
        <Decidir />
        {/* Sentinel anchor: scrolls to just before Construir pin starts */}
        <div id="construir-anchor" style={{ position: 'relative', top: 0 }} />
        <Construir />
        <Proyectos />
        <Cierre />
        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}

