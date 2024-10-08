/*  1. Дан масив ['test', false, 12345, undefined, 'secret', NaN,true, 0, 100, null ]. 
Залогувати в консолі кожен елемент масиву з непарним індексом */

const arr1 =['test', false, 12345, undefined, 'secret', NaN,true, 0, 100, null ];

arr1.forEach(function( current, index){
    if(index %2 !== 0){  
        console.log(current);
        
        console.log(index);
    }
});

/* 2. Дан наступний масив ['test', false, 2345, null]
Зробити масив, елементи якого будуть рядками, зробленими за наступним шаблоном :
Item with index X has value Y
де X - індекс елемента у масиві, Y - значення елементу */

const arr2 = ['test', false, 2345, null];

const arrWithString = arr2.map(function(value, i){
    return 'item with index '+ i + ' has value '+value;
})
console.log(arrWithString);

/* 3. Дан масив, який складається з наступних об'єктів
{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}
{firstName: ‘User’, lastName: ’Userenko’, age: 12, gender: ‘male’,}
{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,}
{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}
{firstName: ‘Undefined’, lastName: ’Undefined’, age: 99}
{firstName: ‘Null’, lastName: ’Nullochyk’, gender: ‘male’} 

Отримати на його основі масив повнолітніх користувачів */

const arr3 = [ 
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
    { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];
const isAdult = arr3.filter( function( number){
   return number.age >= 18;

})
console.log(isAdult);

/* 4. Використовуючи початковий масив з завдання 3 знайти індекс першої жінки у массиві */

const arr4 = [ 
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
    { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];

const femaleIndex = arr4.findIndex(function(gender){
    return gender.gender === 'female';
})
console.log(femaleIndex);


/*  5. Використовуючи початковий масив з завдання 3 перевірити чи всі користувачі в ньому є повнолітніми чоловіками*/

const arr5 = [ 
    { firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male' },
    { firstName: 'User', lastName: 'Userenko', age: 12, gender: 'male' },
    { firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female' },
    { firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female' },
    { firstName: 'Undefined', lastName: 'Undefined', age: 99 },
    { firstName: 'Null', lastName: 'Nullochyk', gender: 'male' }
];
const isAdultMan = arr5.every(function(num){
    return num.gender === 'male' && num.age >=18;
})
console.log(isAdultMan);

