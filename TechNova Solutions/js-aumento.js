function exibir() {
    const salario = document.getElementById('salario')
    const resultado = document.getElementById('resultado')
    if(salario.value <= 1200) {
         let aumento = parseFloat(salario.value * 1.16)
         resultado.innerText = `R$ ${aumento}`
    } else if(salario.value <= 2100) {
        let aumento = parseFloat(salario.value * 1.13)
         resultado.innerText = `R$ ${aumento}`
    } else if(salario.value <= 3000) {
        let aumento = parseFloat(salario.value * 1.10)
         resultado.innerText = `R$ ${aumento}`
    } else {
        let aumento = parseFloat(salario.value * 1.05)
         resultado.innerText = `R$ ${aumento}`
    }
}