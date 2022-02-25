// Mi idea de proyecto es armar una aplicación web en donde se le da un formulario a la persona interesada para que pueda seleccionar el servicio que desee y la cantidad de turnos que la misma precise//

//El esqueleto de HTML lo prepare simple y le agregue un poco de CSS para no dejarlo TAN basico//

//Declaro el valor de los servicios//
let tarot = 1600;
let reiki = 1100;
let limpiezaEnergetica = 1100;
let sanacion = 700;

//Funcion que toma el servicio y lo multiplica por el turno o los turnos elegidos//
function seleccionServic (nombreServicio, turno){
        switch (nombreServicio) {
        case "Lectura de tarot":
        case "Tarot":
            return `El total del servicio tendría un valor de $${tarot * turno}`;
            break;
        case "Reiki":
        case "reiki":
            return `El total del servicio tendría un valor de $${reiki * turno}`;
            break;
        case "Limpieza energetica":
        case "limpieza energetica":
            return `El total del servicio tendría un valor de $${limpiezaEnergetica * turno}`;
            break;
        case "Sanación":
        case "sanación":
            return `El total del servicio tendría un valor de $${sanacion * turno}`;
            break;
        default:
            return `Error: No eligió ningun servicio ofrecido`;
            break;
    }
}

//Funcion que toma en particular los datos sobre el encuentro virtual//
//Dato: los número de fechas corresponder a los días martes y jueves del mes de marzo 2022, no puse los de abril sino sería mas largo, en resumen de ejemplo//
function turnoDado(dia,fecha,mes,hora){
    let horarioInicio = 14;
    let horarioFinal = 21;
    if((dia === "Martes" || "martes" || "Jueves" || "jueves") && (fecha === 1 || 3 || 8 || 10 || 15 || 17 || 22 || 24 || 29 || 31) && (mes === "Marzo" || "marzo" || "Abril" || "abril") && (hora >= horarioInicio && hora <= horarioFinal)) {
        return `Su turno será el día ${dia} ${fecha} de ${mes} a las ${hora}hs`;
    } else {
        return `Por favor introduzca bien la información solicitada.`;
    }
}

//Le preguntamos al usuario sobre sus preferencias//
let nombreServicio = prompt("Escriba el servicio que desee\n Opciones: Lectura de tarot, Reiki, Limpieza energetica, Sanación");
let turno = prompt("Escriba cuantos turnos desea agendar");
let dia = prompt("Escriba el día que usted puede comunicarse \n Opciones: Martes o Jueves");
let fecha = parseInt(prompt("Escriba la fecha que usted puede comunicarse \n Opciones: 1 - 3 - 8 - 10 - 15 - 17 - 22 - 24 - 29 - 31"));
let mes = prompt("Escriba el mes de preferencia \n Opciones: Marzo o Abril");
let hora = parseInt(prompt("Escriba la hora de preferencia \n Opciones: de 14hs a 21hs"));

//Guardamos las funciones dentro de las variables, las llamamos y las mostramos por el alert//
let servicioMasTurno = seleccionServic(nombreServicio, turno);
let fechaYHorario = turnoDado(dia,fecha,mes,hora);
alert(`${servicioMasTurno} y ${fechaYHorario} `);
alert("Muchas gracias! \n Ante cualquier duda o consulta comunicarse al número +15 12345698");