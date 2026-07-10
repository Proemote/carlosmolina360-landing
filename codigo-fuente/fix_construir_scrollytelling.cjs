const fs = require('fs');
let code = fs.readFileSync('src/components/Construir.tsx', 'utf-8');

code = code.replace(
  /<div ref=\{contentRef\} className="pt-12 pb-24 md:pt-16 md:pb-32">/,
  `<div ref={contentRef} className="min-h-screen w-full flex flex-col justify-center py-24">`
);

// Update GSAP
code = code.replace(
  /\/\/ Fade out effect at the end of the section[\s\S]*?\}\);/m,
  `// Fade out effect at the end of the section (scrollytelling pin)
      const fadeOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'center center',
          end: '+=150%',
          pin: true,
          scrub: true,
        }
      });
      fadeOutTl.to(contentRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");`
);

fs.writeFileSync('src/components/Construir.tsx', code);
