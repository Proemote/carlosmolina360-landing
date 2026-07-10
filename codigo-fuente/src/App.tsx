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
        <Entender />
        <Decidir />
        <Construir />
        <Proyectos />
        <Cierre />
        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}
