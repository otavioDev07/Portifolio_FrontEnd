function exibir() {
    const salario = document.getElementById('salario')
    const horas_uteis = document.getElementById('horas')
    const horas_fds = document.getElementById('horasFDS')
    let valor = ((parseFloat(salario.value) / 200) * Number(horas_uteis.value)) + ((parseFloat(salario.value) / 200) * Number(horas_fds.value) * 1.5)
    document.getElementById('resultado').innerText = `R$ ${valor}`
}