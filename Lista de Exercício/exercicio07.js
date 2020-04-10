function bhaskara(aX2, bX, c){
    let resultados = []
    let delta = (bX ** 2) - (4*aX2*c)
        if (delta < 0){
            return 'Delta é negativo!'
        }

    let x1 = (-bX + Math.sqrt(delta))/ 2 * aX2
    let x2 = (-bX - Math.sqrt(delta))/ 2 *aX2
    
    resultados.push(x1)
    resultados.push(x2)

    return resultados
}
console.log(bhaskara(3, -5, 12))
console.log(bhaskara(3, 1, 2))
