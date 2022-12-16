// o segundo irá importar a função e passar a flag desejada

const getFlags = require('./flags') //peguei a função e coloquei no getFlags


console.log(`Oi ${getFlags('--name')}. Tudo bem? ${getFlags('--greeting')}`)