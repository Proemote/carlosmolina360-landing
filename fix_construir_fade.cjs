const fs = require('fs');
const originalCode = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

const importRegex = /import { useRef, useEffect } from 'react';/;
let newCode = originalCode.replace(importRegex, `import { useRef, useEffect } from 'react';`);

const refsRegex = /const bgRef = useRef<HTMLDivElement>\(null\);/;
newCode = newCode.replace(refsRegex, `const bgRef = useRef<HTMLDivElement>(null);\n  const contentRef = useRef<HTMLDivElement>(null);`);

const effectRegex = /return \(\) => ctx\.revert\(\);\n  \}, \[\]\);/;
newCode = newCode.replace(effectRegex, `
      // Fade out effect at the end of the section
      gsap.to(contentRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'bottom 80%',
          end: 'bottom 20%',
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);`);

const idRegex = /<div id="construir" className="pt-12 pb-24 md:pt-16 md:pb-32">/;
newCode = newCode.replace(idRegex, `<div id="construir" ref={contentRef} className="pt-12 pb-24 md:pt-16 md:pb-32">`);

fs.writeFileSync('src/components/Construir.tsx', newCode);
