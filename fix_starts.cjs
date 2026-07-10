const fs = require('fs');

// Fix Construir.tsx
let construir = fs.readFileSync('src/components/Construir.tsx', 'utf-8');
construir = construir.replace(
  /start: 'center center',/g,
  `start: 'bottom bottom',`
);
fs.writeFileSync('src/components/Construir.tsx', construir);

// Fix Proyectos.tsx
let proyectos = fs.readFileSync('src/components/Proyectos.tsx', 'utf-8');
proyectos = proyectos.replace(
  /start: 'top top',/g,
  `start: 'bottom bottom',`
);
fs.writeFileSync('src/components/Proyectos.tsx', proyectos);
