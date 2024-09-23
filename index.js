
// ПЕРША ЗАДАЧА
// const compareTwoNumbers= function(num1,num2){
//     if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
//         return null;
//     }

//     if(num1 !== num1 || num2 !== num2){
//         return null;
//     }
//     if(num1<num2){
//         return num1;
//     }else{
//         return num2;
//     }
// }

// const num1=+prompt("Enter first number");
// const num2 = +prompt("Enter second number");
//  const result = compareTwoNumbers(num1,num2);
//  console.log(result);

 // ДРУГА ЗАДАЧА
//  const fullAge=function(age){

//     if(isNaN(age)){
//         return null;
//     }

//     if(age>18){
//         return "adult";
//     }else{
//         return "child";
//     }
//  }
//  const age = +prompt("Enter your age");
//  const result = fullAge(age);
//  console.log(result);



// ТРЕТЯ ЗАДАЧА
// // const generalSuma = function(number){
// //     if(isNaN(number)){
// //         return null;
// //     }
// //     if(number>1500){
// //         const discount1=number*0.10;
// //         return number-discount1;
// //     }else{
// //         const discount2 = number*0.05
// //         return  number-discount2 ;
// //     }
// // }
// const suma = +prompt("Enter your general sum");
// const result = generalSuma(suma);
// console.log(result);


// ЧЕТВЕРТА ЗАДАЧА

const evenNumber = function( number){
    if(isNaN(number)){
        return null;
    }
    if(number%2==0){
        return true;
    }else{
        return false;
    }
}
const number = +prompt("Enter number");
const result = evenNumber(number);
console.log(result);