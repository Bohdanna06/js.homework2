'use strict';
// const car={
//     color: 'black',
//     model:'Cayenne',
//     marka: 'Porche',
//     engineVolume:2967,
//     capacity: 4,
//     currentSpeed:100,
//     maxSpeed:599,
//     accelerate:function(kilometr){
//         if(kilometr<=this.maxSpeed){
//         return this.currentSpeed+kilometr;
//     }else{
//         return "mistake";
//     }
//     },
//     deaccelerate:function(kilometr1){
//         if(kilometr1>0){
//             return this.currentSpeed-kilometr1;
//         }else{
//             return "not correct";
//         }

//     },
//     stop:function(){
//         // this.currentSpeed=0;
//         return this.currentSpeed=0;
//     }


// }
// console.log(car.accelerate(50));
// console.log(car.deaccelerate(50));
// console.log(car.stop());


 function Car(color,model,marka,engineVolume,capacity,currentSpeed,maxSpeed){
    this.color = color;
    this.marka = marka;
    this.model = model;
    this.engineVolume = engineVolume;
    this.capacity = capacity;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;

    this.accelerate = function(kilometr){

        if(kilometr<=this.maxSpeed){
            return this.currentSpeed+kilometr;
        }else{
            return "mistake";
        }
    };
    this.deaccelerate=function(kilometr1){
        if(kilometr1>0){
            return this.currentSpeed-kilometr1;
        }else{
            return "not correct";
        }

    };
    this.stop=function(){
        return this.currentSpeed=0;
    };


 }
 const car1 = new Car('blue','Civic','Honda',1800,5,80,220);
 const car2 = new Car ('white','Model s','Tesla',0,5,0,250);

 console.log(car1.accelerate(50));  
console.log(car1.deaccelerate(30));  
console.log(car1.stop());  

console.log(car2.accelerate(100));  
console.log(car2.deaccelerate(50));  
console.log(car2.stop()); 