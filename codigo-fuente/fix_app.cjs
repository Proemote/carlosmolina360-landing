const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

code = code.replace(
  /<div className="bg-grafito min-h-screen font-sans">/,
  `<div id="top" className="bg-grafito min-h-screen font-sans">`
);

fs.writeFileSync('src/App.tsx', code);
