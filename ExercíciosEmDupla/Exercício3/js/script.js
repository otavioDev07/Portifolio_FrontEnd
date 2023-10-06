function dataHoraAtuais(){
    const data_hora = document.getElementById('mostraHora'), dataAtual = new Date(), dia = dataAtual.toLocaleDateString(), horas = dataAtual.toLocaleTimeString();
    data_hora.innerHTML=`<p>${dia}  -  ${horas}</p>`
}

setInterval(dataHoraAtuais,1000);
function mudaFoto(item){
    let foto = document.getElementById('foto')
    foto.src = item
}

function fusoEscolhido(){
    var fusos = [];
    var fusos_horarios = document.getElementsByName('fusoHorario'), escolha = ""
    for (let i in fusos_horarios){
        if ( fusos_horarios[i].checked ) {
            fusos.push(fusos_horarios[i].value);
            escolha = fusos[0]
            return escolha
        }
    }
}

function converter(){
    const dataAtual = new Date(), horaAtual = dataAtual.getHours(), minutoAtual = dataAtual.getMinutes(), res = document.getElementById("res")
    var horaConvertida = horaAtual, dia = dataAtual.getDate(), mes = dataAtual.getMonth()+1, ano = dataAtual.getFullYear()
    switch(fusoEscolhido()){
        case 'utc-12':
            horaConvertida = horaAtual - 9
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.style.display = "flex"
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Baker Island, EUA (UTC-12)!</p>`
            break
        case 'utc-11':
            horaConvertida = horaAtual - 8
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Niue (UTC-11)!</p>`
            break
        case 'utc-10':
            horaConvertida = horaAtual - 7
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Havaí (UTC-10)!</p>`
            break
        case 'utc-09':
            horaConvertida = horaAtual - 6
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Alasca, Eua (UTC-09)!</p>`
            break
        case 'utc-08':
            horaConvertida = horaAtual - 5
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Tijuana, México (UTC-08)!</p>`
            break
        case 'utc-07':
            horaConvertida = horaAtual - 4
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Colorado, Arizona, EUA (UTC-07)!</p>`
            break
        case 'utc-06':
            horaConvertida = horaAtual - 3
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em El Salvador (UTC-06)!</p>`
            break
        case 'utc-05':
            horaConvertida = horaAtual - 2
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} na Colômbia (UTC-05)!</p>`
            break
        case 'utc-04':
            horaConvertida = horaAtual - 1
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} na Colômbia (UTC-04)!</p>`
            break
        case 'utc-03':
            horaConvertida = horaAtual
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            res.innerHTML = `${horaConvertida}:${minutoAtual} - Esse é o horário de Brasília (UTC-03)!</p>`
            break
        case 'utc-02':
            horaConvertida = horaAtual + 1
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Nuuk, Groenlândia (UTC-02)!</p>`
            break
        case 'utc-01':
            horaConvertida = horaAtual + 2
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Scoresbysund, Groenlândia (UTC-01)!</p>`
            break
        case 'utc±00':
            horaConvertida = horaAtual + 3
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Ilhas Canárias, Espanha (UTC±00)!</p>`
            break
        case 'utc+01':
            horaConvertida = horaAtual + 4
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} na Europa Central (UTC+01)!</p>`
            break
        case 'utc+02':
            horaConvertida = horaAtual + 5
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Leste Europeu (UTC+02)!</p>`
            break
        case 'utc+03':
            horaConvertida = horaAtual + 6
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Moscou, Volgograd, Rússia (UTC+03)!</p>`
            break
        case 'utc+04':
            horaConvertida = horaAtual + 7
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Azerbaijão (UTC+04)!</p>`
            break
        case 'utc+05':
            horaConvertida = horaAtual + 8
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Paquistão (UTC+05)!</p>`
            break
        case 'utc+06':
            horaConvertida = horaAtual + 9
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} em Bangladesh (UTC+06)!</p>`
            break
        case 'utc+07':
            horaConvertida = horaAtual + 10
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} na Tailândia (UTC+07)!</p>`
            break
        case 'utc+08':
            horaConvertida = horaAtual + 11
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} na Austrália Ocidental (UTC+08)!</p>`
            break
        case 'utc+09':
            horaConvertida = horaAtual + 12
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Japão (UTC+09)!</p>`
            break
        case 'utc+10':
            horaConvertida = horaAtual + 13
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} na Papua Nova Guiné (UTC+10)!</p>`
            break
        case 'utc+11':
            horaConvertida = horaAtual + 14
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} nas Ilhas Salomão (UTC+11)!</p>`
            break 
        default:
            horaConvertida = horaAtual + 15
            if(horaConvertida<0){
                horaConvertida+=24
                dia = dia - 1
            } else if(horaConvertida>=24){
                horaConvertida-=24
                dia = dia + 1
            }
            res.style.display = "flex"
            if (horaConvertida<10){
                horaConvertida = "0"+horaConvertida
            }
            if (minutoAtual<10){
                minutoAtual = "0"+minutoAtual
            }
            if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia>31)){
                dia = 1
                mes = mes + 1
            } else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia>30)){
                dia = 1
                mes = mes + 1
            } else if (mes == 2 && dia>28){
                dia = 1
                mes = mes + 1
            }
            if (dia<10){
                dia = "0"+dia
            }
            if (mes<10){
                mes = "0"+mes
            }
            hoje = dia + "/" + mes + "/" + ano
            res.innerHTML = `<p style="text-shadow: 1px 1px #333">Agora são ${horaConvertida}:${minutoAtual} - ${hoje} no Fiji (UTC+12)!</p>`
            break 

    }
}