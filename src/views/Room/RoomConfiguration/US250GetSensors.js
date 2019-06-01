import React, { Component } from 'react';
import {Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input} from 'reactstrap';
import US108Select from "./US108Select";


class US250GetSensors extends Component {


  constructor(props) {
    super(props);
//    this.toggle = this.toggle.bind(this);
    this.state = {
      item: [],
      sensors:false
    }
  }

  componentDidMount() {
    fetch('http://localhost:9898/roomConfiguration/rooms/B107/sensors')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          sensors: true,
          item: json,
        })
      })
      .catch(console.log)
  }

  getSensorsInARoom() {
    var {item} = this.state;
    this.setState(state => ({sensors: !state.sensors}));

  }

  render() {
    var {id, item} = this.state;
    return (
      <div>


          <ul>
            {item.map(item => (
              <li key={item.name}>
                ID: {item.id} | Name: {item.name} | Type: {item.type}
              </li>
            ))}
          </ul>

      </div>
    );
  }

}

export default US250GetSensors;
