//Função sem retorno 
function imprimirSoma(a,b){
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(2); //Transforma o 2º paramentro em undefined 
imprimirSoma(2,10,3,4,5,6,7);//Pega os dois primeiros números 

//Função com retorno com tratamento de dados
function soma(a, b = 0 ){
    return a +b; 
}

console.log(soma(2,3));
console.log(soma(2));