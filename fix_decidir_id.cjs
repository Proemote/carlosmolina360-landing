const fs = require('fs');
let code = fs.readFileSync('src/components/Decidir.tsx', 'utf-8');

code = code.replace(
  /<section ref=\{sectionRef\} className="bg-blanco text-grafito relative w-full">/,
  `<section id="confiar" ref={sectionRef} className="bg-blanco text-grafito relative w-full">`
);

fs.writeFileSync('src/components/Decidir.tsx', code);
