var fName = "Pranjal";

console.log(fName);


// To understand scope we are if statement

// Globally Scoped
if(true)
{
    var lName1 = "Agarwal";
    console.log(lName1);
}
console.log(lName1); 

// Locally Scoped
if(true)
    {
        let lName2 = "Agarwal";
        console.log(lName2);
    }
console.log(lName2); 