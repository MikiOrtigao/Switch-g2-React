import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card} from 'reactstrap';
import 'react-day-picker/lib/style.css';
import DatePickerWithTwoDates from "./DatePickerWithTwoDates";

class US633 extends Component {
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
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Get the day with the
          highest temperature amplitude in the house area in a given period. (US633)</Button>
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

export default US633;
