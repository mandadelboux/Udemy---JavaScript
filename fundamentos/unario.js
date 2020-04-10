let num1 = 1;
let num2 = 2;

num1++
console.log(num1);
--num1; //Precedencia maior
console.log(num1);

console.log( ++num1 === num2--); //Da vdd pq soma 1 + 1 = 2 compara com o 2 e dps faz a subtração, logo após comparar
console.log( ++num1 === --num2);