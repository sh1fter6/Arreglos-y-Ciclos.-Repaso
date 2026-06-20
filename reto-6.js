console.log("///RETO 6//");

let matriz = [
    [1, 2, 3],
    [4, 5, 6]
]



let sumaTotal = 0;

for (let f = 0; f < matriz.length; f++) {
    for (let c = 0; c < matriz[f].length; c++) {
        let valor = matriz[f][c];
        console.log(`[${f}][${c}] = ${valor}`);
        sumaTotal += valor;
    }
}
console.log(`%cSuma total: ${sumaTotal}`, "color: #00ff00; font-weight: bold;");

