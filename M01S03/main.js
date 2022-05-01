function alerta1(){
window.alert("Bem vindo!")
}


function alerta2(){
window.confirm('Deseja continuar?')
}

function alerta3(){
let mensagem=''
let nome='';
nome = prompt('Digite seu nome:');

if(nome!=null){
    mensagem = 'Olá '+ nome +', seja bem vindo(a)!'
    document.getElementById('paragrafo').innerHTML = mensagem;
}
}

function alerta4(){
    let nome = '';
    let idade = 0;
    let esporte = false;

    nome = prompt('Digite seu nome: ')
    idade = prompt('Digite sua idade: ')
    esporte = confirm('Você gosta e praticar algum esporte?')

    console.log(nome, idade, esporte)
}

function alerta5(){
    let sobrenome = prompt('Digite seu sobrenome: ');
    let nome = prompt('Digite o seu nome: ')

    window.alert('Olá ' + nome + ' ' + sobrenome)
}

function alerta6(){
    let ultimoNome = prompt('Digite o seu último sobrenome:')

    window.alert('Olá '+ ultimoNome + 'o seu sobrenome contém ' +ultimoNome.length+ ' letras!')
}

function alerta7(){
    let anoNascimento = prompt('Qual seu ano de nascimento?')
    let anoAtual = prompt('Qual o ano atual?')

    let idade = anoAtual - anoNascimento

    window.alert('Sua idade é '+ (parseInt(idade)-1) + ' ou ' + idade)
}

function alerta8(){
    let operacao = prompt('Qual a operação a ser realizada? (+,-,/ ou *)')
    let num1 = prompt('Digite o primeiro valor:')
    let num2 = prompt('Digite o segundo valor:')
    let resultado = ''
    switch(operacao){
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2)
            break

        case '-':
            resultado = parseFloat(num1) - parseFloat(num2)
            break

        case '/':
            resultado = parseFloat(num1) / parseFloat(num2)
            break

        case '*':
            resultado = parseFloat(num1)*parseFloat(num2)  
            break         
    }

    window.alert('O resultado da operação é '+ resultado)
    

}

function alerta9(){
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()

    alert(`A hora agora é:    ${hora}h : ${min}min`)

}

function alerta10(){
    let valor = parseInt(prompt('Digite o valor inicial:'))
    let raiz = parseInt(prompt('Digite o valor raiz:')) 
    let num = []
    for (let i=0; i<10;i++)
        console.log(valor += raiz);
}
