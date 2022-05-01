class Produto{
    _nome;
    _preco;
    _emEstoque;
    _qtd

    constructor(nome, preco, emEstoque, qtd ){
        this._nome = nome;
        this._preco = preco;
        this._emEstoque = emEstoque;
        this._qtd = qtd;
    }
}

class Pedidos{
    _numeroPedido;
    _dataPedido;
    _estaPago;
    _listaProdutos;
    _nomeCliente;

    constructor(numeroPedido, nomeCliente){
        this._numeroPedido = numeroPedido;
        this._dataPedido = Date().toLocaleDateString();
        this._estaPago = false;
        this._nomeCliente = nomeCliente;
        this._listaProdutos = []
    }

    adicionarProduto(){
    }
        //desenvolver lógica!
    calcularTotal(){
        //desenvolver lógica!
    }
}