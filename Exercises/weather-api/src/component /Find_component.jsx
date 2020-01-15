import React from "react";

const Find = () => {
  return (
    <form action="/actionpage.">
      <input type="text" name="city" placeholder="city" id="city"></input>
      <input type="button" value="Find weather" id="find"></input>
    </form>
  );
};
export default Find;
