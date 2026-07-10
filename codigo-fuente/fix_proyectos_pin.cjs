const fs = require('fs');
let code = fs.readFileSync('src/components/Proyectos.tsx', 'utf-8');

code = code.replace(
  /\/\/ Content fade out[\s\S]*?\}\);/m,
  `// Content fade out (scrollytelling pin)
      const fadeOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'bottom bottom',
          end: '+=100%',
          pin: true,
          scrub: true,
        }
      });
      fadeOutTl.to(contentRef.current, { opacity: 0, y: -50, duration: 1 });`
);

fs.writeFileSync('src/components/Proyectos.tsx', code);
