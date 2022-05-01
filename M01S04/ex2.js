function operacao (a, b, op){
    switch(op){
        case '+':
            console.log(a+b);
            break;
        case '-':
            console.log(a-b);
            break;
        case '*':
            console.log(a*b);
            break;
        case '/':
            console.log(a/b);
            break;
        default:
            console.log('operação não está disponível') 
    }
}

operacao(2,3,'+');
operacao(2,3,'-');
operacao(2,3,'*');
operacao(2,3,'/');
