const fs = require('fs');
let code = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

code = code.replace(
  /<section className="text-blanco relative w-full bg-grafito">/,
  `<section id="construir" className="text-blanco relative w-full bg-grafito">`
);

code = code.replace(
  /<div id="construir" ref=\{contentRef\} className="pt-12 pb-24 md:pt-16 md:pb-32">/,
  `<div ref={contentRef} className="pt-12 pb-24 md:pt-16 md:pb-32">`
);

fs.writeFileSync('src/components/Construir.tsx', code);
