import React, {Component} from 'react';
import {Collapse, Button, CardBody, Card, Col, Row} from 'reactstrap';
import DatePickerOneDay from "./DatePickerOneDay";
import US620Test from "./USRedux/US620Redux/US620Test";

class US620 extends Component {
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
        <Button onClick={this.toggle} style={{backgroundColor: '#FFFFFF', marginBottom: '1rem'}}>Get the total rainfall
          in the house area for a given day. (US620)</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
              <span>
              <DatePickerOneDay />
              </span>
              <span>
              <p>
                <input style={{display: "inline-block"}} type="button" value="Submit"/>
              </p>
              <US620Test getDay={this.props.getDay} />
              </span>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default US620;
