function calc(a,op,b){
    switch(op){
        case '+':
            return a + b
        case '-':
            return a < b ? b - a: a - b
        case '*':
            return a * b
        case '/':
            return (a / b).toFixed(2)
        default:
            return 'Operação inválida!'
    }
}

console.log(calc(2,'+',3))
console.log(calc(2,'-',3))
console.log(calc(2,'*',3))
console.log(calc(2,'/',3))
console.log(calc(2,'b',3))
