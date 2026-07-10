const fs = require('fs');

// Fix Construir.tsx
let construir = fs.readFileSync('src/components/Construir.tsx', 'utf-8');
construir = construir.replace(
  /\/\/ Fade out effect at the end of the section \(scrollytelling pin\)[\s\S]*?fadeOutTl\.to\(contentRef\.current, \{ opacity: 0, y: -50, duration: 1 \}\);/m,
  `// Fade out effect at the end of the section
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'bottom 90%',
          end: 'bottom 20%',
          scrub: true,
        }
      });`
);
fs.writeFileSync('src/components/Construir.tsx', construir);

// Fix Proyectos.tsx
let proyectos = fs.readFileSync('src/components/Proyectos.tsx', 'utf-8');
proyectos = proyectos.replace(
  /\/\/ Content fade out \(scrollytelling pin\)[\s\S]*?fadeOutTl\.to\(contentRef\.current, \{ opacity: 0, y: -50, duration: 1 \}\);/m,
  `// Content fade out
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom 90%',
          end: 'bottom 20%',
          scrub: true,
        }
      });`
);
fs.writeFileSync('src/components/Proyectos.tsx', proyectos);
