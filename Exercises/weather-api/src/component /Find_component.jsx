import React from "react";

const Find = props => {
  return (
    <form onSubmit={props.loadWeather}>
      <input type="text" name="city" placeholder="city" id="city" />
      <button id="find">Find Weather</button>
    </form>
  );
};
export default Find;
