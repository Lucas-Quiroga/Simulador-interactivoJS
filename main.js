function calcularServicios (nombreServicio, costoServicio, CuantosTurnos){
    //Cree un switch para evaluar el caso particular de cada servicio
    switch (nombreServicio) {
        case "Lectura de tarot" || "tarot":
            return tarot;
            break;
        case "Reiki" || "reiki":
            return reiki;
            break;
        case "Limpieza energetica" || "limpieza energetica":
            return limpiezaEnergetica;
            break;
        case "Sanación" || "sanacion":
            return sanacion;
            break;
        default:
            return 0;
            break;
    //evaluo el servicio que quiere y le sumo la cantidad de turnos que desee pedir
    let dato = costoServicio * CuantosTurnos;
    return `el costo del servicio por la cantidad de turnos que pidio es de ${dato}`
}
}

let dato1 = prompt("Escriba el servicio que desee\n Opciones: Lectura de tarot, Reiki, Limpieza energetica, Sanación");
let dato2 = prompt("Escriba el taller que desee tomar\n Opciones: Taller de tarot, Taller de calendario maya, Taller de runas");


let tarot = 1600;
let reiki = 1100;
let limpiezaEnergetica = 1100;
let sanacion = 700;
let tallerTarot = 1500;
let tallerCalenMaya = 1300;
let tallerRunas = 1200;

let resultado = calcularServicios(dato1);
alert(resultado);

const Suma = (a,b) =>{return a + b}

function calcularServicios (costoServicio, CuantosTurnos){
    //evaluo el servicio que quiere y le sumo la cantidad de turnos que desee pedir
    let dato = costoServicio * CuantosTurnos;
    return `el costo del servicio por la cantidad de turnos que pidio es de ${dato1}`
}
