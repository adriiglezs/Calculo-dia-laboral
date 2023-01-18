console.log ("Si enlazaste bien");

const indication = () => {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    document.getElementById("sign").value = month;
    
    if (parseInt(day)>20 && month === "Marzo"|| parseInt(day)<20 && month === "Abril")
    document.getElementById("sign").value = "Eres el mejor Signo... Aries";
    else if (parseInt(day)>20 && month ==="Abril"|| parseInt(day)<20 && month === "Mayo")
    document.getElementById("sign").value = "No eres el mejor Signo... Tauro";
    else if (parseInt(day)>20 && month === "Mayo"|| parseInt(day)<20 && month === "Junio")
    document.getElementById("sign").value = "No eres el mejor Signo... Geminis";
    else if (parseInt(day)>20 && month === "Junio"|| parseInt(day)<20 && month === "Julio")
    document.getElementById("sign").value = "No eres el mejor Signo... Cáncer";
    else if (parseInt(day)>20 && month === "Julio"|| parseInt(day)<20 && month === "Agosto")
    document.getElementById("sign").value = "No eres el mejor Signo... Leo";
    else if (parseInt(day)>20 && month === "Agosto"|| parseInt(day)<20 && month === "Septiembre")
    document.getElementById("sign").value = "No eres el mejor Signo... Virgo";
    else if (parseInt(day)>20 && month === "Septiembre"|| parseInt(day)<20 && month === "Octubre")
    document.getElementById("sign").value = "No eres el mejor Signo... Libra";
    else if (parseInt(day)>20 && month === "Octubre"|| parseInt(day)<20 && month === "Noviembre")
    document.getElementById("sign").value = "No eres el mejor Signo... Escorpio";
    else if (parseInt(day)>20 && month === "Noviembre"|| parseInt(day)<20 && month === "Diciembre")
    document.getElementById("sign").value = "No eres el mejor Signo... Sagitario";
    else if (parseInt(day)>20 && month === "Diciembre"|| parseInt(day)<20 && month === "Enero")
    document.getElementById("sign").value = "No eres el mejor Signo... Capricornio";
    else if (parseInt(day)>20 && month === "Enero"|| parseInt(day)<20 && month === "Febrero")
    document.getElementById("sign").value = "No eres el mejor Signo... Acuario";
    else if (parseInt(day)>20 && month === "Febrero"|| parseInt(day)<20 && month === "Marzo")
    document.getElementById("sign").value = "No eres el mejor Signo... Piscis";
    else
    document.getElementById("sign").value = "Haz de ser Ofiuco por que no te encuentro";
    

    let date = new Date(year, month, day).getDay();

    switch (date) {
        case 0:
            document.getElementById("result").innerHTML = "Es domingo, momento correcto de hacer la tarea";
            break;
        case 6:
            document.getElementById("result").innerHTML = "Es sabado, momento correcto para dejar todo para mañana";
        break;
        default:
            document.getElementById("result").innerHTML = "Hoy si hay trabajo o escuela";
            break;
    }
}