const opciones = {
  nombre: {
    alias: 'n',
    demand: true
  },
  matematicas:{
    alias: 'm',
    demand: true
  },
  ingles:{
    alias: 'i',
    demand: true
  },
  programacion:{
    alias: 'p',
    demand: true
  }
}
const obtenerPromedio = (notaUno, notaDos, notaTres) => (notaUno + notaDos + notaTres) / 3;

const argv = require('yargs')
            .command('promedio', 'Calcular el promedio', opciones)
            .argv

module.exports = {
  obtenerPromedio,
  argv
}