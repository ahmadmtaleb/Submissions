import React, { Component } from "react";
import "./App.css";
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
          <form action="/actionpage.">
            <input type="text" name="city" placeholder="city" id="city"></input>
            <input type="button" value="Find weather" id="find"></input>
          </form>
        </header>
        <main className="app__main">
          <div class="today_weather">
            <img src={storm} alt="storm icon" />
            <p id="status">status</p>

            <div class="today1">
              <p class="strong">Temperature</p>
              <p>10 C</p>
            </div>

            <div class="today2">
              <p class="strong">Humidity</p>
              <p>10</p>
              <p class="strong">Pressure</p>
              <p>76</p>
            </div>
          </div>

          <div class="container_second">
            <section class="column">
              <p>hour</p>
              <img src={clear} alt="storm icon" />
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src={snow} alt="storm icon" />
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src={rain} alt="storm icon" />
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src={fog} alt="storm icon" />
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src={cloudy} alt="storm icon" />
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src={partlycloudy} alt="storm icon" />
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src={mostlycloudy} alt="storm icon" />
              <p>temp</p>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
