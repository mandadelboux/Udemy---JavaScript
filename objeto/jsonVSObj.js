const obj = { a: 1, b:2, c:3, soma(){return a + b + c}}
let ObjetoJson = JSON.stringify(obj)
console.log(ObjetoJson)

console.log(JSON.parse(ObjetoJson))

console.log(JSON.parse('{ "a" : 1.7, "b" : "String", "c": true, "d": {}, "e": []}'))