const fs = require('fs');
let code = fs.readFileSync('src/components/Decidir.tsx', 'utf-8');

code = code.replace(
  /tl\.fromTo\(introTextRef\.current, \{ opacity: 0, y: 50 \}, \{ opacity: 1, y: 0, duration: 1 \}\)\s*\.to\(introTextRef\.current, \{ opacity: 0, y: -50, duration: 1 \}, "\+=0\.5"\)/,
  `tl.fromTo(introTextRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 1 }, 1.5)`
);

fs.writeFileSync('src/components/Decidir.tsx', code);
