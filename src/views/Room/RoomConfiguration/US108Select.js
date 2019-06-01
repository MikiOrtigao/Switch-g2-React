import React, {Component} from 'react';
import {Button, Col, FormGroup, Input} from "reactstrap";
import US250 from './US250'

class US108Select extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://localhost:9898/houseSettings/houseRooms')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          item: json,
        })
      })
      .catch(console.log)
  }

  render() {

    var {isLoaded, item} = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <Input type="select" name="select" id="select">
            <option value="0">Please select</option>
            {item.map(item => (
              <option value="1" key={item.name}>
                Name: {item.name}
              </option>
            ))}
          </Input>
        </div>
      );
    }
  }
}

export default US108Select;
