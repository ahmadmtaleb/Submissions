import React from "react";
import clear from "../img/weather-icons/clear.svg";

const Hourly = () => {
  return (
    <section class="column">
      <p>hour</p>
      <img src={clear} alt="storm icon" />
      <p>temp</p>
    </section>
  );
};
export default Hourly;
