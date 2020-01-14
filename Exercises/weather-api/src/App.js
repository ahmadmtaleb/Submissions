import React, { Component } from "react";
import "./App.css";

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
            <img src="https://placebear.com/150/150" alt="bear"></img>
            <p id="status">status</p>
            <div class=" today2">
              <p>
                <strong>Temperature</strong>
              </p>
              <p>10 C</p>
            </div>
            <div class="today2">
              <p>
                <strong>humidity </strong>
              </p>
              <p>10</p>
              <p>
                <strong>pressure </strong>
              </p>
              <p>76</p>
            </div>
          </div>
          <div class="container_second">
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
            <section class="column">
              <p>hour</p>
              <img src="https://placebear.com/100/100" alt="bear"></img>
              <p>temp</p>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
