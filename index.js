console.log ("Si enlazaste bien");

const indication = () => {
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
    let day = document.getElementById("day").value;
    document.getElementById("sign").value = month;
    let date = new Date(year,month,day).getDay();
    console.log(year);
    console.log(month);
    console.log(day);
    console.log(date);
    
    if (parseInt(day)>20 && month == 2|| parseInt(day)<20 && month == 3)
    document.getElementById("sign").value = "Eres el mejor Signo... Aries";
    else if (parseInt(day)>20 && month ==3|| parseInt(day)<20 && month == 4)
    document.getElementById("sign").value = "No eres el mejor Signo... Tauro";
    else if (parseInt(day)>20 && month == 4|| parseInt(day)<20 && month == 5)
    document.getElementById("sign").value = "No eres el mejor Signo... Geminis";
    else if (parseInt(day)>20 && month == 5|| parseInt(day)<20 && month == 6)
    document.getElementById("sign").value = "No eres el mejor Signo... Cáncer";
    else if (parseInt(day)>20 && month == 6|| parseInt(day)<20 && month == 7)
    document.getElementById("sign").value = "No eres el mejor Signo... Leo";
    else if (parseInt(day)>20 && month == 7|| parseInt(day)<20 && month == 8)
    document.getElementById("sign").value = "No eres el mejor Signo... Virgo";
    else if (parseInt(day)>20 && month == 8|| parseInt(day)<20 && month == 9)
    document.getElementById("sign").value = "No eres el mejor Signo... Libra";
    else if (parseInt(day)>20 && month == 9|| parseInt(day)<20 && month == 10)
    document.getElementById("sign").value = "No eres el mejor Signo... Escorpio";
    else if (parseInt(day)>20 && month == 10|| parseInt(day)<20 && month == 11)
    document.getElementById("sign").value = "No eres el mejor Signo... Sagitario";
    else if (parseInt(day)>20 && month == 11|| parseInt(day)<20 && month == 0)
    document.getElementById("sign").value = "No eres el mejor Signo... Capricornio";
    else if (parseInt(day)>20 && month == 0|| parseInt(day)<20 && month == 1)
    document.getElementById("sign").value = "No eres el mejor Signo... Acuario";
    else if (parseInt(day)>20 && month == 1|| parseInt(day)<20 && month == 2)
    document.getElementById("sign").value = "No eres el mejor Signo... Piscis";
    else document.getElementById("sign").value = "Haz de ser Ofiuco por que no te encuentro";

    switch (date) {
        case 0:
            document.getElementById("result").innerHTML = "Es domingo, momento correcto de hacer la tarea";
            break;
        case 6:
            document.getElementById("result").innerHTML = "Es sabado, momento correcto para dejar todo para mañana";
        break;
        case 1:
            document.getElementById("result").innerHTML = "Es Lunes, Ya queremos que sea Viernes";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Es Martes, uffff dia de fondos de pantalla";
        break;
        case 3:
            document.getElementById("result").innerHTML = "Es Miercoles, Huele a mitad de semana";
            break;
        case 4:
            document.getElementById("result").innerHTML = "Es Jueves, momento para reflexionar...";
        break;
        case 5:
            document.getElementById("result").innerHTML = "Es Viernes, mas conocido como VIPS";
            break;
        default:
            document.getElementById("result").innerHTML = "Quien sabe que carajos hiciste que no existes";
            break;
    }
};