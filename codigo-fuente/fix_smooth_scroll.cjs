const fs = require('fs');
let code = fs.readFileSync('src/components/SmoothScroll.tsx', 'utf-8');

code = code.replace(
  /return \(\) => \{/g,
  `
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        lenis.scrollTo(href);
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick as EventListener));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick as EventListener));`
);

fs.writeFileSync('src/components/SmoothScroll.tsx', code);
