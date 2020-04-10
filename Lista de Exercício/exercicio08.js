let lista = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"

function comparacaoJogos(lista) {

    let listaPontuação = lista.split(", ")
    let record = 0
    let piorJogo = 1
    let maiorPontuacao = listaPontuação[0]
    let menorPontuacao = listaPontuação[0]


    for (let i = 1; i < listaPontuação.length; i++){
        if (listaPontuação[i] > maiorPontuacao){
            maiorPontuacao = listaPontuação[i]
            record += 1
        }else if(listaPontuação[i] < menorPontuacao){
            menorPontuacao = listaPontuação[i]
            piorJogo = i + 1
        }
    }
    return [record, piorJogo]
}

console.log(comparacaoJogos(lista))