import React, { PureComponent } from "react";
import anime from "animejs";

class Ball extends PureComponent {
  componentDidMount() {
    console.log("ball");
    anime({
      targets: "#cssSelector .el",
      translateX: 250
    });
  }
  render() {
    return (
      <div>
        <div id="cssSelector">
          <div className="line">
            <div className="square el" />
          </div>
        </div>
      </div>
    );
  }
}

export default Ball;
