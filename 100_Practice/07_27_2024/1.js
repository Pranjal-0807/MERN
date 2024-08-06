        // Q6
// let square = ((num)=>{
//     return num * num;
// })
// console.log(square(5));

// let squareMinimized = ((num) => num * num);
// console.log(squareMinimized(5));

        // Q7
// let person = {
//   fName: "Pranjal",
//   lName: "Agarwal",
//   age: 20,
// };

// person["dob"] = "08-07-2004";
// console.log(person);

// delete person["dob"];
// console.log(person);

// person["address"] = {
//   city: "Kanth",
//   state: "UP",
//   country: "India",
// };
// console.log(person);

// console.log(person.address.city);
// console.log(person.address.state);

        // Q8
// let evenOdd = ((num) =>{
//     if(num % 2 == 0)
//         console.log(`${num} is Even.`);
//     else
//     console.log(`${num} is Odd.`);
// });
// evenOdd(2);




        // Q9
// function color(color) {
//   switch (color) {
//     case "red":
//       return 0;
//       break;
//     case "yellow":
//       return 1;
//       break;
//     case "green":
//       return 2;
//       break;
//     default:
//       return -1;
//   }
// }
// console.log(color('yellow'));




        // Q11
// let arr = [10,2,5,30,60,40,70,88,98,90]
// console.log(arr.sort());

// function sortManually(a,b){
//     return a-b;
// }
// console.log(arr.sort(sortManually));




        // Q12
// let languages = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];

// console.log(languages.length);

// console.log(languages[2]);

// languages.pop();
// console.log(languages);

// languages.push('sql');
// console.log(languages);

// languages.shift();
// console.log(languages);

// let joined = languages.join(' & ');
// console.log(joined);

// let languagesCopy = languages;
// console.log(languagesCopy);

// let sortedLength = languagesCopy.sort();
// console.log(sortedLength);

// languages.push(languages.indexOf('node'));
// console.log(languages);

// languages.push(languages.indexOf('react'));
// console.log(languages);

// let joinedAgain = languages.join(' - ');
// console.log(joinedAgain);

// console.log(joinedAgain.toUpperCase());




        // Q13
// let array = [1,2,3,4,5,6,7,8,9,10];
// let arrayFilter = array.filter((num) => num % 2 != 0).map((num) => num * num * num);
// console.log(arrayFilter);




        // Q14
// let TODO = {
//     Title : 'abc',
//     Description : 'mno',
//     Status  : 'xyz',
// };


// let todoArray = [
//     {
//         Title : 'abc',
//         Description : 'mno',
//         Status  : 'completed',
//     },
//     {
//         Title : 'abc',
//         Description : 'mno',
//         Status  : 'not completed',
//     },
//     {
//         Title : 'abc',
//         Description : 'mno',
//         Status  : 'completed',
//     },
//     {
//         Title : 'abc',
//         Description : 'mno',
//         Status  : 'not completed',
//     },
//     {
//         Title : 'abc',
//         Description : 'mno',
//         Status  : 'not completed',
//     }
// ]


// todoArray.forEach(index => {
//     console.log(index.Title , index.Description);    
// });


// todoArray.forEach(index => {
//     console.log(index.Title , index.Status);    
// });


// let todoArrayWithTitle = todoArray.map((num) => num.Title);
// console.log(todoArrayWithTitle);


// let todoArrayStatusNotCompleted = todoArray.filter((num) => num.Status === 'not completed');
// console.log(todoArrayStatusNotCompleted);


// let todoArrayStatusCompleted = todoArray.filter((num) => num.Status === 'completed');
// console.log(todoArrayStatusCompleted);




// Anonymous Function
// function add(a, b) {
//         return a + b;
// }
// console.log(add(20,10));