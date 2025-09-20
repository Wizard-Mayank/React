import { useState } from "react";
import "./App.css";
import Inputbox from "./Inputbox";

function App() {
  // state for user input
  const [location, setLocation] = useState("");

  // states for UI updation
  const [image, setImage] = useState("#");
  const [city, setCity] = useState("City");
  const [country, setCountry] = useState("Country");
  const [temperature, setTemperature] = useState("---");
  const [conditionIcon, setConditionIcon] = useState("#");
  const [weather, setWeather] = useState("Weather");

  // function to update the UI for the weather forecast
  const UpdateUIHandler = (processedData) => {
    // console.log(processedData);
    // update the ui
    // console.log(processedData);
    setImage(processedData.forecast.forecastday[0].day.condition.icon);
    setCity(processedData.location.name);
    setCountry(processedData.location.region);
    setTemperature(processedData.current.temp_c);
    setConditionIcon(processedData.forecast.forecastday[0].day.condition.icon);
    setWeather(processedData.forecast.forecastday[0].day.condition.text);
  };

  // function to get entered location in the input box
  const locationHandler = (e) => {
    const newLocation = e.target.value;
    setLocation(newLocation);
  };

  // function to fetch the data of the entered location using weather API
  const getData = async function () {
    if (location == "") return;

    const rawWeatherData = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=765e2903c5c9403884164732251509&q=${location}&days=7`
    );

    // bad request
    if (!rawWeatherData.ok) {
      alert(
        "hmm...🤔 something's fishy here! Can you please check the location again?"
      );
      return null;
    }

    // fetching successfull
    // convert to json format
    const processedData = await rawWeatherData.json();

    UpdateUIHandler(processedData);
  };

  return (
    <>
      <header>
        <Inputbox
          getLocation={locationHandler}
          getWeatherDetails={getData}
        ></Inputbox>
      </header>
      <main>
        <div className="outer-box">
          <div className="row1">
            <img src={image} alt="weatherImg" id="img1" />
            <h4 className="todayHeading">Today</h4>
          </div>
          <h3 className="city">
            {city}, {country}
          </h3>
          <div className="temperatureBox">
            <div>
              Temperature : <span className="temperature">{temperature}</span>
            </div>
            <div className="weatherConditionBox">
              <div>
                <img
                  src={conditionIcon}
                  alt="conditionIcon"
                  className="conditionIcon"
                />
                <div className="conditionText">{weather}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
