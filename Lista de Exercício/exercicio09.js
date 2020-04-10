function validarNota(notaAluno){
    let notaArredondada = arrendondamento(notaAluno)

    if (notaAluno >= 40){
        console.log(`Aprovado com a nota ${notaArredondada}`)
    } else{
        console.log(`Reprovado com a nota ${notaArredondada}`)
    }
}

function arrendondamento(nota){
    if( nota % 5 > 2){
        nota = nota + (5 -(nota % 5))
    }
    return nota
}
validarNota(100)
validarNota(30)
validarNota(88)