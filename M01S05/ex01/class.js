export class Produto{
    nome;
    preco;
    emEstoque;
    quantidade;
    constructor(nome, preco, emEstoque, quantiadde){
        this.nome = nome;
        this.preco = preco;
        this.emEstoque = emEstoque;
        this.quantidade = quantiadde;
    }
}

export class Pedidos{
    numPedido;
    dataPedido;
    estaPago;
    listaProdutos = [];
    nomeCliente;
    constructor(numPedido, nomeCliente){
        this.numPedido = numPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date().toLocaleDateString();
        this.estaPago = false;
        
    }

    adicionarProduto(produto, qtd){
        this.listaProdutos.push({
            'produto' : produto,
            'qtd' : qtd
        })
    }

    calcularTotal(){
            let total = Produto.preco*Produto.quantidade;
            console.log(total);
        ;
    }
}

let produto1 = new Produto('Iphone 8', 3000, true, 10)


let produto2 = new Produto('Iphone 7', 1000, true, 5)

let pedido1 = new Pedidos(1, 'João')
pedido1.adicionarProduto(produto1, 3)
pedido1.adicionarProduto(produto2, 2)
let total = pedido1.calcularTotal()

console.log(pedido1)
console.log(total)




