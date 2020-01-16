import React from "react";

const Current = props => {
  return (
    <div class="current_weather">
      {props.icon && (
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}.png`}
          alt="storm icon"
        />
      )}

      {props.description && <p id="status">{props.description}</p>}

      <div class="today1">
        {props.temperature && (
          <p class="strong">Temperature: {props.temperature}</p>
        )}
      </div>

      <div class="today2">
        {props.humidity && <p class="strong">Humidity: {props.humidity}</p>}
        {props.pressure && <p class="strong">Pressure: {props.pressure}</p>}
      </div>
    </div>
  );
};
export default Current;
