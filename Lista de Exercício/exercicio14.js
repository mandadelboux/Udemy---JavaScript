
let fruta = prompt('Insira a fruta:')

switch(fruta){
    case 'Maça':
        document.write('Não vendemos essa fruta aqui')
        break;
    case 'Kiwi':
        document.write('Estamos com escassez de kiwis')
        break;
    case 'Melancia':
        document.write('Aqui está! 3 reais o quilo')
        break;
    default:
        document.write('O valor inserido não é válido')
} 

