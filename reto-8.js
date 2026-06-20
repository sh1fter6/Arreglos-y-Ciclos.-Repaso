console.log("///RETO 8///")

let altura = 80;
let rebotes = 0;

while (altura >= 10) {

    rebotes++;
    altura = altura * 0.5;
    console.log(`Rebote numero ${rebotes}:`)
    console.log(`Altura alcanzada: ${altura}`)

}
console.log(`%cTotal de rebotes: ${rebotes}`, "color: #00ff00; font-weight: bold;");

