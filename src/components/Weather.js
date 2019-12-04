import React, { Component } from "react";
import DayDetail from "./DayDetail";
import DayList from "./DayList";
import axios from "axios";

class Weather extends Component {
  state = {
    city: "",
    today: {
      city: "",
      current: null,
      high: null,
      low: null,
      description: "",
      wind: null,
      humidity: null
    },
    days: []
  };
  async componentDidMount() {
    const KEY = "d8cc06502641dd381813cf34270d9b84";
    const ID = 5391959;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?id=${ID}&APPID=${KEY}&units=imperial`
    );
    this.setState({
      city: response.data.name,
      today: {
        city: response.data.name,
        current: response.data.main.temp,
        high: response.data.main.temp_max,
        low: response.data.main.temp_min,
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity
      }
    });
  }
  render() {
    return (
      <div className="ui container">
        {/* <h1 className="ui center aligned header">{this.state.city}</h1> */}
        <DayDetail details={this.state.today} />
        <DayList />
      </div>
    );
  }
}

export default Weather;
