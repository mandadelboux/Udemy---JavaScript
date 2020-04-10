// Imprimir o resultado e o resto da divisão
function dividir (dividendo, divisor){
    resultado = dividendo/divisor
    resto = dividendo % divisor
    return console.log(`O resultado da divisão é ${resultado} e o resto é ${resto}`)
}

dividir(10,5)

// Ou
function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)