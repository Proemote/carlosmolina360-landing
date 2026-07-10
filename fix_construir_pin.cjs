const fs = require('fs');
let code = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

code = code.replace(
  /\/\/ Fade out effect at the end of the section[\s\S]*?\}\);/m,
  `// Fade out effect at the end of the section (scrollytelling pin)
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

fs.writeFileSync('src/components/Construir.tsx', code);
