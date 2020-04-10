const peso1 = 1.0
const peso2 = Number('2.0')
console.log (peso1,peso2)

console.log(Number.isInteger(peso1))//Pergutar se a variavel tem valor inteiro
console.log(Number.isInteger(peso2))

const av1 = 9.871
const av2 = 6.871

const total = av1 * peso1 + av2 * peso2
const media = total/ (peso1+peso2)

console.log("Resultado",media.toFixed(2)) //Formatar numero
console.log(media.toString())//Transformar media p/ string
console.log(media.toString(2))//Transformar media p/ string em numero binário