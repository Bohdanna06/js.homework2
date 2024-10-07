 //FIRST
const arr1 = [1,2,3];

arr1.push(6,5,4);

arr1.unshift(-3,-2,-1);

/* SECOND*/ 
const arr2 = [100,-273,15,0,1,2,3,4,5,6,10];
console.log(arr2.shift());
console.log(arr2.shift());

console.log(arr2.pop());
console.log(arr2.pop());
console.log(arr2.pop());

/* THIRD*/ 
const arr3 = [1,2,3,4,5];
arr3.splice(1,2);
console.log(arr3);

/* FOURTH*/
const arr4 = [1,2,3,4,5] 
const newArray = arr4.splice(1,3);
console.log(newArray);

/* FIVES*/ 
const arr5 = [1,2,3,4,5];
arr5.splice(3,0,'a','b','c' );
console.log(arr5);

/* SIXS*/

const arr6 = [1,2,3,4,5];
arr6.splice(1,0,'a','b');
// console.log(arr6);
arr6.splice(6,0,'c');
// console.log(arr6);
arr6.splice(8,0,'e');
console.log(arr6);

/* SEVENTH */

const arr7 = [1,2,3,4,5];
const copy1 = arr7.slice(3,5);
console.log(copy1);

/*  EIGHTH */ 

const arr8 = ['first','second',' third',' fourth','last'];
const copy2 = arr8.slice(1,3);
console.log(copy2);

/* NINTH*/

const arr9 = ['first','second',' third',' fourth','last'];
arr9.reverse();
console.log(arr9);

/* TENTH*/

const arr10 = [1,2,[3,4,[5]],6,7];
const flatArray = arr10.flat(Infinity);
console.log(flatArray);

/* ELEVENTH */

const arr11 = ['apple','bananna','pear','pineple'];
const isOnArray = arr11.includes('garpes');
console.log(isOnArray);

/* TWELfTH */

const arr12 = ['first','second',' third',' fourth','last'];
const concatArray = arr12.concat(1000,2000,[true,false]);
console.log(concatArray);



