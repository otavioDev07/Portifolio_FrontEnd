function exibir() {
    const dias = document.getElementById('dias')
    const funcionarios = document.getElementById('funcionarios')
    const resultado = document.getElementById('resultado')
    if(funcionarios.value <= 49) {
         let valor = (Number(funcionarios.value) * 4.50) * Number(dias.value)
         resultado.innerText = `Valor: R$ ${valor}`
    } else if(funcionarios.value <= 99) {
        let valor = (Number(funcionarios.value) * 4.10) * Number(dias.value)
         resultado.innerText = `Valor: R$ ${valor}`
    } else if(funcionarios.value <= 149) {
        let valor = (Number(funcionarios.value) * 3.80) * Number(dias.value)
         resultado.innerText = `Valor: R$ ${valor}`
    } else {
        let valor = (Number(funcionarios.value) * 3.60) * Number(dias.value)
         resultado.innerText = `Valor: R$ ${valor}`
    }
}