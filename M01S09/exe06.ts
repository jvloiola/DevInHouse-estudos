class Conta{
    protected numero: number;
    protected saldo: number;
    protected estaAtiva: boolean;
    protected dono: string;

    constructor (numero:number, saldo:number, estaAtiva:boolean, dono:string){
        this.numero = numero,
        this.saldo = saldo,
        this.estaAtiva = estaAtiva,
        this.dono = dono
    }
}

let conta = new Conta(132, 1.000, true, 'Joao Bittencourt')

class ContaEmpresa extends Conta{
    private limiteDeDeposito:number = 1000

    constructor (numero:number, saldo:number, estaAtiva:boolean, dono:string){
        super(numero, saldo, estaAtiva, dono);
    }

    deposito(valor:number){
        if(valor<=1000){
            this.saldo += valor
            this.imprimeValorConta()
        }else{
            console.log('Valor do depósito inválido!')
        }
        
    }
    imprimeValorConta(){
        console.log(this.saldo)
    }
}