const fs = require('fs');
let code = fs.readFileSync('src/components/Cierre.tsx', 'utf-8');

code = code.replace(
  /<div className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed mb-16 space-y-4">/g,
  `<div className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed mb-16 space-y-4">`
);

fs.writeFileSync('src/components/Cierre.tsx', code);
