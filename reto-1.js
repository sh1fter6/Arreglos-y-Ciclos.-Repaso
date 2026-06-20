console.log("///RETO 1///");


let cajon = ["manzana", "pera", "kiwi"];

cajon.push("Manguito");
console.log(cajon);

let hayPera = false;
for (let i = 0; i < cajon.length; i++) {

    if (cajon[i] === "pera") {
        hayPera = true;
        break;
    }
}
console.log(`%cHay pera en el cajon?: ${hayPera}`, "color: #00ff00; font-weight: bold;")

let totalCajon = cajon.length;
console.log(`%cHay ${totalCajon} frutas en el cajón.`, "color: #00ff00; font-weight: bold;");

console.log(`%cLa primer fruta es ${cajon[0]} y la ultima es ${cajon[cajon.length - 1]}`, "color: #00ff00; font-weight: bold;")


