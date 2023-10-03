var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var res = document.getElementById('res')

function soma() {
    let resultado = Number(n1.value) + Number(n2.value)
    res.innerHTML += `O seu resultado é.... ${resultado}! <br>`
}

function sub() {
    let resultado = Number(n1.value) - Number(n2.value)
    res.innerHTML += `O seu resultado é.... ${resultado}! <br>`
}

function divi() {
    if(n2.value == 0) {
        res.innerHTML = 'Não existe divisão de 0!'
    } else {
        let resultado = Number(n1.value) / Number(n2.value)
        res.innerHTML += `O seu resultado é.... ${resultado}! <br>`
    }
}

function multi() {
    let resultado = Number(n1.value) * Number(n2.value)
    res.innerHTML += `O seu resultado é.... ${resultado}! <br>`
}

function potencia() {
    let resultado = Number(n1.value) ** Number(n2.value)
    res.innerHTML += `O seu resultado é.... ${resultado}! <br>`
}

function raiz() {
    if(n1.value < 0) {
        res.innerHTML = 'Não existe raíz de número negativo!'
    } else {
        let resultado = Math.pow(Number(n1.value), 1 / Number(n2.value))
        res.innerHTML += `O seu resultado é.... ${resultado}! <br>`
    }
}

function apagar() {
    res.innerHTML = ''
    n1.value = ''
    n2.value = ''
}

