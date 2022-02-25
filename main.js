
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

let nombreServicio = prompt("Escriba el servicio que desee\n Opciones: Lectura de tarot, Reiki, Limpieza energetica, Sanación");
let turno = prompt("Escriba cuantos turnos desea agendar");


function seleccionServic (nombreServicio, turno){
    //Cree un switch para evaluar el caso particular de cada servicio
        switch (nombreServicio) {
        case "Lectura de tarot":
        case "Tarot":
            return console.log (`El total del servicio tendría un valor de $${tarot * turno}`);
            break;
        case "Reiki":
        case "reiki":
            return console.log (`El total del servicio tendría un valor de $${reiki * turno}`);
            break;
        case "Limpieza energetica":
        case "limpieza energetica":
            return console.log (`El total del servicio tendría un valor de $${limpiezaEnergetica * turno}`);
            break;
        case "Sanación":
        case "sanación":
            return console.log (`El total del servicio tendría un valor de $${sanacion * turno}`);
            break;
        default:
            return 0;
            break;
    }
}

seleccionServic(nombreServicio,turno);

let cantidadDeTurnos

for(let i= 0; i <= 30; i++){

}

let dia = prompt("Escriba el día que usted puede comunicarse \n Opciones: Martes o Jueves")
let mes = prompt("Escriba el mes de preferencia \n Opciones: Marzo o Abril")
let hora = prompt("Escriba la hora de preferencia \n Opciones: de 14hs a 21hs")


function turnoDado(dia,mes,hora){
    let horarioInicio = 14;
    let horarioFinal = 21;

    if((dia == "Martes" || "Jueves") && (mes == "Marzo" || "Abril") && (hora >= horarioInicio && hora <= horarioFinal)) {
        return `Su turno es el día ${dia} de ${mes} a las ${hora}hs`;
    } else {
        return console.log("Por favor introduzca bien la información")
    }
}

turnoDado(dia,mes,hora);