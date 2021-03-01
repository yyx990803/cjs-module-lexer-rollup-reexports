const { parse } = require('cjs-module-lexer');

const src = require('fs').readFileSync('out.js', 'utf-8')
const { exports: exp, reexports } = parse(src)

console.log(exp)
console.log(reexports)