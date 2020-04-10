let comparaComThis = function (param) { // Cuidado!!! THIS tá apontando para global
    console.log(this === param)
}

comparaComThis(global)

const obj = {} // THIS não aponta mais para o global e sim para o obj
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) 
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // Mesmo forçando a mudança com o bind, o arrow func não deixa o this mudar
comparaComThisArrow(obj) 
comparaComThisArrow(module.exports)