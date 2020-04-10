function teste1(num){
    if (num > 7)
        console.log(num); //Esse vai ser executado 


        console.log('Final');//Esse não 
    
}

function teste2(num){
    if(num > 7);{ //Não usar nas estruturas de controle
        console.log(num);
    }
}

teste2(6)
teste2(8)