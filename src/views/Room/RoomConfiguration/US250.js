import React, { Component } from 'react';
import {Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input} from 'reactstrap';
import US108Select from "./US108Select";


  class US250 extends Component {


    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
        item: [],
        isLoaded: false,
      }
    }

    componentDidMount() {
      fetch('http://localhost:9898/roomConfiguration/rooms/B107/sensors')
        .then(res => res.json())
        .then((json) => {
          this.setState({
            isLoaded: true,
            item: json,
          })
        })
        .catch(console.log)
    }

    toggle() {
      this.setState(state => ({collapse: !state.collapse}));
    }



  getSensorsInARoom(){
    var {item} = this.state;

    return (
      <div>

        <ul>
          {item.map(item => (
            <li key={item.name}>
              Name: {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    var {id, item} = this.state;
    return (
      <div>
        <Button onClick={this.toggle} style={{ backgroundColor: '#FFFFFF', marginBottom: '1rem' }}>I want to get a list of all sensors in a room, so that I can configure them. (US250)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label>Select Room</Label>
                  <US108Select name={id}/>
                </FormGroup>
              </Form>
              <Button onClick={this.getSensorsInARoom()} block color="light">Get list of sensors</Button>


            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }

}

export default US250;
