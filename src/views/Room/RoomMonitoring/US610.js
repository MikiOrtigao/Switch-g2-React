import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, Col, Row} from 'reactstrap';
import DatePickerOneDay from "./DatePickerOneDay";

class US610 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Get the maximum temperature in a room in a given day. (US610)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <span>
              <DatePickerOneDay/>
              </span>
              <span>
              <p>
                <input style={{display: "inline-block"}} type="button" value="Submit"/>
              </p>
              </span>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US610;
