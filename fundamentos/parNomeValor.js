//Par nome/valor
const saudacao = 'Opa'; //Contexo léxico 1

function exec(){
    const saudacao = 'Falaaa'; //Contexo léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        logradouro : 'Rua Muito legal',
        numero:123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);