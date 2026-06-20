console.log("///RETO 5//");

let alumnos = ["Sofía", "Mateo", "Valentina", "Tomás"];


for (let i = 0; i < alumnos.length; i++) {
    // i + 1 nos dará 1, 2, 3 y 4 de forma automática
    console.log(`%c${i + 1}-${alumnos[i]}`, "color: #00ff00; font-weight: bold;");

}