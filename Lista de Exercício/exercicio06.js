function juroSimples( cpIncial, taxaJuros,tempoAplic){
    total = cpIncial * (1 + taxaJuros * tempoAplic)
    return total
}

console.log(juroSimples(1200,0.02, 15))

function jurosComposto(cpIncial, taxaJuros, tempoAplic){
    total = cpIncial * (( 1 + taxaJuros) ** tempoAplic)
    return total.toFixed(2).replace('.', ',')
}

console.log(jurosComposto(5000, 0.01, 6))