const funcionario = {
    nome: 'Joana',
    salario: 2000.00,
    plano: 'C'
}


function calcuSalario(plano, salario){
    switch(plano){
        case 'A':
            console.log('O salário atual é de: ' + salario * 1.10)
            break
        case 'B':
            console.log('O salário atual é de: ' + salario * 1.15)
            break
        case 'C':
            console.log('O salário atual é de: ' + salario * 1.20)
            break
        default:
            console.log('Plano Inválido!')
    }
}

calcuSalario(funcionario.plano,funcionario.salario)