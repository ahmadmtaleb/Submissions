import React from "react";
import storm from "../img/weather-icons/storm.svg";

const Hourly = props => {
  return (
    <section class="column">
      <p>hour</p>
      <img src={storm} alt="storm icon" />
      <p>temp</p>
    </section>
  );
};
export default Hourly;
