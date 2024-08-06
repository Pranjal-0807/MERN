// let formElem = document.querySelector("#weather-form");

// formElem.addEventListener("submit", getInputAndPrintTemp);

// function getInputAndPrintTemp(event) {
//   event.preventDefault();

//   // get reference to the input field
//   let cityInput = document.querySelector("#city");
//   let city = cityInput.value;

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41199dfd87640980a3ab51c308fa6cdd`;
//   console.log(url);

//   getWeather(url);
// }

// async function getWeather(url) {
//   const jsonData = await (await fetch(url)).json();
//   console.log(jsonData);

//   const temp = jsonData.main.temp;
//   console.log(temp);

//   const tempDis = document.querySelector(".weather-info");
//   tempDis.textContent = temp;
// }



async function getWeather(){
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Moradabad1&appid=41199dfd87640980a3ab51c308fa6cdd`;

    try{
        let response = await fetch(url);
        let jsonData = await response.json();
        // console.log('d')
        let temp1 = jsonData.main;
        // console.log(temp1)
        let temp = temp1.temp;
        // console.log('d')
        console.log(temp);

        // uncomment the above print statement and change the name of city to some city that does'nt exist and see the behavior. Also try to comment down the line number 38,40,42 and see what happens , and try the combination of these three lines commenting and uncommenting.
        // Print the incorrect url in browser and see what happens.  
    }
    catch(err){
        console.log("Error");
        console.log(err);
        console.log(err.name);
        console.log(err.message);
    }
}

getWeather();