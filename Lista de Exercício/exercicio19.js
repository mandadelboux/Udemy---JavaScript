function cardapio(cod, qtd){
    let valor = 0
    switch(cod){
        case 100: 
            console.log(` ${qtd} Cachorro quente\n Valor total = R$ ${valorTotal(qtd,3.00)}\n`)
            break
        case 200:
            console.log(` ${qtd} Hambúrguer simples\n Valor total = R$ ${valorTotal(qtd,4.00)}`)
            break
        case 300:
            console.log(` ${qtd} Cheeseburguer\n Valor total = R$ ${valorTotal(qtd,5.50)}`)
            break
        case 400:
            console.log(` ${qtd} Bauru\n Valor total = R$ ${valorTotal(qtd,7.50)}`)
            break
        case 500:
            console.log(` ${qtd} Refrigerante\n Valor total = R$ ${valorTotal(qtd,3.50)}`)
            break
        case 600:
            console.log(` ${qtd} Cachorro quente\n Valor total = R$ ${valorTotal(qtd,2.80)}`)
            break
    }
    

}
function valorTotal(qtd,valor){
    return (valor * qtd).toFixed(2).replace('.',',')
}

cardapio(100,1)
cardapio(100,3)
cardapio(300,3)