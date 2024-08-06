// Constructor function
// class PersonClass {
//     constructor(fName, lName, dob) {
//         this.fName = fName;
//         this.lName = lName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.fName} ${this.lName}`;
//     }
// }

// const person2 = new PersonClass('Pranjal', 'Agarwal', '07-08-2004')

// console.log(person2);

// console.log(typeof person2);

// console.log(typeof PersonClass);

// console.log(person2.getBirthYear());

// console.log(person2.getFullName());

// Public and Private variables



// Inheritance
// class Person {
//   constructor(fName, lName, dob) {
//     this.fName = fName;
//     this.lName = lName;
//     this.dob = new Date(dob);
//   }
//   getBirthYear() {
//     return this.dob.getFullYear();
//   }
//   getFullName() {
//     return `${this.fName} ${this.lName}`;
//   }
// }

// class Teacher extends Person{
//     constructor(fName, lName, dob, job){
//         super(fName, lName, dob);
//         this.job = job;
//         // super must be call in the beginning of the constructor function otherwise it will throw an error 
//     }
//     getJob(){
//         return this.job;
//     }
// };
// let teacher2 = new Teacher("Pranjal", "Agarwal", "07-08-2004",'worker');

// console.log(teacher2);

// console.log(typeof teacher2);

// console.log(teacher2.getBirthYear());

// console.log(teacher2.getFullName());



// Check the error
// class Animal{
//     constructor (name){
//         this.name = name;
//     }
//     speak(){
//         return `${this.name}`
//     }
// }

// class dog extends Animal{
//     constructor (name){
//         super(name);
//     }
//     speak(){
//         return `${this.name}`
//     }
// }

// const dog2 = new Dog('Bruno');
// console.log(dog2);