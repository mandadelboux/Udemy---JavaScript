const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(x in nums){ //Encontra o 5 e sai fora 
    if(x == 5){
        break
    }

    console.log(`${x} = ${nums[x]}`)
}

for (y  in nums){ //Pulou o indici 5 e foi pro 6 e continua
    if (y ==5) {
        continue 
    }    
    console.log(`${y} = ${nums[y]}`)
}

//Criar rotulo
externo: for (a in nums){
    for(b in nums){
        if (a == 2 && b == 3) break externo //Vai para o bloco mais externo 
        console.log(`Par = ${a},${b}`)
    }
}