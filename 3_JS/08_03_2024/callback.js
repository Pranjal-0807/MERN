// function f1(callback){
//     console.log("ok brother");
//     callback();
// }


// f1(sayHello = () =>{console.log("Hello");})

// f1(() =>console.log("Goodbye"))





// function f2(name,callback){
//     console.log("ok brother");
//     callback(name);
// }


// function greet(name){
//     console.log(`Hello ${name}`)
// }

// f2("Ram" ,(name) => {console.log(`Hello ${name}`)})
// f2("Ram" ,(name) => {console.log(`Goodbye ${name}`)})





// function func(name, age, callback){
//     console.log("ok brother");
//     callback(name , age);
// }

// func("Ram", 4 ,(name,age) => {console.log(`Goodbye ${name}.\n You are too small to drink.\n You are only ${age}`)})

 
// function f3(name, callback){
//     console.log(`'I'm inside function.`);
//     if(typeof name === 'string'){
//         const data = `Hello ${name}`;
//         callback(null , data);
//     }
//     else{
//         const error = new Error('Error: Given name is not a string.');
//         callback(error , null);
//     }
// }

// function greeting(error , data){
//     if (error){
//         console.log(error.message);
//     }
//     else{
//         console.log(data);
//     }
// }

// f3('Ram' , greeting)
// f3(114 , greeting)
// f3(undefined , greeting)
// f3(null , greeting)

// f3(117 , (error , data) =>{
//     if (error){
//         console.log(error.message);
//     }
//     else{
//         console.log(data);
//     }
// })

// f3("Ram" , (error , data) =>{
//     if (error){
//         console.log(error.message);
//     }
//     else{
//         console.log(data);
//     }
// })

// f3('Ram' , (error , data) =>error ? console.log(error.message) : console.log(data))