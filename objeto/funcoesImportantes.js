const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));


/*Object.entries(pessoa).forEach( e => {
    console.log(`${e[0]}: ${e[1]}`)
});*/ 

// Usando o Destructuring 
Object.entries(pessoa).forEach( ([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
});

// Definir uma propriedade em um objeto 

Object.defineProperty(pessoa, 'dataNascimento',{ // target(nome do obj), nome da propriedade
    enumerable: true ,// Se pode ser visto no keys
    writable: false, // Se pode ser alteradado 
    value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a:1}
const o1 = {b: 2}
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // Essa função vai fazer o o1 e o2 concatenar os valores no dest


Object.freeze(obj)
obj.c = 1234
console.log(obj)