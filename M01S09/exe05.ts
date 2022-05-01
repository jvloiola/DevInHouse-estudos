class Animal {
    nome: string;
    raca: string;
    corPelagem: string;
    peso: number;

    constructor(nome:string, raca:string, corPelagem:string, peso:number){
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
}

const Dom = new Animal('Dom','shih-tzu','tricolor', 9.5)

console.log(Dom)



