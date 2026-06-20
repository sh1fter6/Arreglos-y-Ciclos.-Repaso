console.log("///RETO 7///");

let mapa = [
    ["🌿", "🌿", "⭐"],
    ["🌿", "🌿", "🌿"]
];

for (let f = 0; f < mapa.length; f++) {
    for (let c = 0; c < mapa[f].length; c++) {
        if (mapa[f][c] === "⭐") {
            console.log(`%c⭐ está en fila ${f}, columna ${c}`, "color: #00ff00; font-weight: bold;");
        }
    }
}