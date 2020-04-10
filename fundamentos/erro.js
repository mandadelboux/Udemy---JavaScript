function tratarErroELancar(erro){
    //throw new Error('Deu ruim');
    //throw 10;
    //throw 'Mensagem';
    throw erro;
    /*throw{
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date()
    }*/
}


function imprimirNomeGritando (obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!');
    }catch (e){
        e = 'Rolou merda';
        tratarErroELancar(e);
    } finally{ //Vai ser rodado ser der ou não erro
        console.log('Final')
    }
}

const obj = { nome: 'Roberto'};
imprimirNomeGritando(obj);