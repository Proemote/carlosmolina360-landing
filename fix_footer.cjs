const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

code = code.replace(
  /<li><a href="#decidir" className="hover:text-blanco transition-colors">Decidir<\/a><\/li>/,
  `<li><a href="#confiar" className="hover:text-blanco transition-colors">Confiar</a></li>`
);

fs.writeFileSync('src/components/Footer.tsx', code);
