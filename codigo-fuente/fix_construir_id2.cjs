const fs = require('fs');
let code = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

code = code.replace(
  /<section id="construir" className="text-blanco relative w-full bg-grafito">/,
  `<section className="text-blanco relative w-full bg-grafito">`
);

code = code.replace(
  /<div ref=\{containerRef\} className="h-screen w-full flex items-center justify-center relative overflow-hidden">/,
  `<div id="construir" ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden">`
);

fs.writeFileSync('src/components/Construir.tsx', code);
