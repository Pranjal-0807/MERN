// let object = {
//     "key1" : "Hello",
//     "key2" : "Hello123",
//     "key3" : "Hello456",
//     "key4" : "Hello789"
// }
// console.log(typeof(object))

// let person_info = {
//     "fName" : "Pranjal",
//     "lName" : "Agarwal",
//     "age" : 9999999999,
//     "hobbies" : ["Traveling", "Studying"],
//     "address" : {
//         "city" : "XYZ",
//         "state" : "ABC"
//     }
// }
// console.log(person_info["fName"])

// let keyVar = "fName";
// console.log(person_info[keyVar])

// var hobbiesArray = person_info["hobbies"];
// hobbiesArray.push("Singing");
// console.log(person_info)

// person_info["phoneNo"] = "1234567890"
// console.log(person_info)

// let person_info_1 = {
//     "fName" : "Piyush",
//     "lName" : "Agarwal",
//     "age" : 21,
// }

// let newArray = [person_info,person_info_1]
// console.log(newArray)

// console.log(person_info.phoneNo);

// console.log(person_info.address.city);

// person_info.lName = "Gupta"
// console.log(person_info.lName);

// console.log(person_info.fName, person_info.lName, person_info.address.state);

// let person_info_2 = {
//     "fName" : "Pranjal",
//     "lName" : "Agarwal",
//     "age" : 21,
//     "hobbies" : ["Traveling", "Studying"],
//     "address" : {
//         "city" : "XYZ",
//         "state" : "ABC"
//     }
// }
// // Destructuring
// const{fName,lName} = person_info_2;
// console.log(fName,lName);

// const{hobbies} = person_info_2;
// console.log(hobbies[1])

// const{address:{state}} = person_info_2;
// console.log(state)

// let arr = [1,2,3,4,5,{"key1":"ABC","Key2":"XYZ","Key3":"MNO"}]

// let arr_1 = [1,2,{"key1":"ABC","Key2":"XYZ","Key3":"MNO","Key4":[1,2,3,5,4]}]

// let arr_3 = [1,{"key1":[1,2,{"key2":"val_2"}]}]

// let arr_4 = [
//     {
//         "id" : 1,
//         "text" : "Coding",
//         "isCompleted" : true
//     },
//     {
//         "id" : 2,
//         "text" : "Reading",
//         "isCompleted" : false
//     },
//     {
//         id : 3,
//         text : "Writing",
//         isCompleted : true
//     }
// ];

// console.log(arr_4);

// console.log(arr_4[1]);

// console.log(arr_4[0]["id"]);

// console.log(typeof(arr_4[2]));

// console.log(typeof(arr_4[2]["text"]));

// [
//     [1, "Coding", true],
//     [2, "Reading", false],
//     [3, "Writing", true]
// ];

// =>JSON is an object

// =>Loops

// For Loop
// let i=0;
// for(i; i<=10; i++)
//     console.log(i)
// console.log(i)

// function increment (num){
//     return num+1;
// }

// for(let j=0; j<=10; j=increment(j))
//     console.log(j)

// const arr_5 = [1,2,3,4,5,6,7];
// for(let i=0; i<arr_5.length ; i++)
//     console.log(arr_5[i])

// While Loop
// let i1 = 0;
// while(i1 <= 10){
//     console.log(i1);
//     i1++;
// }

// For of Loop
// for(let a of "Pranjal")
//     console.log(a)

// forEach Loop

// Map Reduce Filter

// Map

// let person_info2 = {
//     "fName" : "Pranjal",
//     "lName" : "Agarwal",
//     "age" : 21,
//     "hobbies" : ["Traveling", "Studying"],
//     "address" : {
//         "city" : "XYZ",
//         "state" : "ABC"
//     }
// }

// let person_info3 = {
//     "fName" : "Piyush",
//     "lName" : "Gupta",
//     "age" : 21,
//     "hobbies" : ["Traveling", "Studying"],
//     "address" : {
//         "city" : "XYZ",
//         "state" : "ABC"
//     }
// }

// let newArr = [person_info2,person_info3]

// const firstName = newArr.map(function(anyName){
//     console.log(anyName.fName);
// })

// OR

// newArr.map((anyName) => {
//   console.log(anyName.fName);
// });

// If Else

// const x1 = 10;
// const x2 = "10";
// if (x2 == 10)
//     console.log("ok")

// if (x2 === 10)
//     console.log("ok")


// Leap Year
// let year = 4;
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }