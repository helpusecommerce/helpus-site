const fs = require('fs');
const path = require('path');

const roots = [
  'src',
  'public/locales',
  'db/seeds'
];

const excludedDirs = new Set([
  'node_modules',
  'build',
  '.git',
  '.vercel',
  'backups'
]);

const pattern = /(?:\u00C3[\u0080-\uFFFF]|\u00C2[\u0080-\uFFFF]|\u00E2[\u0080-\uFFFF]{1,2}|\u00F0\u0178[\u0080-\uFFFF]{1,2}|\uFFFD)/g;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (excludedDirs.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      walk(fullPath, files);
    } else if (/\.(js|jsx|mjs|cjs|json|sql|md|txt)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

let hits = 0;

for (const root of roots) {
  for (const file of walk(root)) {
    const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/);

    lines.forEach((line, index) => {
      pattern.lastIndex = 0;
      if (pattern.test(line)) {
        hits += 1;
        console.log(`${file}:${index + 1}: ${line.slice(0, 220)}`);
      }
    });
  }
}

if (hits) {
  console.error(`MOJIBAKE_CHECK_FAILED hits=${hits}`);
  process.exit(1);
}

console.log('MOJIBAKE_CHECK_OK');
