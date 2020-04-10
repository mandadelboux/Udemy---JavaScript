function anoBi(ano){
   if(ano > 0){
       if(ano % 400 === 0){
           return true
       }else if (ano % 100 == 0){
           return false
       }else if ( ano % 4 === 0){
           return true
       }else{
           return false
       }
   }else{
       return false
   }
}
console.log(anoBi(2015))
console.log(anoBi(2016))
console.log(anoBi(2020))
console.log(anoBi(2012))
console.log(anoBi(0))
console.log(anoBi(100))
console.log(anoBi(400))