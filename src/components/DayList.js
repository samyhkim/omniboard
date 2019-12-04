import React from "react";

const DayList = () => {
  return (
    <div>
      <div className="ui hidden divider"></div>
      <div className="ui card">
        <div className="content">
          <div className="header">Thursday</div>
          <div className="meta">
            <span>2 days ago</span>
            <a>Animals</a>
          </div>
          <p></p>
        </div>
      </div>

      <div className="ui hidden divider"></div>

      <div className="ui card">
        <div className="content">
          <div className="header">Friday</div>
          <div className="meta">
            <span>2 days ago</span>
            <a>Animals</a>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default DayList;
