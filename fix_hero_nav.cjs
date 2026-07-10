const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf-8');

code = code.replace(
  /<a href="#decidir" className="hover:text-blanco transition-colors">Decidir<\/a>/,
  `<a href="#confiar" className="hover:text-blanco transition-colors">Confiar</a>`
);

fs.writeFileSync('src/components/Hero.tsx', code);
