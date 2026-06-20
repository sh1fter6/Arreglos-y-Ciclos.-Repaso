console.log(`%c///LIGA FINAL///`, "color: #00ff00; font-weight: bold;");


let equipos = ["Dragones", "Fénix", "Tigres"];
let puntos = [
    [10, 20, 15],   // Dragones
    [30, 20, 25],   // Fénix
    [5, 40, 20]     // Tigres
];

console.log(`Competirán ${equipos.length} equipos`);

console.log(`TOTALES POR EQUIPO`)

let totales = []
let suma = 0

for (let i = 0; i < puntos.length; i++) {
    for (let j = 0; j < puntos[i].length; j++) {
        suma = puntos[i][j] + suma
    }
    totales.push(suma)
    console.log(`${equipos[i]}: ${totales[i]}`)
    suma = 0
}

console.log(`Totales: [${totales}]`);


let total = totales.reduce((acum, g) => acum + g, 0);
let promedio = (total / totales.length).toFixed(2);

console.log(`Promedio general: ${promedio}`)

let sobrePromedio = totales.filter(puntos => puntos > promedio)
console.log(`Los equipos que están sobre el promedio son: ${sobrePromedio}`)


let Campeón = equipos[totales.indexOf(Math.max(...totales))];
let ranking = totales.sort((a, b) => b - a);

console.log(`Raking: ${ranking}`);
console.log(`El campeon es: ${Campeón} 🏆`)


let premioTotal = 100
let premio = 30
let repartidos = 0

while (premio <= premioTotal) {
    premioTotal = Number(premioTotal - premio)
    console.log(`Premio entregado, queda $${premioTotal}`)
    repartidos++

}
console.log(`Se entregaron "${repartidos}" premios. Sobran $${premioTotal}`)









