// Cadeia de Protótipos (prototype chain)
Object.prototype.attr0 = '0' // Não fazer isso 
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1) // Procura no filho, no pai e no avô tem então retorna 
console.log(filho.attr0) // Ngm tem então retorna undefined, caso a classe prototype tenha retorna ela


const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta 
        }else{
            this.velAtual = this.velMax
        }
    }, 
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing 
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //Está "sombreando" a função status a partir do obj volvo
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())