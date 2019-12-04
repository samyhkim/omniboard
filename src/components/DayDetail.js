import React from "react";

const capitalizeDescription = string => {
  return string
    .toLowerCase()
    .split(" ")
    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
    .join(" ");
};

const DayDetail = ({ details }) => {
  const description = capitalizeDescription(details.description);
  return (
    <div className="ui card">
      <div className="content">
        <div className="ui two column grid">
          <div className="column">
            <h3>Wednesday</h3>
          </div>
          <div className="column">
            <h3 className="right aligned">{details.current}</h3>
          </div>
        </div>
        <div className="meta">{details.city}</div>
        <p>Description: {description}</p>
        <p>Wind: {details.wind} mph</p>
        <p>Humidity: {details.humidity}%</p>
      </div>
    </div>
  );
};

export default DayDetail;
