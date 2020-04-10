function ladoIgual( ld1, ld2, ld3){
    if (ld1 === ld2 && ld1 === ld3){
         return console.log('Triangulo Equilatero!')
    }else if(ld1 === ld2 || ld1 === ld3 || ld2 === ld3){
        return console.log('Tringulo Isóceles!')
    }else{
       return console.log('Triângulo escaleno!')
    }
}

ladoIgual(1,1,1)
ladoIgual(1,1,2)
ladoIgual(1,2,3)