const { parse } = require('cjs-module-lexer')

const src = require('fs').readFileSync('out.js', 'utf-8')
const { reexports } = parse(src)

console.log(
  `detected re-exports: ${JSON.stringify(reexports)} (expects ["foo"])`
)
