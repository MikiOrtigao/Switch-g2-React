import React, { Component } from 'react';


class US610GetTemperature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {},
    }
  }

  render() {
    var {item} = this.props;
    return (
      <div>
        <p>The maximum temperature on the day
          was {item} ºC</p>
      </div>
    );
  }

}

export default US610GetTemperature;
