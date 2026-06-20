console.log("///RETO 2//")

let numeros = [3, 8, 1, 6, 10, 4];

let numerosX10 = []

for (let i = 0; i < numeros.length; i++) {
    numerosX10.push(numeros[i] * 10)
}
console.log(`Numeros por 10: ${numerosX10}`)


console.log(`%cLos numeros mayores a 5 son: ${numeros.filter(numeros => numeros > 5)}`, "color: #00ff00; font-weight: bold;")


