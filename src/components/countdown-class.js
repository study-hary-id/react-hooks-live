import React from "react";
import PropTypes from "prop-types";

export default class CountdownClass extends React.Component {
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const timeLeftDate = this.calculateCountdown(this.props.futureDate);
      timeLeftDate ? this.setState(timeLeftDate) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = ( Date.parse(new Date(endDate)) - Date.parse(new Date()) ) / 1000;

    // Clear countdown when date is reached.
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }

    // Calculate time diff between now and expected date.
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 84600;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = "0" + value;
    }
    return value;
  }

  stop() {
    clearInterval(this.interval);
    this.setState({
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    });
  }

  render() {
    const countDown = this.state;

    return (
      <div className="px-4">
        <div className="flex container mx-auto">
          <div className="component">
            <h1 className="mb-4">Countdown</h1>
            <div className="countdown mt-4">
              <div className="col">
                <span className="value">
                  {this.addLeadingZeros(countDown.days)}
                </span>
                <span className="label">
                  {countDown.days === 1 ? "Day" : "Days"}
                </span>
              </div>
              <div className="col">
                <span className="value">
                  {this.addLeadingZeros(countDown.hours)}
                </span>
                <span className="label">
                  {countDown.hours === 1 ? "Hour" : "Hours"}
                </span>
              </div>
              <div className="col">
                <span className="value">
                  {this.addLeadingZeros(countDown.min)}
                </span>
                <span className="label">
                  {countDown.min === 1 ? "Min" : "Mins"}
                </span>
              </div>
              <div className="col">
                <span className="value">
                  {this.addLeadingZeros(countDown.sec)}
                </span>
                <span className="label">
                  {countDown.sec === 1 ? "Sec" : "Secs"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CountdownClass.propTypes = {
  futureDate: PropTypes.instanceOf(Date)
};

CountdownClass.defaultProps = {
  futureDate: new Date(
    Date.now() + 1000 /*sec*/ * 60 /*min*/ * 25
  )
}
