const num1 = parseInt(document.getElementById('ipt1').value)
const num2 = parseInt(document.getElementById('ipt2').value)
const operador = document.getElementById('select').value
const btn = document.getElementById('btnCalcular')
const paragrafo = document.getElementById('resultado')

const calcula = () => {
    
    let operacao = 0

    if (operador === '1'){
        operacao = num1 + num2
    }else if(operador === '2'){
        operacao = num1 - num2
    }else if(operador === '3'){
        operacao = num1 / num2
    }else if(operador === '4'){
        operacao = num1*num2
    }

    paragrafo.innerText = `resultado da operação é: ${operacao}`


}

btn.addEventListener('click', calcula)