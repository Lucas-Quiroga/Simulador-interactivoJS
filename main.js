
//Declaro los precios de los servicios//
let tarot = 1600;
let reiki = 1100;
let limpiezaEnergetica = 1100;
let sanacion = 700;
let tallerTarot = 1500;
let tallerCalenMaya = 1300;
let tallerRunas = 1200;

/*Posible ajuste para que sea todo en mayuscula
 let pregunta = dato1.toUpperCase;*/

let turno = parseInt("");

function seleccionServic (nombreServicio, turno){
    //Cree un switch para evaluar el caso particular de cada servicio
        switch (nombreServicio) {
        case "Lectura de tarot":
        case "Tarot":
            return tarot * turno;
            break;
        case "Reiki":
        case "reiki":
            return reiki * turno;
            break;
        case "Limpieza energetica":
        case "limpieza energetica":
            return limpiezaEnergetica * turno;
            break;
        case "Sanación":
        case "sanación":
            return sanacion * turno;
            break;
        default:
            return 0;
            break;
    }
}

let probando2 = seleccionServic;

function prueba(b){
    probando2 * b
}


const multiFunc = (a,b) => {a*b};







let dato1 = prompt("Escriba el servicio que desee\n Opciones: Lectura de tarot, Reiki, Limpieza energetica, Sanación");
let dato2 = prompt("Escriba el taller que desee tomar\n Opciones: Taller de tarot, Taller de calendario maya, Taller de runas");

// let resultado = calcularServicios(dato1);
// alert(resultado);

const Suma = (a,b) =>{return a + b}

function calcularServicios (costoServicio, CuantosTurnos){
    //evaluo el servicio que quiere y le sumo la cantidad de turnos que desee pedir
    let dato = costoServicio * CuantosTurnos;
    return `el costo del servicio por la cantidad de turnos que pidio es de ${dato1}`
}

function calcularElservicio (servicio, cantidadDelturno){
   let resultado = servico * cantidadDelturno
   return resultado
}