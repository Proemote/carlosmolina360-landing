const fs = require('fs');
const originalCode = fs.readFileSync('src/components/Proyectos.tsx', 'utf-8');

const oldTimeline = `      tl.to(bgRef.current, { backgroundColor: '#ffffff', duration: 1 }, 0)
        .fromTo(introTextRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, 0)
        .to(introTextRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        .fromTo(introText2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(introText2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");`;

const newTimeline = `      tl.fromTo(introTextRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(introTextRef.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        .to(bgRef.current, { backgroundColor: '#ffffff', duration: 1 }, "-=0.5")
        .fromTo(introText2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
        .to(introText2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=0.5");`;

fs.writeFileSync('src/components/Proyectos.tsx', originalCode.replace(oldTimeline, newTimeline));
