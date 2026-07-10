const fs = require('fs');
const originalCode = fs.readFileSync('src/components/Proyectos.tsx', 'utf-8');

const refsRegex = /const sectionRef = useRef<HTMLElement>\(null\);/;
let newCode = originalCode.replace(refsRegex, `const sectionRef = useRef<HTMLElement>(null);\n  const contentRef = useRef<HTMLDivElement>(null);`);

const effectRegex = /return \(\) => ctx\.revert\(\);\n  \}, \[\]\);/;
newCode = newCode.replace(effectRegex, `
      // Fade out effect at the end of the section
      gsap.to(contentRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 80%',
          end: 'bottom 20%',
          scrub: true,
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);`);

const divRegex = /<div className="max-w-6xl mx-auto px-6">/;
newCode = newCode.replace(divRegex, `<div ref={contentRef} className="max-w-6xl mx-auto px-6">`);

fs.writeFileSync('src/components/Proyectos.tsx', newCode);
