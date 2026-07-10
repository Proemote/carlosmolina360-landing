const fs = require('fs');
let code = fs.readFileSync('src/components/Decidir.tsx', 'utf-8');

code = code.replace(
  /<section id="confiar" ref=\{sectionRef\} className="bg-blanco text-grafito relative w-full">/,
  `<section ref={sectionRef} className="bg-blanco text-grafito relative w-full">`
);

code = code.replace(
  /<div ref=\{introContainerRef\} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-blanco">/,
  `<div id="confiar" ref={introContainerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-blanco">`
);

code = code.replace(
  /<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-grafito mb-24 md:mb-32 text-center shrink-0">/,
  `<h2 className="text-4xl md:text-6xl font-bold tracking-tight text-grafito mb-12 md:mb-16 text-center shrink-0">`
);

fs.writeFileSync('src/components/Decidir.tsx', code);
