const fs = require('fs');
let code = fs.readFileSync('src/components/Proyectos.tsx', 'utf-8');

code = code.replace(
  /<section ref=\{sectionRef\} className="py-24 md:py-40 overflow-hidden text-grafito">/,
  `<section ref={sectionRef} className="overflow-hidden text-grafito">`
);

code = code.replace(
  /<div ref=\{contentRef\} className="max-w-6xl mx-auto px-6 opacity-0">/,
  `<div ref={contentRef} className="min-h-screen w-full flex flex-col justify-center py-24 opacity-0">
      <div className="max-w-6xl mx-auto px-6 w-full">`
);

code = code.replace(
  /<\/section>/,
  `      </div>\n    </section>`
);

// Update GSAP
code = code.replace(
  /\/\/ Content fade out[\s\S]*?\}\);/m,
  `// Content fade out (scrollytelling pin)
      const fadeOutTl = gsap.timeline({
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top top',
          end: '+=150%',
          pin: true,
          scrub: true,
        }
      });
      fadeOutTl.to(contentRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");`
);

fs.writeFileSync('src/components/Proyectos.tsx', code);
