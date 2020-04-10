// Novo recurso ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{ 
        logradouro:'Rua ABC',
        numero: 1000
    }
}

const {nome,idade} = pessoa; //Tira de dentro do objeto e atribui as variáveis
console.log(nome,idade);
const{nome: n, idade: i} = pessoa;// tira o nome e idade do objeto e coloca no n e no i 
console.log(n,i);

const {sobrenome, bemHumorado = true} = pessoa;
console.log(sobrenome, bemHumorado);


const {endereco: {logradouro, numero, cep}} = pessoa; 
console.log(logradouro,numero,cep);

