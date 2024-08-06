let arr = [1,2,3,4,5];

        // foreach

// function printElement(num){
//     console.log(num);
// }
// arr.forEach(printElement);


// function printElementSquare(num){
//     console.log(num * num);
// }
// arr.forEach(printElementSquare);


// arr.forEach((num)=>{
//     console.log(num * num);
// })



// arr.forEach( (num) => console.log(num * num));


        // Map

// let newArr = arr.map((num) => num * num * num);
// console.log(newArr);


        // Filter

// let newArr2 = arr.filter((num) => num % 2 == 0);
// console.log(newArr2);


        // Reduce

// const result = arr.reduce((acc, current) => {
//     return acc + current;
//     }, 0);
// console.log(result);



// function isEven(num){
//     return num % 2 == 0;
// }

// function Square(num){
//     return num * num;
// }

// let evenSquare1 = arr.filter(isEven).map(Square);
// console.log(evenSquare1);


// OR


// let evenSquare2 = arr.filter((num) => num % 2 == 0).map((num) => num * num);
// console.log(evenSquare2);



// let evenSquare2 = arr.filter((num) => num % 2 != 0).map((num) => num * num).filter((num) => num < 10);
// console.log(evenSquare2);