import React, { Component } from 'react';
import {Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input} from 'reactstrap';
import US108Select from "./US108Select";

class US250 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
    };
  }

  componentDidMount(id) {
    fetch('http://localhost:9898/roomConfiguration/rooms/'+{id}+'/sensors')
      .then(res => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
        })
      })
      .catch(console.log)
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  getSensorsInARoom(){
    return (
      <div>

        {/*<ul>*/}
          {/*{item.map(item => (*/}
            {/*<li key={item.name}>*/}
              {/*Name: {item.name}*/}
            {/*</li>*/}
          {/*))}*/}
        {/*</ul>*/}

      </div>
    )
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{ backgroundColor: '#FFFFFF', marginBottom: '1rem' }}>I want to get a list of all sensors in a room, so that I can configure them. (US250)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <Form action="" method="post">
                <FormGroup>
                  <Label>Select Room</Label>
                  <US108Select/>
                </FormGroup>
              </Form>
              <Button onClick={this.getSensorsInARoom} block color="light">Get list of sensors</Button>

            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US250;
