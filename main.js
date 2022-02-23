let dato1 = prompt("Escriba el servicio que desee\n Opciones: Lectura de tarot, Reiki, Limpieza energetica, Sanación");

let tarot = 1600;
let reiki = 1100;
let limpiezaEnergetica = 1100;
let sanacion = 700;

function calcularServicio (string, numero){
    switch (string) {
        case "Lectura de tarot" || "tarot":
            return string + numero;
            break;
        case "Reiki" || "reiki":
            return string + numero;
            break;
        case "Limpieza energetica" || "limpieza energetica":
            return string + numero;
            break;
        case "Sanación" || "sanacion":
            return string + numero;
            break;
        default:
            return 0;
            break;
    }
}