import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import DatePickerWithTwoDates from "./DatePickerWithTwoDates";

class US623 extends Component {
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
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Get the average daily
          rainfall in the house area for a given period (days). (US623)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <DatePickerWithTwoDates/>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US623;
