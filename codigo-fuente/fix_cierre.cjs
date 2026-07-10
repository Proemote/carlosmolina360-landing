const fs = require('fs');
let code = fs.readFileSync('src/components/Cierre.tsx', 'utf-8');

// Remove text4Ref definition
code = code.replace(/  const text4Ref = useRef<HTMLDivElement>\(null\);\n/, '');

// Replace text3Ref timeline with just one that shows it
code = code.replace(
  /\/\/ text3: Por eso escribo\.\.\. \(normal\)\n      tl\.fromTo\(text3Ref\.current, \{ opacity: 0, y: 50 \}, \{ opacity: 1, y: 0, duration: 1 \}\)\n        \.to\(text3Ref\.current, \{ opacity: 0, y: -50, duration: 1 \}, "\+=0\.5"\);\n\n      \/\/ text4: Por eso escribo\.\.\. \(with green\)\n      tl\.fromTo\(text4Ref\.current, \{ opacity: 0, y: 50 \}, \{ opacity: 1, y: 0, duration: 1 \}\)\n        \.to\(text4Ref\.current, \{ opacity: 0, y: -50, duration: 1 \}, "\+=0\.5"\);/,
  `// text3: Por eso escribo...
      tl.fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1.5");`
);

// Remove block 3 and rename block 4 to block 3
code = code.replace(
  /\{\/\* Block 3: Por eso escribo\.\.\. \(normal\) \*\/\}[\s\S]*?\{\/\* Block 4: Por eso escribo\.\.\. \(with green\) \*\/\}/,
  `{/* Block 3: Por eso escribo... */}`
);

code = code.replace(/ref=\{text4Ref\}/, 'ref={text3Ref}');

fs.writeFileSync('src/components/Cierre.tsx', code);
