const aprovados = ['Agatha','Aldo','Daniel','Raquel'];

aprovados.forEach(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
})

// Com Arrow Function
aprovados.forEach(nome => console.log(nome))

// Com variavel 
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)