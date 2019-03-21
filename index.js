const { obtenerPromedio, argv } = require('./datos.js');

const { n, m, i, p } = argv;

if(argv._[0] === 'promedio') {
  console.log(`El promedio de ${n} es ${obtenerPromedio(m,i,p)}`);
} else {
  console.log("Promedio no calculado");
}