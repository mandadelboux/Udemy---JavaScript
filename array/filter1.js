const produtos= [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Samsung S9+', preco: 3000, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// Professor 

const ehCaro = produto => produto.preco >= 500
const ehFragil = produto => produto.fragil


console.log(produtos.filter(ehCaro).filter(ehFragil))


// Eu que fiz 
/*function ehCaro(produto){
    if(produto.preco > 1500){
        return true
    }else{
        return false;
    }
}

function ehFragil(produto){
    if(produto.fragil){
        return true
    }else{
        return false
    }
}*/
