import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, Col, Row} from 'reactstrap';
import DatePickerOneDay610 from "./DatePickerOneDay610";
import SelectRoom from "./SelectRoom"

class US610 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      day:''
    };
  }

  toggle() {
    this.setState(state => ({collapse: !state.collapse}));
  }

  handleDays = (day) => {
    console.log("handleDays: date"+ JSON.stringify(day))
    if (day !== undefined) {
//      const day = day.toISOString().substring(0, 10);
      this.setState({day: day});    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Get the maximum temperature in a room in a given day. (US610)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <span>
              <DatePickerOneDay610 getDays={this.handleDays}/>
              </span>
              <SelectRoom day={this.state.day}/>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US610;
