import React from "react";
import Weather from "./Weather";

const App = () => {
  return (
    <div className="ui grid">
      <div className="ten wide column"></div>
      <div className="six wide column">
        <Weather />
      </div>
    </div>
  );
};

export default App;
