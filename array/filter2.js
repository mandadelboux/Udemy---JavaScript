Array.prototype.filter2 = function(callback){
    const newArray = []
    for( let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos= [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Samsung S9+', preco: 3000, fragil: false },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const ehCaro = produto => produto.preco >= 500
const ehFragil = produto => produto.fragil


console.log(produtos.filter2(ehCaro).filter2(ehFragil))
