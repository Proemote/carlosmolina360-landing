const fs = require('fs');
let code = fs.readFileSync('src/components/Entender.tsx', 'utf-8');

code = code.replace(
  /tl\.fromTo\(text1Ref\.current, \{ opacity: 0, y: 50 \}, \{ opacity: 1, y: 0, duration: 1 \}, 0\)\s*\.to\(text1Ref\.current, \{ opacity: 0, y: -50, duration: 1 \}, 2\);/,
  `tl.fromTo(text1Ref.current, { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: 1 }, 2);`
);

fs.writeFileSync('src/components/Entender.tsx', code);
