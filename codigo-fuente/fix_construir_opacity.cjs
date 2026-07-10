const fs = require('fs');
let code = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

code = code.replace(
  /<div ref=\{introTextRef\} className="absolute w-full max-w-5xl px-6 text-center z-10 flex justify-center opacity-0">/,
  `<div ref={introTextRef} className="absolute w-full max-w-5xl px-6 text-center z-10 flex justify-center">`
);

fs.writeFileSync('src/components/Construir.tsx', code);
