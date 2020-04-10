let dobro = function(a){ // Normal
    return 2 * a
}

dobro = (a) => { // Com corpo 
    return 2 * a
} 

dobro = a => 2 * a  // Sem corpo com return implicit

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //Possui o parametro, mas o underline é um parametro
console.log(ola())