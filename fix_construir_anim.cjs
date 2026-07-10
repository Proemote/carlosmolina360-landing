const fs = require('fs');
let code = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

code = code.replace(
  /\.fromTo\(introTextRef\.current, \{ opacity: 0, y: 50 \}, \{ opacity: 1, y: 0, duration: 1 \}, 0\)\s*\.to\(introTextRef\.current, \{ opacity: 0, y: -50, duration: 1 \}, "\+=0\.5"\)/,
  `.fromTo(introTextRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 1 }, 1.5)`
);

fs.writeFileSync('src/components/Construir.tsx', code);
