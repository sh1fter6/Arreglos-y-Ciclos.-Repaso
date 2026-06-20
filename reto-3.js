console.log("///RETO 3//")

let gastos = [1200, 3400, 800, 2600];
let totalGastos = gastos.reduce((acum, g) => acum + g, 0);
let promGastos = totalGastos / gastos.length

console.log(`%cLos gastos totales son: ${totalGastos}`, "color: #00ff00; font-weight: bold;")
console.log(`%cEl promedio de gastos es: ${promGastos}`, "color: #00ff00; font-weight: bold;")