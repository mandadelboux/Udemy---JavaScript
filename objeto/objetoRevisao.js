const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto['Marca do produto']
delete produto.preco

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Ana',
        idade: 32,
        endereco:{
            logradouro:'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Fernanda',
        idade: 19
    },{
        nome: 'Roberto',
        idade: 33
    }],

    calcularValorDoSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorDoSeguro
console.log(carro)