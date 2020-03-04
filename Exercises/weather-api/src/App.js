import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Find from ".//component /Find_component";
import Hourly from "./component /Hourly_component";
import Current from "./component /current_component";

const api_key = "434f1d4e9101484cccd8180678e9920f";
// import clear from "./img/weather-icons/clear.svg";
// import cloudy from "./img/weather-icons/cloudy.svg";
// import drizzle from "./img/weather-icons/drizzle.svg";
// import fog from "./img/weather-icons/fog.svg";
// import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
// import partlycloudy from "./img/weather-icons/partlycloudy.svg";
// import rain from "./img/weather-icons/rain.svg";
// import snow from "./img/weather-icons/snow.svg";
// import storm from "./img/weather-icons/storm.svg";
// import unknown from "./img/weather-icons/unknown.svg";

class App extends Component {
<<<<<<< HEAD
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  state = {
    temperature: "",
    city: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  };
  getWeather = async e => {
    const city = e.target.elements.city.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},&units=metric&appid=${api_key}`
    );

    const response = await api_call.json();

    if (city) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        error: "Please fill out input fields..."
      });
    }
  };
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Find loadWeather={this.getWeather} />
        </header>
        <main className="app__main">
          <Current
            temperature={this.state.temperature}
            city={this.state.city}
            humidity={this.state.humidity}
            pressure={this.state.pressure}
            icon={this.state.icon}
            description={this.state.description}
            error={this.state.error}
          />
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
=======
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} />
>>>>>>> dbfca94249132279d87cdc433793d8f550b80fc5
      </div>
    );
  }
}

export default App;
