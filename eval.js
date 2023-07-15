const exp = `

const fs = require('fs');

const text = fs.readFileSync('./eval.js');
console.log(text.toString('utf-8'))


`

const result = eval(exp)

console.log(result);
