function contaCorrente(saldo, idCc){
    var idCc = this.idCc;
    var saldo = this.saldo;
    function sacar(valorSacar, idCc){
        if (valorSacar <= 0){
            console.log('Valor inválido.')
        }else if(valorSacar > saldo){
            console.log('Saldo insuficiente, seu saldo é: ',saldo);
        }else if(valorSacar <= saldo){
            saldo =- valorSacar;
            console.log('Saque realizado com sucesso. Seu saldo atual é: ',saldo)
        }
    }
    function depositar(valorDepositar, idCc){
        (valorDepositar <= 0)?console.log('Valor inválido.'):saldo =+ valorDepositar, console.log('Deposito realizado com sucesso. Seu saldo atual é: ', saldo);
    }
};

