//Armazenando função dentro de uma variavel 
const imprimirSoma = function(a,b){ 
    console.log(a+b);
}

imprimirSoma(2,3);

//Armazenando uma função arrow em váriavel 
const soma = (a,b) => {
    return a+b;
}
console.log(soma(2,3));

//Retorno implicito arrow function 
const subtracao = (a,b) => a - b; // a -b é o retorno da função 
console.log(subtracao(2,1));

const imprimir2 = a => console.log(a);
imprimir2("Legal bebê!");