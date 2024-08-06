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


async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Moradabad&appid=41199dfd87640980a3ab51c308fa6cdd`;

  try {
    console.log("a");
    let response = await fetch(url);
    console.log("a");
    // suppose promise send us data but it is not the data we desired then we'll tell to HTTP and check status if it is true then ok(status = 200) else false. To resolve this see if else
    if (response.ok) {
      console.log("a");
      let jsonData = await response.json();
      console.log("a");
    } else {
      console.log("a");
      throw new Error("Data not found");
      console.log("a");
    }
  } catch (err) {
    console.log("Error");
    console.log(err);
    console.log(err.name);
    console.log(err.message);
  }
}

getWeather();
