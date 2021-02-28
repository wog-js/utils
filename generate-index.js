// Require modules
const fs = require('fs');
const camelcase = require('camelcase');

const files = fs.readdirSync('./lib/');

let pretty = 'module.exports = {\n';
files.forEach((file, index) => {
    const moduleName = file.replace('.js', '');
    const exportedName = camelcase(moduleName);
    const comma = index === (files.length - 1) ? '' : ',';
    pretty += `\t${exportedName}: require('./lib/${moduleName}')${comma}\n`;
});
pretty += '};';

console.log(pretty);
fs.writeFileSync('./index.js', pretty);