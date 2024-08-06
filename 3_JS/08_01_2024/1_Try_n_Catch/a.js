async function getWeather() {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=Moradabad&appid=41199dfd87640980a3ab51c308fa6cdd`;

  console.log("a");
  let response = await fetch(url);
  console.log("b");
  if (response.ok) {
    console.log("c");
    let jsonData = await response.json();
    console.log("d");
  } else {
    console.log("e");
    throw new Error("Data not found");
    console.log("f");
  }
}

let promiseElem = getWeather();
console.log(promiseElem);
promiseElem.then().catch(console.log("Hello"));