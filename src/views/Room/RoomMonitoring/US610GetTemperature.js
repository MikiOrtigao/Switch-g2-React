import React, { Component } from 'react';


class US610GetTemperature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {},
      roomID: '',
      day:''
    }
  }

  componentDidMount() {
    fetch("https://localhost:9898/roomMonitoring/dayMaxTemperature", {
      method: 'GET',
      body: JSON.stringify({
        date: this.state.day,
        roomId: this.state.roomID,
      })
    }).then((json) => {
      this.setState({
        item: {},
      })
    })}


  render() {
    var {id, item} = this.state;
    return (
      <div>
        <p>The maximum temperature on the day
          was {item} ºC</p>
      </div>
    );
  }

}

export default US610GetTemperature;
