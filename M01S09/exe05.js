var Animal = /** @class */ (function () {
    function Animal(nome, raca, corPelagem, peso) {
        this.nome = nome;
        this.raca = raca;
        this.corPelagem = corPelagem;
        this.peso = peso;
    }
    return Animal;
}());
var Dom = new Animal('Dom', 'shih-tzu', 'tricolor', 9.5);
console.log(Dom);
