function comprar(veiculo){
    switch(veiculo){
        case 'hatch': 
            return 'Compra efetuada com sucesso'
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}
 
console.log(comprar("hatch"))
console.log(comprar("sedan"))
console.log(comprar("iate"))