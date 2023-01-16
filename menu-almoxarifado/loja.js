import leitor from 'readline-sync';

let tabelaProduto = [];

function showMenu(){

    const opçoes = `=== Menu Principal ===
    1- Cadastrar Produto
    2- Nova Venda 
    3- Ver vendas 
    4- Sair do sistema`;

    console.log(opçoes);
    const entrada = leitor.question('');
    return entrada;
    
}

function cadastrarProduto(){
    console.log('Cadastrar Produto')
    const nome = leitor.question('Nome:');
    const valor = leitor.question('Valor:');
    const codigo = tabelaProduto.length + 1;

    const produto = [codigo,
                     nome,
                     parseFloat(valor)];
    tabelaProduto.push(produto);    
console.log(tabelaProduto);
}
function novaVenda(){
    console.log('Nova Venda')
}
function listaVenda(){
    console.log('Ver vendas')
}


let op = '';
do{
    op = showMenu();

    if (op =='1'){
     cadastrarProduto();
    }else if (op == '2'){
        novaVenda();
    }else if (op == '3'){
        listaVenda();
    }else if (op != '4'){
        console.log('Opção inválida, tente novamente');

    }


}while (op != '4');
console.log('Sistema finalizado com sucesso');