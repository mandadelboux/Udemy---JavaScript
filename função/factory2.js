function criarProduto(nome, preco, desconto = 0.05){
    return{
        nome,
        preco,
        desconto,
        valorComDesconto: `O valor com o desconto é ${preco - (preco * desconto)}`
    }
}

console.log(criarProduto('Banana',5))

