const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, 'out');

if (!fs.existsSync(outDir)) {
  console.log('out directory not found, skipping path fix.');
  process.exit(0);
}

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

if (!isGithubActions) {
  console.log('Not running in GitHub Actions, skipping path fix.');
  process.exit(0);
}

console.log('Fixing image asset paths for GitHub Pages (/tabletrex/)...');

function processDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDir(fullPath);
    } else if (
      entry.name.endsWith('.html') ||
      entry.name.endsWith('.js') ||
      entry.name.endsWith('.css') ||
      entry.name.endsWith('.txt')
    ) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const original = content;

      // Replace "/images/ with "/tabletrex/images/ (handling quotes, url(), etc.)
      // Regex matches any /images/ not preceded by /tabletrex
      content = content.replace(/(?<!\/tabletrex)\/images\//g, '/tabletrex/images/');

      if (content !== original) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated paths in: ${path.relative(outDir, fullPath)}`);
      }
    }
  }
}

processDir(outDir);
console.log('Successfully fixed all image asset paths for GitHub Pages!');
