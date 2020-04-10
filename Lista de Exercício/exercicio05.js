function recebeValor (dinheiro){
    real = dinheiro.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}).replace('.',',')
    return console.log(real)
}

recebeValor(0.1 + 0.2)

// OU 

function formatarValorDecimal(valorDecimal) {
    valorEmReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

formatarValorDecimal(0.1 + 0.2)