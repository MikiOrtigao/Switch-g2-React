import React, { Component } from 'react';


class US253Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
    }
  }


  componentDidMount() {

    const sensorID = this.props.sensorId;
    const name = this.props.name;
    const dateStartedFunctioning = this.props.dateStartedFunctioning;
    const typeSensor = this.props.typeSensor;
    const {opts} = {sensorID,name,dateStartedFunctioning,typeSensor};
    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(opts)    };
    console.log(this.props)
    fetch('http://localhost:9898/roomConfiguration/rooms/'+this.props.roomID+'/sensors',options);
  };


  render() {
    return (
      <div>
        <p>The created sensor has the following configuration: {this.props.roomID}, {this.props.sensorId}, { this.props.name},{this.props.dateStartedFunctioning}, {this.props.typeSensor} </p>
      </div>
    );


}}

export default US253Post;
