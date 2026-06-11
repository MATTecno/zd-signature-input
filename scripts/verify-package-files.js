'use strict';

const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const packageJsonPaths = [
  'package.json',
  'packages/common/package.json',
  'packages/vue/package.json',
  'packages/zd-signature-input/package.json',
];
const entryFields = ['main', 'module', 'typings', 'types'];
const missing = [];

function exists(relativePath) {
  return fs.existsSync(path.resolve(rootDir, relativePath));
}

packageJsonPaths.forEach((packageJsonPath) => {
  const packageJson = JSON.parse(fs.readFileSync(path.resolve(rootDir, packageJsonPath), 'utf8'));
  const packageDir = path.dirname(packageJsonPath);
  const packageName = packageJson.name || packageJsonPath;

  entryFields.forEach((field) => {
    if (!packageJson[field]) return;

    const entryPath = path.join(packageDir, packageJson[field]);
    if (!exists(entryPath)) {
      missing.push(`${packageName}: ${field} -> ${entryPath}`);
    }
  });

  if (!Array.isArray(packageJson.files)) return;

  packageJson.files.forEach((fileEntry) => {
    const filePath = path.join(packageDir, fileEntry);
    if (!exists(filePath)) {
      missing.push(`${packageName}: files[] -> ${filePath}`);
    }
  });
});

if (missing.length) {
  console.error('Missing package files:');
  missing.forEach((item) => console.error(`- ${item}`));
  process.exit(1);
}

console.log('Package entrypoints verified.');
