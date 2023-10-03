function mudar_logo(diretorio) {
    document.getElementById('logo').src = diretorio
}

function datahora() {
    const data_hora = new Date()
    const data = data_hora.toLocaleDateString()
    const hora = data_hora.toLocaleTimeString()

    document.getElementById('data').innerText = `${data}`
    document.getElementById('hora').innerText = `${hora}`
}

setInterval(datahora, 500)