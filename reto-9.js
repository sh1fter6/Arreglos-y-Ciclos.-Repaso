console.log("///RETO 9///");

let claveCorrecta = "abc123";
let intentos = ["1234", "hola", "abc123"];
let i = 0;
let acerto = false;

do {
    if (intentos[i] !== claveCorrecta) {
        console.log(`Intento: ${intentos[i]} ❌`);
        i++;
    } else if (intentos[i] === claveCorrecta) {
        acerto = true;
    }
} while (i < intentos.length && !acerto);

if (acerto) {
    console.log(`Intento: ${intentos[i]} ✅`);
    console.log(`%cAcceso concedido!`, "color: #00ff00; font-weight: bold;");
}
