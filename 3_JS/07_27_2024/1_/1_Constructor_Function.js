// function printName(fName, lName){
// console.log(`Hello ${fName} ${lName}`);
// }
// printName('Pranjal','Agarwal');



// function sum(num1 , num2){
//     return num1 + num2;
// }
// var sum1 = sum(4,2500);
// console.log(sum1);



// var num1 = 10;
// var num2 = 20;
// var sum2 = sum(num1, num2);
// console.log(sum2);



// const sumFuncion = function sum(num1 , num2){
//     return num1 + num2;
// }

// const sum3 = sumFuncion(10,20)
// console.log(sum3);



// function mul(num1 , num2){
//     return num1 * num2;
// }
// console.log(mul(4,2500));



// let multiplication = function mul(num1 , num2){
//     return num1 * num2;
// }

// console.log(multiplication(2,55));



// function checkEvenOdd(num){
//     let result = num % 2 == 0 ? 'Even' : 'Odd';
//     console.log(result);
// }
// checkEvenOdd(21);
// checkEvenOdd(20);




// let obj = {
//     fName : 'Pranjal',
//     lName : 'Agarwal',
//     age  : 21001,
// };

// // Square bracket notation
// console.log(obj['fName']);

// // OR

// // Dot notation
// console.log(obj.fName);



// let obj1 = {
//     fName : 'Pranjal',
//     lName : 'Agarwal',
//     age  : 21001,
//     getFullName : function(){
//         return(this.fName + ' ' + this.lName);
//         // console.log(this.fName + ' ' + this.lName);
//         // console.log(obj1.fName + ' ' + obj1.lName);
//         // console.log(`${this.fName} ${this.lName}`);
//         // console.log(`${obj1.fName} ${obj1.lName}`);
//     }
// };


// // obj1.getFullName();


// let objSee = obj1.getFullName();
// console.log(objSee);




// let obj2 = {
//     fName : 'Pranjal',
//     lName : 'Agarwal',
//     age  : 20,
//     getYearOfBirth : function(currentYear){
//         return `YoB : ${currentYear - this.age}`;
//     }
// };

// console.log(obj2.getYearOfBirth(2024));



// let obj3 = {
//     fName : 'Pranjal',
//     lName : 'Agarwal',
//     age  : 20,
//     getYearOfBirth : function(currentYear){
//         return `YoB : ${currentYear - this.age}`;
//     }
// };

// Assign a new key-value in obj3
// obj3['hobby'] = 'Coding';
// console.log(obj3);



// console.log(obj3.fName, obj3.lName);




// let obj4 = {
//     fName : ['Pranjal'],
//     lName : 'Agarwal',
//     age  : 20,
// };
// obj4.fName.push("Aman");
// console.log(obj4);




// let personInfoForm = function(fName , lName , age){
//     var person = {
//         fName : fName,
//         lName : lName,
//         age : age,
//     } 
//     return person;
// }

// let myInfo = personInfoForm('Pranjal','Agarwal',20);
// let rahulInfo = personInfoForm('Rahul','Gupta',21);

// console.log(myInfo);
// console.log(rahulInfo);



                // Object Constructor
                
// Constructor Function used to construct and destroy objects.
// In these cases use pascal case

// let personInfoFormUsingConstructorFunction = function(fName , lName , age){
//     this.fName = fName,
//     this.lName = lName,
//     this.age = age;
//     return personInfoFormUsingConstructorFunction;
// }
// this keyword is used to refer to the current object in the function. It is used to access the properties and methods of the current object. In the above function, we are using this keyword to assign the values of the parameters to the properties of the object.

// let myInfo = personInfoFormUsingConstructorFunction('Pranjal','Agarwal',20);

// console.log(myInfo);

// console.log(typeof myInfo);


            // OR


// Object Constructor
// Constructor Function

// function Person(fName , lName  , age){
//     this.fName = fName,
//     this.lName = lName,
//     this.age = age;
// }
// console.log(typeof Person);
// var personInformation = new Person('Rahul', 'Gupta', 22);
// console.log(personInformation);
// console.log(typeof personInformation);