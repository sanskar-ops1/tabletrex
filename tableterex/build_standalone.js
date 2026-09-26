const fs = require('fs');

let html = fs.readFileSync('rendered_page.html', 'utf8');
const css = fs.readFileSync('src/app/globals.css', 'utf8');

// Clean Next.js bundles and chunk scripts
html = html.replace(/<link rel="stylesheet"[^>]*>/g, '');
html = html.replace(/<script[^>]*><\/script>/g, '');
html = html.replace(/<link rel="preload" as="script"[^>]*>/g, '');

// Fix relative image links if needed or point to tableterex/public
// Replace /images/ with tableterex/public/images/
html = html.replace(/\/images\//g, 'tableterex/public/images/');

// Inject inlined CSS
html = html.replace('</head>', '<style>\n' + css + '\n</style>\n</head>');

fs.writeFileSync('../index.html', html, 'utf8');
console.log('Successfully created standalone index.html at root! Size:', fs.statSync('../index.html').size);
