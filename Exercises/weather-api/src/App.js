import React, { Component } from "react";
import "./App.css";
import Find from ".//component /Find_component";
import Hourly from "./component /Hourly_component";

import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Find />
        </header>
        <main className="app__main">
          <div class="current_weather">
            <img src={storm} alt="storm icon" />
            <p id="status">status</p>

            <div class="today1">
              <p class="strong">Temperature</p>
              <p>10 C</p>
            </div>

            <div class="today2">
              <p class="strong">Humidity</p>
              <p class="strong">Pressure</p>
            </div>
          </div>

          <div class="weather_over24">
            <Hourly />
            <Hourly />
            <Hourly />
            <Hourly />
            <Hourly />
            <Hourly />
            <Hourly />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
